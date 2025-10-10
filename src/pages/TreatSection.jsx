import React from 'react';
import { menuData } from '../constants';
import ProductCard from './ProductCard';

const TreatsSection = ({ searchQuery = '' }) => {
    const normalize = (s) => (s || '').toString().toLowerCase();
    const q = normalize(searchQuery);
    const matches = (item) => !q || normalize(item.name).includes(q) || normalize(item.desc).includes(q);
    
    const browniesFiltered = menuData.brownies.filter(matches);
    const cookiesFiltered = menuData.cookies.filter(matches);
    const muffinsFiltered = menuData.muffins.filter(matches);
    
    const hasResults = browniesFiltered.length > 0 || cookiesFiltered.length > 0 || muffinsFiltered.length > 0;
    
    if (!hasResults) return null;
    
    return (
      <section className="py-10" style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }} id="treats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 style={{ color: 'var(--color-text)' }} className="text-2xl lg:text-3xl font-bold mb-1">
              Sweet Treats
            </h3>
            <p style={{ color: 'var(--color-text)' }} className="opacity-70 text-base">
              Delicious bites and sweet indulgences for every craving
            </p>
          </div>
          
          <div className="space-y-10">
            {browniesFiltered.length > 0 && (
              <div>
                <h4 style={{ color: 'var(--color-text)' }} className="text-xl font-bold mb-4">Brownies</h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {browniesFiltered.map((item, index) => (
                    <ProductCard key={index} item={item} type="single" />
                  ))}
                </div>
              </div>
            )}
  
            {cookiesFiltered.length > 0 && (
              <div>
                <h4 style={{ color: 'var(--color-text)' }} className="text-xl font-bold mb-4">Cookies (Pack of 6)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
                  {cookiesFiltered.map((item, index) => (
                    <ProductCard key={index} item={item} type="single" />
                  ))}
                </div>
              </div>
            )}
  
            {muffinsFiltered.length > 0 && (
              <div>
                <h4 style={{ color: 'var(--color-text)' }} className="text-xl font-bold mb-4">Muffins & Cupcakes (Pack of 6)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
                  {muffinsFiltered.map((item, index) => (
                    <ProductCard key={index} item={item} type="muffin" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

export default TreatsSection;
  