import React, { useState } from "react";
import cross from "../../assets/banners/cross.png";
import pmilk from "../../assets/banners/pmilk.png";
import ReactStars from "react-rating-stars-component";
import Modal from 'react-modal';


export default function RateOrderModal({closeModal}) {

  const [openModals, setOpenModals] = useState(true);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };



  return (
    <>
    <Modal isOpen={openModals} onRequestClose={()=>setOpenModals(false)} className='ordersuccessmodal'>

      <div className="rateordermain d-flex">
        <div className="rateorderbox">
          <div className="rateorderdetailbox">
            <div className="orderid d-flex justify-content-between">
              <p className="orderidcancelno">Order ID : #4687</p>
              <p className="orderidcancelno">17 Feb 2021</p>
            </div>
            <hr />
            <div className="detailrate d-flex justify-content-between">
                <div className="milkdetailrate">
                  <h6><span><img className="ratemilkimg" src={pmilk} alt="  " /></span><span className="fw-bold">Mother Dairy</span></h6>
                  <p><small>Total Items : 02</small></p>
                  <p><small>Price :</small><span className="fw-bold text-primary"> &#8377;56.00</span></p>

                </div>
                <div>
                  <button className="viewbtnrate btn-outline-primary">View Order</button>
                </div>
            </div>
          </div>
          <div className="orderdetailrating text-center">
              <p className="fw-bold">Your Rating</p>
              <div className="star_rating_component">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#1877F2"
                classNames='ratingcomponentbg'
              />
              </div>
              <textarea
                    type="text"
                    className="rateusmsg"
                    placeholder="Write message here..."
                  ></textarea>
          </div>
          <div className="text-center">
          <button className="submitrate">
            Submit
          </button>
          </div>
        </div>
        <img className="modalcross" src={cross} alt="" onClick={()=>{closeModal(false);}}/>
      </div>
      </Modal>

    </>
  );
}
