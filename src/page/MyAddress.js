import React from "react";
import "../style/SubHeader.css";
import {  Link } from "react-router-dom";
import threedots from "../assets/banners/threedots.png";
import Header2 from "../components/Header2";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";

export default function MyAddress() {
  return (
    <>
    <Header2/>
    <SubHeader/>
      <div className="container myaddress">
        <div className="container topmainmyaddress">
          <div className=" container textandbutton d-flex">
            <h5 className="container">My Addresses
            <div className="myaddunderline"></div>
            </h5>
            <Link to="/My-Address/Add-Address">
            <button className="bg-primary myaddressbtn">Add Addresses</button>
            </Link>
          </div>
          <div className="totalcard d-flex">
            <div className="myaddresscard">
              <div className="myaddcardinner">
                <div className="innerfirst">
                  <button className="bg-primary myaddbtn">Home</button>
                  <img src={threedots} alt="" />
                  <p className="addmargin">
                    <span className="fw-bold"> John Smith</span> <br />
                    Aditya City Center,Vaibhav Khand <br />{" "}
                    1,Indirapuram,Ghaziabad (U.P.) 201014
                  </p>
                  <p className="fw-bold phonemargin">+91 8750 450 201</p>
                </div>
                <div className="myaddtext"></div>
              </div>
            </div>


            <div className="myaddresscard">
              <div className="myaddcardinner">
                <div className="innerfirst">
                  <button className="bg-primary myaddbtn">Home</button>
                  <img src={threedots} alt="" />
                  <p className="addmargin">
                    <span className="fw-bold"> John Smith</span> <br />
                    Aditya City Center,Vaibhav Khand <br />{" "}
                    1,Indirapuram,Ghaziabad (U.P.) 201014
                  </p>
                  <p className="fw-bold phonemargin">+91 8750 450 201</p>
                </div>
                <div className="myaddtext"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
