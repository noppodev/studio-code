
import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">Software & Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-0">私たちが制作しているもの</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[16/10] bg-gray-900 border border-white/5">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                 <div className="flex flex-wrap gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-[10px] font-bold text-blue-200 uppercase tracking-tighter">
                       {tag}
                     </span>
                   ))}
                 </div>
              </div>
            </div>
            <div>
              <span className="text-blue-500 text-sm font-bold uppercase tracking-widest block mb-2">{project.category}</span>
              <h4 className="text-3xl font-display font-bold group-hover:text-blue-400 transition-colors mb-4">{project.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-white font-bold border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                公式サイトを開く <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
