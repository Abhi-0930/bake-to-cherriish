import React from 'react';
import { ChefHat } from 'lucide-react';

const NoResults = ({ searchQuery, hasActiveFilters, filters }) => {
  // Determine the message based on what caused no results
  const isSearchQuery = searchQuery && searchQuery.trim() !== '';
  const isFilterOnly = !isSearchQuery && hasActiveFilters;
  const isBoth = isSearchQuery && hasActiveFilters;

  const getMessage = () => {
    if (isBoth) {
      return `We couldn't find any items matching "${searchQuery}" with your current filters`;
    } else if (isSearchQuery) {
      return `We couldn't find any items matching "${searchQuery}"`;
    } else if (isFilterOnly) {
      return "No items match your current filter criteria";
    }
    return "No results found";
  };

  const getSuggestions = () => {
    if (isFilterOnly) {
      return ['Try different price ranges', 'Change variety filters', 'Clear all filters'];
    }
    return ['chocolate', 'vanilla', 'strawberry', 'cake', 'brownie', 'cookie'];
  };

  return (
    <div className="py-16 text-center" style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }}>
      <div className="max-w-md mx-auto px-4">
        {/* Baking Icon */}
        <div className="mb-6">
          <div 
            className="mx-auto w-24 h-24 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <ChefHat size={40} style={{ color: 'var(--color-surface)' }} />
          </div>
        </div>

        {/* Main Message */}
        <h3 style={{ color: 'var(--color-text)' }} className="text-xl font-bold mb-2">
          No Results Found
        </h3>
        
        <p style={{ color: 'var(--color-text-secondary)' }} className="text-base mb-4">
          {getMessage()}
        </p>

        {/* Current Filters Display */}
        {hasActiveFilters && (
          <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(107,79,57,0.1)' }}>
            <p style={{ color: 'var(--color-text)' }} className="text-sm font-medium mb-2">Current Filters:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.priceRange !== 'all' && (
                <span
                  className="px-2 py-1 rounded text-xs"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                >
                  {filters.priceRange === 'under-500' ? '< ₹500' :
                   filters.priceRange === '500-1000' ? '₹500-1000' :
                   filters.priceRange === '1000-1500' ? '₹1000-1500' :
                   filters.priceRange === 'above-1500' ? '> ₹1500' : filters.priceRange}
                </span>
              )}
              {filters.variety !== 'all' && (
                <span
                  className="px-2 py-1 rounded text-xs"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                >
                  {filters.variety === 'chocolate' ? 'Chocolate' :
                   filters.variety === 'vanilla' ? 'Vanilla' :
                   filters.variety === 'fruit' ? 'Fruit' :
                   filters.variety === 'nut' ? 'Nut' :
                   filters.variety === 'specialty' ? 'Specialty' :
                   filters.variety === 'brownie' ? 'Brownies' :
                   filters.variety === 'cookie' ? 'Cookies' :
                   filters.variety === 'muffin' ? 'Muffins' :
                   filters.variety === 'cake' ? 'Cakes' : filters.variety}
                </span>
              )}
              {filters.itemType !== 'all' && (
                <span
                  className="px-2 py-1 rounded text-xs"
                  style={{ backgroundColor: 'var(--color-success)', color: 'white' }}
                >
                  {filters.itemType === 'cakes' ? 'Cakes' :
                   filters.itemType === 'brownies' ? 'Brownies' :
                   filters.itemType === 'cookies' ? 'Cookies' :
                   filters.itemType === 'muffins' ? 'Muffins' : filters.itemType}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Suggestions */}
        <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <p className="mb-2">Try:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {getSuggestions().map((suggestion) => (
              <span
                key={suggestion}
                className="px-3 py-1 rounded-full text-xs"
                style={{ 
                  backgroundColor: 'var(--color-primary)', 
                  color: 'var(--color-text)',
                  opacity: 0.8
                }}
              >
                {suggestion}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center space-x-2">
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--color-accent)' }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--color-primary)', animationDelay: '0.2s' }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--color-success)', animationDelay: '0.4s' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NoResults;
