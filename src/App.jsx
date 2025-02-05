import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsSite";
import WhatsSite from "./components/WhatsSite";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <WhatsSite />
      <div className="bg-backPrimary min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <footer className=" mt-5">
          <Footer />
        </footer>
        <WhatsAppButton />
        <Chatbot />
      </div>
    </>
  );
}

export default App;
