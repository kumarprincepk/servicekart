import React from 'react';
import "../style/OrderDetails.css";
import Header2 from '../components/Header2'
import OrderDetailsCompo from '../components/OrderDetailsCompo'
import Footer from '../components/Footer';

export default function OrderDetails2() {
  return (
    <>
        {/* <Header2/> */}
        <OrderDetailsCompo/>
        <button className='rateorderbtn'>Rate Order</button>
        <Footer/>
    </>    
  )
}
