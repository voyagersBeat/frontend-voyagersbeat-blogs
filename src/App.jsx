import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { loadUser } from "./redux/features/auth/authSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    // Fetch current user on app load
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Show a loader while fetching user data
  }

  return (
    <div className="bg-backPrimary min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
