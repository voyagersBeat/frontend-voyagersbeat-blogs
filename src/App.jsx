import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { loadUser } from "./redux/features/auth/authSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    // Fetch current user on app load
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Show a loader while fetching user data
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
        <p>Failed to load user. Please try logging in again.</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <h1>User Not Logged In</h1>
        <p>Please log in to access the application.</p>
      </div>
    );
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
