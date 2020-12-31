import React, { Component } from 'react';
import RouteContext from './RouteContext';
import {Route, Switch} from 'react-router-dom';
import api from '../System/config';
import Header from '../Navigation/Header'
import Nav from '../Navigation/Nav'
import HomePage from './HomePage'
import AddNew from './AddNew'
import RoutesList from './RoutesList'
import RouteItem from './RouteItem'
import Footer from '../Navigation/Footer'
import './App.css'
import Error from '../System/Error'

export class App extends Component {
  state = {
    routes: [],
    addRoute: this.handleAddRoute,
    editRoute: this.handleEditRoute,
    deleteRoute: this.handleDeleteRoute
  };

  componentDidMount() {
        console.log('inside ComponentDidMount')

            fetch(`${api.API_ENDPOINT}/route`, {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${api.API_KEY}`
              }
            })
            .then(res => {
              if(!res.ok) {
                throw new Error('Something went wrong, please try again.');
              }
              return res;
            })
            .then(res => res.json())
            .then(data => {
              this.setState({
                routes: data,
              });
            })
            .catch(error => {
              console.error({error})
            });
            
    }


  handleAddRoute = route => {
    this.setState({
      routes: [
        ...this.state.routes,
        route
      ]
    })
  }

  handleDeleteRoute = routeId => {
    const newRoutes = this.state.routes.filter(route => route.id != routeId)
    this.setState({
      routes: newRoutes
    })
  }

  handleEditRoute = editedRoute => {
    console.log(editedRoute)
    this.setState({
      routes: this.state.routes.map(route =>
        (route.id != editedRoute.id) ? route : editedRoute
        )
    })
    console.log(this.state.routes)
  }


  render() {
    const value = {
      routes: this.state.routes,
      addRoute: this.handleAddRoute,
      editRoute: this.handleEditRoute,
      deleteRoute: this.handleDeleteRoute
    }

    return (
      <Error>
      <RouteContext.Provider value={value}>
      <div className='app'>
        <header>
          <Header />
        </header>
        <nav>
          <Nav />
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/addNew' component={AddNew} />
            <Route exact path='/route' component={RoutesList} />
            <Route exact path='/route/byid/:routeId' component={RouteItem} />
          </Switch>
        </main>
        <Footer />
      </div>
      </RouteContext.Provider>
      </Error>
    )
  }
}

export default App
