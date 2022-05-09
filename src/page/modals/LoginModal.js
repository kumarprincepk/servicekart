import React, { useState }  from 'react';
import {  Link } from "react-router-dom";
import '../../style/LoginModal.css';
import Modal from 'react-modal';
import servicekartlogo from '../../assets/banners/servicekartlogo.png';
import bannergirlsingle from '../../assets/banners/bannergirlsingle.png';
import google from '../../assets/banners/google.png';
import facebook from '../../assets/banners/facebook.png';
import cross from '../../assets/banners/cross.png';

export default function LoginModal({closeModal}) {
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
                    <h4 className='h4modal'>Get started with phone number</h4>
                    <div className="loginbuttontext d-flex flex-column">
                    <input type="text" placeholder='Enter your mobile number' className='inputmodal'  />
                    <Link to="/Loginwithotp">
                    <button className='btnmodal'>Login With OTP</button>
                    </Link>
                    </div>
                    <p className='modalortext'>Or login with</p>
                    <div className="verifyimg">
                        <img className='modalgoogle' src={google} alt="Google" />
                        <img className='modalfb' src={facebook} alt="Facebook" />
                    </div>
                    <p>By accepting all <span className='modalterm'> terms</span> and <span className='modalterm'> conditions</span></p>
                </div>
            </div>
            </div>
        </div>
        <img className='modalcross' src={cross} alt="" onClick={()=>{closeModal(false);}} />
        </div>
        </Modal>
    </>
  )
}
