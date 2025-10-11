import React from 'react';
import ProductCard from './ProductCard';

const MenuSection = ({ title, subtitle, items, type, id, section, showSearch = false, searchQuery = '', onSearchChange = () => {} }) => {
    return (
      <section id={id} className="py-10" style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <h3 style={{ color: 'var(--color-text)' }} className="text-2xl lg:text-3xl font-bold mb-1">
              {title}
            </h3>
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
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {items.map((item, index) => (
              <ProductCard key={index} item={item} type={type} section={section} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default MenuSection;