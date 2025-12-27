
import React from 'react';
import { NEWS_ITEMS, BLOG_POSTS } from '../constants';

interface JournalProps {
  onNewsArchive?: () => void;
  onBlogArchive?: () => void;
  onNewsItemClick?: (id: string) => void;
  onBlogPostClick?: (id: string) => void;
}

const Journal: React.FC<JournalProps> = ({ 
  onNewsArchive, 
  onBlogArchive, 
  onNewsItemClick, 
  onBlogPostClick 
}) => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* News Column */}
        <div className="lg:col-span-7">
          <div className="flex justify-between items-end mb-12 reveal">
            <div>
              <span className="mono text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Archive 01</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white">Latest Updates.</h2>
            </div>
            <button onClick={onNewsArchive} className="text-slate-500 hover:text-blue-500 mono text-[10px] transition-all font-bold uppercase tracking-widest border-b border-transparent hover:border-blue-500 pb-1">VIEW ALL ARCHIVE</button>
          </div>
          
          <div className="space-y-1">
            {NEWS_ITEMS.slice(0, 4).map((item) => (
              <div 
                key={item.id} 
                onClick={() => onNewsItemClick?.(item.id)}
                className="group cursor-pointer py-8 border-b border-white/5 reveal hover:bg-white/[0.02] transition-colors px-6 -mx-6 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="mono text-xs text-slate-500">{item.date}</span>
                    <span className="px-2 py-0.5 bg-slate-900 border border-white/10 rounded-md text-[9px] font-bold text-blue-500 uppercase tracking-tighter">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors leading-snug text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Column */}
        <div className="lg:col-span-5">
          <div className="flex justify-between items-end mb-12 reveal">
            <div>
              <span className="mono text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Archive 02</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white">Tech Blogs.</h2>
            </div>
            <button onClick={onBlogArchive} className="text-slate-500 hover:text-blue-500 mono text-[10px] transition-all font-bold uppercase tracking-widest border-b border-transparent hover:border-blue-500 pb-1">READ ALL ARTICLES</button>
          </div>

          <div className="space-y-12">
            {BLOG_POSTS.slice(0, 2).map((post) => (
              <article 
                key={post.id} 
                onClick={() => onBlogPostClick?.(post.id)}
                className="reveal group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4 mono text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  <span>{post.date}</span>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-blue-400 transition-colors leading-tight text-white">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-blue-500 font-black text-[10px] mono group-hover:gap-4 transition-all uppercase tracking-[0.2em]">
                  READ FULL ARTICLE <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Journal;
