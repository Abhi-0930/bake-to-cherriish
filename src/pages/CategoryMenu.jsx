import React from 'react';
// import img from '../assets/image.jpg';

// Import menu item images
import christmasCakeImg from '../assets/chirstmas-cakes/santa-cupcakes.jpg';
import classicCakeImg from '../assets/menu-items/classic-cake.jpg';
import premiumCakeImg from '../assets/menu-items/premium-cake.jpg';
import chefSpecialityImg from '../assets/menu-items/chef-speciality.jpg';
import brownieImg from '../assets/menu-items/brownie.jpg';
import cookieImg from '../assets/menu-items/cookie.jpg';
import muffinsImg from '../assets/menu-items/muffins.jpg';
// Create image mapping for menu categories
const categoryImages = {
  'Christmas Menu': christmasCakeImg,
  'Classic Cakes': classicCakeImg,
  'Premium Cakes': premiumCakeImg,
  "Chef's Specials": chefSpecialityImg,
  'Brownies': brownieImg,
  'Cookies': cookieImg,
  'Muffins & Cupcakes': muffinsImg
};

const categories = [
  { label: 'Christmas Menu', href: '#christmas' },
  { label: 'Classic Cakes', href: '#menu' },
  { label: 'Premium Cakes', href: '#premium' },
  { label: "Chef's Specials", href: '#chef-specials' },
  { label: 'Brownies', href: '#brownies' },
  { label: 'Cookies', href: '#cookies' },
  { label: 'Muffins & Cupcakes', href: '#muffins' }
];

const CategoryMenu = ({ selectedCategory, onSelect }) => {
  return (
    <section className="py-8" id="category-menu" style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Menu Options</h3>
        <p className="mb-6" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
          Explore categories and jump right in.
        </p>

        {/* Scrollable Container - Horizontal on mobile, Centered on desktop */}
        <div
          className="flex space-x-6 overflow-x-auto lg:overflow-x-visible lg:justify-center scrollbar-hide pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
          {categories.map((c) => {
            const id = c.href.replace('#', '');
            const isSelected = selectedCategory === id;
            return (
              <button
                key={c.label}
                onClick={() => onSelect(id)}
                className="group text-center flex-shrink-0"
                style={{ outline: 'none' }}
              >
                <div
                  className="mx-auto rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 ring-2 transition-all duration-300"
                  style={{
                    ringColor: isSelected ? 'var(--color-accent)' : 'rgba(107,79,57,0.3)',
                    boxShadow: isSelected ? '0 6px 14px rgba(0,0,0,0.12)' : 'none',
                    transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                    border: isSelected ? '3px solid var(--color-accent)' : '3px solid transparent'
                  }}
                >
                  <img src={categoryImages[c.label]} alt={c.label} className="w-full h-full object-cover" />
                </div>
                <div
                  className="mt-3 font-semibold text-sm sm:text-base whitespace-nowrap"
                  style={{ color: 'var(--color-text)', opacity: isSelected ? 1 : 0.9 }}
                >
                  {c.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryMenu;


