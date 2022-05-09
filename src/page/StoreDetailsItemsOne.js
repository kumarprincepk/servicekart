import React from 'react'
import '../style/StoreDetail.css';
import Header2 from '../components/Header2';
import StoreDetail from '../components//StoreDetail';
import Footer from '../components/Footer';
import ItemButton from '../components/ItemButton';
import StoreDetailparts from '../components/StoreDetailparts';
import Item from '../components/Item';

export default function StoreDetailsItemsOne() {


  return (
    <>
        <Header2/>
        <StoreDetail/>
        <ItemButton/>
        <Item/>
        <div className="storedetailstyle">
        <StoreDetailparts/>
        </div>
        <Footer/>
    </>
  )
}
