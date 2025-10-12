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
                
                {/* Tagline */}
                <p
                  className="mb-6 text-lg font-light"
                  style={{ 
                    color: 'var(--color-surface)', 
                    opacity: 0.95
                  }}
                >
                  For all your cherishing moments
                </p>

                {/* Key points */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <p className="text-base font-medium" style={{ color: 'var(--color-surface)' }}>
                      Sweet memories in every bite
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <p className="text-base font-medium" style={{ color: 'var(--color-surface)' }}>
                      Premium quality • Custom orders up to 5kg
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <p className="text-base font-medium" style={{ color: 'var(--color-surface)' }}>
                      Pre-order 24 hours • Fresh delivery guaranteed
                    </p>
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-8">
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