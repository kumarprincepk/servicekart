import React, { useState } from "react";
import Modal from 'react-modal';
import "../../style/StoreDetail.css";
import cross from "../../assets/banners/cross.png";
import pmilk from "../../assets/banners/pmilk.png";

export default function ProductDetailsModel({closeModal} ) {
  const [openModals, setOpenModals] = useState(true);

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  if (count <= 0) {
    decrementCount = () => setCount(1);
  }

  return (
    <>
    <div className="wholemodal">
    <Modal isOpen={openModals} onRequestClose={()=>setOpenModals(true)} className='modalsize'>
      <div className="mainmodal d-flex">
        <div className="submainmodel bg-white">
          <div className="container modalitem">
            <div className="carditem1 d-flex justify-content-between">
              <div className="modalimgtext d-flex align-items-center">
                <img src={pmilk} alt="packet milk" />
                <div className="fw-bold text">
                  <p>Full Cream Milk</p>
                </div>
              </div>
              <div className=" modalcarditem2 ">
                <div className="addsub">
                  <button className=" btn btn-primary ps-3 pe-3">
                    Subscribe
                  </button>
                  <div className="btn modaladdbtn">
                    <button onClick={decrementCount}>-</button>
                    <span className="countnum">{count}</span>
                    <button onClick={incrementCount}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="textandinput">
            <h5>Available Qty.</h5>
            <div className="modalradio d-flex ">
                <div className="form-check modalinputradio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    checked
                  />
                  <p>500 Ml &#8377; 56.00</p>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                  />
                  <p>1 Litre &#8377; 76.00</p>
                </div>
            </div>
          </div>
          <div className="modaladdtobtn">
        <button className="btn bg-primary text-white "> Add to Cart</button>
        </div>
        </div>
        <img src={cross} className='productcrossimg' alt="cancel" onClick={()=>{closeModal(false);}} />
      </div>
      </Modal>
      </div>
    </>
  );
}