import React from 'react';
import LandingPageContainer from './LandingPageContainer';
import {shallow} from "enzyme";
import NavigationSection from "../components/NavigationSection";
import DescriptionSection from "../components/DescriptionSection";
import ImagesList from "../components/ImagesList"



describe('LandingPageContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    shallow(<LandingPageContainer/>)
  });

  describe('components',()=>{
    it('should render NavigationSection',()=>{
      const wrapper = shallow(<LandingPageContainer/>);

      const element = wrapper.find(NavigationSection);

      expect(element).toHaveLength(1);
    })

    it('should render DescriptionSection',()=>{
      const wrapper = shallow(<LandingPageContainer/>);

      const element = wrapper.find(DescriptionSection);

      expect(element).toHaveLength(1);
    })

    it('should render ImagesList',()=>{
      const wrapper = shallow(<LandingPageContainer/>);

      const element = wrapper.find(ImagesList);

      expect(element).toHaveLength(1);
    })
  })
})
