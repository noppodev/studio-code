
import React from 'react';
import { UTILITIES } from '../constants';

const UtilitiesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 reveal">
        <div className="max-w-2xl">
          <span className="mono text-blue-500 font-black text-xs tracking-[0.4em] uppercase mb-6 block">// UTILITY HUB</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-none">The Network.</h2>
          <p className="text-slate-400 text-xl leading-relaxed font-medium">
            150以上の単機能ウェブツール群を提供。日常の細かな「不便」を、最速で「解決」に変えるエコシステムを構築しています。
          </p>
        </div>
        <div className="px-8 py-4 bg-blue-600/5 border border-blue-500/20 rounded-2xl shadow-inner">
            <span className="mono text-blue-500 font-black text-sm tracking-widest uppercase">154+ TOOLS ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 reveal overflow-hidden rounded-[2.5rem]">
        {UTILITIES.map((tool, i) => (
          <div key={i} className="bg-slate-950 p-14 hover:bg-slate-900 transition-all group relative overflow-hidden cursor-default border-transparent hover:border-blue-500/30">
            <div className="absolute -right-6 -top-6 text-white/[0.02] text-9xl group-hover:text-blue-500/5 transition-all duration-700">
              <i className={`fa-solid ${tool.icon}`}></i>
            </div>
            <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                <i className={`fa-solid ${tool.icon} text-blue-500 text-xl group-hover:text-white transition-colors`}></i>
            </div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic">{tool.name}</h3>
            <p className="text-slate-500 text-base leading-relaxed mb-10 font-medium">{tool.desc}</p>
            <a href="https://noppo.f5.si/tools" target="_blank" className="text-[10px] font-black text-blue-500 flex items-center gap-3 group-hover:gap-5 transition-all tracking-[0.2em] uppercase">
              Launch Tool <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center reveal">
        <a href="https://noppo.f5.si/tools" target="_blank" className="inline-flex items-center gap-4 px-12 py-5 bg-white/5 border border-white/10 hover:border-blue-500 hover:text-blue-500 rounded-2xl font-black text-slate-500 transition-all text-xs tracking-[0.3em] uppercase group">
          [ View All Utility Network ] <i className="fa-solid fa-arrow-up-right-from-square group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform"></i>
        </a>
      </div>
    </div>
  );
};

export default UtilitiesSection;
