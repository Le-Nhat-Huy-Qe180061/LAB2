

import React from 'react';
import HeaderCompomemt from "../../components/HeaderComponent";

import './LayoutDefaults.scss';
import { Outlet } from 'react-router-dom';



const index = () => {

   
    return (
        <div className='layout-default'>
           <HeaderCompomemt />

           <main className='layout-default__main'>
                <Outlet></Outlet>
           </main>


        </div>
    )
}

export default index;