import React from 'react';
import './NavigationSection.css'
import {Button, Col, Image, Row} from "react-bootstrap";
import logo from "../../assets/logo type 1 .png"
import {Justify} from "react-bootstrap-icons";

export default function NavigationSection(props) {
  return (
      <Row className={'navigation-background'}>

        <Col md={2}>
          <Image src={logo} className={"logo"} rounded fluid/>
        </Col>

        <Col md={{span: 6, offset: 1}} style={{justifyContent: 'center'}}>

          <Row>
            <Col style={{fontSize: 20}}>about</Col>
            <Col style={{fontSize: 20}}>how it works</Col>
            <Col style={{fontSize: 20}}>explore</Col>
          </Row>

          <Col className={"company-name-column"}
              style={{
            color: '#d18f22',
            fontSize: 40,
            textAlign: 'center'
          }}>
            Kaaiu
          </Col>

          <Col className={"description-column"}
              style={{
            fontSize: 15,
            textAlign: 'center'
          }}>
            At Kaaiu, We connect you
            directly to furniture manufacturers
            around the region<br/>
            making that amazing furniture idea of
            yours a reality
          </Col>

          <Col className={"submit-design-column"} style={{
            textAlign: 'center'
          }}>
            <Button className={"submit-design"} size={"lg"} style={{fontSize: 15}}>submit your designs</Button>
          </Col>

        </Col>

        <Col md={{span: 3, offset: 0}}>
          <Row>
            <Col md={"auto"}
                 style={{fontSize: 20, color: "#1E90FF"}}>Get
              Newsletter</Col>
            <Col md={"auto"} style={{
              fontSize: 20,
              color: "#1E90FF",
              textAlign: 'center'
            }}>Shop</Col>
            <Col md={"auto"}
                 style={{fontSize: 20, color: "#1E90FF"}}>Sign
              In</Col>
            <Col md={"auto"}><Justify size={25}/></Col>
          </Row>
        </Col>

      </Row>
  )
}
