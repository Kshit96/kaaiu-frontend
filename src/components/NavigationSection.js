import React from 'react';
import image from '../../public/assets/cover-picture.jpg'
import {Row} from "antd";

export default function NavigationSection () {
  return (
      <Row>
        <image src = { image }  className={'NavigationBackgroundImage'}/>
      </Row>
  )
}
