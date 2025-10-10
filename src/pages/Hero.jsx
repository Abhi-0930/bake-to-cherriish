import React from 'react';
import heroImage from '../assets/hero-photo/cover-photo.jpg';

const Hero = () => {
    return (
      <section style={{ backgroundColor: 'var(--bakery-vanilla-cream)' }} className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-2xl overflow-hidden shadow-bakery-lg surface"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '420px'
            }}
          >
            {/* Left gradient overlay using site palette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  `linear-gradient(90deg, rgba(255,247,224,0.92) 0%, rgba(255,247,224,0.82) 35%, rgba(255,247,224,0.0) 70%)`
              }}
            />

            {/* Content */}
            <div className="relative p-8 sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <h1
                  className="font-bold leading-tight mb-4"
                  style={{ color: 'var(--color-text)', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
                >
                  Order your
                  <br />
                  favourite food here
                </h1>
                <p
                  className="mb-6"
                  style={{ color: 'var(--color-text)', opacity: 0.9 }}
                >
                  Choose from a diverse menu featuring a delectable array of dishes.
                  Our mission is to satisfy your cravings and elevate your dining
                  experience, one delicious meal at a time.
                </p>

                {/* <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: colors.mintGreen, color: colors.chocolateBrown }}
                  >
                    Bakery
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: colors.mintGreen, color: colors.chocolateBrown }}
                  >
                    Desserts
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: colors.mintGreen, color: colors.chocolateBrown }}
                  >
                    Cakes
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Hero;
