import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Card from '../Cards/Card';

const Offers = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        if (res.data) {
          const data = res.data.filter((data) => data.category === "Free");
          setBook(data);
        } else {
          console.log("Error: No data found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <h1 className='font-bold text-xl pb-2 mt-5'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quia, doloribus corrupti facere voluptas consectetur.</p>
      </div>
      <div className="slider-container items-center">
        <Slider {...settings}>
          {book.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Offers;
