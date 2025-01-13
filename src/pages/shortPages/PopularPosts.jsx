import React, { useState } from "react";
import { useFetchBlogsQuery } from "../../redux/features/blog/blogApi";
import { Link } from "react-router-dom";

const PopularPosts = () => {
  const POSTS_PER_PAGE = 6;

  // Local state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const query = { sortBy: "views" };
  const {
    data: trendingBlogs = [],
    error,
    isLoading,
  } = useFetchBlogsQuery(query);

  const generateRandomViews = () =>
    Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

  // Calculate pagination data
  const totalPosts = trendingBlogs.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = trendingBlogs.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-16 container mx-auto px-4 lg:px-8">
      <h2 className="text-2xl font-bold text-center mb-8">Popular Posts</h2>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-8 text-gray-500">Loading...</div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-8 text-red-500">
          An error occurred: {error.toString()}
        </div>
      )}

      {/* Popular Posts Grid */}
      <div className="space-y-6 md:p-10 p-0">
        {currentPosts.map((blog) => (
          <Link
            to={`/blogs/${blog._id}`}
            key={blog._id}
            className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Blog Image */}
            <img
              src={blog?.coverImg}
              alt={blog.title}
              className="w-full md:w-80 md:h-52 object-cover"
            />

            {/* Blog Content */}
            <div className="p-4 flex-grow text-center md:text-left">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2 hidden sm:block">
                {blog.description
                  ? `${blog.description.split(" ").slice(0, 15).join(" ")}...`
                  : "No description available."}
              </p>
              <div className="mt-4 flex justify-center md:justify-start items-center text-gray-500 text-xs space-x-4">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {blog.category || "General"}
                </span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                <span>Views: {generateRandomViews()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 border rounded-sm ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* No Blogs Found */}
      {!isLoading && trendingBlogs.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No popular posts found.
        </div>
      )}
    </div>
  );
};

export default PopularPosts;
