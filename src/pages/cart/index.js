import React from 'react';
import CartList from './CartList';
import { Header } from 'antd/es/layout/layout';
import './Cart.scss';
import { Col, Row } from 'antd';
import { FacebookOutlined, InstagramOutlined, BellOutlined, GlobalOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import ButtonInputSearch from '../../components/ButtonInputSearch/ButtonInputSearch';

const onClick = ({ key }) => {
  message.info(`Clicked on item ${key}`);
};

const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const items2 = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
  },
];

const Cart = () => {
  return (
    <>
      <Header className='cart__header'>
        <Row>
          <Col span={12}>
            <div className='cart__header-right'>
              <p>Kênh người bán | </p>
              <p>Tải ứng dụng | </p>
              <p>Kết nối <span><FacebookOutlined className='cart__header-right__icon' /> <InstagramOutlined className='cart__header-right__icon' /></span> </p>
            </div>
          </Col>
          <Col span={12}>
            <div className='cart__header-left'>
              <BellOutlined className='cart__header-left__icon' />

              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <GlobalOutlined className='cart__header-left__icon' />
                    Language
                    <DownOutlined className='cart__header-left__icon' />
                  </Space>
                </a>
              </Dropdown>

              <Dropdown
                menu={{
                  items: items2,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                     User
                    <DownOutlined className='cart__header-left__icon' />
                  </Space>
                </a>
              </Dropdown>

            </div>

          </Col>
        </Row>
      </Header>
      <div className='cart__warpper'>
        <Row>
          <Col span={12}>
            <div className='cart__warpper-right'>
              <ShoppingCartOutlined />
              <h4>Giỏ hàng</h4>
            </div>
          </Col>
          <Col span={12}>
            <ButtonInputSearch />
          </Col>
        </Row>
      </div>
      <div className='cart'>
        <CartList />
      </div>

    </>
  )
}

export default Cart;
