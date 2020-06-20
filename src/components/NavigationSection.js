import React from 'react';
import './NavigationSection.css'
import {Col, Row} from "antd";

export default function NavigationSection(props) {
  return (
      <Row className={'navigation-background'}>
        <Row span={24}>
          <Col span={8}>
          </Col >
          <Col span={8}>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </Row>
  )
}
