
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Contactus from './components/Contactus.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Gallery from './components/Gallery.jsx'
import Shopping from './components/Shopping.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/shopping" element={<Shopping/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
