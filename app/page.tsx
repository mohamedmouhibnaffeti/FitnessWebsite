"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Workout1 from "../public/assets/WorkoutImages/workout1.jpg";
import Workout2 from "../public/assets/WorkoutImages/workout2.jpg";
import Workout3 from "../public/assets/WorkoutImages/workout3.jpg";
import StatsCardsHome from "@/components/Grids/StatsCardsHome";

const images = [
  {
    src: Workout1,
    header: "Transform Your Body",
    subheader: "Push yourself harder every day to achieve greatness.",
    animation: {
      header: { opacity: 0, x: -100 },
      subheader: { opacity: 0, x: 100 },
      button: { opacity: 0, y: 100 },
    },
  },
  {
    src: Workout2,
    header: "Stay Motivated",
    subheader: "Your journey to fitness starts here.",
    animation: {
      header: { opacity: 0, y: -100 },
      subheader: { opacity: 0, y: 100 },
      button: { opacity: 0, x: 100 },
    },
  },
  {
    src: Workout3,
    header: "Unleash Your Potential",
    subheader: "Reach new heights with every workout.",
    animation: {
      header: { opacity: 0, scale: 0.8 },
      subheader: { opacity: 0, scale: 1.2 },
      button: { opacity: 0, scale: 1.2 },
    },
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <section className="overflow-hidden">
        <div className="container">
          <Swiper
            pagination={{ type: "fraction" }}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000 }}
            className="h-screen w-screen"
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Update current slide
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <AnimatedSlide
                  image={image.src}
                  header={image.header}
                  subheader={image.subheader}
                  animation={image.animation}
                  isActive={currentSlide === index} // Pass if this slide is active
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <StatsCardsHome />
    </div>
  );
}

function AnimatedSlide({
  image,
  header,
  subheader,
  animation,
  isActive,
}: {
  image: any;
  header: string;
  subheader: string;
  animation: { header: any; subheader: any, button: any };
  isActive: boolean;
}) {
  return (
    <div className="relative h-full">
      <Image
        src={image}
        alt="Workout"
        className="w-full h-full block object-center object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={animation.header}
          animate={isActive ? { opacity: 1, x: 0, y: 0, scale: 1 } : animation.header}
          exit={animation.header}
          transition={{ duration: 0.8 }}
        >
          {header}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl font-medium"
          initial={animation.subheader}
          animate={isActive ? { opacity: 1, x: 0, y: 0, scale: 1 } : animation.subheader}
          exit={animation.subheader}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subheader}
        </motion.p>
        <motion.button
          initial={animation.button}
          animate={isActive ? { opacity: 1, x: 0, y: 0, scale: 1 } : animation.button}
          exit={animation.button}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <a href="#" className="text-white bg-red-600 hover:bg-red-700 active:bg-red-600/80 transition-all duration-150 py-2 rounded-full px-6 mt-4 font-semibold flex justify-center items-center">
              Get Started
            </a>
        </motion.button>
      </div>
    </div>
  );
}
