import React from 'react'
import Home from './components/Home'
import Contactus from './components/Contactus'
import Gallery from './components/Gallery'
import Shopping from './components/Shopping'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/shopping" element={<Shopping/>}/>

    </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App