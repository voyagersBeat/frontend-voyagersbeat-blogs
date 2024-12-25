import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../../../redux/features/blog/blogApi";
import SingleBlog from "./SingleBlog";
import Comment from "../comments/Comment";
import RelatedBlogs from "./RelatedBlogs";

const FAQSection = () => {
  const faqs = [
    {
      question: "How many days are enough for Jibhi?",
      answer:
        "Jibhi - Himachal Pradesh, India | 6 Days (Asia) Start your vacation with a visit to the Jalori Pass, Serolsar Lake.",
    },
    {
      question: "Why Jibhi is called Mini Thailand?",
      answer:
        "Moreover the name mini Thailand was given just because here there are two rocks that are joined and water below that is very clean and clear. I don't think it's a unique feature restricted to Thailand only.",
    },
    {
      question: "How many days do you need in Spiti?",
      answer:
        "The ideal duration for covering the Spiti Valley trip depends on several factors, such as the places you want to visit, the mode of transportation, and your travel style.",
    },
    {
      question: "How many days is enough for Goa?",
      answer:
        "How many days are enough for a Goa trip? Three to four days are enough for a Goa trip in either North or South Goa. If you plan to spend time in both parts of Goa, it's best to add a day or two to your trip so you get to explore the best of both.",
    },
  ];

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8 bg-white py-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const [isOpen, setIsOpen] = useState(false);

          return (
            <div key={index} className="p-4 border rounded-md bg-gray-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-lg font-md text-gray-600 w-full text-left focus:outline-none flex justify-between items-center"
              >
                {faq.question}
                <span>{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen && <p className="text-[#1e73be] mt-2">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const OneSingleBlog = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetchBlogByIdQuery(id);
  return (
    <div className="text-primary container mx-auto mt-32 sm:px-6 lg:px-12">
      <div>
        {isLoading && <div>Loading...</div>}
        {error && <div>Something went wrong</div>}
        {blog?.post && (
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="lg:w-2/3 w-full">
              <SingleBlog Blogs={blog.post} />
              <Comment comments={blog?.comments} />
              <FAQSection />
            </div>
            <div className="bg-white lg:w-1/3 w-full p-4 sm:p-6 lg:p-8  border-gray-200 rounded-sm">
              <RelatedBlogs />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OneSingleBlog;
