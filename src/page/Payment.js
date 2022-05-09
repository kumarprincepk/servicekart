import React from "react";
import "../style/OrderDetails.css";
import hdfc from '../assets/banners/hdfc.png';
import sbi from '../assets/banners/sbi.png';
import axis from '../assets/banners/axis.png';
import kotak from '../assets/banners/kotak.png';
import Footer from "../components/Footer";


export default function Payment() {
  return (
    <>
      <div className="paymentmain container">
        <p className="fw-bold">Credit & Debit Cards</p>
        <div className="pay_cards">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              4213 XXXX XXXX 1908{" "}
              <span className="fw-bold text-primary ms-5">VISA</span>
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              4213 XXXX XXXX 1908{" "}
              <span className="fw-bold text-primary ms-5">VISA</span>
            </label>
          </div>
          <p className="text-primary mt-3">Add New Card</p>
        </div>
        <hr />
        <p className="fw-bold">Net Banking</p>
        <div className="pay_netbank d-flex align-items-center">
          <div className="netbankleft me-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              
              <img src={hdfc} className='netbankimg' alt="" />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <img src={sbi} className='netbankimg' alt="" />

            </div>
          </div>
          <div className="netbankright ms-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <img src={axis} className='netbankimg' alt="" />
            
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <img src={kotak} className='netbankimg' alt="" />

            </div>
          </div>
        </div>
        <p className="text-primary mt-3">More Banks</p>
        <hr />

        <p>UPI</p>
        <div className="pay_upi d-flex">
          <div className="upi_left">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                <span className="upi_pay">Google Pay</span>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
              <span className="upi_pay">Phone Pe</span>
              </label>
            </div>
          </div>
          <div className="upi_right">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
              <span className="upi_pay">BHIM UPI</span>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
              <span className="upi_pay">Paytm</span>
              </label>
            </div>
          </div>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            <span className="ms-3">Cash</span>
          </label>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <button className="payment_pay">Pay Now</button>
        <button className="orderdetailbtn_cancle btn-outline-primary">
          Cancel
        </button>
      </div>
      <Footer/>
    </>
  );
}
