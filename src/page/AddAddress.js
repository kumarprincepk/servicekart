import React from 'react';
import "../style/SubHeader.css";
import map from '../assets/banners/map.png';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';
import SubHeader from '../components/SubHeader';

export default function AddAddress() {
  return (
    <>
    <Header2/>
    <SubHeader/>
        <h5 className="container">My Address / Add Address
            <div className="myaddunderline"></div>
            </h5>
        <div className="container addaddressmain d-flex">
            <img src={map} className='addressimg' alt="" />

            <div className="addressinputs d-flex flex-column">
            <input type="text" placeholder='Addressr' className='inputaddressadd'  />
            <input type="text" placeholder='Flat No./ House No./Area' className='inputaddressadd'  />
            <input type="text" placeholder='Landmark' className='inputaddressadd'  />
            <input type="text" placeholder='Person Name' className='inputaddressadd'  />


            <p>Address Type</p>
            <div className="chooseaddress align-middle">
            <div class="form-check form-check-inline">
  <input class="form-check-input inaddress" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">Home</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input inaddress" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">Work</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input inaddress" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">Others</label>
</div>
            </div>
            <button className='saveaddressbtn'>Save Address</button>

            </div>
        </div>
        <Footer/>
    </>
  )
}
