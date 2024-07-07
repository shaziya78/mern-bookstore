import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card'
import axios from "axios"

import { Link } from 'react-router-dom';
const Course = () => {
  const[book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
    try{
      const res=await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data)
    }catch(error){
      console.log("Error:",error)
    }
  }
  getBook()
  },[])

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24 dark:bg-slate-900 dark:text-white"'>
      <div className='mt-10 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>
          We're delighted to have you <span className='text-pink-500'>Here!:)</span>
        </h1>
        <p className='mt-3.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut asperiores, consequuntur quis repellat labore vitae mollitia deleniti recusandae molestiae! Id magnam, possimus maxime unde, qui dignissimos suscipit vero ea quam delectus vitae sunt quia voluptas ullam minima facilis esse sit sequi ratione voluptate temporibus inventore! Quo ullam, nihil earum veniam deleniti quas commodi perferendis sit eius asperiores error molestias officiis minus impedit eveniet soluta in deserunt voluptas eaque sapiente ducimus beatae expedita harum nam. Consequuntur architecto accusamus adipisci ab.</p>
  <Link to="/">        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-6'>Back</button>
 </Link>
      </div>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-4'>
{
  book.map((item)=>(
<Card key={item.id} item={item}/>
  ))
}
      </div>
    </div>
  );
};

export default Course;
