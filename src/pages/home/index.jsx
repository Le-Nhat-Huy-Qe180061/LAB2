import React from 'react'
import SliderComponents from '../../components/SliderComponent';
import CardComponent from '../../components/CardComponent';
import slider1 from "../../assets/Images/pizza1.jpg";
import slider2 from "../../assets/Images/pizza2.jpg";
import slider3 from "../../assets/Images/pizza3.jpg";
import slider4 from "../../assets/Images/pizza4.jpg";
import slider5 from "../../assets/Images/pizza5.jpg";

import cardProduct1 from "../../assets/Images/menu1.jpg";
import './Home.scss';

const index = () => {

    const pizzaImages = [
        {
            image: slider1,
            title: 'Neapolitan Pizza',
            description: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!',
        },
        {
            image: slider2,
            title: 'Pepperoni Pizza',
            description: 'The classic Pepperoni pizza with a delicious twist.',
        },
        {
            image: slider3,
            title: 'Margherita Pizza',
            description: 'Fresh ingredients and classic taste make this pizza a favorite.',
        },
        {
            image: slider4,
            title: 'Margherita Pizza',
            description: 'Fresh ingredients and classic taste make this pizza a favorite.',
        },
        {
            image: slider5,
            title: 'Margherita Pizza',
            description: 'Fresh ingredients and classic taste make this pizza a favorite.',
        },
    ];

    // const cardProduct = [
    //     {
    //         image: cardProduct1,
    //         title: 'Marvhenta',
    //         description: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!',
    //     },
    // ]


    return (
        <>
            <SliderComponents arrImage={pizzaImages} />
            <div className='body'>
                <div className='container'>
                    <div className='menu'>
                        <h2 className='menu__title'>Our Menu</h2>
                        <CardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index