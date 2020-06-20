import React from 'react';
import './NavigationSection.css'
import {Button, Col, Row} from "antd";
import logo from "../assets/logo type 2 .png"
import {Typography, Space} from 'antd';
import MenuOutlined from "@ant-design/icons/es/icons/MenuOutlined";
import {blue} from "color-name";

const {Title, Text, Link} = Typography;

export default function NavigationSection(props) {
  return (
      <Row span={24} className={'navigation-background'}>
        <Col span={2}>
          <img src={logo} className={"logo"}/>
        </Col>
        <Col push={4} span={12}>
          <Row style={{height: 70}} justify={"space-around"} align={"bottom"}>
            <Text style={{fontSize: 20}}>about</Text>
            <Text style={{fontSize: 20}}>how it works</Text>
            <Text style={{fontSize: 20}}>explore</Text>
          </Row>
          <Row justify={"center"} align={"bottom"} className={"company-name"}>
            <Space direction="vertical" style={{textAlign: "center"}}>
              <Title level={1}>Kaaiu</Title>
              <Text >At Kaaiu, We connect you
                directly to furniture manufacturers
                around the region<br/>
              making that amazing furniture idea of
                yours a reality</Text>
              <Button className={'submit-design'} shape={"round"}>submit your designs</Button>
            </Space>
          </Row>
        </Col>
        <Col push={4} span={6}>
          <Row style={{height: 70}} justify={"space-around"} align={"bottom"}>
            <Text style={{fontSize: 20, color: "#1E90FF"}}>Get Newsletter</Text>
            <Text style={{fontSize: 20, color: "#1E90FF"}}>Shop</Text>
            <Text style={{fontSize: 20, color: "#1E90FF"}}>Sign In</Text>
            <MenuOutlined style={{fontSize: 30}}/>
          </Row>
        </Col>
      </Row>
  )
}
