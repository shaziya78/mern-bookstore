import React from 'react';
import Home from './Components/home/home';
import Courses from './Components/courses/courses';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Contact from './Components/Contact/Contact';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/Authprovider';

const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  const location=useLocation();
  const isSignupPage=location.pathname==='/signup'
  return (

    <>
 {!isSignupPage && <Navbar/>}   
 <div className= "dark:bg-slate-900 dark:text-white">
 <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser?<Courses />:<Navigate to={"/signup"}/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Toaster/>

      </div>
    
    </>
  );
};

export default App;
