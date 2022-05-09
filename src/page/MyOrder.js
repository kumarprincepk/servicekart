import React from "react";
import "../style/OrderDetails.css";
import pmilk from "../assets/banners/pmilk.png";
import Footer from "../components/Footer";
// import SubHeader from "../components/SubHeader";
// import Header2 from "../components/Header2";

export default function MyOrder() {
  return (
    <>
    
        <div className="myorderpage">

        <div className="myordertophead bg-light d-flex justify-content-around align-items-center">
            <h5>Order</h5>
            <h5>Rest Of The Month</h5>
        </div>

      <div className="myorderbox">
        <div className="orderid d-flex justify-content-between">
          <p className="orderidcancelno">Order ID : #4687</p>
          <p className="orderidcancelno">17 Feb 2021</p>
        </div>
        <hr />
        <div className="detailrate d-flex justify-content-between">
          <div className="milkdetailrate">
            <h6>
              <span>
                <img className="ratemilkimg" src={pmilk} alt="  " />
              </span>
              <span className="fw-bold">Mother Dairy</span>
            </h6>
            <p>
              <small>Total Items : 02</small>
            </p>
            <p>
              <small>Price :</small>
              <span className="fw-bold text-primary"> &#8377;56.00</span>
            </p>
          </div>
          <div className="d-flex flex-column">
            <button className="myorderbtn_track">Track Order</button>
            <button className="myorder_view btn-outline-primary">
              View Order
            </button>
          </div>
        </div>
      </div>


      <div className="myorderbox mt-4">
        <div className="orderid d-flex justify-content-between">
          <p className="orderidcancelno">Order ID : #4687</p>
          <p className="orderidcancelno">17 Feb 2021</p>
        </div>
        <hr />
        <div className="detailrate d-flex justify-content-between">
          <div className="milkdetailrate">
            <h6>
              <span>
                <img className="ratemilkimg" src={pmilk} alt="  " />
              </span>
              <span className="fw-bold">Mother Dairy</span>
            </h6>
            <p>
              <small>Total Items : 02</small>
            </p>
            <p>
              <small>Price :</small>
              <span className="fw-bold text-primary"> &#8377;56.00</span>
            </p>
          </div>
          <div>
            <button className="myorder_view mt-5 btn-outline-primary">
              View Order
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}
