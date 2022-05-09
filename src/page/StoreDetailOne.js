import React from 'react'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';
import StoreDetail from '../components/StoreDetail';
import '../style/StoreDetail.css'

export default function StoreDetailOne() {
  return (
    <>
        <Header2/>
        <StoreDetail/> 
        
        <div className="categoriesrmargin">
        <Categories/>
        </div>
        <Footer/>
    </>
  )
}
