import React from 'react';
import { Col, Row } from 'antd';
import { WrapperDiscountText, WrapperPriceOld } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import './CardComponent.scss'

const index = ({ arrCardProduct = [] }) => {

    // console.log(arrCardProduct);

    return (
        <div className='menu__product'>
            <Row>
                {arrCardProduct.map((item, index) => (
                    <Col span={6} key={index}>
                        <div  className="menu__product-card" style={{ width: '18rem' }}>

                            <img src={item.image} className="card-img-top" alt="ảnh" />
                            
                            <div className='menu__product-sell'>
                                SALE
                            </div>

                            <div className="menu__product-card">
                                <div className='menu__product-card-item'>
                                    <h5 className="card-title">{item.title}</h5>
                                    <div className='card-price'>
                                        <WrapperPriceOld> {item.priceOld} </WrapperPriceOld>
                                        <WrapperDiscountText>{item.priceNew}</WrapperDiscountText>
                                    </div>
                                    <ButtonComponent
                                        textButton={"Buy"}
                                        styleButton={{
                                            background: '#353A40',
                                            padding: '10px 15px',
                                            color: 'white',
                                            fontWeight: '600',
                                            width: '100%',
                                        }}
                                        size={"large"}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default index