import React,{useState } from 'react'
import Bannaer from '../components/Bannaer'
import BannerGirl from '../components/BannerGirl';
import Footer from '../components/Footer'
import Header2 from '../components/Header2';
import List from '../components/List'
import LoginModal from './modals/LoginModal';
import SubHeader from '../components/SubHeader';
import '../style/Banner.css';
import LoginOtpModal from './modals/LoginOtpModal';

export default function LandingPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>

    <button className="btn" onClick={()=>{setOpenModal(true);}}>Login</button>
    <Header2/>
    <SubHeader/>
    {openModal && <LoginModal closeModal={setOpenModal} />}
    {/* {openModal &&  <LoginOtpModal closeModal={setOpenModal} />} */}
        <BannerGirl/>
        <List/>
        <div className="btnstyle">
        <button className='btn btn-primary'>
            View All
        </button>
        </div>
        <Bannaer/>
        {/* <Footer/> */}
    </>
  )
}
