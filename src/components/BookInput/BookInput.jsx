

import React, { useState } from 'react';
import { Col, Row, Select, Input } from 'antd';
import './BookInput.scss'
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const { TextArea } = Input;

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const BookInput = () => {

    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    return (
        <>
            <h2 className='book__table-title'>Book Your Table</h2>

            <Row>
                <Col span={8}>
                    <InputComponent
                        placeholder={"Your Name*"}
                        style={{ width: '400px' }}
                    />
                </Col>
                <Col span={8}>
                    <InputComponent
                        placeholder={"Your Email*"}
                        style={{ width: '400px' }}
                    />
                </Col>
                <Col span={8}>
                    <Select
                        mode="multiple"
                        placeholder="Select a Service"
                        value={selectedItems}
                        onChange={setSelectedItems}
                        style={{
                            width: '400px',
                        }}
                        options={filteredOptions.map((item) => ({
                            value: item,
                            label: item,
                        }))}
                    />
                </Col>
            </Row>

            <div className='book__table-textArea'>
                <TextArea rows={5} placeholder="Please write your comment" style={{ width: '98%' }} />
            </div>

            <ButtonComponent
                textButton={"Send Message"}
                style={{
                    background: '#FEC007',
                    color: 'white',
                    fontWeight: '500',
                    padding: '20px 45px',
                    marginTop: '27px',
                    marginBottom: '100px',
                }}
            />

        </>
    )
}

export default BookInput