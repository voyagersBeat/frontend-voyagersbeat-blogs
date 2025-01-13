import React from "react";

const SearchTab = ({ search, handleSearchToChange, handleSearch }) => {
  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full flex items-center">
      <div className="relative w-full">
       
        <input
          type="text"
          value={search}
          onChange={handleSearchToChange}
          onKeyPress={handlePressKey}
          placeholder="Search for blogs, articles, or topics..."
          className="py-2.5 px-5 w-full rounded-sm border border-gray-200  bg-gray-100 shadow-sm text-gray-700 placeholder-gray-500 focus:outline-none transition duration-300"
        />

        {/* Search Icon inside Input */}
        <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>
        </span>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="ml-4 px-6 py-2.5 text-white bg-[#1e73be] hover:bg-[#155b94] rounded-sm shadow-lg font-medium transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchTab;
