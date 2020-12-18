import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import config from './config';
import Header from './Header'
import Nav from './Nav'
import HomePage from './HomePage'
import AddNew from './AddNew'
import Login from './Login'
import Help from './Help'
import Register from './Register'
import RoutesList from './RoutesList'
import RouteItem from './RouteItem'
import './App.css'
import RouteContext from './RouteContext';

export class App extends Component {
  state = {
    routes: [],
    addRoute: this.handleAddRoute,
    editRoute: this.handleEditRoute,
    deleteRoute: this.handleDeleteRoute
  };

  componentDidMount() {
        console.log('inside ComponentDidMount')
        Promise.all([
            fetch(`${config.API_ENDPOINT}/routes`),
        ])
            .then(([routesRes]) => {
                if (!routesRes.ok)
                    return routesRes.json().then(e => Promise.reject(e));
                console.log(routesRes)
                return Promise.all([routesRes.json()]);
            })
            .then(([routes]) => {
                this.setState({routes});
                console.log(routes)
            })
            .catch(error => {
                console.error({error});
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
      editRoute: this.state.handleEditRoute,
      deleteRoute: this.state.handleDeleteRoute
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
            <Route path='/login' component={Login} />
            <Route path='/help' component={Help} />
            <Route path='/register' component={Register} />
            <Route path='/routes' component={RoutesList} />
            <Route path='/route/:routeId' component={RouteItem} />
            {/* <Route path='/route/byarea/:dc_area' component={} />
            <Route path='/route/bydifficulty/:difficulty' component={} />
            <Route path='/route/bytype/:route_type' component={} /> */}
          </Switch>
        </main>
      </div>
      </RouteContext.Provider>
    )
  }
}

export default App
