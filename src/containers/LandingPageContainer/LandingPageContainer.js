import React from 'react';
import NavigationSection from "../../components/NavigationSection/NavigationSection";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import ImagesList from "../../components/ImagesList/ImagesList";
import ArtisanSection from "../../components/ArtisanSection/ArtisanSection";
import Footer from "../../components/Footer/Footer";


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
          <ArtisanSection />
          <Footer />
        </>
    )
  }

}
