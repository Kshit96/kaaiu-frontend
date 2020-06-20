import React from 'react';
import './NavigationSection.css'
import {Col, Row} from "antd";
import logo from "../assets/logo type 2 .png"

export default function NavigationSection(props) {
  return (
      <Row className={'navigation-background'}>
        <Row span={24}>
          <Col span={8}>
            <img src={logo} className={"logo"} width={"20"} height={"20"}/>
          </Col >
          <Col span={8}>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </Row>
  )
}
