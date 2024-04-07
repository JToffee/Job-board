import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Homepage from './components/homepage/Homepage.jsx'

export default function App() {
  
  return (
    <div className='main'>
    <Header></Header>
    <Homepage></Homepage>
    </div>
  )
}

