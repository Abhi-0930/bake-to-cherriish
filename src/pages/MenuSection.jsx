import React from 'react';
import ProductCard from './ProductCard';

const MenuSection = ({ title, subtitle, items, type, id, section, showSearch = false, searchQuery = '', onSearchChange = () => {} }) => {
    return (
      <section id={id} className="py-10" style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-1">
              <h3 style={{ color: 'var(--color-text)' }} className="text-2xl lg:text-3xl font-bold">
                {title}
              </h3>
              {/* Eggless Indicator */}
              <div 
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                style={{ 
                  backgroundColor: '#10B981', 
                  color: 'white'
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'white' }}
                ></div>
                Eggless
              </div>
            </div>
            {subtitle && (
              <p style={{ color: 'var(--color-text)' }} className="opacity-70 text-base">
                {subtitle}
              </p>
            )}
          </div>

          {showSearch && (
            <div className="mb-4">
              <input
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={`Search for food...`}
                className="w-full pl-4 pr-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ 
                  borderColor: 'rgba(107,79,57,0.3)', 
                  color: 'var(--color-text)',
                  backgroundColor: 'var(--color-surface)'
                }}
              />
            </div>
          )}
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-5">
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-64 sm:w-72 md:w-auto">
                <ProductCard item={item} type={type} section={section} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default MenuSection;