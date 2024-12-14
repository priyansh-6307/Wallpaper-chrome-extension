import React from 'react'
import { useState,useEffect } from 'react';

const Searchbar = () => {
    const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    window.open(`https://www.google.com/search?q=${query}`);
  };

  return (
    <form  className='b0' onSubmit={handleSearch}>
      <input
      className='w-full p-2 bg-white/30 backdrop-blur-md rounded-md text-white placeholder-white focus:outline-none'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '600px',
          borderRadius: '5px',
        }}
      />
    </form>
  );
}

export default Searchbar