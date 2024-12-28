import React from "react";
import Hero from "./Hero";
import Blogs from "../blogs/Blogs";
import FooterCarousel from "../../components/FooterCarousel";
import Testimonials from "../shortPages/Testimonials";
import Statistics from "../shortPages/Statistics";
import PopularFaq from "../../components/PopularFaq";
import TicketStatus from "../../components/TicketStatus";

const Home = () => {
  return (
    <>
      {/* {alternate bg color is eeeded e0ebeb, e6e6e6} */}
      <div className="bg-white text-primary container mx-auto mt-32 sm:p-8 p-4">
        <Hero />
        <Blogs />
        <FooterCarousel />
        <Testimonials />
        <Statistics />
        <PopularFaq />
        <TicketStatus />
      </div>
    </>
  );
};

export default Home;
