import React from 'react'
import { WrapperDiscountText, WrapperPriceOld } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


import cardProduct1 from "../../assets/Images/menu1.jpg";


const index = () => {
    return (
        <div className='menu__product'>
            <div className="menu__product-card" style={{ width: '18rem' }}>
                <img src={cardProduct1} class="card-img-top" alt="ảnh" />
                <div className="menu__product-card">
                    <div className='menu__product-card-item'>
                        <h5 className="card-title">Card title</h5>
                        <div className='card-price'>
                            <WrapperPriceOld> $40.00 </WrapperPriceOld>
                            <WrapperDiscountText>$24.00</WrapperDiscountText>
                        </div>
                        <ButtonComponent
                            textButton={"Buy"}
                            styleButton={{
                                background: 'grey',
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
        </div>
    )
}

export default index