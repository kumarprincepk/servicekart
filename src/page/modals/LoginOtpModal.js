import React, {useState} from 'react';
import {  Link } from "react-router-dom";
import Modal from 'react-modal';
import '../../style/LoginModal.css';
import OTPInput, { ResendOTP } from "otp-input-react";
import servicekartlogo from '../../assets/banners/servicekartlogo.png';
import bannergirlsingle from '../../assets/banners/bannergirlsingle.png';
import cross from '../../assets/banners/cross.png';

export default function LoginOtpModal({closeModal}) {
    const [OTP, setOTP] = useState("");
  const [openModals, setOpenModals] = useState(true);

  return (
    <>
    <Modal isOpen={openModals} onRequestClose={()=>setOpenModals(false)} className='loginmodalsize'>
        <div className="topmainloginmodal d-flex">
        <div className="loginmain">
            <div className="loginmodal">
                <div className="loginmodalone">
                    <img className='imagemodallogin' src={servicekartlogo} alt="" />
                    <h5 className='text-white myh5'>Explore Services on Servicekart</h5>
                    <img className='bannergirlsingle' src={bannergirlsingle} alt="" />
                </div>
                <div className="loginmodaltwo">
                  <div className="logingtwointer">
                    <h4 className='h4otpmodal'>Enter Code Sent To On Your
                    <br /> Mobile Number</h4>
                   <p className='my-3'>We sent it to the number +91 8750 450 1XX</p>
                    <div className="loginputotp d-flex flex-row">
                    {/* <input type="text" className='inputotpmodal' placeholder='0' />
                    <input type="text" className='inputotpmodal' placeholder='0' />
                    <input type="text" className='inputotpmodal' placeholder='0' />
                    <input type="text" className='inputotpmodal' placeholder='0' />
                    <input type="text" className='inputotpmodal' placeholder='0' />
                    <input type="text" className='inputotpmodal' placeholder='0' /> */}
                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} 
                    inputStyles={true} />

                    </div>
                   <div className="timereset d-flex justify-content-between">
                       <p>00.25 seconds</p>
                       <p className='text-primary'>Resend Code</p>
                   </div>
                    <div className="verifyoptbtn">
                       <button className='backlogbtn'>Verify OTP</button>
                       <Link to="/Loginmodal">
                       <button className='btn-outline-primary backloginbtn'>Back To Login</button>
                       </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <img className='modalcross' src={cross} alt=""  onClick={()=>{closeModal(false);}}/>
        </div>
        </Modal>
    </>
  )
}
