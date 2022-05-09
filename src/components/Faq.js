import React from "react";
import "../style/SubHeader.css";
import threedots from "../assets/banners/threedots.png";
import { FiSearch } from 'react-icons/fi';
import Footer from "./Footer";
import Header2 from "./Header2";
import SubHeader from "./SubHeader";

export default function Faq() {
  return (
    <>
    <Header2/>
    <SubHeader/>
      <div className="container faq">
        <div className="container topmainmyaddress">
          <div className=" container">
            <h5 className="container">
              Frequently Asked Questions
              <div className="myaddunderline"></div>
            </h5>
            <FiSearch className="searchiconfaq"/>
            <input type="text" className="inputfaq" placeholder="Search..." />
          <h5 className="faqheading">Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, necessitatibus aperiam dolores nulla quaerat, nostrum explicabo voluptatum perferendis a atque placeat molestias aliquid ex dolore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, tenetur?</p>
          <h5 className="faqheading">Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio assumenda veritatis deleniti porro dolore sint ipsam consectetur! Lorem ipsum dolor sit amet.</p>
          <h5 className="faqheading">Lorem ipsum</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
