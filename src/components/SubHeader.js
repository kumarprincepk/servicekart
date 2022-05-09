import React, {useState} from "react";
import "../style/SubHeader.css";
import { Outlet, Link } from "react-router-dom";
import profile from "../assets/banners/profile.png";
import myaddress from "../assets/banners/myaddress.png";
import savecart from "../assets/banners/savecart.png";
import faq from "../assets/banners/faq.png";
import setting from "../assets/banners/setting.png";
import colorprofile from '../assets/banners/colorprofile.png';
import colormyaddress from '../assets/banners/colormyaddress.png';

export default function SubHeader() {
    const [image, setImage] =useState(profile);
    
  return (
    <>
      <div className="container">
        <div className="container topsubheader">
          <div className="mainsubheader bg-light d-flex justify-content-around">
           <Link to="/Profile"> 
           <div className="headeritem d-flex" onClick={()=>{setImage(colorprofile)}} >
              <div className="itemsofhead">
                <img src={image} alt="" />
              </div>
              <p className="headtext">Profile</p>
            </div>
            </Link>
            <Link to="/My-Address">
            <div className="headeritem d-flex">
              <div className="itemsofhead">
                <img src={myaddress} alt="" />
              </div>
              <p className="headtext">My Address</p>
            </div>
            </Link>
            <Link to='/SavedCards'>
            <div className="headeritem d-flex">
              <div className="itemsofhead">
                <img src={savecart} alt="" />
              </div>
              <p className="headtext">Saved Cards</p>
            </div>
            </Link>
            <Link to='/FAQ'>
            <div className="headeritem d-flex">
              <div className="itemsofhead">
                <img src={faq} alt="" />
              </div>
              <p className="headtext">FAQ</p>
            </div>
            </Link>
            <Link to='/Settings'>
            <div className="headeritem d-flex">
              <div className="itemsofhead">
                <img src={setting} alt="" />
              </div>
              <p className="headtext">Settings</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
