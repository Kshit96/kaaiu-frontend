import React from 'react';
import './DescriptionSection.css'
import {Button, Col, Row} from "react-bootstrap";

export default function DescriptionSection(props) {
  return (
      <Row className={'description'}>
        <Col className={'description-paragraph'}>
          <Col md={{span: 8, offset: 3}}
               style={{fontSize: 70, color: "#6b520e"}}>Interior spaces made
            truly yours,</Col>
          <Col md={{span: 6, offset: 6}}
               style={{fontSize: 70, color: "#6b520e"}}>direct to your
            doorstep</Col>
          <Col className={'sub-paragraph'} md={{span: 6, offset: 6}}
               style={{fontSize: 35, textAlign: 'left'}}>
            Full dictate your personal spaces with that furniture you've been
            longing for, we manage the production and deliver directly to you
          </Col>
          <Col md={{span: 6, offset: 6}}
               style={{fontSize: 20, textAlign: 'left', paddingTop: "30px"}}>
            We believe good furnishing is the essence of every beautiful space,
            a reflection of their owner's personality.
            We connect you to experts from all around the region, well-versed in
            various materials, ensuring that dream furniture of yours is no
            longer an idea!
          </Col>
          <Col md={{span: 6, offset: 6}} style={{textAlign: 'left',paddingTop: "30px"}}>
            <Button className={'find-out-more'} size={"lg"}>Find out more</Button>
          </Col>
        </Col>
      </Row>
  )

}
