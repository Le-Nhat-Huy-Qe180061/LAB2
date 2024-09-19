import React, { useState, useEffect } from 'react';
import { Col, Row, Skeleton } from 'antd';
import { WrapperDiscountText, WrapperPriceOld } from './style';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './CardComponent.scss';

const ProductCard = ({ item }) => (
    <div className="menu__product-card" style={{ width: '18rem' }}>
        <img src={item.image} className="card-img-top" alt="ảnh" />
        <div className='menu__product-sell'>SALE</div>
        <div className="menu__product-card">
            <div className='menu__product-card-item'>
                <h5 className="card-title">{item.title}</h5>
                <div className='card-price'>
                    <WrapperPriceOld>{item.priceOld}</WrapperPriceOld>
                    <WrapperDiscountText>{item.priceNew}</WrapperDiscountText>
                </div>
                <ButtonComponent
                    textButton="Buy"
                    styleButton={{
                        background: '#353A40',
                        padding: '10px 15px',
                        color: 'white',
                        fontWeight: '600',
                        width: '100%',
                    }}
                    size="large"
                />
            </div>
        </div>
    </div>
);

const ProductCardSkeleton = () => (
    <div className="menu__product-card" style={{ width: '18rem' }}>
        <Skeleton.Image style={{ width: '100%', height: '200px' }} active />
        <Skeleton active paragraph={{ rows: 3 }} />
    </div>
);

const ProductList = ({ arrCardProduct = [] }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='menu__product'>
            <Row>
                {arrCardProduct.map((item, index) => (
                    <Col span={6} key={index}>
                        {loading ? <ProductCardSkeleton /> : <ProductCard item={item} />}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductList;