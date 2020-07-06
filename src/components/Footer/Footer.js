import React from 'react';
import './Footer.css'
import {Button, Col, Image, Row} from "react-bootstrap";
import Logo1 from "../../assets/sponsors/dezeen-magazine-logo-vector.png"
import Logo2
  from "../../assets/sponsors/elle-decor-vector-logo.png"
import Logo4 from "../../assets/sponsors/home+and+decor+logo.png"
import Logo3 from "../../assets/sponsors/the-straits-times-logo.png"
import Logo5 from "../../assets/sponsors/VOGUE_revista_-_logo.png"

export default function Footer(props) {

  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

  function generateSponsorLogos(logo) {
    return (
        <Col md={"auto"} className={'logos'}>
          <Image style={{
            height: '80px',
            width: 'auto',
            paddingLeft: '20px',
            paddingRight: '20px'
          }} src={logo}/>
        </Col>
    )
  }

  return (
      <>
        <Row className={'text'} style={{paddingTop: '40px'}}>
          <Col style={{fontSize: 50}}>As featured on</Col>
        </Row>
        <Row className="justify-content-md-center" style={{paddingTop: '40px'}}>
          {logos.map((logo) => generateSponsorLogos(logo))}
        </Row>
        <Row className="justify-content-md-center" style={{paddingTop: '40px'}}>
          <Button className={'button-footer'} size={"lg"}>Submit Your Design</Button>
          </Row>
        <Row className="justify-content-md-center" style={{paddingTop: '40px'}}>
          <Button className={'button-footer'} size={"lg"}>Get Newsletter</Button>
        </Row>
      </>
  )

}
