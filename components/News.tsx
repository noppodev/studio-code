
import React from 'react';
import { NEWS_ITEMS } from '../constants';

const News: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-4 border-b border-white/10 pb-6">
        <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          最新ニュース
        </h2>
        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm font-bold uppercase tracking-widest transition-colors">
          すべてのニュースを見る <i className="fa-solid fa-arrow-right ml-1"></i>
        </a>
      </div>

      <div className="space-y-0">
        {NEWS_ITEMS.map((item) => (
          <a 
            key={item.id} 
            href="#" 
            className="group flex flex-col md:flex-row md:items-center py-6 border-b border-white/5 hover:bg-white/[0.02] transition-all px-4 -mx-4 rounded-lg"
          >
            <div className="flex items-center gap-4 mb-2 md:mb-0 md:w-48 shrink-0">
              <span className="text-gray-500 font-display text-sm">{item.date}</span>
              <span className="px-2 py-0.5 rounded bg-gray-900 border border-white/10 text-[10px] font-bold text-gray-400 uppercase">
                {item.category}
              </span>
            </div>
            <h3 className="text-gray-200 group-hover:text-blue-400 transition-colors text-lg font-medium">
              {item.title}
            </h3>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              <i className="fa-solid fa-chevron-right text-blue-500"></i>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
