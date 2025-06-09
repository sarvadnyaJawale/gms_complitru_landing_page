import React from 'react';
import Hero from './Hero';
import ProductPillars from './ProductPillars';
import CTA from './CTA';

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductPillars />
      <CTA />
    </div>
  );
};

export default ProductPage;