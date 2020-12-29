import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Help from './Help';

describe('Help Component', () => {
  describe('Smoke test', () => {
    it('Renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
            <Help />
        </BrowserRouter>,
      div);
      ReactDOM.unmountComponentAtNode(div);
    })
  })

});