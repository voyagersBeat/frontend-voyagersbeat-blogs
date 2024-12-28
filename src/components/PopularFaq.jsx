import React, { useState } from "react";

const PopularFaq = () => {
  const faqData = [
    {
      question: "What is the best time to travel?",
      answer:
        "The best time to travel depends on your destination. For example, tropical destinations are best visited during the dry season, while ski resorts are ideal during winter months.",
    },
    {
      question: "How do I find budget-friendly travel options?",
      answer:
        "To find budget-friendly options, book flights and accommodations in advance, travel during off-peak seasons, and explore package deals or discounts on our 'Offers' page.",
    },
    {
      question: "What essentials should I pack for my trip?",
      answer:
        "Essentials vary depending on the destination, but always include travel documents, clothing suitable for the weather, toiletries, a first-aid kit, and any necessary electronics.",
    },
    {
      question: "Do you provide travel insurance?",
      answer:
        "Yes, we partner with reliable travel insurance providers to ensure your trips are covered against unexpected events like cancellations or medical emergencies.",
    },
    {
      question: "How do I plan a multi-destination trip?",
      answer:
        "Planning a multi-destination trip is easy with our platform. Use our trip planner to select destinations, arrange itineraries, and book all your accommodations and transportation in one go.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-gray-50 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 my-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-sm p-4 transition-shadow duration-300"
            >
              <div
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg font-medium text-gray-700">
                  {faq.question}
                </h3>
                <span className="text-gray-500 text-lg">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-700 leading-relaxed mt-2 text-md">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularFaq;
