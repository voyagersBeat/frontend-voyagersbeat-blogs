import React from "react";
import { useFetchRelatedBlogsQuery } from "../../../redux/features/blog/blogApi";
import { Link, useParams } from "react-router-dom";

const RelatedBlogs = () => {
  const { id } = useParams();
  const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id);

  return (
    <div>
      <h3 className="text-xl font-medium pt-2 px-8 pb-5">Related Blogs</h3>
      <hr />
      {isLoading ? (
        <div className="p-8">Loading...</div>
      ) : error ? (
        <div className="p-8 text-red-500">Error fetching related blogs!</div>
      ) : blogs.length > 0 ? (
        <div className="space-y-4 mt-5">
          {blogs.map((blog, index) => (
            <Link
              key={blog._id || `blog-${index}`}
              to={`/blogs/${blog?._id}`}
              className="flex items-center gap-4 shadow-sm px-4 py-4 rounded-sm hover:bg-gray-50 transition"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={blog.coverImg}
                  alt={blog.title || "blog image"}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-[#1e73be] text-sm md:text-base">
                  {blog.title.substring(0, 50)}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  {blog?.description.substring(0, 50)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-8">No Related Blogs Found!</div>
      )}
    </div>
  );
};

export default RelatedBlogs;
