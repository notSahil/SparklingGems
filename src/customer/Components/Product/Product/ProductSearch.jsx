import React, { useState } from 'react';
import axios from 'axios';


function ProductSearch({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}api/products/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="hidden md:block flex-grow max-w-sm">
      <div className="relative w-full">
        
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:text-gray-900 sm:text-sm"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
          <button type="submit">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.716 14.966A7.25 7.25 0 1114.35 8.33a7.25 7.25 0 01-6.634 6.635zM15.5 9.75a5.75 5.75 0 10-11.5 0 5.75 5.75 0 0011.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      
    </form>
  );
}

export default ProductSearch;
