import React, {useState,useEffect} from 'react'
import { Data } from './Data'
import Product from './Product'
import calen from '../assets/banners/calen.png';
import timer from '../assets/banners/timer.png';
import object from '../assets/banners/object.png';


function List() {

  const [filter, setFilter] = useState(Data);

  useEffect(()=>{
    setFilter(Data.filter(detail => detail.name==="Milk"));
  },[])



  
  // const handelFilter = Data.filter(detail => detail.name==="Milk");
  //  console.log(handelFilter);

  //  const handelChange = Data.filter(detail => detail.name==="Vegetable");
  //  console.log(handelChange);
   
  // const handelFind = Data.filter(detail => detail.name==="Meat");
  //  console.log(handelFind);

  

  return (
    <>
      <div className="text-center my-5">

      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
  <button className="btn btn-outline-primary px-5 py-3"  onClick={()=>setFilter(Data.filter(detail => detail.name==="Milk"))} for="btnradio1"><img src={calen} alt="" /> Daily Service</button>


  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
  <button className="btn btn-outline-primary px-5 py-3"  onClick={()=>setFilter(Data.filter(detail => detail.name==="Vegetable"))} for="btnradio2"><img src={timer} alt="" /> Instant Services</button>


  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
  <button className="btn btn-outline-primary px-5 py-3" onClick={()=>setFilter(Data.filter(detail => detail.name==="Meat"))} for="btnradio3"><img src={object} alt="" /> Top Offers</button>
</div>
      </div>


      <div className="container mains d-flex flex-wrap">
     {filter.map((items)=>(

    <Product name={items.name}
    image = {items.image}/>

      ))}
      </div>

   </>
  )
}

export default List;
