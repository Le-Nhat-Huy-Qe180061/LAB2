import React from "react";

import { Col, Row, Skeleton } from "antd";
import { WrapperDiscountText, WrapperPriceOld } from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./CardComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

const ProductItem = (props) => {
  const { item } = props;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer);

  //   console.log("Item: ", item.id);

  const handleAddToCart = (e) => {
    console.log(e);
    if (cart.some((itmeCart) => itmeCart.id === item.id)) {
      dispatch(updateQuantity(item.id));
    } else {
      dispatch(addToCart(item.id, item));
    }
  };

  return (
    <Col span={6} key={item.key}>
      <div className="menu__product-card" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="product" />
        <div className="menu__product-sell">SALE</div>
        <div className="menu__product-card">
          <div className="menu__product-card-item">
            <h5 className="card-title">{item.title}</h5>
            <div className="card-price">
              <WrapperPriceOld>{item.priceOld}</WrapperPriceOld>
              <WrapperDiscountText>{item.priceNew}</WrapperDiscountText>
            </div>
            <ButtonComponent
              textButton="Buy"
              styleButton={{
                background: "#353A40",
                padding: "10px 15px",
                color: "white",
                fontWeight: "600",
                width: "100%",
              }}
              size="large"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
