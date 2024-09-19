import React from 'react'

import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';




const index = () => {
    return (
        <>
            <Row gutter={[10, 20]} className='layout-default__header'>
                <Col span={5} className='layout-default__header-text'>
                    <Link to={"/"}>Pizza House</Link>
                </Col>

                <Col span={5} className='layout-default__header-content'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>About Us</Link>
                    <Link to='/'>Contact</Link>
                </Col>

                <Col span={14} className="layout-default__header-search">
                    <ButtonInputSearch
                        size='large'
                        placeholder='Search'
                    />
                </Col>

            </Row>
        </>
    )
}

export default index