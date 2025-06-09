import React from 'react';
import { Shield, Cloud, TrendingUp } from 'lucide-react';
import log from '../assets/gmsLogo.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo Section - PNG only, centered, sized to heading */}
        <img src={log} alt="GMS Logo" className="mx-auto mb-6 max-w-[320px] w-full h-auto" />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-brand-blue">Compli</span>
          <span className="text-brand-orange">Tru</span>{' '}
          <span className="text-brand-blue">AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          The AI-powered cloud compliance platform that transforms how enterprises manage 
          <span className="text-brand-orange font-semibold"> security, costs, and compliance</span> across their cloud infrastructure.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <TrendingUp className="w-6 h-6 text-brand-orange" />
            <span className="font-medium text-gray-700">Cost Optimization</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <Shield className="w-6 h-6 text-brand-blue" />
            <span className="font-medium text-gray-700">Security Management</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <Cloud className="w-6 h-6 text-brand-orange" />
            <span className="font-medium text-gray-700">Compliance Audits</span>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-xl border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            Leveraging advanced AI and machine learning, CompliTru AI provides enterprise-grade solutions 
            for cloud security, compliance automation, and cost optimization. Trusted by leading organizations 
            to secure and optimize their cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;