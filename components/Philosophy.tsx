
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 max-w-6xl">
      <div className="reveal">
        <span className="mono text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-10 block">// MANIFESTO</span>
        <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter mb-28 leading-[0.8] text-white italic uppercase">
          Think.<br />
          Higher.<br />
          Beyond.
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-24 lg:gap-32 reveal">
        <div className="text-xl md:text-3xl leading-snug text-slate-300 font-light italic">
          <p className="mb-14 border-l-4 border-blue-600 pl-10">
            「のっぽ」とは、単にサイズが大きいことではありません。それは誰よりも早く遠くを見渡し、既存の枠組みを超えた視点を持つことです。
          </p>
          <p className="pl-10 text-slate-500 text-lg md:text-2xl font-bold not-italic leading-relaxed">
            独自の「Summitエンジン」による高速化、NMLによる論理性。私たちはウェブの在り方を根本から再定義します。
          </p>
        </div>
        
        <div className="space-y-24">
          <div className="reveal group">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-5xl font-black text-blue-900/50 group-hover:text-blue-600/50 transition-colors mono">01</span>
              <h4 className="text-3xl font-black text-white tracking-tighter group-hover:text-blue-500 transition-colors uppercase italic">Engine Autonomy.</h4>
            </div>
            <p className="text-slate-500 leading-relaxed font-black text-lg pl-14 border-l border-white/5">
              既存のエンジンに依存せず、ゼロからコードを構築。一切の妥協を許さないプライバシーとパフォーマンスを追求します。
            </p>
          </div>
          <div className="reveal group">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-5xl font-black text-blue-900/50 group-hover:text-blue-600/50 transition-colors mono">02</span>
              <h4 className="text-3xl font-black text-white tracking-tighter group-hover:text-blue-500 transition-colors uppercase italic">Zero Latency Mind.</h4>
            </div>
            <p className="text-slate-500 leading-relaxed font-black text-lg pl-14 border-l border-white/5">
              1ミリ秒の遅延が思考を止める。すべての開発において「速度」を最優先の評価軸としています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
