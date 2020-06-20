import React from 'react';
import navigationSection from "../components/navigationSection";
import descriptionSection from "../components/descriptionSection";
import {Row} from "antd";

export default class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <>
          <Row>
            {/*<navigationSection/>*/}
            <div className={'description'}>
              sac
            </div>
          </Row>
          <Row>
            {/*<descriptionSection/>*/}
            <div className={'navigation-background'}>
              ads
            </div>
          </Row>
        </>
    )
  }

}
