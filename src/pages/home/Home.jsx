import React from "react";
import Hero from "./Hero";
import Blogs from "../blogs/Blogs";

const Home = () => {
  return (
    <>
      {/* {alternate bg color is eeeded e0ebeb, e6e6e6} */}
      <div className="bg-white text-primary container mx-auto mt-32 sm:p-8 p-4">
        <Hero />
        <Blogs />
      </div>
    </>
  );
};

export default Home;
