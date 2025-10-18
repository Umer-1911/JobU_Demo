import React from 'react';
import SearchBar from '../components/SearchBar';
const AskAI = () => {
  return <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        Search your dream job with AI
      </h1>
      <div className="w-full max-w-2xl">
        <SearchBar placeholder="Search your dream job with AI" glowing={true} />
      </div>
    </div>;
};
export default AskAI;