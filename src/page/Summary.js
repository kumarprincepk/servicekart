import React from 'react';
import "../style/OrderDetails.css";
import owl from "../assets/banners/owl.png";
import Footer from '../components/Footer';



export default function Summary() {
  return (
    <>
       <div className="container">
      <div className="container mainorderdetails d-flex ms-5">
        <div className="order_details_left">
          <p className='fw-bold orderdetatltext'>Item Details</p>

          <div className="ordertable">
            <table className="table-borderless table orderdetatltext">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Qty</th>
                  <th className="text-end">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full Cream Milk <br /> 500 ml</td>
                  <td>2</td>
                  <td className="text-end">112.00</td>
                </tr>
                <tr>
                  <td>Britannia Bread</td>
                  <td>1</td>
                  <td className="text-end">46.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <hr /> */}
          <div className="orderiddetail d-flex justify-content-between">
            <p className="orderdetatltext">Total</p>
            <p className="orderdetatltext">158.00</p>
          </div>
          {/* <hr /> */}
          <div className="ordertable_tax">
            <table className="table-borderless table orderdetatltext">
            <tbody>
                <tr>
                  <td>Tax</td>
                  <td>5%</td>
                  <td className="text-end">7.90</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td></td>
                  <td className="text-end">-50.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <hr /> */}
          <div className="orderid d-flex justify-content-between">
            <p className="orderdetatltext">Total Amount</p>
            <p className="orderdetatltext">115.90</p>
          </div>
        </div>
        <div className="order_details_right">
          <p className="fw-bold orderdetatltext">Delivery Address</p>
          <button className='summerybtn'>Home</button>
          <div className="orderdetailsadd">
            <p><span className="fw-bold">John Smith</span><br /> Aditya City Center,Vaibhav Khand <br /> 1,Indirapuram,Ghaziabad (U.P.) 201014</p>
            <p className="fw-bold orderdetailnu">+91 8750 450 201</p>
          </div>
            <h5 className='fw-bold'>Store Details</h5>
          <div className="summarystore mt-4 d-flex">
            <img src={owl} className='summaryimg' alt="owl image" />
            <h5>24/7 Store <br /><span className='summarytxt'>Dairy Milk Services <br />3 Km | 36 Min</span></h5>
            
          </div>
        </div>

      </div>
      </div>
    <button className='summaryproceed'>Proceed to Pay</button>
    <button className='summarycancle btn-outline-primary'>Cancel</button>
    <Footer/>
    </>
  )
}
