import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

// ============================================================================
// HEADER.JSX - Sticky Navigation
// ============================================================================
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 2px 8px rgba(107,79,57,0.15)' }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div>
            <a href="#" className="hover:opacity-80 transition-opacity flex items-center">
              <img 
                src="/bakery-logo.jpg" 
                alt="BAKE TO CHERRIISH" 
                className="h-12 sm:h-14 w-auto"
                width="140"
                height="56"
              />
              <span className="hidden lg:block ml-3 text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                BAKE TO CHERRIISH
              </span>
            </a>
          </div>

          {/* Center: Primary Nav (Desktop) */}
          <nav className="hidden lg:flex space-x-10">
            {[
              { label: 'Home', href: '#' },
              { label: 'Menu', href: '#menu' },
              { label: 'Contact Us', href: '#contact' }
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{ color: 'var(--color-text)' }}
                className="text-base font-medium transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: 'var(--color-text)' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-40" style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 12px rgba(107,79,57,0.2)' }}>
            <div className="px-4 py-4">
              {[
                { label: 'Home', href: '#' },
                { label: 'Menu', href: '#menu' },
                { label: 'Contact Us', href: '#contact' }
              ].map(link => (
                <a 
                  key={link.label}
                  href={link.href}
                  style={{ color: 'var(--color-text)' }}
                  className="block py-3 text-base font-medium transition-colors hover:text-black border-b border-gray-100 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;