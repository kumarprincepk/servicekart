import React from 'react';
import '../style/SubHeader.css';
import uploadimage from '../assets/banners/uploadimage.png';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';


export default function Profile() {
  return (
    <> <Header2/>
    <SubHeader/>
       <div className="container editprofile">
           <div className="profilemain d-flex justify-content-around my-5">
               <div className="uploadimg">
                   <img src={uploadimage} alt="" />
                   <p>Upload New Photo</p>
               </div>
               <div className="profileinputs d-flex">
                   <div className="editinputone me-5">
                     <p>First Name</p>
                     <input type="text" placeholder='Enter First Name' className='editprofileinput' />
                     
                     <p>Last Name</p>
                     <input type="text" placeholder='Enter Last Name' className='editprofileinput'/>

                     <p>Phone Number</p>
                     <input type="text" placeholder='Enter your mobile number' className='editprofileinput'/>
                   </div>
                   <div className="editinputtwo">
                   <p>Date of Birth</p>
                     <input type="text" placeholder='Enter Date of Birth' className='editprofileinput'/>

                     <p>Referral Code</p>
                     <input type="text" placeholder='Referral Code (Optional)' className='editprofileinput'/>

                     <p>Email</p>
                     <input type="text" placeholder='Enter your email' className='editprofileinput'/>
                   </div>
               </div>
               <div className="savebtn">
                 <button className='saveprofile btn-outline-primary'> Save Profile</button>
               </div>
           </div>
       </div>
       {/* <Footer/> */}
    </>
  )
}
