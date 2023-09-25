import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import About from "./Component/About"
import Product from "./Component/Product"
import Service from "./Component/Service"
import Footer from "./Component/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Service/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App
