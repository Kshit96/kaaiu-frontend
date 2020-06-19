import React from 'react';
import image from '../assets/cover-picture.jpg'
import {Row, Col} from "antd";
import './NavigationSection.css'

export default function NavigationSection () {
  return (
      <Row>
        <Col span={24} flex={1}>
        <img src = { image } className={'NavigationBackgroundImage'}/>
        </Col>
      </Row>
  )
}
