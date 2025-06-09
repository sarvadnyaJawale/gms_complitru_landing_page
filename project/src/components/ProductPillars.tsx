import React from 'react';
import {
  TrendingDown,
  Shield,
  FileCheck,
  DollarSign,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

import log from '../assets/gmsLogo.png';
import cost_page from '../assets/cost_assessment.png';
import vul_scan from '../assets/vul_page.png';
import compliance from '../assets/compliance.png';

const ProductPillars: React.FC = () => {
  const pillars = [
    {
      id: 1,
      title: "Cost Assessment & AI Savings",
      subtitle: "Intelligent Cost Optimization",
      description:
        "Our AI-powered cost assessment engine analyzes your cloud spending patterns and identifies optimization opportunities in real-time. Get personalized recommendations that can reduce your cloud costs by up to 40% while maintaining performance.",
      features: [
        "Real-time cost monitoring and analysis",
        "AI-driven savings recommendations",
        "Automated resource right-sizing",
        "Reserved instance optimization",
        "Multi-cloud cost comparison"
      ],
      icon: TrendingDown,
      secondaryIcon: DollarSign,
      imageLeft: true,
      image: cost_page
    },
    {
      id: 2,
      title: "Vulnerability Management",
      subtitle: "AWS Security Hub Integration",
      description:
        "Seamlessly integrate with AWS Security Hub to centralize security findings and leverage our AI CLI fix generator. Automatically detect, prioritize, and remediate vulnerabilities across your cloud infrastructure with intelligent automation.",
      features: [
        "AWS Security Hub integration",
        "AI-powered CLI fix generation",
        "Automated vulnerability scanning",
        "Risk-based prioritization",
        "One-click remediation scripts"
      ],
      icon: Shield,
      secondaryIcon: AlertTriangle,
      imageLeft: false,
      image: vul_scan
    },
    {
      id: 3,
      title: "Compliance Audits",
      subtitle: "30+ Compliance Framework Reports",
      description:
        "Generate comprehensive compliance reports across 30+ industry frameworks using Prowler integration. Our automated auditing system ensures continuous compliance monitoring and generates detailed reports for SOC 2, PCI DSS, HIPAA, and more.",
      features: [
        "30+ compliance framework support",
        "Prowler integration for AWS auditing",
        "Automated report generation",
        "Continuous compliance monitoring",
        "Executive dashboard and insights"
      ],
      icon: FileCheck,
      secondaryIcon: CheckCircle,
      imageLeft: true,
      image: compliance
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
            CompliTru AI's comprehensive platform addresses the three critical aspects of cloud management that every enterprise needs to master.
          </p>
        </div>

        <div className="space-y-32">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="relative">
              <div className={`flex flex-col ${pillar.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-12`}>
                {/* Image Section (Full Height/Width) */}
                <div className="flex-1 flex items-stretch">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover rounded-3xl shadow-lg mx-auto min-h-[350px]"
                  />
                </div>
                {/* Content Section */}
                <div className="flex-1 space-y-6 flex flex-col justify-center">
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
