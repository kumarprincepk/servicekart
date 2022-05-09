import React from "react";
import "../style/Banner.css";
// swiper
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import banner1 from "../assets/banners/banner1.png";
import banner2 from "../assets/banners/banner2.png";
import banner3 from "../assets/banners/banner3.png";
import icon_hand from "../assets/banners/icon_hand.png";
import icon_calender from "../assets/banners/icon_calendar.png";
import blank from "../assets/banners/blank.png";
import side_bar from '../assets/banners/side_bar.png';
import sideimg from '../assets/banners/sideimg.jpeg';
import cal from '../assets/banners/cal.png';
import { FaStar } from 'react-icons/fa';

export default function Bannaer() {
  return (
    <>
      <div className="container mainClass">
        <div className="offer">
          <h1>Top Offers</h1>
          <p className="mb-5"></p>
        </div>
        <div className="banner">
          <div className="image">
            <img src={banner1} alt="" />
            <img src={banner2} alt="" />
            <img src={banner3} alt="" />
          </div>
        </div>
        <div className="offer">
          <h1>How It Works</h1>
          <p className="mb-5"></p>
        </div>




        <div className="container d-flex justify-content-between slots">
          <div className="card">
            <div className="hand">
              <img src={icon_hand} alt="" />
              <h6>Choose Service Type</h6>
              <p>Select a service that best suits your requirement.</p>
            </div>
          </div>
          <div className="card">
            <div className="hand">
              <img src={icon_calender} alt="" />
              <h6>Select Time Slot</h6>
              <p>We service from 9am-9pm. Select & Proceed.</p>
            </div>
          </div>
          <div className="card">
            <div className="hand">
              <img src={blank} alt="" />
              <h6>Get Best Service & Support</h6>
              <p>
                Our professional will get in touch with you one hour before the
                service.
              </p>
            </div>
          </div>
        </div>



        <div className="banner4">
          <div className="banner_image">
            <div className="container pt-5 words">
              <h1>Do you have any Store?</h1>
              <p>
                Sell your products, items and services on <br /> Servicekart
              </p>
              <div className="button">
                <button className="bnt">Register With Us</button>
              </div>
            </div>
          </div>
        </div>


        <div className="container testimonials">
          <div className="offer">
            <h1 className="mt-5">Testimonials</h1>
            <p className="mb-5"></p>
          </div>
          <div className="swiper">
            <Swiper
              modules={[Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="scard">
                 <div className="sidebar ms-5">
                   <img src={side_bar} alt="" />
                   <img className="sideimage" src={sideimg} alt="" />
                 </div>
                <div className="name">
                  <h3>Robert J</h3>
                  <p>7 Proof Agency</p>
                  <div className="star">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  </div>
                </div>
                <div className="text mt-5 text-start">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief.Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief.</p>
                  </div>
                  <div className="date mt-5 text-start">
                    <img src={cal} alt="" />
                    <span>03 Mar 2021, 10.35 AM</span>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="scard ">
                <div className="sidebar ms-5">
                   <img src={side_bar} alt="" />
                   <img className="sideimage" src={sideimg} alt="" />
                 </div>
                 <div className="name">
                  <h3>Robert J</h3>
                  <p>7 Proof Agency</p>
                  <div className="star">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  </div>
                </div>
                <div className="text mt-5 text-start">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief.Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief.</p>
                  </div>
                  <div className="date mt-5 text-start">
                    <img src={cal} alt="" />
                    <span>03 Mar 2021, 10.35 AM</span>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="scard">
                <div className="sidebar ms-5">
                   <img src={side_bar} alt="" />
                   <img className="sideimage" src={sideimg} alt="" />
                 </div>
                 <div className="name">
                  <h3>Robert J</h3>
                  <p>7 Proof Agency</p>
                  <div className="star">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  </div>
                </div>
                <div className="text mt-5 text-start">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief.Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief.</p>
                  </div>
                  <div className="date mt-5 text-start">
                    <img src={cal} alt="" />
                    <span>03 Mar 2021, 10.35 AM</span>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="scard">
                <div className="sidebar ms-5">
                   <img src={side_bar} alt="" />
                   <img className="sideimage" src={sideimg} alt="" />
                 </div>
                 <div className="name">
                  <h3>Robert J</h3>
                  <p>7 Proof Agency</p>
                  <div className="star">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  </div>
                </div>
                <div className="text mt-5 text-start">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief.Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief.</p>
                  </div>
                  <div className="date mt-5 text-start">
                    <img src={cal} alt="" />
                    <span>03 Mar 2021, 10.35 AM</span>
                  </div>

                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
