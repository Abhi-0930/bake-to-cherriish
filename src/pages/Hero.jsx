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
                  className="mb-4 text-lg font-light"
                  style={{ 
                    color: 'var(--color-surface)', 
                    opacity: 0.95
                  }}
                >
                  For all your cherishing moments
                </p>

                {/* Key points */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <div>
                      <p className="text-base font-medium" style={{ color: 'var(--color-surface)' }}>
                        Cake isn't just piece of sweet it's a sweet memory.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <div>
                      <p className="text-base font-medium" style={{ color: 'var(--color-surface)' }}>
                        Discounts are available here on prices, don't dismiss your cravings on cake pieces.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <div>
                      <p className="text-base font-medium" style={{ color: 'var(--color-surface)' }}>
                        Great things take time, so please order prior.
                      </p>
                      <div className="mt-1 ml-4 space-y-1">
                        <p className="text-sm opacity-80" style={{ color: 'var(--color-surface)' }}>
                          • Pre-order before 1 day of delivery
                        </p>
                        <p className="text-sm opacity-80" style={{ color: 'var(--color-surface)' }}>
                          • All kinds of customisations upto 5kgs
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <div>
                      <p className="text-base font-medium" style={{ color: 'var(--color-surface)' }}>
                        We charge for delivery because we make sure to recharge your mood after delivery.
                      </p>
                      <div className="mt-1 ml-4">
                        <p className="text-sm opacity-80" style={{ color: 'var(--color-surface)' }}>
                          • Delivery charges applicable
                        </p>
                      </div>
                    </div>
                  </div>
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

                  <a
                    href="tel:+918019574555"
                    className="px-5 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      color: 'var(--color-surface)',
                      border: '1.5px solid rgba(255,255,255,0.35)'
                    }}
                  >
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/918019574555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{
                      backgroundColor: '#25D366',
                      color: '#0b3b25',
                      border: '1.5px solid rgba(255,255,255,0.25)'
                    }}
                    aria-label="Chat on WhatsApp"
                  >
                    {/* WhatsApp icon (inline SVG) */}
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                      <path d="M19.11 17.23c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
                      <path d="M27.1 4.9C24.2 2 20.3.5 16.2.5 7.9.5 1.2 7.2 1.2 15.5c0 2.5.6 4.9 1.8 7.1L.5 31.5l9-2.4c2.1 1.1 4.4 1.7 6.8 1.7 8.3 0 15-6.7 15-15 0-4.1-1.6-7.9-4.7-10.9zM16.3 28.4c-2.1 0-4.1-.6-5.9-1.6l-.4-.2-5.4 1.4 1.4-5.3-.2-.4c-1.1-1.9-1.7-4.1-1.7-6.3C4.1 8.4 9.6 2.9 16.3 2.9c3.2 0 6.2 1.2 8.5 3.5 2.3 2.3 3.5 5.3 3.5 8.5 0 6.8-5.5 12.5-12 13.5z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Hero;