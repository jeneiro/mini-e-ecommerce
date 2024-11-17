import React from 'react'
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import slide1 from "../assets/slide1.jpg";
// import slide2 from "../assets/slide2.jpg";
// import slide3 from "../assets/slide3.jpg";
export const HomeCarousel = () => {
    const slides = [
        {
          text: "This was made for an Interview",
          image: slide1,
          animation: { x: [-100, 0], opacity: [0, 1] },
        },
        {
          text: "Wish me luck",
          image: slide1,
          animation: { y: [50, 0], opacity: [0, 1] },
        },
        {
          text: "Can't wait to join 👍",
          image: slide1,
          animation: { scale: [0.8, 1], opacity: [0, 1] },
        },
      ];
    
  return (
    <div className="w-full h-96">
    <Carousel slideInterval={5000}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <motion.div
            className="text-white text-2xl font-bold bg-black bg-opacity-50 p-4 rounded"
            initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
            animate={slide.animation}
            transition={{ duration: 1 }}
          >
            {slide.text}
          </motion.div>
        </div>
      ))}
    </Carousel>
  </div>
  )
}
