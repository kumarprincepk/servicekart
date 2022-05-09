import React from 'react';
import Footer from '../components/Footer'
import Header2 from '../components/Header2';
import SubHeader from '../components/SubHeader';

export default function AddCard() {
  return (
    <>
    <Header2/>
    <SubHeader/>
    <div className="mainaddcard mb-5">
         <h5 className="container">My Address / Add Card
            <div className="myaddunderline"></div>
            </h5>
            <div className="container">

            <p>Card Type</p>
            <div className="chooseaddress align-middle mb-3">
            <div class="form-check form-check-inline">
  <input class="form-check-input inaddress" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">Debit Card</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input inaddress" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">Credit Card</label>
</div>
</div>

            <div className="addcardinputs d-flex flex-column">
            <input type="text" placeholder='Addressr' className='inputaddressadd'  />
            <input type="text" placeholder='Flat No./ House No./Area' className='inputaddressadd'  />
            <input type="text" placeholder='Landmark' className='inputaddressadd'  />
            <input type="text" placeholder='Person Name' className='inputaddressadd'  />
            <button className='saveaddressbtn mb-5'>Save Card</button>

            </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}
