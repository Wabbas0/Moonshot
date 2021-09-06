import React from "react";
import Lottie from "react-lottie";
import { Typography, Row, Col } from "antd";
import rocketQualibrate from "../statics/18889-rocket-qualibrate.json"
const { Title } = Typography;

function Logo(lotti: any)  : JSX.Element{
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketQualibrate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Row align="middle" justify="center">
      <Col>
        <Lottie options={defaultOptions} height={64} width={100} />
      </Col>

      <Col>
        <Title className="logo-text" level={3}>
          Moonshot
        </Title>
      </Col>
    </Row>
  );
}

export default Logo;
