import React from 'react';
import ArtisanSection from './ArtisanSection';
import {shallow} from "enzyme";



describe('NavigationSection', () => {
  it('renders without crashing', () => {

    const wrapper = shallow(<ArtisanSection/>)

    const imageComponent = wrapper.find('.artisan-section')

    expect(imageComponent).toHaveLength(1);

  });
})
