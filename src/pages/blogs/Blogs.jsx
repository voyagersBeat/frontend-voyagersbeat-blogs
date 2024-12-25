// Blogs.js (Blogs Page Component)
import React, { useState } from "react";
import SearchTab from "./SearchTab";
import { useFetchBlogsQuery } from "../../redux/features/blog/blogApi";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  // Fetch all blogs (no limit passed for the Blogs page)
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

  const handleSearchToChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setQuery({ search, category });
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
        {blogs.map((blog) => (
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
    </div>
  );
};

export default Blogs;
