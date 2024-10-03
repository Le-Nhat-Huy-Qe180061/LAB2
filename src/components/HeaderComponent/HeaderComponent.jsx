import React from "react";

import { Link } from "react-router-dom";
import { Col, Row, Badge, Space } from "antd";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import CartComponent from "../CartComponent/CartComponent";
import { useSelector } from "react-redux";

const HeaderCompomemt = () => {
  const cart = useSelector((state) => state.Reducer);

  console.log("Cart:", cart);

  return (
    <>
      <Row className="layout-default__header">
        <Col span={5} className="layout-default__header-text">
          <Link to={"*"}>Pizza House</Link>
        </Col>

        <Col span={5} className="layout-default__header-content">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About Us</Link>
          <Link to={"/"}>Contact</Link>
        </Col>

        <Col span={12} className="layout-default__header-search">
          <ButtonInputSearch size="large" placeholder="Search" />
        </Col>

        <Col span={2} className="layout-default__header-cart">
          <CartComponent />
        </Col>
      </Row>
    </>
  );
};

export default HeaderCompomemt;
