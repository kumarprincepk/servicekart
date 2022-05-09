import React, {useState} from 'react';
import '../../style/LoginModal.css';
import Modal from 'react-modal';
import servicekartlogo from '../../assets/banners/servicekartlogo.png';
import bannergirlsingle from '../../assets/banners/bannergirlsingle.png';
import cross from '../../assets/banners/cross.png';
import uploadimage from '../../assets/banners/uploadimage.png';




export default function RegisterModal({closeModal}) {


  const [openModals, setOpenModals] = useState(true);


  return (
    <><Modal isOpen={openModals} onRequestClose={()=>setOpenModals(false)} className='loginmodalsize'>
           <div className="topregistermodal d-flex">
        <div className="registermain">
            <div className="loginmodal">
                <div className="registerone">
                    <img className='imagemodalregister' src={servicekartlogo} alt="" />
                    <h5 className='text-white register_explore'>Explore Services on Servicekart</h5>
                    <img className='bannergirlsingle' src={bannergirlsingle} alt="" />
                </div>
                <div className="registertwo">
                   <div className="profileheading d-flex justify-content-between">
                     <h6 className='registerhead fw-bold'>Complete Your Profile</h6>
                     <h6 className='registerhead fw-bold'>Skip</h6>
                   </div>
                   <div className="registerupimg d-flex">
                     <img src={uploadimage} alt="" className='uploadimgregister' />
                     <p className='ms-4'>Upload Profile Photo</p>
                   </div>
                   <div className="registerdetails d-flex">
                     <div className="detailsname me-3">
                     {/* <div className="fname"> */}
                       <h6 className='fw-bold'>First Name</h6>
                       <input type="text" placeholder='Enter First Name' className='inputdetailregister' />
                       <h6 className='fw-bold'>Phone Number</h6>
                       <input type="text" placeholder='Enter First Name' className='inputdetailregister' />
                       <h6 className='fw-bold'>Email</h6>
                       <input type="text" placeholder='Enter First Name' className='inputdetailregister' />
                       {/* </div> */}
                     </div>
                     <div className="detailsdob">
                     <h6 className='fw-bold'>Last Name</h6>
                       <input type="text" placeholder='Enter First Name' className='inputdetailregister' />
                      
                      <h6 className='fw-bold'>Gender</h6>
                      <div className="registergender">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label me-5 fw-bold" for="inlineRadio1">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label fw-bold" for="inlineRadio2">Female</label>
                      </div>
                      </div>
                       <h6 className='fw-bold'>Date of Birth</h6>
                       <input type="text" placeholder='Enter First Name' className='inputdetailregister' />
                     </div>
                   </div>
                   <h6 className='fw-bold'>Referral Code</h6>
                       <input type="text" placeholder='Enter First Name' className='input_referral_register' />
                    <button className="d-block registercontinue btn-primary">Continue</button>
                </div>
            </div>
        </div>
        <img className='modalcross' src={cross} alt="" onClick={()=>{closeModal(false);}}/>
        </div>
        </Modal>
    </>
  )
}
