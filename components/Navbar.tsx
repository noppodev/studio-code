
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate?: (id: string) => void;
  onBrandClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate, onBrandClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '最新情報', id: 'news' },
    { label: 'プロダクト', id: 'products' },
    { label: 'ツール群', id: 'utilities' },
    { label: 'スタジオ理念', id: 'about' },
  ];

  const handleNav = (id: string) => {
    if (onNavigate) onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div onClick={onBrandClick} className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-2xl mono group-hover:rotate-[15deg] transition-all">N</div>
          <div className="flex flex-col leading-none">
             <span className="text-xl font-black tracking-tighter uppercase">NoppoStudio</span>
             <span className="text-[10px] mono text-blue-600 font-bold tracking-widest mt-1">EST. 2021 TOKYO</span>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 items-center">
          {menuItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => handleNav(item.id)}
              className="text-xs font-bold hover:text-blue-500 transition-colors tracking-widest uppercase cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950 z-40 transition-all duration-500 flex flex-col justify-center items-center gap-8 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {menuItems.map(item => (
            <button key={item.id} onClick={() => handleNav(item.id)} className="text-3xl font-black hover:text-blue-500 transition-colors">
              {item.label}
            </button>
          ))}
          <button className="absolute top-8 right-6 text-2xl" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
