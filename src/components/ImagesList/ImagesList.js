import React from 'react';
import './ImagesList.css'
import {Button, Col, Image, Row} from "react-bootstrap";
import Image2 from "../../assets/list-1.jpeg";
import Image1 from "../../assets/list-2.jpg";
import Image3 from "../../assets/list-3.jpg";

export default function ImagesList(props) {

  const imagesList = [
    Image1, Image2, Image3
  ]

  function renderImages(imageSource) {
    return (
        <Col className={"image-column"} key={imageSource}>
          <Image src={imageSource} fluid/>
        </Col>
    )
  }

  return (
      <Row md={3}>
          {/*{imagesList.map((imageSource) => renderImages(imageSource))}*/}
        <Col>a</Col>
        <Col>a</Col>
        <Col>a</Col>
        {/*<Row>*/}
        {/*  <Col>*/}
        {/*    <Button border-radius={'0px'} size="large" className={'more-inspirations__button'}><b>more inspirations</b></Button>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Row>
  )
}