import React, { useState } from 'react';
import { SearchIcon, ArrowRightIcon } from 'lucide-react';
type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
  glowing?: boolean;
};
const SearchBar = ({
  placeholder = 'Search',
  onSearch,
  glowing = false
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };
  return <form onSubmit={handleSubmit} className={`relative w-full max-w-xl ${glowing ? 'drop-shadow-[0_0_15px_rgba(126,58,237,0.5)]' : ''}`}>
      <div className="relative flex items-center">
        <div className="absolute left-3 text-gray-400">
          <SearchIcon size={20} />
        </div>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder={placeholder} className="w-full bg-black/30 text-white placeholder-gray-400 pl-10 pr-10 py-3 rounded-full border border-purple-500/30 focus:outline-none focus:border-purple-500" />
        <button type="submit" className="absolute right-3 bg-transparent border-none text-gray-400 hover:text-white">
          <ArrowRightIcon size={20} />
        </button>
      </div>
    </form>;
};
export default SearchBar;