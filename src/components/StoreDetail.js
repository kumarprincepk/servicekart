import React from 'react'
import '../style/StoreDetail.css';
import {NavLink, Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import owl from '../assets/banners/owl.png';

export default function StpreDetail() {

  
  return (
    <>
        <div className="container">
          <div className="container text-center center">
            <img src={owl} alt="" />
            <h2>24/7 Store</h2>
            <h5>Dairy Milk Services</h5>
            <h6>3 Km | 36 Min</h6>
            <div className="text-center">
              <p>RELATED TO 24SEVEN, SECTOR 18 <br /> Restaurants in Noida, Noida Restaurants, Sector 18 restaurants, Best Sector 18 restaurants, Noida restaurants, in Delhi NCR, near me, in Noida, in Sector 18, in <br /> Delhi NCR, near me, in Noida, in Sector 18, 24Seven Menu, New Year Parties in Delhi NCR, Christmas' Special in Delhi NCR, <br /> RESTAURANTS AROUND SECTOR 18 <br /> Sector 38 restaurants, Sector 27 restaurants, Sector 28 restaurants, Sector 19 restaurants,</p>
            </div>
            <div className="twoitem">
              <button className='active bg-light butto'>Categories</button>
              <button className='disabled bg-light butto'>Items</button>
            </div>
          </div>
          
        </div>
    </>
  )
}
