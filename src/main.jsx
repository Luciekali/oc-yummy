import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuSection from './pages/Click&collect/MenuSection/MenuSection'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu.jsx/Menu'
import Contact from './pages/Contact/Contact'
import ClickAndCollect from './pages/Click&collect/ClickAndCollect'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
            <Header/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/commander" element={<ClickAndCollect />} />
              </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
