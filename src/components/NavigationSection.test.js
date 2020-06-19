import React from 'react';
import NavigationSection from './NavigationSection';
import {shallow} from "enzyme";



describe('NavigationSection', () => {
  it('renders without crashing', () => {

    const wrapper = shallow(<NavigationSection/>)

    const imageComponent = wrapper.find('.NavigationBackgroundImage')

    expect(imageComponent).toHaveLength(1);

  });
})
