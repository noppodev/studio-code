
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">Ecosystem</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Noppoが創るデジタルの基盤</h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          単発のサービス提供にとどまらず、ツール間の連携や新しい規格の提唱を通じて、持続可能なウェブ・エコシステムを構築しています。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <div key={index} className="glass-card p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 group">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
              <i className={`fa-solid ${service.icon} text-2xl text-blue-500 group-hover:text-white transition-colors`}></i>
            </div>
            <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h4>
            <p className="text-gray-400 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
