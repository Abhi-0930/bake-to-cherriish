import React, { useState } from 'react';
import { menuData } from './constants';
import { Filter } from 'lucide-react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import CategoryMenu from './pages/CategoryMenu';
import MenuSection from './pages/MenuSection';
import IndividualTreatSection from './pages/IndividualTreatSection';
import NoResults from './pages/NoResults';
import FilterPanel from './pages/FilterModal';
import Footer from './pages/Footer';
import AnimatedSearchInput from './components/AnimatedSearchInput';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // 'menu' | 'premium' | 'chef-specials' | 'brownies' | 'cookies' | 'muffins' | null
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    variety: 'all',
    itemType: 'all'
  });

  const handleCategoryToggle = (id) => {
    setSelectedCategory((prev) => (prev === id ? null : id));
  };

  const normalize = (s) => (s || '').toString().toLowerCase();
  
  const matches = (item) => {
    const q = normalize(searchQuery);
    
    // Search filter
    const searchMatch = !q || (
      normalize(item.name).includes(q) ||
      normalize(item.desc).includes(q)
    );
    
    if (!searchMatch) return false;
    
    // Price filter
    const priceMatch = (() => {
      if (filters.priceRange === 'all') return true;
      
      const price = item.half || item.price || item.muffin || 0;
      
      switch (filters.priceRange) {
        case 'under-500': return price < 500;
        case '500-1000': return price >= 500 && price <= 1000;
        case '1000-1500': return price >= 1000 && price <= 1500;
        case 'above-1500': return price > 1500;
        default: return true;
      }
    })();
    
    // Variety filter
    const varietyMatch = (() => {
      if (filters.variety === 'all') return true;
      
      const name = normalize(item.name);
      const desc = normalize(item.desc);
      
      switch (filters.variety) {
        case 'chocolate': return name.includes('chocolate') || desc.includes('chocolate');
        case 'vanilla': return name.includes('vanilla') || desc.includes('vanilla');
        case 'fruit': return name.includes('strawberry') || name.includes('blueberry') || name.includes('pineapple') || name.includes('berry') || name.includes('fruit') || name.includes('lychee') || name.includes('apricot');
        case 'nut': return name.includes('walnut') || name.includes('pistachio') || name.includes('almond') || name.includes('nut') || name.includes('hazelnut');
        case 'specialty': return name.includes('chef') || name.includes('special') || name.includes('premium') || name.includes('tiramisu') || name.includes('rasmalai') || name.includes('cheesecake');
        case 'brownie': return name.includes('brownie');
        case 'cookie': return name.includes('cookie');
        case 'muffin': return name.includes('muffin') || name.includes('cupcake');
        case 'cake': return name.includes('cake');
        default: return true;
      }
    })();
    
    // Item Type filter
    const itemTypeMatch = (() => {
      if (filters.itemType === 'all') return true;
      
      const name = normalize(item.name);
      
      switch (filters.itemType) {
        case 'cakes': return name.includes('cake');
        case 'brownies': return name.includes('brownie');
        case 'cookies': return name.includes('cookie');
        case 'muffins': return name.includes('muffin') || name.includes('cupcake');
        default: return true;
      }
    })();
    
    return searchMatch && priceMatch && varietyMatch && itemTypeMatch;
  };

  const classicFiltered = menuData.classicCakes.filter(matches);
  const premiumFiltered = menuData.premiumCakes.filter(matches);
  const chefFiltered = menuData.chefSpeciality.filter(matches);
  
  // Check if treats section has any matching results
  const browniesFiltered = menuData.brownies.filter(matches);
  const cookiesFiltered = menuData.cookies.filter(matches);
  const muffinsFiltered = menuData.muffins.filter(matches);

  // Check if there are any results at all
  const hasAnyResults = classicFiltered.length > 0 || premiumFiltered.length > 0 || chefFiltered.length > 0 || browniesFiltered.length > 0 || cookiesFiltered.length > 0 || muffinsFiltered.length > 0;
  
  // Check if filters are applied (not default values)
  const hasActiveFilters = filters.priceRange !== 'all' || filters.variety !== 'all' || filters.itemType !== 'all';
  
  // Show no results if: search query exists OR filters are applied, but no results found
  const shouldShowNoResults = (searchQuery.trim() !== '' || hasActiveFilters) && !hasAnyResults;

  return (
    <div style={{ backgroundColor: 'var(--bakery-vanilla-cream)', fontFamily: 'var(--font-family-body)', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <CategoryMenu selectedCategory={selectedCategory} onSelect={handleCategoryToggle} />

      {/* Divider under category menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t mx-auto w-10/12" style={{ borderColor: 'rgba(107,79,57,0.2)' }} />
      </div>

      {/* Search Input and Filter - Above Classic Cakes */}
      {(!selectedCategory || selectedCategory === 'menu') && (
        <div className="py-6 relative" style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 w-full">
              <AnimatedSearchInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 pl-4 pr-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-opacity-50 w-full sm:min-w-96 md:min-w-[500px] lg:min-w-[700px] xl:min-w-[900px] 2xl:min-w-[1200px]"
                style={{ 
                  borderColor: 'rgba(107,79,57,0.3)', 
                  color: 'var(--color-text)',
                  backgroundColor: 'var(--color-surface)',
                  fontSize: '16px',
                  height: '40px'
                }}
              />
              <button
                onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
                className="rounded-lg border flex items-center justify-center transition-colors hover:shadow-md flex-shrink-0"
                style={{ 
                  borderColor: 'rgba(107,79,57,0.3)', 
                  backgroundColor: isFilterModalOpen ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: isFilterModalOpen ? 'var(--color-surface)' : 'var(--color-text)',
                  fontSize: '14px',
                  width: '40px',
                  height: '40px'
                }}
              >
                <Filter size={16} />
              </button>
            </div>
            
            {/* Overlay Filter Panel */}
            <FilterPanel
              isOpen={isFilterModalOpen}
              onClose={() => setIsFilterModalOpen(false)}
              filters={filters}
              onApplyFilters={setFilters}
            />
          </div>
        </div>
      )}

      {(!selectedCategory || selectedCategory === 'menu') && classicFiltered.length > 0 && (
        <MenuSection 
          id="menu"
          title="Classic Cakes" 
          subtitle="Timeless favorites made with love"
          items={classicFiltered} 
          type="cake"
          section="classic"
        />
      )}
      {(!selectedCategory || selectedCategory === 'menu') && classicFiltered.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mx-auto w-10/12" style={{ borderColor: 'rgba(107,79,57,0.2)' }} />
        </div>
      )}
      {(!selectedCategory || selectedCategory === 'premium') && premiumFiltered.length > 0 && (
        <>
          <MenuSection 
            id="premium"
            title="Premium Cakes" 
            subtitle="Luxurious flavors for special moments"
            items={premiumFiltered} 
            type="cake"
            section="premium"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t mx-auto w-10/12" style={{ borderColor: 'rgba(107,79,57,0.2)' }} />
          </div>
        </>
      )}
      {(!selectedCategory || selectedCategory === 'chef-specials') && chefFiltered.length > 0 && (
        <MenuSection 
          id="chef-specials"
          title="Chef's Speciality" 
          subtitle="Signature creations that define excellence"
          items={chefFiltered} 
          type="single"
          section="chef"
        />
      )}
      {(!selectedCategory || selectedCategory === 'chef-specials') && chefFiltered.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mx-auto w-10/12" style={{ borderColor: 'rgba(107,79,57,0.2)' }} />
        </div>
      )}

      {/* Individual Treat Sections */}
      {(!selectedCategory || selectedCategory === 'brownies') && <IndividualTreatSection treatType="brownies" searchQuery={searchQuery} />}
      {(!selectedCategory || selectedCategory === 'brownies') && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mx-auto w-10/12" style={{ borderColor: 'rgba(107,79,57,0.2)' }} />
        </div>
      )}

      {(!selectedCategory || selectedCategory === 'cookies') && <IndividualTreatSection treatType="cookies" searchQuery={searchQuery} />}
      {(!selectedCategory || selectedCategory === 'cookies') && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mx-auto w-10/12" style={{ borderColor: 'rgba(107,79,57,0.2)' }} />
        </div>
      )}

      {(!selectedCategory || selectedCategory === 'muffins') && <IndividualTreatSection treatType="muffins" searchQuery={searchQuery} />}
      {(!selectedCategory || selectedCategory === 'muffins') && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t mx-auto w-10/12" style={{ borderColor: 'rgba(107,79,57,0.2)' }} />
        </div>
      )}


      {/* Show No Results when search returns nothing */}
      {shouldShowNoResults && <NoResults searchQuery={searchQuery} hasActiveFilters={hasActiveFilters} filters={filters} />}
      
      <Footer />
    </div>
  );
};

export default App;