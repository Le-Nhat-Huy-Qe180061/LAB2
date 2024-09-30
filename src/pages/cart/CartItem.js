import React, { useState } from 'react';
import { Space, Table, Avatar, Button } from 'antd';

const columns = (handleIncrement, handleDecrement) => [
    {
        title: 'Product',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
            <Space>
                <Avatar src={record.image} />
                <a>{text}</a>
            </Space>
        ),
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (quantity, record) => (
            <Space>
                <Button onClick={() => handleDecrement(record.key)}>-</Button>
                {quantity}
                <Button onClick={() => handleIncrement(record.key)}>+</Button>
            </Space>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const initialData = [
    {
        key: '1',
        name: 'John Brown',
        price: 32,
        quantity: 1,
        image: 'https://via.placeholder.com/40',
    },
    {
        key: '2',
        name: 'Jim Green',
        price: 42,
        quantity: 2,
        image: 'https://via.placeholder.com/40',
    },
    {
        key: '3',
        name: 'Joe Black',
        price: 32,
        quantity: 3,
        image: 'https://via.placeholder.com/40',
    },
];

const CartItem = () => {
    const [data, setData] = useState(initialData);

    const handleIncrement = (key) => {
        const updatedData = data.map((item) =>
            item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        );
        setData(updatedData);
    };

    const handleDecrement = (key) => {
        const updatedData = data.map((item) =>
            item.key === key && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setData(updatedData);
    };

    return (
        <>
            <Table columns={columns(handleIncrement, handleDecrement)} dataSource={data} />
        </>
    );
}

export default CartItem;
