
import React from 'react';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 pt-48 pb-12 border-t border-white/5 relative z-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-24 mb-32">
          <div className="max-w-2xl reveal">
            <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12 text-white italic uppercase">
              Stay <br /><span className="text-blue-600">Noppo.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl mono tracking-tighter max-w-md leading-relaxed uppercase font-black">
              Redefining the standards <br />
              <span className="text-slate-800">of modern web engineering.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16 reveal">
            <div>
              <h5 className="mono text-[10px] text-white/40 mb-10 tracking-[0.5em] uppercase font-black">NAVIGATE</h5>
              <ul className="space-y-5 text-slate-500 font-black text-xs uppercase tracking-widest">
                <li><button onClick={() => onNavigate?.('news')} className="hover:text-blue-500 transition-colors">最新情報</button></li>
                <li><button onClick={() => onNavigate?.('products')} className="hover:text-blue-500 transition-colors">プロダクト</button></li>
                <li><button onClick={() => onNavigate?.('utilities')} className="hover:text-blue-500 transition-colors">ツール群</button></li>
                <li><button onClick={() => onNavigate?.('about')} className="hover:text-blue-500 transition-colors">スタジオ理念</button></li>
              </ul>
            </div>
            <div>
              <h5 className="mono text-[10px] text-white/40 mb-10 tracking-[0.5em] uppercase font-black">PROJECTS</h5>
              <ul className="space-y-5 text-slate-500 font-black text-xs uppercase tracking-widest">
                <li><a href="https://browser.noppo.f5.si" target="_blank" className="hover:text-blue-500 transition-colors">NoppoBrowser</a></li>
                <li><a href="https://nml.noppo.f5.si" target="_blank" className="hover:text-blue-500 transition-colors">NML Protocol</a></li>
                <li><a href="https://noppo.f5.si/tools" target="_blank" className="hover:text-blue-500 transition-colors">Utility Network</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8 reveal">
          <div className="flex items-center gap-5">
             <div className="w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-xs font-black text-blue-500 mono shadow-inner">N</div>
             <p className="mono text-[10px] text-slate-700 uppercase tracking-[0.3em] font-black">
               &copy; 2025 NOPPOSTUDIO INC. // ALL RIGHTS RESERVED.
             </p>
          </div>
          <div className="flex gap-12 mono text-[10px] text-slate-700 uppercase tracking-[0.3em] font-black">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="text-slate-800 hidden md:inline italic uppercase">Higher Ground Engineering.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
