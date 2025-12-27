
import React from 'react';
import { CORE_PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="mb-24 reveal">
        <span className="mono text-blue-500 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">// CORE INNOVATION</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase text-white">Products.</h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
      </div>

      <div className="space-y-64">
        {CORE_PRODUCTS.map((product, i) => (
          <div key={product.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center reveal`}>
            <div className="w-full lg:w-3/5 relative group overflow-hidden rounded-[3rem] shadow-2xl shadow-blue-500/10 border border-white/5">
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            <div className="w-full lg:w-2/5">
              <span className="mono text-blue-500 font-bold mb-6 block uppercase tracking-[0.3em] text-[10px]">Project.0{i + 1} // {product.category}</span>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white">{product.title}</h3>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-12">
                {product.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mono text-[10px] text-slate-500 uppercase font-black tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-12 py-5 bg-white text-black hover:bg-blue-600 hover:text-white transition-all font-black text-xs rounded-2xl uppercase tracking-[0.2em] shadow-xl hover:shadow-blue-600/40"
              >
                公式サイトを開く <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
