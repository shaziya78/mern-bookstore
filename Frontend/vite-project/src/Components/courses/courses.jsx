import React from 'react'
import Navbar from '../Navbar/Navbar'
import Course from '../course/course'
import Footer from '../Footer/Footer'

const courses = () => {

  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Course/>
      </div>
     
      <Footer/>
    </div>
  )
}

export default courses
