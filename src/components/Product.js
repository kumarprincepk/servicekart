import React from 'react'
import '../style/Product.css';


export default function Product(items) {
const {name, image} = items;
  return (
    <>
    <div className="mains">
    <div className="container text-center my-2 me-3 milk">
      <img src={image} alt="image" />
      <h1>{name}</h1>
      </div>
      </div>
    </>
  )
}
