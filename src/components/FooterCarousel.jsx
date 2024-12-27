import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  const slides = [
    {
      id: 1,
      title: "Jibhi",
      image:
        "https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Chopta",
      image:
        "https://media.istockphoto.com/id/1446043855/photo/black-woman-on-road-enjoying-window-view-of-desert-and-traveling-in-jeep-on-holiday-road-trip.jpg?s=612x612&w=0&k=20&c=L9D0ysLsdvfGozIt5MQBFI7QNkIQ8lLZrHc0vPhQ9q8=",
    },
    {
      id: 3,
      title: "Spiti",
      image:
        "https://img.freepik.com/free-photo/person-traveling-enjoying-their-vacation_23-2151383050.jpg",
    },
    {
      id: 4,
      title: "Manali",
      image:
        "https://media.istockphoto.com/id/1443287362/photo/woman-hiking-in-mountains-on-the-background-of-lysefjorden.jpg?s=612x612&w=0&k=20&c=KvjX-5qcy0Q3dM03sBl8CYkvtF3g1Zn77Kd8uHdOXlA=",
    },
    {
      id: 5,
      title: "Triund",
      image:
        "https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      title: "Kasol",
      image:
        "https://media.istockphoto.com/id/1446043855/photo/black-woman-on-road-enjoying-window-view-of-desert-and-traveling-in-jeep-on-holiday-road-trip.jpg?s=612x612&w=0&k=20&c=L9D0ysLsdvfGozIt5MQBFI7QNkIQ8lLZrHc0vPhQ9q8=",
    },
    {
      id: 7,
      title: "Kalpa",
      image:
        "https://img.freepik.com/free-photo/person-traveling-enjoying-their-vacation_23-2151383050.jpg",
    },
    {
      id: 8,
      title: "Auli",
      image:
        "https://static.toiimg.com/thumb/86651103/solo-travel.jpg?width=1200&height=900",
    },
    {
      id: 9,
      title: "Nainital",
      image:
        "https://media.istockphoto.com/id/1443287362/photo/woman-hiking-in-mountains-on-the-background-of-lysefjorden.jpg?s=612x612&w=0&k=20&c=KvjX-5qcy0Q3dM03sBl8CYkvtF3g1Zn77Kd8uHdOXlA=",
    },
  ];

  const sliderInterval = 2;

  return (
    <>
      <div className="mt-16 flex justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1e73be] to-[#ff5722] animate-fadeIn">
          Popular Destinations
        </h1>
      </div>

      <div className="carousel-container relative mx-auto md:my-16 my-12">
        {/* Curved Top Shape */}
        <div className="absolute top-[-50px] left-0 right-0 h-[100px] bg-white z-10 curved-shape-top "></div>

        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: sliderInterval * 1000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className="relative z-20 rounded-md shadow-md"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="flex justify-center items-center"
            >
              <div className="relative w-full md:h-[450px] h-[290px] overflow-hidden group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end pb-16 justify-center bg-gradient-to-t from-black/40 to-transparent text-white p-4">
                  <h3 className="text-sm font-sm bg-[#1e73be] px-3 py-1 rounded-full cursor-pointer">
                    <span className="flex items-center flex-row gap-1">
                      <FaMapMarkerAlt className="hidden sm:block" />
                      {slide.title}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Curved Bottom Shape */}
        <div className="absolute bottom-[-50px] left-0 right-0 h-[100px] bg-white z-10 curved-shape-bottom"></div>
      </div>
    </>
  );
}
