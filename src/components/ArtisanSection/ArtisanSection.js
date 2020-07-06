import React from 'react';
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import artisan from "../../assets/artisan-1.jpg";

export default function ArtisanSection(props) {
  return (
      <>
        <Row className={'artisan-section'} style={{backgroundColor: '#dee0df', paddingTop: '20px'}}>
          <Col>
            <Col md={{span:8}} style={{fontSize: 35,textAlign: "left"}}>A network of dedicated makers, from
              artisans to factories</Col>
            <Col>
              <Image style={{width:'100%', height:'auto'}} src={artisan} />
            </Col>
          </Col>
          <Col>
            <Col md={{span:9}} style={{fontSize: 45,textAlign: "left", paddingTop: '500px'}}>Rattan Weaving in Indonesia</Col>
            <Col md={{span:9}} style={{fontSize: 20, textAlign: "left", paddingTop: '10px'}}>Read out more about their stories</Col>
          </Col>
        </Row>
      </>
  )
}
