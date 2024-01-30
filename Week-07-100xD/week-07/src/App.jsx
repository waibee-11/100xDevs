import { useState, lazy, Suspense, useContext } from 'react'
import { countAtom, evenSelector } from './store/atoms/count'
import { useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState } from 'recoil'
import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'zod'
import { CountContext } from './context'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRenderer />
    </div>
  )
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return (
    <div>
      {isEven ? "it is even" : null}
    </div>
  )
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={()=>{
        setCount(count => count + 1)
      }}>+</button>
      <button onClick={()=>{
        setCount(count => count - 1)
      }}>-</button>
    </div>
  )
}

export default App;