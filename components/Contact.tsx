
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-white font-bold tracking-widest text-sm uppercase mb-6">Let's Connect</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-none">新しい可能性を、<br />共に創りましょう。</h3>
          
          <p className="text-blue-100 text-xl mb-12">
            NoppoStudioのプロダクトに関するお問い合わせや、共同開発、プロジェクトのご相談など、
            お気軽にご連絡ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@noppostudio.example.com" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              info@noppostudio.com
            </a>
            <a href="#" className="bg-blue-800/40 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all">
              公式SNSをフォロー
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-10">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-2xl"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-2xl"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-2xl"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
