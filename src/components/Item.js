import React, {useState} from "react";
import "../style/StoreDetail.css";
import pmilk from "../assets/banners/pmilk.png";
import ProductDetailsModel from "./ProductDetailsModel";

export default function Item() {

  const [openModal, setOpenModal] = useState(false);





  return (
    <>
    <div className="container d-flex flex-wrap">
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary" onClick={()=>{setOpenModal(true);}}>Add</button>
            </div>
          </div>
        </div>
      </div>

{/* ######### Add modal ########### */}

{openModal && <ProductDetailsModel closeModal={setOpenModal} />}


      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary" onClick={()=>{setOpenModal(true);}}>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary" onClick={()=>{setOpenModal(true);}}>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary" onClick={()=>{setOpenModal(true);}}>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary" onClick={()=>{setOpenModal(true);}}>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary" onClick={()=>{setOpenModal(true);}}>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainitem">
        <div className="carditem1">
          <div className="imgtext">
            <img src={pmilk} alt="packet milk" />
            <div className="textitem">
            <h5>Full cream</h5>
            <p>500 ml</p>
            </div>
          </div>
          <div className="carditem2">
            <div className="pnumber">
              <h5>&#8377; 56.00</h5>
            </div>
            <div className="addsub">
              <button className=" btn btn-primary ps-3 pe-3">Subscribe</button>
              <button className="btn addbtn btn-outline-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
