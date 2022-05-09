import React from 'react';
import '../style/SubHeader.css';
import {  Link } from "react-router-dom";

import threedots from '../assets/banners/threedots.png';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';
import SubHeader from '../components/SubHeader';

export default function SavedCards() {
  return (
    <>
    <Header2/>
    <SubHeader/>
        <div className="container savedcard">
        <div className="container topmainmyaddress">
          <div className=" container textandbutton d-flex">
            <h5 className="container">Saved Cards
            <div className="myaddunderline"></div>
            </h5>
            <Link to="/SavedCards/Add-Card">
            <button className="bg-primary myaddressbtn">Add New Card</button>
            </Link>
          </div>
          <div className="totalcard d-flex">
            <div className="myaddresscard">
              <div className="myaddcardinner">
                <div className="savefirst">
                  <label className='cardnumber'>6250 0821 7698 7551</label>
                  <span>VISA</span>
                  <img className='cardvisa ' src={threedots} alt="" />
                </div>
                <div className="cardtext d-flex justify-content-between">
                    <h6>Card Holder Name</h6>
                    <h6>Valid Upto</h6>
                </div>
                <div className="cardholder d-flex justify-content-between">
                    <h5>John Doe</h5>
                    <h5>05/2026</h5>
                </div>
              </div>
            </div>


            <div className="myaddresscard">
              <div className="myaddcardinner">
                <div className="savefirst">
                  <label className='cardnumber'>6250 0821 7698 7551</label><span>VISA</span>
                  <img className='cardvisa ' src={threedots} alt="" />
                </div>
                <div className="cardtext d-flex justify-content-between">
                    <h6>Card Holder Name</h6>
                    <h6>Valid Upto</h6>
                </div>
                <div className="cardholder d-flex justify-content-between">
                    <h5>John Doe</h5>
                    <h5>05/2026</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}
