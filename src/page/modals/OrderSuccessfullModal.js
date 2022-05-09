import React, { useState }  from 'react';
import '../../style/OrderSuccessfullModal.css';
import Modal from 'react-modal';
import ordercorrect from '../../assets/banners/ordercorrect.png';
import cross from '../../assets/banners/cross.png';




export default function OrderSuccessfullModal({closeModal}) {


  const [openModals, setOpenModals] = useState(true);



  return (
    <>
    <Modal isOpen={openModals} onRequestClose={()=>setOpenModals(false)} className='ordersuccessmodal'>
        <div className="odermodalmain d-flex">
            <div className="successorder text-center">
                <img src={ordercorrect} alt="" />
                <h2 className='fw-bold oderplace'>Order Placed!</h2>
                <p>Order ID : #9601</p>
                <p>Your order has been successfully placed</p>
                <button className='vieworderbtn'>View Order</button>
            </div>
             <img className='modalcross' src={cross} alt="" onClick={()=>{closeModal(false);}} />
        </div>
        </Modal>
    </>
  )
}
