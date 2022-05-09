import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from './components/Faq';
import Footer from './components/Footer';
import MyAddress from './page/MyAddress';
import SavedCards from './page/SavedCards';
import Setting from './page/Setting';
import EditProfile from './page/EditProfile';
import LandingPage from './page/LandingPage';
import LoginModal from './page/modals/LoginModal';
import AddAddress from './page/AddAddress';
import AddCard from './page/AddCard';
import OrderSuccessfullModal from './page/modals/OrderSuccessfullModal';
import LoginOtpModal from './page/modals/LoginOtpModal';
import CancelOrderModal from './page/modals/CancelOrderModal';
import RateOrderModal from './page/modals/RateOrderModal';
import RegisterModal from './page/modals/RegisterModal';
import OrderDetailsCompo from './components/OrderDetailsCompo';
import OrderDetails from './page/OrderDetails';
import Header2 from './components/Header2';
import OrderDetails2 from './page/OrderDetails2';
import Summary from './page/Summary';
import MyOrder from './page/MyOrder';
import Payment from './page/Payment';
import WalletandCoins from './page/WalletandCoins';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route index element={<LandingPage />} />
        <Route path="/Profile" element={<EditProfile />}/>
        <Route path="/Loginmodal" element={<LoginModal />}/>
          <Route path="/My-Address" element={<MyAddress />} />
          <Route path="/My-Address/Add-Address" element={<AddAddress />} />
          <Route path="/SavedCards" element={<SavedCards />} />
          <Route path="/SavedCards/Add-Card" element={<AddCard />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/Settings" element={<Setting />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    {/* <OrderDetailsCompo/> */}
    {/* <OrderDetails/> */}
    {/* <OrderDetails2/> */}
    {/* <Summary/> */}
    {/* <MyOrder/> */}
    {/* <Payment/> */}
    {/* <AddAddress/> */}
    {/* <AddCard/> */}
    {/* <WalletandCoins/> */}

      {/* <OrderSuccessfullModal/> */}
      {/* <CancelOrderModal/> */}
      {/* <RateOrderModal/> */}
      {/* <RegisterModal/> */}

    
    {/* <LoginModal/> */}
    {/* <LoginOtpModal/> */}
    {/* <LandingPage/> */}
    {/* <StoreDetailOne/> */}
    {/* <StoreDetailsItemsOne/> */}
    </>
  );
}

export default App;
