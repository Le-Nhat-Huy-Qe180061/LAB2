import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './SliderComponent.scss'; // Ensure this file exists for custom styles

const CarouselComponent = ({ arrImage = [] }) => {
    const contentStyle = {
        position: 'relative',
        height: '400px', // Adjust as needed
        overflow: 'hidden',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const overlayStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
        padding: '20px',
        color: 'white',
        textAlign: 'left',
    };

    const titleStyle = {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '5px',
    };

    const descriptionStyle = {
        textAlign: 'center',
        fontSize: '16px',
    };

    return (

        <ConfigProvider
            theme={{
                components: {
                    Carousel: {
                        /* here is your component tokens */
                        arrowSize: 25,
                        arrowOffset: 90,
                        dotWidth: 30
                    },
                },
            }}
        >
            <Carousel
                arrows
                arrowSize={25}
                // prevArrow={<LeftOutlined className="custom-arrow-prev" />}
                // nextArrow={<RightOutlined className="custom-arrow-next" />}
                autoplay
            >
                {arrImage.map((item, index) => (
                    <div key={index}>
                        <div style={contentStyle}>
                            <img src={item.image} alt={item.title} style={imageStyle} />
                            <div style={overlayStyle}>
                                <h2 style={titleStyle}>{item.title}</h2>
                                <p style={descriptionStyle}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </ConfigProvider>




    );
};

export default CarouselComponent;