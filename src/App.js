import React, { Component } from 'react';
import RouteContext from './RouteContext';
import {Route, Switch} from 'react-router-dom';
import config from './config';
import Header from './Header'
import Nav from './Nav'
import HomePage from './HomePage'
import AddNew from './AddNew'
import Help from './Help'
import RoutesList from './RoutesList'
import RouteItem from './RouteItem'
import Footer from './Footer'
import './App.css'
import EditForm from './EditForm';

export class App extends Component {
  state = {
    routes: [],
    addRoute: this.handleAddRoute,
    // editRoute: this.handleEditRoute,
    // deleteRoute: this.handleDeleteRoute
  };

  componentDidMount() {
        console.log('inside ComponentDidMount')

            fetch(`${config.API_ENDPOINT}/routes`, {
              method: 'GET',
              headers: {
                'content-type': 'application/json'
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

  render() {
    const value = {
      routes: this.state.routes,
      addRoute: this.state.handleAddRoute,
      // editRoute: this.state.handleEditRoute,
      // deleteRoute: this.state.handleDeleteRoute
    }

    return (
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
            <Route path='/addNew' component={AddNew} />
            <Route path='/help' component={Help} />
            <Route path='/routes' component={RoutesList} />
            <Route path='/route/:routeId' component={RouteItem} />
            {/* <Route path='/route/byarea/:dc_area' component={} />
            <Route path='/route/bydifficulty/:difficulty' component={} />
            <Route path='/route/bytype/:route_type' component={} /> */}
            <Route path='/route/:routeId/edit' component={EditForm} />
          </Switch>
        </main>
        <Footer />
      </div>
      </RouteContext.Provider>
    )
  }
}

export default App
