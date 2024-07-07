import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Offers from '../Offers/Offers'
import Footer from '../Footer/Footer'
const home = () => {
  return (
    <div>
       <Navbar/>
    <Banner/>
    <Offers/>
    <Footer/>
    </div>
  )
}

export default home
