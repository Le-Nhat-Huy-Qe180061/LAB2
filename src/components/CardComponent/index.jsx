import React, { useState, useEffect } from "react";
import { Col, Row, Skeleton } from "antd";
import { WrapperDiscountText, WrapperPriceOld } from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./CardComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductCardSkeleton = () => (
  <div className="menu__product-card" style={{ width: "18rem" }}>
    <Skeleton.Image style={{ width: "100%", height: "200px" }} active />
    <Skeleton active paragraph={{ rows: 3 }} />
  </div>
);

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch products data from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching data
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();

        // Format the fetched data to match the required structure
        const formattedData = result.products.map((product) => ({
          id: product.id,
          image: product.thumbnail,
          title: product.title,
          priceOld: `$${(product.price * 1.2).toFixed(2)}`, // Example calculation for old price
          priceNew: `$${product.price.toFixed(2)}`,
        }));

        setData(formattedData); // Set the fetched and formatted data
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchProducts();
  }, []);

  console.log(data);

  return (
    <div className="menu__product">
      <Row gutter={[16, 16]}>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Col span={6} key={index}>
                <ProductCardSkeleton />
              </Col>
            ))
          : data.map((item, index) => (
              <ProductItem key={item.id} item={item} />
            ))}
      </Row>
    </div>
  );
};

export default ProductList;
