import { Button, Col, Row } from "antd";
import { Typography } from 'antd';
import React from "react";
import Modal from "./_components/Modal/Modal";

const Category: React.FC = () => {
  return (
    <Row>
      <Col span={20}>
      <Typography.Title level={2}>Kategoriyalar</Typography.Title>
      </Col>
      <Col span={4}>
        <Modal />
      </Col>
    </Row>
  );
};

export default Category;
