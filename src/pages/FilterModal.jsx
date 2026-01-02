import React, { useState, useRef } from 'react';
import { ArrowLeft, X } from 'lucide-react';

const FilterPanel = ({ isOpen, onClose, filters, onApplyFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const panelRef = useRef(null);

  // Minimum distance for swipe
  const minSwipeDistance = 50;

  const handleFilterChange = (filterType, value) => {
    setLocalFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    // Apply filter immediately
    onApplyFilters({
      ...localFilters,
      [filterType]: value
    });
  };

  const handleReset = () => {
    const resetFilters = {
      priceRange: 'all',
      variety: 'all'
    };
    setLocalFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isDownSwipe = distance < -minSwipeDistance;
    
    if (isDownSwipe) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end lg:items-start lg:justify-end"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      {/* Bottom Sheet on Mobile, Compact Sidebar on Desktop */}
      <div 
        ref={panelRef}
        className="w-full lg:w-64 bg-white rounded-t-2xl lg:rounded-none h-3/4 lg:h-full overflow-y-auto shadow-2xl"
        style={{ 
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag Handle for Mobile */}
        <div className="flex justify-center pt-2 pb-1 sm:hidden">
          <div className="w-8 h-1 rounded-full" style={{ backgroundColor: 'rgba(107,79,57,0.3)' }}></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-3 lg:p-4 border-b" style={{ borderColor: 'rgba(107,79,57,0.2)' }}>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-all duration-200"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <ArrowLeft size={16} />
            </button>
            <h3 style={{ color: 'var(--color-text)' }} className="text-base font-bold">Filters</h3>
          </div>
          <button
            onClick={handleReset}
            className="px-2 py-1 rounded text-xs font-medium transition-all duration-200"
            style={{ 
              color: 'var(--color-text-secondary)',
              backgroundColor: 'transparent',
              border: '1px solid rgba(107,79,57,0.3)'
            }}
          >
            Reset
          </button>
        </div>

        {/* Filter Sections */}
        <div className="p-3 lg:p-4 space-y-4">
          {/* Price Range */}
          <div className="lg:bg-transparent rounded-xl lg:rounded-none p-3 lg:p-0" style={{ backgroundColor: 'rgba(107,79,57,0.05)' }}>
            <div className="flex items-center justify-between mb-2">
              <h4 style={{ color: 'var(--color-text)' }} className="font-semibold text-sm">Price Range</h4>
              <span style={{ color: 'var(--color-accent)' }} className="text-xs font-medium">
                {localFilters.priceRange === 'all' ? 'All' :
                 localFilters.priceRange === 'under-500' ? '< ₹500' :
                 localFilters.priceRange === '500-1000' ? '₹500-1000' :
                 localFilters.priceRange === '1000-1500' ? '₹1000-1500' :
                 localFilters.priceRange === 'above-1500' ? '> ₹1500' : 'All'}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-1 lg:gap-2">
              {[
                { value: 'all', label: 'All' },
                { value: 'under-500', label: '< ₹500' },
                { value: '500-1000', label: '₹500-1000' },
                { value: '1000-1500', label: '₹1000-1500' },
                { value: 'above-1500', label: '> ₹1500' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange('priceRange', option.value)}
                  className={`p-2 lg:p-2 rounded text-xs font-medium transition-all duration-200 ${
                    localFilters.priceRange === option.value 
                      ? 'text-white' 
                      : 'border'
                  }`}
                  style={{
                    backgroundColor: localFilters.priceRange === option.value ? 'var(--color-accent)' : 'var(--color-surface)',
                    borderColor: localFilters.priceRange === option.value ? 'var(--color-accent)' : 'rgba(107,79,57,0.3)',
                    color: localFilters.priceRange === option.value ? 'white' : 'var(--color-text)'
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Variety */}
          <div className="lg:bg-transparent rounded-xl lg:rounded-none p-3 lg:p-0" style={{ backgroundColor: 'rgba(107,79,57,0.05)' }}>
            <div className="flex items-center justify-between mb-2">
              <h4 style={{ color: 'var(--color-text)' }} className="font-semibold text-sm">Variety</h4>
              <span style={{ color: 'var(--color-accent)' }} className="text-xs font-medium">
                {localFilters.variety === 'all' ? 'All' :
                 localFilters.variety === 'chocolate' ? 'Chocolate' :
                 localFilters.variety === 'vanilla' ? 'Vanilla' :
                 localFilters.variety === 'fruit' ? 'Fruit' :
                 localFilters.variety === 'nut' ? 'Nut' :
                 localFilters.variety === 'specialty' ? 'Specialty' :
                 localFilters.variety === 'brownie' ? 'Brownies' :
                 localFilters.variety === 'cookie' ? 'Cookies' :
                 localFilters.variety === 'muffin' ? 'Muffins' :
                 localFilters.variety === 'cake' ? 'Cakes' : 'All'}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-1 lg:gap-2">
              {[
                { value: 'all', label: 'All' },
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'vanilla', label: 'Vanilla' },
                { value: 'fruit', label: 'Fruit' },
                { value: 'nut', label: 'Nut' },
                { value: 'specialty', label: 'Specialty' },
                { value: 'brownie', label: 'Brownies' },
                { value: 'cookie', label: 'Cookies' },
                { value: 'muffin', label: 'Muffins' },
                { value: 'cake', label: 'Cakes' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange('variety', option.value)}
                  className={`p-2 lg:p-2 rounded text-xs font-medium transition-all duration-200 ${
                    localFilters.variety === option.value 
                      ? 'text-white' 
                      : 'border'
                  }`}
                  style={{
                    backgroundColor: localFilters.variety === option.value ? 'var(--color-accent)' : 'var(--color-surface)',
                    borderColor: localFilters.variety === option.value ? 'var(--color-accent)' : 'rgba(107,79,57,0.3)',
                    color: localFilters.variety === option.value ? 'white' : 'var(--color-text)'
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Item Type */}
          <div className="lg:bg-transparent rounded-xl lg:rounded-none p-3 lg:p-0" style={{ backgroundColor: 'rgba(107,79,57,0.05)' }}>
            <div className="flex items-center justify-between mb-2">
              <h4 style={{ color: 'var(--color-text)' }} className="font-semibold text-sm">Item Type</h4>
              <span style={{ color: 'var(--color-accent)' }} className="text-xs font-medium">
                {localFilters.itemType === 'all' ? 'All' :
                 localFilters.itemType === 'cakes' ? 'Cakes' :
                 localFilters.itemType === 'brownies' ? 'Brownies' :
                 localFilters.itemType === 'cookies' ? 'Cookies' :
                 localFilters.itemType === 'muffins' ? 'Muffins' : 'All'}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-1 lg:gap-2">
              {[
                { value: 'all', label: 'All' },
                { value: 'cakes', label: 'Cakes' },
                { value: 'brownies', label: 'Brownies' },
                { value: 'cookies', label: 'Cookies' },
                { value: 'muffins', label: 'Muffins' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange('itemType', option.value)}
                  className={`p-2 lg:p-2 rounded text-xs font-medium transition-all duration-200 ${
                    localFilters.itemType === option.value 
                      ? 'text-white' 
                      : 'border'
                  }`}
                  style={{
                    backgroundColor: localFilters.itemType === option.value ? 'var(--color-accent)' : 'var(--color-surface)',
                    borderColor: localFilters.itemType === option.value ? 'var(--color-accent)' : 'rgba(107,79,57,0.3)',
                    color: localFilters.itemType === option.value ? 'white' : 'var(--color-text)'
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
