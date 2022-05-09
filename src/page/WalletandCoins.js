import React from 'react';
import '../style/WalletandCoins.css';
import wallet from '../assets/banners/wallet.png';
import coins from '../assets/banners/coins.png';

export default function WalletandCoins() {
  return (
    <>
        <div className="container bg-light d-flex justify-content-center">
            <div className="wallet d-flex">
                <img src={wallet} className='me-3' alt="" />
                <h5 className='fw-bold me-5'>Wallet</h5>
            </div>
            <div className="coins d-flex">
                <img src={coins} className='ms-5 me-3' alt="" />
                <h5 className='fw-bold'>Servicekart&nbsp;Coins</h5>
                <h5 className='fw-bold'>Servicekart&nbsp;Coins</h5>
                <h5 className='fw-bold'>Servicekart&nbsp;Coins</h5>
                <h5 className='fw-bold'>Servicekart&nbsp;Coins</h5>
                <h5 className='fw-bold'>Servicekart&nbsp;Coins</h5>
                <h5 className='fw-bold'>Servicekart&nbsp;Coins</h5>
                <h5 className='fw-bold'>Servicekart&nbsp;Coins</h5>

            </div>
        </div>
    </>
  )
}
