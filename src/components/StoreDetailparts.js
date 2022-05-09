import React from 'react';
import '../style/StoreDetail.css';
import owl from '../assets/banners/owl.png';
import sgirl from '../assets/banners/sgirl.png';
import pmilk from '../assets/banners/pmilk.png';
import cleancar from '../assets/banners/cleancar.png';

export default function StoreDetailparts() {
  return (
    <>
       <div className="container">
           <div className="headtext">
               <h3>Recommended Stores for you</h3>
           </div>
           <div className="cardandimage d-flex flex-wrap">
           <div className="d-flex flex-column">
               <div className="carddetails">
                    <div className="cardpartimage d-flex">
                        <img src={owl} alt="owl image" />
                        <div className="cardparttext ms-5">
                            <h6 className='fw-bold'>24/7 Store</h6>
                            <p>Dairy Milk Services | 30 Min | 3 Km</p>
                        </div>
                    </div>
               </div>
               {/* other parts     d-flex flex-column     */}

               <div className="carddetails">
                    <div className="cardpartimage d-flex">
                        <img src={pmilk} className='owlimage' alt="owl image" />
                        <div className="cardparttext ms-5">
                            <h6 className='fw-bold'>Mother Dairy</h6>
                            <p>Milk Services | 30 Min | 5 Km</p>
                        </div>
                    </div>
               </div>
               <div className="carddetails">
                    <div className="cardpartimage d-flex">
                        <img src={pmilk} className='owlimage' alt="owl image" />
                        <div className="cardparttext ms-5">
                            <h6 className='fw-bold'>Car Cleaning</h6>
                            <p>Carwash Services | 30 Min | 15 Km</p>
                        </div>
                    </div>
               </div>
               <div className="carddetails">
                    <div className="cardpartimage d-flex">
                        <img src={owl} className='owlimage' alt="owl image" />
                        <div className="cardparttext ms-5">
                            <h6 className='fw-bold'>24/7 Store</h6>
                            <p>Dairy Milk Services | 30 Min | 3 Km</p>
                        </div>
                    </div>
               </div>
               <div className="carddetails">
                    <div className="cardpartimage d-flex">
                        <img src={pmilk} className='owlimage' alt="owl image" />
                        <div className="cardparttext ms-5">
                            <h6 className='fw-bold'>Mother Dairy</h6>
                            <p>Milk Services | 30 Min | 5 Km</p>
                        </div>
                    </div>
               </div>
               <div className="carddetails">
                    <div className="cardpartimage d-flex">
                        <img src={pmilk} className='owlimage' alt="owl image" />
                        <div className="cardparttext ms-5">
                            <h6 className='fw-bold'>Car Cleaning</h6>
                            <p>Carwash Services | 30 Min | 15 Km</p>
                        </div>
                    </div>
               </div>
               

</div>

                 
               <div className="cardimage">
                   <img src={sgirl} alt="shopping girl" />
               </div>
           </div>
       </div> 
    </>
  )
}
