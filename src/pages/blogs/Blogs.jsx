import React, { useState } from "react";
import SearchTab from "./SearchTab";
import { useFetchBlogsQuery } from "../../redux/features/blog/blogApi";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 9; 

  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  // Get the blogs for the current page
  const currentBlogs = blogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleSearchToChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setQuery({ search, category });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-16 container mx-auto px-4 lg:px-8">
      {/* Search Tab */}
      <SearchTab
        search={search}
        handleSearchToChange={handleSearchToChange}
        handleSearch={handleSearch}
      />

      {/* Loading and Error States */}
      {isLoading && (
        <div className="text-center py-8 text-gray-500">Loading...</div>
      )}
      {error && (
        <div className="text-center py-8 text-red-500">{error.toString()}</div>
      )}

      {/* Blogs Grid */}
      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
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
                <span className="bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-xs">
                  <span className="text-gray-800">Category: </span>
                  {blog.category || "General"}
                </span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Blogs Found */}
      {!isLoading && blogs.length === 0 && (
        <div className="text-center py-8 text-gray-500">No blogs found.</div>
      )}

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-sm ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
