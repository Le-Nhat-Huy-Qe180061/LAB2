import React from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CartComponent = () => {

    const cart = useSelector(state => state.cartReducer);


    const total = cart.reduce((sum, item) => {
        return sum + item.quantity;
    },0)

    return (
        <>
            <Link to={'/cart'} className='layout-default__header-cartIcone'>
                <ShoppingCartOutlined />
            </Link>
            <span className='layout-default__header-cartQuantity'>{total}</span>
        </>
    )
}

export default CartComponent