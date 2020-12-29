import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import RoutesList from './RoutesList';

describe('RoutesList Component', () => {
  describe('Smoke test', () => {
    it('Renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
            <RoutesList />
        </BrowserRouter>,
      div);
      ReactDOM.unmountComponentAtNode(div);
    })
  })

});