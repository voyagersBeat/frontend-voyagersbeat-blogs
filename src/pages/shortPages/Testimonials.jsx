import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Priyanshu Karki",
    role: "Haldwani, Uttarakhand",
    text: "Exceptional Experience! Our trip was perfectly organized, stress-free, and absolutely unforgettable. Highly recommend this travel company for their professionalism and personal touch!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JZYeK8EvFtBUJmJDtlYGZsyncV9vPxPm1w&s",
    rating: 4,
  },
  {
    id: 2,
    name: "Lakshman",
    role: "Bengaluru, Karnataka",
    text: "From planning to execution, everything was flawless. The team went above and beyond to ensure our comfort. Thank you for an amazing journey.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkRmERrkx7iJzQKVEAu7sKRpMs6Ae0CbeJw&s",
    rating: 4,
  },
  {
    id: 3,
    name: "Pawan Singh",
    role: "New Delhi",
    text: "Memorable Adventure! Every detail of our itinerary was thoughtfully planned. It felt like a dream come true.",
    img: "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915905.jpg",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Lookesh Singh",
    role: "Noida, UP",
    text: "Thanks to this travel company, we had the best family holiday! Every moment was magical, and the support was exceptional.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXYa69j4Qqk_gOscDCeFgGLhdW9EUjXtejQ&s",
    rating: 4,
  },
  {
    id: 4,
    name: "Suraj Tomer",
    role: "Delhi",
    text: "Highly Recommended! Efficient, reliable, and friendly service! They turned our vacation into an extraordinary experience. Can’t wait for our next adventure with them. From start to finish, the team ensured everything was perfect. Our journey was seamless, and the memories will last a lifetime.",
    img: "https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg",
    rating: 5,
  },

  {
    id: 6,
    name: "Aditya",
    role: "North Goa",
    text: "Incredible Journey! The attention to detail and personalized care made our trip so special. A big thank you for creating lifelong memories!",
    img: "https://st4.depositphotos.com/5653638/31385/i/450/depositphotos_313851112-stock-photo-indian-bearded-male-businessman-showing.jpg",
    rating: 4.5,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center mt-4">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-300" />
        ))}
    </div>
  );
};

const TestimonialCard = ({ name, role, text, img, rating }) => (
  <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-gray-400/20 dark:hover:shadow-none">
    <div className="flex gap-4">
      <img
        className="w-12 h-12 rounded-full"
        src={img}
        alt={`${name}'s avatar`}
        loading="lazy"
      />
      <div>
        <h6 className="text-lg font-medium text-gray-700 dark:text-white">
          {name}
        </h6>
        <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
      </div>
    </div>
    <p className="mt-8 text-gray-600 dark:text-gray-300">{text}</p>
    {renderStars(rating)}
  </div>
);

const Testimonials = () => {
  return (
    <div
      className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900 mb-16"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Join Thousands of Satisfied Travelers Who Trust Us!
          </h2>
          <p className="mt-4 mx-auto text-lg text-gray-500 dark:text-gray-300 text-center">
            Here's what our satisfied clients have to say about their travel
            experiences with us.
          </p>
        </div>

        {/* Slider for Small Devices */}
        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Staggered Grid for Larger Devices */}
        <div className="hidden sm:grid lg:grid-cols-3 gap-8 auto-rows-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${index % 3 === 1 ? "mt-12" : "mt-0"}`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
