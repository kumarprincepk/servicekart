import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import calen from "../assets/banners/calen.png";
import timer from "../assets/banners/timer.png";

export default function ItemButton() {
  return (
    <>
      <div className="container itemfull">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
           <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          />
          {/* btn btn-primary  */}
          <button className="btn-primary btn px-5 py-3" for="btnradio1">
            <img src={calen} alt="" /> Daily Service
          </button>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          />
          <button className="btn btn-outline-primary px-5 py-3" for="btnradio2">
            <img src={timer} alt="" /> Instant Services
          </button>
        </div>
        <div>
        <AiOutlineSearch className="iconsearch"/>
        <input type="text" name="search" placeholder="Search items, products..." className="insearch" />
        </div>
      </div>
    </>
  );
}
