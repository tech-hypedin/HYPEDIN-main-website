import React, { useState, useMemo } from 'react';

const NetworkSidebar = ({ locations, onSearch, isLoading, selectedLocation, onSelect }) => {
  const [query, setQuery] = useState('');

  const filteredLocations = useMemo(() => {
    if (!query) return locations;
    const lowerQuery = query.toLowerCase();
    return locations.filter(loc => 
      loc.name.toLowerCase().includes(lowerQuery)
    );
  }, [locations, query]);

  const sortedLocations = useMemo(() => {
    return [...filteredLocations].sort((a, b) => b.score - a.score);
  }, [filteredLocations]);

  const totalColleges = useMemo(() => {
    return locations.reduce((acc, curr) => acc + curr.score, 0);
  }, [locations]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex flex-col h-full bg-black md:border-r border-t md:border-t-0 border-white/10 text-white w-full md:w-[340px] xl:w-[420px] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] md:shadow-[10px_0_30px_rgba(0,0,0,0.8)] relative z-20 transition-all duration-300">
      
      {/* Header Area */}
      <div className="p-2 md:p-8 md:pb-6 border-b border-white/5 min-h-[40px] md:min-h-[100px] flex items-end">
        <div>
          <h1 className="text-base md:text-2xl font-black font-display tracking-tighter text-white">COLLEGE <span className="text-hyped-red">HEATMAP</span></h1>
          <p className="text-[7px] md:text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mt-0.5 md:mt-1">Indian Education Network</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-2 md:px-8 py-1.5 md:py-6">
        <div className="grid grid-cols-2 gap-2 md:gap-4">
           <div className="bg-neutral-900/50 p-1.5 md:p-4 rounded-none border-l-2 border-hyped-red relative overflow-hidden group hover:bg-neutral-900 transition-colors flex flex-col justify-between h-14 md:h-32">
             <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-gray-500 mb-0.5 md:mb-1 leading-tight md:leading-relaxed">Total Registered<br className="hidden md:block"/>Colleges</p>
             <div>
               <div className="flex items-baseline gap-1">
                 <p className="text-lg md:text-3xl font-black text-white font-display">{totalColleges > 0 ? (totalColleges/1000).toFixed(1) + 'k' : '-'}</p>
                 <span className="text-hyped-red text-sm md:text-xl font-bold">+</span>
               </div>
               <p className="text-[7px] md:text-xs text-gray-600 mt-0 md:mt-1 hidden md:block">In India</p>
             </div>
           </div>
           
           <div className="bg-neutral-900/50 p-1.5 md:p-4 rounded-none border-l-2 border-white/20 relative overflow-hidden group hover:border-hyped-red transition-colors flex flex-col justify-between h-14 md:h-32">
             <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-gray-500 mb-0.5 md:mb-1 leading-tight md:leading-relaxed">Regions<br className="hidden md:block"/>Mapped</p>
             <div>
               <p className="text-lg md:text-3xl font-black text-white font-display">{locations.length}</p>
               <p className="text-[7px] md:text-xs text-gray-600 mt-0 md:mt-1 hidden md:block">States & UTs</p>
             </div>
           </div>
        </div>
      </div>

      {/* Search Field */}
      <div className="px-2 md:px-8 mb-1.5 md:mb-6">
        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search state..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-3 md:px-4 py-2 md:py-4 pl-8 md:pl-10 text-[10px] md:text-sm focus:outline-none focus:border-hyped-red text-white placeholder-gray-600 font-medium tracking-wide transition-colors"
          />
          <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 absolute left-2.5 md:left-3 top-1/2 -translate-y-1/2 group-focus-within:text-hyped-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </form>
      </div>

      {/* List Header */}
      <div className="px-2 md:px-8 flex justify-between items-end border-b border-white/10 pb-1.5 md:pb-4 mb-0.5 md:mb-2">
        <h2 className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white font-display">Top Education Hubs</h2>
        <span className="text-[7px] md:text-[9px] text-hyped-red font-bold uppercase border border-hyped-red/30 px-1.5 md:px-2 py-0.5 md:py-1">Live Data</span>
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto px-2 md:px-6 space-y-0.5 md:space-y-1 custom-scrollbar pb-4 md:pb-6">
        {sortedLocations.length === 0 && !isLoading && (
          <div className="text-center text-gray-600 mt-10 p-4">
            <p className="text-sm font-mono">No matching regions found.</p>
          </div>
        )}

        {sortedLocations.map((loc, index) => (
          <div
            key={loc.id}
            onClick={() => onSelect(loc)}
            className={`group flex items-center p-2 md:p-4 border-b border-white/5 cursor-pointer transition-all duration-300 ${
              selectedLocation?.id === loc.id
                ? 'bg-neutral-900 border-l-4 border-l-hyped-red border-b-transparent'
                : 'hover:bg-neutral-900 border-l-4 border-l-transparent hover:border-l-white/20'
            }`}
          >
            <div className={`w-8 text-left font-display text-sm font-black mr-2 ${index < 3 ? 'text-hyped-red' : 'text-gray-600'}`}>
              {(locations.indexOf(loc) + 1).toString().padStart(2, '0')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className={`font-bold text-xs md:text-sm uppercase tracking-wide truncate font-display ${selectedLocation?.id === loc.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{loc.name}</h3>
                <span className="text-[10px] md:text-xs font-mono font-bold text-gray-500 group-hover:text-hyped-red transition-colors">{loc.score.toLocaleString()}</span>
              </div>
              
              {/* Custom Progress Bar */}
              <div className="h-0.5 w-full bg-gray-800 overflow-hidden">
                <div 
                  className={`h-full ${
                    index < 3 ? 'bg-hyped-red shadow-[0_0_10px_#ef4444]' : 
                    'bg-gray-500'
                  }`}
                  style={{ width: `${Math.max((loc.score / 8114) * 100, 2)}%` }} 
                ></div>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-hyped-red"></div>
            <p className="text-xs font-mono text-hyped-red animate-pulse uppercase">Syncing Database...</p>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="p-4 bg-black border-t border-white/10 flex flex-col justify-center items-center gap-1.5">
         <span className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">© HYPEDIN INTELLECTUAL PROPERTY</span>
         <span className="text-[7px] md:text-[9px] text-gray-600 font-bold uppercase tracking-widest">Source: Ministry of Higher Education & AISHE</span>
      </div>
    </div>
  );
};

export default NetworkSidebar;
