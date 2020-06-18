import React from 'react';
import LandingPageContainer from './LandingPageContainer';
import {shallow} from "enzyme";



describe('LandingPageContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    shallow(<LandingPageContainer/>)
  });
})
