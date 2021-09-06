import React from "react";
import { Layout, Menu, Row, Col } from "antd";

import Logo from "../components/Logo";

const { Header } = Layout;

const AppHeader = () : JSX.Element => (
  <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
    <Row wrap={false} justify="space-between" align="middle">
      <Col span={6}>
        <Logo />
      </Col>

      <Col span={18} offset={12}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>Launches</Menu.Item>
          <Menu.Item>Agencies</Menu.Item>
          <Menu.Item>Astronuts</Menu.Item>
        </Menu>
      </Col>
    </Row>
  </Header>
);

export default AppHeader;
