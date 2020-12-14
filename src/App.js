import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header'
import Nav from './Nav'
import HomePage from './HomePage'
import AddNew from './AddNew'
import Login from './Login'
import Help from './Help'
import Register from './Register'
import RoutesList from './RoutesList'
import './App.css'
import RouteContext from './RouteContext';
//import routesData from './store';

export class App extends Component {
  state = {
    routes: [],
    addRoute: this.handleAddRoute,
    editRoute: this.handleEditRoute,
    deleteRoute: this.handleDeleteRoute
  };

  handleAddRoute = route => {
    this.setState({
      routes: [
        this.state.routes,
        route
      ]
    })
  }

  render() {
    const value = {
      routes: [],
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
          </Switch>
        </main>
      </div>
      </RouteContext.Provider>
    )
  }
}

export default App
