import React from "react";
import "../style/BannerGirl.css";
import correct_symbol from "../assets/banners/corretsymbol.png";
import banner1 from "../assets/banners/banneroffer1.png";
import banner2 from "../assets/banners/banneroffer2.png";
import banner3 from "../assets/banners/banneroffer3.png";
import servicelocalshoppe from '../assets/banners/servicelocalshoppe.png'

export default function BannerGirl() {
  return (
    <>
      <div className="bannermain d-flex justify-content-between">
        <div className="bannertexts text-white">
        <div className="container">
          <h3>Looking for the best service providers?</h3>
          <h4 className="fw-bold textbanner">Explore our services Today</h4>
          <div className="bannercheck">
            <li>
              <img className="bannerimg" src={correct_symbol} alt="" />
              <span className="bannersword">Find Nearby Listings</span>
            </li>
            <li>
              <img className="bannerimg" src={correct_symbol} alt="" />
              <span className="bannersword">Easy Service Enquiry</span>
            </li>
            <li>
              <img className="bannerimg" src={correct_symbol} alt="" />
              <span className="bannersword">Listing Reviews And Ratings</span>
            </li>
            <li>
              <img className="bannerimg" src={correct_symbol} alt="" />
              <span className="bannersword">
                Manage Your Listing, Enquiry And Reviews
              </span>
            </li>
          </div>
          <div className="bannerbutton">
            <button className="bannerstartbtn">Start Free Trial</button>
          </div>
          </div>
        </div>
        <div className="banneroffersimg align-self-center">
          <div className="offerimage text-end">
            <div className="offimg">
              <img src={banner1} alt="" />
            </div>
            <div className="offimg">
              <img src={banner2} alt="" />
            </div>
            <div className="offimg">
              <img src={banner3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="servicelocallogo">
        <img src={servicelocalshoppe} alt="" />
      </div>
    </>
  );
}
