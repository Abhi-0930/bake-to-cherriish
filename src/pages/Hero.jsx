import React from 'react';
import heroImage from '../assets/hero-photo/cover-photo.jpg';

const Hero = () => {
    return (
      <section style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }} className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px'
            }}
          >
            {/* Clean gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  `linear-gradient(90deg, rgba(107,79,57,0.85) 0%, rgba(107,79,57,0.6) 50%, rgba(107,79,57,0.0) 100%)`
              }}
            />

            {/* Content */}
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="max-w-lg">
                {/* Main heading */}
                <div className="mb-6">
                  <h1
                    className="font-bold leading-tight mb-3"
                    style={{ 
                      color: 'var(--color-surface)', 
                      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                      textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    Order from
                </h1>
                  <span 
                    className="inline-block px-4 py-2 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                    style={{ 
                      backgroundColor: 'var(--color-accent)', 
                      color: 'var(--color-surface)',
                      fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                      fontWeight: '700'
                    }}
                  >
                    BAKE TO CHERRIISH
                  </span>
                </div>
                
                {/* Quick highlights */}
                <div className="space-y-3">
                  {[
                    'Grab 50% off upto 100 on your first order',
                    'Pre order before one day of delivery',
                    'We do all kinds of customisations upto 5kg',
                    'Delivery charges applicable'
                  ].map((item) => (
                    <div className="flex items-center gap-3" key={item}>
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      ></div>
                      <p className="text-base font-medium" style={{ color: 'var(--color-surface)' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Call to actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button 
                    onClick={() => {
                      const menuSection = document.getElementById('menu');
                      if (menuSection) {
                        menuSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ 
                      backgroundColor: 'var(--color-surface)', 
                      color: 'var(--color-accent)',
                      border: '2px solid var(--color-surface)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--color-surface)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'var(--color-surface)';
                      e.target.style.color = 'var(--color-accent)';
                    }}
                  >
                    Start Your Order →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Hero;