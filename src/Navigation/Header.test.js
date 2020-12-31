import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import {BrowserRouter} from 'react-router-dom';
import RouteContext from '../RouteComponents/RouteContext';
import Header from './Header';

describe('Header Component', () => {
  describe('Snapshot', () => {
    it('renders the UI as expected', () => {
      const update = renderer.create(<BrowserRouter><Header /></BrowserRouter>)
        expect(update).toMatchSnapshot()
    })
  })
  
  describe('Smoke test', () => {
    it('Renders without crashing', () => {
      const div = document.createElement('div');
      
      const value = {
        routes: [],
        addRoute: () => {},
        editRoute: () => {},
        deleteRoute: () => {}
        }

      ReactDOM.render(
        <BrowserRouter>
          <RouteContext.Provider value={value}>
            <Header />
        </RouteContext.Provider>
        </BrowserRouter>,
      div);
      ReactDOM.unmountComponentAtNode(div);
    })
  })

});