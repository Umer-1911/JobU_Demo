import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
const Home = () => {
  return <div className="w-full h-full flex flex-col items-center justify-center text-white">
    <h1 className="text-3xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text text-center leading-tight">
      What's your dream job?
    </h1>

    <div className="w-full max-w-2xl mb-8">
      <SearchBar placeholder="Search your dream job with AI" glowing={true} />
    </div>
    <Link to="/ask-ai">
      <Button variant="gradient" size="lg">
        Ask AI
      </Button>
    </Link>
  </div>;
};
export default Home;