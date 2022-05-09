import React, { useState } from "react";
import "../../style/OrderSuccessfullModal.css";
import Modal from 'react-modal';
import cross from "../../assets/banners/cross.png";
import pmilk from "../../assets/banners/pmilk.png";
import britanniabread from "../../assets/banners/britanniabread.jpeg";

export default function CancelOrderModal({closeModal}) {

  const [openModals, setOpenModals] = useState(true);


  return (
    <>
    <Modal isOpen={openModals} onRequestClose={()=>setOpenModals(false)} className='ordersuccessmodal'>
      <div className="cancelordermain d-flex">
        <div className="ordercancelbox">
          <div className="innercancelbox">
            <div className="orderid d-flex justify-content-between">
              <p className="orderidcancelno">Order ID : #4687</p>
              <p className="orderidcancelno">17 Feb 2021</p>
            </div>
            <hr />
            <div class="form-check">
              <div className="d-flex align-items-center ms-1">
                <input
                  class="form-check-input radiocancel"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <img src={pmilk} className="canclepmilk" alt="" />
                <div className="itemrates d-flex align-items-center">
                  <div className="milktext">
                    <p className="fw-bold">Full Cream Milk</p>
                    <p className="quantitytext">500 ml</p>
                  </div>
                  <p className="priceofitems fw-bold text-primary">&#8377; 56.00</p>
                </div>
              </div>
            </div>

            <div class="form-check">
              <div className="d-flex align-items-center ms-1">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <img src={britanniabread} className="canclepmilk" alt="" />
                <div className="itemrates d-flex align-items-center">
                  <div className="milktext">
                    <p className="fw-bold">Full Cream Milk</p>
                    <p className="quantitytext">500 ml</p>
                  </div>
                  <p className="priceofitems fw-bold text-primary">&#8377; 56.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Drop down */}

            <div className="reasondropdown">
                <select class="form-select borderofdropdown" aria-label="form-select-bg-primary select example">
                    <option  selected>Select Reason</option>
                    <option className="bgcolor" value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <button className="cancelsubmit">Submit</button>

        </div>
        <img className="modalcross" src={cross} alt="" onClick={()=>{closeModal(false);}} />
      </div>
      </Modal>
    </>
  );
}
