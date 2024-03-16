import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, [])

  return isOnline;
}

function App(){
  const isOnline = useIsOnline();
  if (isOnline){
    return "Yaay! You're online"
  } else {
    return "You're offline :("
  }
}
export default App