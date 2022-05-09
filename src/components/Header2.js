import React from 'react'
import '../style/StoreDetail.css';
import hdropdown from '../assets/banners/hdropdown.png';
import hstar from '../assets/banners/hstar.png';
import { useLocation } from "react-router-dom";

export default function Header2(props) {


    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    var headerName="";

    for (let ind = 1; ind < splitLocation.length; ind++) {
        if (ind == splitLocation.length - 1) {
          headerName += splitLocation[ind];
        } else {
          headerName += splitLocation[ind] + " / ";
        }
      }



  return (
    <>
        <div className="mainheader bg-primary">
            <div className="container d-flex align-items-center justify-content-between submainheader">
                <div className="homeandservice">
                <h6 className='text-white'>Home / {headerName} </h6>
                </div>
                <div className="innerdiv d-flex align-items-center">
                    <div className="addresdiv d-flex align-items-center">
                        <h6 className='text-white me-3'>Noida Sector 62 A</h6>
                        <img src={hdropdown} alt="" />
                    </div>
                    <div className="stardiv">
                        <img className='ms-4' src={hstar} alt="star" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
