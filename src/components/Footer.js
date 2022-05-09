import React from 'react'
import '../style/Footer.css';
// import banner from "../assets/footer/bg_img.svg"
import heart from '../assets/footer/heart.png';
import correct from '../assets/footer/correct.png';
import star from '../assets/footer/star.png';
import location from '../assets/footer/location.png';
import call from '../assets/footer/call.png';
import message from '../assets/footer/message.png';
import fb from '../assets/footer/fb.png';
import twitter from '../assets/footer/twitter.png';
import insta from '../assets/footer/insta.png';
import linked_in from '../assets/footer/linked_in.png';
import youtube from '../assets/footer/youtube.png';
import gplay from '../assets/footer/gplay.png';
import dmca from '../assets/footer/dmca.png';
import ssl_payment from '../assets/footer/ssl_payment.png';
import correct_symbol from '../assets/footer/correct_symbol.svg';
import googleplay from '../assets/footer/gplay_bag.png';
import phone from '../assets/footer/phone.png';
import back_top from '../assets/footer/top_icon.svg';





export default function Footer() {
  return (
    <>
    {/* ####### backto top footer ######### */}
    <div className="topfooter">
    <div className="long-image">
    <div className="container left_side">
        <div className="heading">
          <h1>Looking for the best service <br />Providers? Get the app</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular<br /> belief. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        </div>
        <div className="check">
          <li><img src={correct_symbol} alt="" /><span className='sword'>Find Nearby Listings</span></li>
          <li><img src={correct_symbol} alt="" /><span className='sword'>Easy Service Enquiry</span></li>
          <li><img src={correct_symbol} alt="" /><span className='sword'>Listing Reviews And Ratings</span></li>
          <li><img src={correct_symbol} alt="" /><span className='sword'>Manage Your Listing, Enquiry And Reviews</span></li>
        </div>
        <div className="gplay">
          <img src={googleplay} alt="" />
        </div>
        </div>
        <div className="right_side">
          <img src={phone} alt="" />
        </div>
        <div className="back">
          <img src={back_top} className='top' alt="" />
        </div>
    </div>
    </div>
    {/* ########## Footer with social icons ############# */}

    <div className="footer-main">
          <div className="container d-flex">
            <div className="p-3 mb-2 bg-dark text-white box">
        <img src={heart} alt="" /><p className='bg-dark text-white'><span className='bg-dark text-white'>Best Services Providers</span><br />Earned Best Service Award in 2016</p>
        </div>
        <div className="p-3 mb-2 bg-dark text-white box">
        <img src={correct} alt="" /><p className='bg-dark text-white'><span className='bg-dark text-white'>Verified Services Providers</span><br />More Than 25000 Service Providers</p>
        </div>
        <div className="p-3 mb-2 bg-dark text-white box">
        <img src={star} alt="" /><p className='bg-dark text-white'><span className='bg-dark text-white'>User Friendly Focused</span><br />Give Better Rich Experience</p>
        </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-between">
          <div className="compnay">
            <div className="head">
              <h6>Company</h6>
              <div className="line"></div>
            </div>
            <div className="list">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Career</li>
                <li>Customer Reviews</li>
                <li>Refund Policy</li>
                <li>Terms & Conditions</li>
            </div>
          </div>
          <div className="compnay">
            <div className="head">
              <h6>Service</h6>
              <div className="line"></div>
            </div>
            <div className="list">
                <li>Daily Services</li>
                <li>Instant Services</li>
                <li>Adworks</li>
                <li>Top Offers</li>
                <li>Branding</li>
            </div>
          </div>
          <div className="compnay">
            <div className="head">
              <h6>About Servicekart</h6>
              <div className="line"></div>
            </div>
            <div className="list">
                <li>
                <img src={location} alt="" />
                <p>T-05, 3rd Floor, Aditya City Center, <br /> Vaibhav Khand 1, Indirapuram, <br /> Ghaziabad (U.P) 201014 </p>
                </li>
                <li>
                <img src={call} alt="" />
                <p>0120 - 496 4063 <br /> +91 730 - 317 - 8585</p>
                </li>
                <li>
                <img src={message} alt="" />
                <p className='care'>care@servicekart.co.in</p>
                </li>

            </div>
          </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-between">
          <div className="left">
              <h5>Follow Us On</h5>
              <div className="socal">
                <img src={fb} alt="Facebook" />
                <img src={twitter} alt="twitter" />
                <img src={insta} alt="instagram" />
                <img src={linked_in} alt="LinkedIn" />
                <img src={youtube} alt="YouTube" />
              </div>
          </div>
          <div className="right text-end">
            <h5>Download The Mobile App</h5>
            <img src={gplay} alt="Google Play" />
          </div>
        </div>
        <hr />
        <div className="last d-flex justify-content-between">
          <div className="dmca">
            <img src={dmca} alt="dmca" />
          </div>
          <div className="sentenc text-center">
            <p>Setup your Store Online | Advertise With Us | Shop with Localshoppe <br /> Copyright © 2021. All Right Reserved Cownpor Global Service Technologies Pvt. Ltd. | Powered by THE EDGISS</p>
          </div>
          <div className="ssl">
            <img src={ssl_payment} alt="SSL Payment" />
          </div>
        </div>
        </div>
    </>
  )
}
