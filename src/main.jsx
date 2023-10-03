import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/header.jsx'
import Banner from './componentes/banner.jsx'
import './index.css'
import Discografia from './componentes/Discografia.jsx'
import Footer from './componentes/footer.jsx'
import Biografia from './componentes/Biografia.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Biografia/>
    <Discografia/>
    <Footer/>
  </React.StrictMode>,
)
