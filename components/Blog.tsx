
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">Insights & Tech</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold">技術ブログ</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-500 group flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500 font-display">{post.date}</span>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{post.author}</span>
            </div>
            <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight">
              {post.title}
            </h4>
            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
              {post.excerpt}
            </p>
            <a href="#" className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
              記事を読む <i className="fa-solid fa-arrow-right text-blue-500"></i>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a href="#" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
          すべての記事を見る <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Blog;
