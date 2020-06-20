import React from 'react';
import './ImagesList.css'
import {Button, Col, Row} from "antd";
import Image2 from "../assets/list-1.jpeg";
import Image1 from "../assets/list-2.jpg";
import Image3 from "../assets/list-3.jpg";

export default function ImagesList(props) {

  const imagesList = [
    Image1, Image2, Image3
  ]

  function renderImages(imageSource) {
    return (
        <Col span={8} key={imageSource}>
          <img className="image-list" alt="Sample Design" src={imageSource}/>
        </Col>
    )
  }

  return (
      <>
        <Row span={24} type="flex" className={'image-row'}>
          {imagesList.map((imageSource) => renderImages(imageSource))}
        </Row>
        <Row justify={"center"} span={24} className={'more-inspirations'}>
          <Col>
            <Button border-radius={'0px'} size="large" className={'more-inspirations__button'}><b>more inspirations</b></Button>
          </Col>
        </Row>
      </>
  )
}
