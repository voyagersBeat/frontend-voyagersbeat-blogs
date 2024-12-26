import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image1 from "/src/assets/hero-images/blog-image-4.jpeg";
import Image2 from "/src/assets/hero-images/blog-image-5.webp";
import Image3 from "/src/assets/hero-images/blog-image-1.webp";
import Image4 from "/src/assets/hero-images/blog-image-2.webp";
import Image5 from "/src/assets/hero-images/blog-image-3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8 px-6 py-10 bg-gradient-to-b from-blue-100 to-white">
      {/* Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-800 leading-snug animate-fadeIn">
          Explore the World with{" "}
          <span className="text-blue-600">Voyagers Beat</span>
        </h1>
        <p className="py-4 text-gray-600 text-lg animate-slideUp">
          Unleash your wanderlust with Voyagers Beat! Discover breathtaking
          destinations, immerse in vibrant cultures, and embark on adventures
          crafted just for you. Let your journey be a masterpiece of
          unforgettable moments.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 animate-bounce">
          <Link to="https://voyagersbeat.com/">Start Your Adventure</Link>
        </button>
      </div>

      {/* Image Carousel */}
      <div className="md:w-1/2 w-full mx-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper rounded-sm shadow-lg overflow-hidden animate-zoomIn"
        >
          <SwiperSlide>
            <img
              src={Image1}
              alt="Beautiful mountain scenery"
              className="w-full lg:h-[420px] sm:h-96 h-80 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Image2}
              alt="Serene beach"
              className="w-full lg:h-[420px] sm:h-96 h-80 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Image3}
              alt="Enchanting forest"
              className="w-full lg:h-[420px] sm:h-96 h-80 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Image4}
              alt="Picturesque cityscape"
              className="w-full lg:h-[420px] sm:h-96 h-80 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Image5}
              alt="Majestic desert"
              className="w-full lg:h-[420px] sm:h-96 h-80 object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
