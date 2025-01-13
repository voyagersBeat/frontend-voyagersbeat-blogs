import React, { useState } from "react";
import { useFetchBlogsQuery } from "../../redux/features/blog/blogApi";
import { Link } from "react-router-dom";
import SearchTab from "../blogs/SearchTab";

const Destination = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const blogsPerPage = 12;

  // Fetch all blogs (no pagination from backend)
  const {
    data: blogs = [],
    error,
    isLoading,
  } = useFetchBlogsQuery({ search, category });

  // Slice the blogs into chunks of blogsPerPage
  const groupedBlogs = [];
  for (let i = 0; i < blogs.length; i += blogsPerPage) {
    groupedBlogs.push(blogs.slice(i, i + blogsPerPage));
  }

  // Current blogs to display based on the page
  const currentBlogs = groupedBlogs[page - 1] || [];

  // Function to handle search input change
  const handleSearchToChange = (e) => {
    setSearch(e.target.value);
  };

  // Function to handle search button click
  const handleSearch = () => {
    setPage(1); 
  };

  return (
    <div className="bg-white text-primary container mx-auto mt-28 p-8">
      {/* Search Component */}
      <SearchTab
        search={search}
        handleSearchToChange={handleSearchToChange}
        handleSearch={handleSearch}
      />

      {/* Loading/Error Handling */}
      {isLoading && (
        <div className="text-center py-8 text-gray-500">Loading...</div>
      )}
      {error && (
        <div className="text-center py-8 text-red-500">{error.toString()}</div>
      )}

      {/* Display Blogs */}
      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {currentBlogs.map((blog) => (
          <Link
            to={`/blogs/${blog._id}`}
            key={blog._id}
            className="group bg-white shadow-md rounded-sm overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={blog?.coverImg}
                alt={blog.title}
                className="h-60 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white px-4 py-2">
                <h2 className="text-lg font-semibold truncate">{blog.title}</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                {blog.description
                  ? `${blog.description.split(" ").slice(0, 20).join(" ")}...`
                  : "No description available."}
              </p>
              <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                <span>Category: {blog.category || "General"}</span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {groupedBlogs.length > 1 && (
        <div className="mt-8 flex justify-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`py-2 px-4 rounded shadow-md font-medium transition-all duration-300 ${
              page === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#1e73b3] text-white hover:bg-[#155b94]"
            }`}
          >
            Previous
          </button>

          {/* Page Info */}
          <span className="py-2 px-4 text-gray-700 font-semibold">
            Page {page} of {groupedBlogs.length}
          </span>

          {/* Next Button */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === groupedBlogs.length}
            className={`py-2 px-4 rounded shadow-md font-medium transition-all duration-300 ${
              page === groupedBlogs.length
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#1e73b3] text-white hover:bg-[#155b94]"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Destination;
