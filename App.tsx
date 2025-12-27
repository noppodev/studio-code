
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journal from './components/Journal';
import Products from './components/Products';
import UtilitiesSection from './components/UtilitiesSection';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import { Section, NewsItem, BlogPost } from './types';
import { NEWS_ITEMS, BLOG_POSTS } from './constants';

type AppView = 
  | { type: 'home' } 
  | { type: 'news-archive' } 
  | { type: 'blog-archive' }
  | { type: 'news-detail', id: string }
  | { type: 'blog-detail', id: string };

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState<AppView>({ type: 'home' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleNavigate = (id: string) => {
    if (view.type !== 'home') {
      setView({ type: 'home' });
      // ビュー切り替え後のレンダリングを待ってからスクロール
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (view.type) {
      case 'news-archive':
        return (
          <div className="pt-40 pb-20 container mx-auto px-6 max-w-5xl">
            <h1 className="text-6xl font-black mb-16 tracking-tighter text-white reveal visible italic">NEWS ARCHIVE.</h1>
            <div className="space-y-4">
              {NEWS_ITEMS.map(item => (
                <div 
                  key={item.id} 
                  onClick={() => setView({ type: 'news-detail', id: item.id })}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all cursor-pointer group reveal visible"
                >
                  <div className="flex gap-4 mb-3 mono text-blue-500 font-bold text-sm uppercase">
                    <span>{item.date}</span>
                    <span className="text-slate-600">/ {item.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{item.title}</h3>
                </div>
              ))}
            </div>
            <button onClick={() => setView({ type: 'home' })} className="mt-16 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <i className="fa-solid fa-arrow-left"></i> BACK TO HOME
            </button>
          </div>
        );

      case 'blog-archive':
        return (
          <div className="pt-40 pb-20 container mx-auto px-6 max-w-6xl">
            <h1 className="text-6xl font-black mb-16 tracking-tighter text-white reveal visible italic">INSIGHTS.</h1>
            <div className="grid md:grid-cols-2 gap-8">
              {BLOG_POSTS.map(post => (
                <div 
                  key={post.id} 
                  onClick={() => setView({ type: 'blog-detail', id: post.id })}
                  className="glass p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/50 transition-all cursor-pointer group flex flex-col reveal visible"
                >
                  <div className="flex justify-between mb-6 mono text-blue-500 font-bold text-sm uppercase">
                    <span>{post.date}</span>
                    <span className="text-slate-600">BY {post.author}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-6 leading-tight group-hover:text-blue-400">{post.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 flex-grow font-medium">{post.excerpt}</p>
                  <span className="text-blue-500 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    VIEW FULL ARTICLE <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              ))}
            </div>
            <button onClick={() => setView({ type: 'home' })} className="mt-16 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <i className="fa-solid fa-arrow-left"></i> BACK TO HOME
            </button>
          </div>
        );

      case 'news-detail':
        const item = NEWS_ITEMS.find(n => n.id === view.id);
        return (
          <div className="pt-40 pb-32 container mx-auto px-6 max-w-4xl">
            <button onClick={() => setView({ type: 'news-archive' })} className="mb-12 text-slate-500 hover:text-blue-500 font-bold flex items-center gap-2 transition-colors uppercase tracking-widest text-xs">
              <i className="fa-solid fa-chevron-left"></i> BACK TO NEWS ARCHIVE
            </button>
            <div className="mono text-blue-500 font-bold mb-4 tracking-widest text-sm">{item?.date} / {item?.category}</div>
            <h1 className="text-4xl md:text-7xl font-black mb-16 tracking-tight text-white leading-[1.1]">{item?.title}</h1>
            <div className="text-xl text-slate-400 leading-relaxed space-y-8 font-light border-l-2 border-white/5 pl-8 md:pl-12 py-4">
              {item?.content}
            </div>
          </div>
        );

      case 'blog-detail':
        const post = BLOG_POSTS.find(b => b.id === view.id);
        return (
          <div className="pt-40 pb-32 container mx-auto px-6 max-w-4xl">
            <button onClick={() => setView({ type: 'blog-archive' })} className="mb-12 text-slate-500 hover:text-blue-500 font-bold flex items-center gap-2 transition-colors uppercase tracking-widest text-xs">
              <i className="fa-solid fa-chevron-left"></i> BACK TO BLOG LIST
            </button>
            <div className="flex items-center gap-4 mono text-blue-500 font-bold mb-6 uppercase tracking-widest text-sm">
              <span>{post?.date}</span>
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span>By {post?.author}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-16 tracking-tight text-white leading-[1.1]">{post?.title}</h1>
            <div className="text-xl text-slate-300 leading-relaxed space-y-10 font-light whitespace-pre-wrap border-l-2 border-blue-500/20 pl-8 md:pl-12 py-4">
              {post?.content}
            </div>
            <div className="mt-20 pt-20 border-t border-white/5">
               <button onClick={() => setView({ type: 'home' })} className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                  トップページへ戻る
               </button>
            </div>
          </div>
        );

      default:
        return (
          <>
            <section id={Section.Home}>
              <Hero onNavigate={handleNavigate} />
            </section>
            <section id={Section.News} className="py-24 border-y border-white/5 bg-slate-950/40">
              <Journal 
                onNewsArchive={() => setView({ type: 'news-archive' })} 
                onBlogArchive={() => set_view({ type: 'blog-archive' })}
                onNewsItemClick={(id) => setView({ type: 'news-detail', id })}
                onBlogPostClick={(id) => setView({ type: 'blog-detail', id })}
              />
            </section>
            <section id={Section.Products} className="py-32">
              <Products />
            </section>
            <section id="utilities" className="py-32 bg-slate-950/50">
              <UtilitiesSection />
            </section>
            <section id={Section.About} className="bg-slate-950 text-white py-32 border-t border-white/5">
              <Philosophy />
            </section>
          </>
        );
    }
  };

  // set_view is a helper for consistency
  const set_view = (v: AppView) => setView(v);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-600/50">
      <Navbar 
        isScrolled={isScrolled} 
        onNavigate={handleNavigate} 
        onBrandClick={() => setView({ type: 'home' })} 
      />
      <main className="relative z-0">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
