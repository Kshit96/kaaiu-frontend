import React from 'react';
import ImagesList from './ImagesList';
import {shallow} from "enzyme";
import {Col} from "antd";



describe('NavigationSection', () => {
  it('renders without crashing', () => {

    const wrapper = shallow(<ImagesList/>)

    const imageComponent = wrapper.find('.image-row')

    expect(imageComponent).toHaveLength(1);

  });

  it('renders three columns', () => {

    const wrapper = shallow(<ImagesList/>)

    const imageComponent = wrapper.find(Col)

    expect(imageComponent).toHaveLength(3);

  });
})
