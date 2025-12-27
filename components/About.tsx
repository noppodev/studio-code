
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-square lg:aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="NoppoStudio Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">「のっぽ」のように、<br />遠くの未来を見据えて。</h3>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              NoppoStudioの名前の由来は、日本語の「のっぽ（背が高い）」から来ています。
              背が高いことは、単にサイズが大きいことではありません。それは誰よりも早く遠くを見渡し、優れた視点（Perspective）を持つことを意味します。
            </p>
            <p>
              私たちは、NoppoBrowserによる高速なブラウジング、NMLによるシンプルな構造記述、そして数々の便利ツールの提供を通じて、
              ユーザーがより高く、より遠くの可能性へと到達できる環境を整えています。
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <i className="fa-solid fa-compass text-blue-500"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">独自の視点</h4>
                <p className="text-gray-500">既存のWeb規格に縛られず、真に使いやすいツールのあり方を追求します。</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <i className="fa-solid fa-leaf text-purple-500"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">サステナブルな開発</h4>
                <p className="text-gray-500">軽量で高速、かつメンテナンス性の高いコードをすべてのプロダクトで実現します。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
