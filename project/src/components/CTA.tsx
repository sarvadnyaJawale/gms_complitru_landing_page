import React from 'react';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-brand-blue to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to take control of your 
            <span className="text-brand-orange"> cloud compliance?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get started with CompliTru AI today and transform how your organization manages 
            cloud security, compliance, and costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Shield className="w-12 h-12 text-brand-orange mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-gray-300">Bank-grade security with SOC 2 Type II compliance</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Zap className="w-12 h-12 text-brand-orange mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-300">Deploy in minutes, see results in hours</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Award className="w-12 h-12 text-brand-orange mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-gray-300">Trusted by worldwide Organizations</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-gradient-to-r from-brand-orange to-orange-400 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-3 group"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;