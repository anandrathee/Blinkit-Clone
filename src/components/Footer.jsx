import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 px-4 md:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
         
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Useful Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Partners</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Warehouse</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Distribution</a></li>
            </ul>
          </div>

          {/* Categories Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Vegetables & Fruits</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Dairy & Breakfast</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Snacks & Frozen Food</a></li>
            </ul>
          </div>

          {/* Categories Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Tea, Coffee & Drinks</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Meat & Fish</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Beauty & Personal Care</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Left Bottom */}
          <div className="text-sm text-gray-500 flex items-center justify-center gap-4">
            <p>© BigBasket Pvt Ltd 2020.</p>
            <h1 className='text-sm font-semibold'>Download App</h1>
            <img className='w-26' src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
            <img className='w-26' src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-.14.01-.23-.03-.72.65-1.2 1.77-1.2 3.02 0 2.19 1.08 4.1 2.73 5.23-.99.28-2.05.43-3.14.43-.73 0-1.44-.03-2.13-.21v.19c0 1.49 1.07 3.43 2.48 3.78C3.6 20.5 5 20.23 6.37 19.82c1.3.83 2.94 1.32 4.68 1.32 5.62 0 8.7-4.66 8.7-10.96 0-.17 0-.33-.01-.5.75-.54 1.4-1.22 1.91-2.58z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 border border-gray-300 hover:border-gray-400 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400 text-center md:text-left">
          *Managed by BigBasket and not endorsed by/in association with any brand, on 10+ cities in India. ToFR ©
        </div>
      </div>
    </footer>
  );
};

export default Footer;
