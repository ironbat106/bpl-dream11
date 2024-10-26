import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import DisplayData from './DisplayData/DisplayData';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

const App = () => {
  const [coins, setCoins] = useState(0);

  const increaseCoins = () => {
    setCoins(coins + 20000);
  }
  return (
    <div>
      <Navbar coins={coins}/>
      <Banner increaseCoins={increaseCoins}/>
      <DisplayData coins={coins} setCoins={setCoins}></DisplayData>
      <Footer></Footer>
    </div>
  );
};

export default App