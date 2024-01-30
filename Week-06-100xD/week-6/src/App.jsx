import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Todo from './components/Todo'
import { useEffect } from 'react'
import { useMemo } from 'react'

function App() {
  const [exchangeData1, setExchangeData1] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(()=>{
    setExchangeData1({
      returns: 100
    });
  },[])

  useEffect(()=>{
    setExchangeData2({
      returns: 100
    });
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({
        returns: 100
      });
    },5000);
  },[])

  const cryptoReturns = useMemo(()=>{
    console.log("Hi");
    return exchangeData1.returns + exchangeData2.returns;
  },[exchangeData1, exchangeData2])

  const incomeTax = (cryptoReturns + bankData.returns)*0.3;
  console.log(incomeTax);

  return (
    <div>
      Your income tax is {incomeTax}
    </div>
  )
}

export default App
