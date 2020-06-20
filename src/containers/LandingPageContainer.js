import React from 'react';
import NavigationSection from "../components/NavigationSection";
import DescriptionSection from "../components/DescriptionSection";
import ImagesList from "../components/ImagesList";


export default class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <>
          <NavigationSection/>
          <DescriptionSection/>
          <ImagesList/>
        </>
    )
  }

}
