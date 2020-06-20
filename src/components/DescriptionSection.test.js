import React from 'react';
import DescriptionSection from './DescriptionSection';
import {shallow} from "enzyme";



describe('NavigationSection', () => {
  it('renders without crashing', () => {

    const wrapper = shallow(<DescriptionSection/>)

    const imageComponent = wrapper.find('.description')

    expect(imageComponent).toHaveLength(1);

  });
})
