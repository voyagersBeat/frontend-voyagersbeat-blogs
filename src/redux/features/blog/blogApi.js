import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://voyagers-backend.onrender.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user?.token; // Fetch token from Redux state
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = "", category = "", location = "" }) =>
        `/blogs?search=${search}&category=${category}&location=${location}`,
      providesTags: ["Blogs"],
    }),
    fetchBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
    fetchRelatedBlogs: builder.query({
      query: (id) => `/blogs/related/${id}`,
    }),
    postBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs/create-post",
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: ["Blogs"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/blogs/update-post/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: (res, err, { id }) => [{ type: "Blogs", id }],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (res, err, { id }) => [{ type: "Blogs", id }],
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  useFetchRelatedBlogsQuery,
  usePostBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
