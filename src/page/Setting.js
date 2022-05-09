import React, { useState } from "react";
import "../style/SubHeader.css";
import aboutuswhite from "../assets/banners/aboutuswhite.png";
import termblack from "../assets/banners/termblack.png";
import callblack from "../assets/banners/callblack.png";
import Header2 from "../components/Header2";
import SubHeader from "../components/SubHeader";
import whitemyaddress from "../assets/banners/whitemyaddress.png";
import white_email from "../assets/banners/white_email.png";
import whitecall from "../assets/banners/whitecall.png";
import white_earth from "../assets/banners/white_earth.png";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

export default function Settings() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [ind, setInd] = useState(0);
  return (
    <>
      <Header2 />
      <SubHeader />
      <div className="container setting">
        <div className="container d-flex topmainsetting">
          <div className="leftsettingbtn">
            <h5 className="container">
              Settings
              <div className="myaddunderline"></div>
            </h5>
            <div className="buttsetting d-flex flex-column">
              <div className={splitLocation[1] === "" ? "active" : ""}>
                {" "}
                <button
                  className="buttonsettingpro"
                  onClick={() => {
                    setInd(0);
                  }}
                >
                  <img src={aboutuswhite} alt="" />
                  About Us
                </button>
              </div>
              <div className={splitLocation[1] === "term" ? "active" : ""}>
                <button
                  className="buttonsettingpro"
                  onClick={() => {
                    setInd(1);
                  }}
                >
                  <img src={termblack} alt="" />
                  Terms of Policy
                </button>
              </div>
              <div className={splitLocation[1] === "cntact" ? "active" : ""}>
                <button
                  className="buttonsettingpro"
                  onClick={() => {
                    setInd(2);
                  }}
                >
                  <img src={callblack} alt="" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="verline"> </div>
          <div className="rightsettingbtn">
            {ind === 0 && (
              <div className="lorem1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem eligendi totam reiciendis dicta corporis esse iste
                atque accusamus, voluptas perspiciatis itaque! Quo unde quia
                veritatis sit voluptates, tenetur corporis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quae in officiis velit,
                nihil quos itaque placeat dignissimos at vel sed voluptas
                maiores beatae aut inventore sit odit neque, fuga rerum? Vero,
                veritatis, debitis alias optio, tempore quis perspiciatis
                deleniti quibusdam explicabo nobis ab corrupti! Quibusdam! Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                suscipit voluptates laboriosam iusto repellat ex numquam,
                repudiandae, quibusdam totam, debitis non ratione quia. Autem
                quo dicta, quidem at cumque quasi?
              </div>
            )}
            {ind === 1 && (
              <div className="lorem1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem eligendi totam reiciendis dicta corporis esse iste
                atque accusamus, voluptas quasi? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Vero non magni quis unde autem.
                Consectetur officia sunt tenetur itaque nesciunt illum
                necessitatibus totam omnis!
              </div>
            )}
            {ind === 2 && (
              <div className="contectsetting">
                <h2 className="fw-bold">Send Enqury</h2>
                <p>We will Revert Your Asap</p>
                <div className="fourinput ">
                  <div className="fourinputone d-flex">
                    <input
                      type="text"
                      className="settinginputbox"
                      placeholder="Enter Your Full Name"
                    />
                    <input
                      type="text"
                      className="settinginputbox"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="fourinputtwo d-flex">
                    <input
                      type="text"
                      className="settinginputbox"
                      placeholder="Enter Your Phone No./Mobile No."
                    />
                    <input
                      type="text"
                      className="settinginputbox"
                      placeholder="Subject"
                    />
                  </div>
                  <textarea
                    type="text"
                    className="settingmessage"
                    placeholder="Write message here..."
                  ></textarea>
                  <button className="settingsend">Send</button>
                  <div className="setofficeaddress">
                    <h5 className="fw-bold">Quick Contact</h5>
                    <p className="officeparaset">
                      {" "}
                      If you have any questions simply use the following contact
                      details.
                    </p>
                    <div className="innersetaddress d-flex">
                      <div className="offilocation me-4 d-flex">
                        <img
                          src={whitemyaddress}
                          alt=""
                          className="whitemyaddress"
                        />
                        <p className="officeparaset">
                          Head Office <br /> T-05,3rd Floor, Aditya City Center,
                          Vaibhav <br /> Khand 1,Indirapuram,Ghaziabad (U.P.)
                          201014 <br /> <br /> Gurgaon Office <br /> Golf View
                          Corporate Towers, Golf Course Road, <br /> Sector
                          42,Gurugram Haryana 122002
                        </p>
                      </div>
                      <div className="offsocal">
                        <div className="offemail d-flex">
                          <img
                            src={white_email}
                            className="whitemyaddress"
                            alt=""
                          />
                          <p className="officeparaset">
                            care@servicekart.co.in
                          </p>
                        </div>
                        <div className="offemail d-flex">
                          <img
                            src={whitecall}
                            className="whitemyaddress"
                            alt=""
                          />
                          <p className="officeparaset">
                            0120 - 496 4063 <br /> +91 730-317-8585
                          </p>
                        </div>
                        <div className="offemail d-flex">
                          <img
                            src={white_earth}
                            className="whitemyaddress"
                            alt=""
                          />
                          <p className="officeparaset">www.servicekart.co.in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
