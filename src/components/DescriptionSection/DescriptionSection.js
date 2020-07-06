import React from 'react';
import './DescriptionSection.css'
import {Col, Row} from "react-bootstrap";

export default function DescriptionSection(props) {
  return (
      <Row className={'description'}>
        <Col>
          <Col style={{fontSize: 40, color:"#6b520e"}}>Interior spaces made truly yours,</Col>
          <Col style={{fontSize: 40, color:"#6b520e"}}>direct to your doorstep</Col>
        </Col>
      </Row>
  )

}
