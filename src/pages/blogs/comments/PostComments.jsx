import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePostCommentMutation } from "../../../redux/features/comment/commentApi";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../../../redux/features/blog/blogApi";

const PostComments = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [postComment] = usePostCommentMutation();
  const navigate = useNavigate();
  const { refetch } = useFetchBlogByIdQuery(id, { skip: !id });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      alert("Please Login first to comment on this post ");
      navigate("/login");
      return;
    }

    const newComment = {
      comment: comment,
      user: user?.id,
      postId: id,
    };

    try {
      const res = await postComment(newComment).unwrap();
      console.log("res is", res);
      alert("Comment add successfully");
      setComment("");
      refetch();
    } catch (err) {
      alert("Failed to post the Comment ");
    }
  };

  return (
    <>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-6">Leave a Comment </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            name="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            cols="30"
            rows="6"
            placeholder="Write your comment here..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
          />
          <button
            type="submit"
            className="px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default PostComments;
