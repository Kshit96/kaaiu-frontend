import React from 'react';
import descriptionSection from './descriptionSection';
import {shallow} from "enzyme";



describe('NavigationSection', () => {
  it('renders without crashing', () => {

    const wrapper = shallow(<descriptionSection/>)

    const imageComponent = wrapper.find('.description')

    expect(imageComponent).toHaveLength(1);

  });
})
