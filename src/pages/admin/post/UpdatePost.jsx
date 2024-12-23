import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import {
  useFetchBlogByIdQuery,
  useUpdateBlogMutation,
} from "../../../redux/features/blog/blogApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [category, setCategory] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.auth);
  const editorRef = useRef(null);

  const {
    data: blog = {},
    error,
    isLoading,
    refetch,
  } = useFetchBlogByIdQuery(id);

  const [updateBlog] = useUpdateBlogMutation();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setCoverImg(blog.coverImg);
      setCategory(blog.category);
      setMetaDescription(blog.metaDescription);
    }

    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: "editorjs",
        tools: {
          list: List,
          header: Header,
        },
        data: blog.content,
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [blog]);

  const handleUpdatePost = async () => {
    const content = await editorRef.current.save();
    const token = user?.token; // Ensure token is extracted from state

    if (!token) {
      setMessage("User authentication failed. Please login again.");
      return;
    }

    const updatedPost = {
      title,
      coverImg,
      content,
      description: metaDescription,
      category,
    };

    try {
      const response = await updateBlog({
        id,
        data: updatedPost,
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.error) {
        setMessage(response.error.message);
      } else {
        setMessage("Post updated successfully!");
      }
    } catch (err) {
      setMessage(`Failed to update the post: ${err.message}`);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Update Post</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <input
        type="text"
        value={coverImg}
        onChange={(e) => setCoverImg(e.target.value)}
        placeholder="Cover Image URL"
      />
      <textarea
        value={metaDescription}
        onChange={(e) => setMetaDescription(e.target.value)}
        placeholder="Meta Description"
      />
      <div id="editorjs"></div>
      <button onClick={handleUpdatePost}>Update Post</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdatePost;
