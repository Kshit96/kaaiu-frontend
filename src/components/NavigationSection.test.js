import React from 'react';
import NavigationSection from './NavigationSection';
import {shallow} from "enzyme";



describe('NavigationSection', () => {
  it('renders without crashing', () => {

    const wrapper = shallow(<NavigationSection/>)

    const imageComponent = wrapper.find('.navigation-background')

    expect(imageComponent).toHaveLength(1);

  });

  it('renders logo',()=>{

    const wrapper = shallow(<NavigationSection/>)

    const imageComponent = wrapper.find('.logo')

    expect(imageComponent).toHaveLength(1);
  })

})
