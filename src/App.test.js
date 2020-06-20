import React from 'react';
import App from './App';
import * as ReactDOM from "react-dom";
import {shallow} from "enzyme";

describe('App', () => {
  it('renders without crashing', () => {

    shallow(<App/>)
  });
})
