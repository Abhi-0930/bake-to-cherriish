import React from 'react';

const Footer = () => {
    return (
      <footer id="contact" style={{ backgroundColor: 'var(--bakery-chocolate-brown)', color: 'var(--color-surface)' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="mb-3">
                <img 
                  src="/bakery-logo.jpg" 
                  alt="BAKE TO CHERRIISH" 
                  className="h-25 w-auto"
                  width="160"
                  height="80"
                  loading="lazy"
                />
              </div>
              <p className="text-base opacity-90 mb-4">Where every bite tells a story</p>
              <p className="text-sm opacity-80">Celebrating with cake, cherishing each treat</p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4 text-lg">Contact</h5>
              <div className="space-y-2 text-sm opacity-90">
                <p>
                  📧 <a href="mailto:kkshravani2001@gmail.com" className="underline hover:opacity-80">kkshravani2001@gmail.com</a>
                </p>
                <p>
                  📞 <a href="tel:+918019574555" className="underline hover:opacity-80">+91 8019574555</a>
                </p>
                <p>📍 Uppal, Hyderabad</p>
              </div>
            </div>
            
            {/* <div>
              <h5 className="font-bold mb-4 text-lg">Follow Us</h5>
              <div className="space-y-2">
                <a href="#" style={{ color: 'var(--color-primary)' }} className="block hover:opacity-80 transition">Instagram</a>
                <a href="#" style={{ color: 'var(--color-primary)' }} className="block hover:opacity-80 transition">Facebook</a>
                <a href="#" style={{ color: 'var(--color-primary)' }} className="block hover:opacity-80 transition">Twitter</a>
              </div>
            </div> */}
          </div>
          
          <div className="pt-8 border-t border-opacity-20" style={{ borderColor: 'var(--color-primary)' }}>
            <p className="text-center text-sm opacity-80">© 2025 BAKE TO CHERRIISH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
  