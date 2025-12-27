
import React from 'react';

interface HeroProps {
  onNavigate?: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0f172a]">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-blue-500/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-blue-500/10 rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl relative z-10">
        <div className="reveal visible">
          <p className="mono text-blue-500 mb-8 tracking-[0.4em] font-black text-xs md:text-sm uppercase">
            // NOPPOSTUDIO: HIGH PERSPECTIVE LAB
          </p>
          
          <h1 className="text-5xl md:text-[10rem] font-black leading-[0.9] tracking-tighter mb-12 italic uppercase">
            High.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-400">Vision.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16 items-start mt-16">
            <p className="text-xl md:text-3xl text-slate-400 leading-tight font-light italic">
              私たちは、独自ブラウザ「NoppoBrowser」や新規格「NML」を通じて、
              デジタル世界の視座をアップデートするクリエイティブ集団です。
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate?.('products')} 
                className="group px-12 py-6 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/20 text-center uppercase tracking-widest text-sm flex items-center justify-center gap-3"
              >
                プロダクトを見る <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </button>
              <button 
                onClick={() => onNavigate?.('about')} 
                className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-center uppercase tracking-widest text-sm"
              >
                私たちの理念
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-20 flex items-center gap-6 text-[10px] mono text-slate-600 tracking-[0.5em] font-bold reveal visible uppercase">
        <div className="w-12 h-[1px] bg-slate-800"></div>
        Scroll to Explore
      </div>
    </div>
  );
};

export default Hero;
