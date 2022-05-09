import React from 'react';
import "../style/OrderDetails.css";
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import OrderDetailscompo from '../components/OrderDetailsCompo'


export default function OrderDetails() {
  return (
    <>
       {/* <Header2/> */}
       <OrderDetailscompo/>
       <button className='orderdetailbtn_track'>Track Order</button>
       <button className='orderdetailbtn_cancle btn-outline-primary'>Cancel</button>
       <Footer/>
    </>
  )
}
