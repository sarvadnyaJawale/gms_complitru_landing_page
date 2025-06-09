import React from 'react';
import { TrendingDown, Shield, FileCheck, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';

const ProductPillars: React.FC = () => {
  const pillars = [
    {
      id: 1,
      title: "Cost Assessment & AI Savings",
      subtitle: "Intelligent Cost Optimization",
      description: "Our AI-powered cost assessment engine analyzes your cloud spending patterns and identifies optimization opportunities in real-time. Get personalized recommendations that can reduce your cloud costs by up to 40% while maintaining performance.",
      features: [
        "Real-time cost monitoring and analysis",
        "AI-driven savings recommendations",
        "Automated resource right-sizing",
        "Reserved instance optimization",
        "Multi-cloud cost comparison"
      ],
      icon: TrendingDown,
      secondaryIcon: DollarSign,
      gradient: "from-brand-orange to-orange-400",
      imageLeft: true
    },
    {
      id: 2,
      title: "Vulnerability Management",
      subtitle: "AWS Security Hub Integration",
      description: "Seamlessly integrate with AWS Security Hub to centralize security findings and leverage our AI CLI fix generator. Automatically detect, prioritize, and remediate vulnerabilities across your cloud infrastructure with intelligent automation.",
      features: [
        "AWS Security Hub integration",
        "AI-powered CLI fix generation",
        "Automated vulnerability scanning",
        "Risk-based prioritization",
        "One-click remediation scripts"
      ],
      icon: Shield,
      secondaryIcon: AlertTriangle,
      gradient: "from-brand-blue to-blue-400",
      imageLeft: false
    },
    {
      id: 3,
      title: "Compliance Audits",
      subtitle: "Prowler-Powered Framework Reports",
      description: "Generate comprehensive compliance reports across 30+ industry frameworks using Prowler integration. Our automated auditing system ensures continuous compliance monitoring and generates detailed reports for SOC 2, PCI DSS, HIPAA, and more.",
      features: [
        "30+ compliance framework support",
        "Prowler integration for AWS auditing",
        "Automated report generation",
        "Continuous compliance monitoring",
        "Executive dashboard and insights"
      ],
      icon: FileCheck,
      secondaryIcon: CheckCircle,
      gradient: "from-brand-orange to-brand-blue",
      imageLeft: true
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Pillars of <span className="text-brand-blue">Cloud Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CompliTru AI's comprehensive platform addresses the three critical aspects of cloud management 
            that every enterprise needs to master.
          </p>
        </div>

        <div className="space-y-32">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="relative">
              <div className={`flex flex-col ${pillar.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Image/Visual Section */}
                <div className="flex-1 relative">
                  <div className={`relative bg-gradient-to-br ${pillar.gradient} rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500`}>
                    <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
                    <div className="relative z-10 text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
                        <pillar.icon className="w-20 h-20 text-white mx-auto mb-4" />
                        <pillar.secondaryIcon className="w-12 h-12 text-white/80 mx-auto" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                          <div className="text-2xl font-bold">99.9%</div>
                          <div className="text-sm opacity-90">Accuracy</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                          <div className="text-2xl font-bold">24/7</div>
                          <div className="text-sm opacity-90">Monitoring</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                          <div className="text-2xl font-bold">&lt;5min</div>
                          <div className="text-sm opacity-90">Setup</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                          <div className="text-2xl font-bold">AI</div>
                          <div className="text-sm opacity-90">Powered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="inline-block bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider mb-2">
                      {pillar.subtitle}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                    {pillar.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="bg-gradient-to-r from-brand-blue to-brand-orange p-1 rounded-full flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <button className="bg-gradient-to-r from-brand-blue to-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPillars;