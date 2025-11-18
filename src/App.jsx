import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import Nav from './assets/components/Nav'
import Hero from './assets/components/Hero'
import Contain from './assets/components/Contain'
import More from './assets/components/More'
import Service from './assets/components/Service'
import Footer from './assets/components/Footer'
// import { HashRouter } from 'react-router-dom';




function App() {
  
  return (
  <div>
    <Header/>
    <Nav/>
    <Hero/>
    <Contain/>
    <More/>
    <Service/>
    <Footer/>
    </div>
  )
}
export default App
