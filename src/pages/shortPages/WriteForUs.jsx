import React from "react";

const WriteForUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-white shadow-lg rounded-sm p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Write for Us
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Are you passionate about travel and storytelling? Join our team of
            contributors and share your unique insights and adventures with a
            global audience. We welcome creative minds and enthusiastic writers
            to be part of our journey.
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              What We Are Looking For
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>
                Articles about travel destinations, tips, and experiences.
              </li>
              <li>Stories that inspire wanderlust and exploration.</li>
              <li>Content that provides valuable insights to our readers.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Guidelines
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Articles must be original and unpublished.</li>
              <li>Word count should be between 800-1500 words.</li>
              <li>Include high-quality, royalty-free images.</li>
              <li>Use proper grammar and clear formatting.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              How to Submit
            </h2>
            <p className="text-gray-600 mb-4">
              Send your article to us via email at
              <a
                href="mailto:social@voyagersbeat.com"
                className="text-blue-500 underline"
              >
                {" "}
                social@voyagersbeat.com
              </a>
              . Use the subject line{" "}
              <span className="font-semibold">
                ‘Write for Us Submission’
              </span>{" "}
              and attach your article in a Word document, along with your bio
              and a professional headshot.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Why Write for Us?
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Showcase your knowledge to a global audience.</li>
              <li>Enhance your portfolio and gain recognition.</li>
              <li>Be part of a vibrant community of travel enthusiasts.</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:your-email@example.com"
              className="inline-block px-8 py-3 bg-[#1e73be] text-white font-semibold rounded-sm shadow-md hover:bg-blue-600 transition"
            >
              Submit Your Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteForUs;
