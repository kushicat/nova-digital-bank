import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Globe, Smartphone, ChevronRight } from 'lucide-react';
import { Page, NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', page: Page.HOME },
  { label: 'Features', page: Page.FEATURES },
  { label: 'Freelancers', page: Page.FREELANCERS },
  { label: 'Why Trust Us', page: Page.TRUST },
  { label: 'Support', page: Page.SUPPORT },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => onNavigate(Page.HOME)}
            className="cursor-pointer flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-teal-400 rounded-full border-t-transparent animate-spin-slow" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>
              Nova<span className="text-teal-500">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  currentPage === item.page ? 'text-teal-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/20">
              Download App
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-medium ${
                  currentPage === item.page ? 'text-teal-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-blue-900 text-white w-full py-3 rounded-xl font-bold">
              Download App
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-teal-500 rounded-full border-t-transparent" />
                </div>
                <span className="text-2xl font-bold text-white">Nova.</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                The bank that speaks of Young Bangladesh. 100% Digital. 0% Drama. Backed by VEON + Square Group.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 bg-slate-800 rounded-full hover:bg-teal-500 transition-colors cursor-pointer" />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Products</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-teal-400 cursor-pointer">Nova Pocket Manager</li>
                <li className="hover:text-teal-400 cursor-pointer">Gig-Link Freelancer</li>
                <li className="hover:text-teal-400 cursor-pointer">MicroLoan Engine</li>
                <li className="hover:text-teal-400 cursor-pointer">Virtual Visa Card</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-teal-400 cursor-pointer">Help Center</li>
                <li className="hover:text-teal-400 cursor-pointer">Safety & Security</li>
                <li className="hover:text-teal-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-teal-400 cursor-pointer">Report Fraud</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Download</h4>
              <div className="space-y-3">
                <button className="w-full bg-slate-800 hover:bg-slate-700 p-3 rounded-xl flex items-center gap-3 transition-colors border border-slate-700">
                  <Smartphone className="text-teal-400" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-bold text-white">Google Play</div>
                  </div>
                </button>
                <button className="w-full bg-slate-800 hover:bg-slate-700 p-3 rounded-xl flex items-center gap-3 transition-colors border border-slate-700">
                  <Smartphone className="text-teal-400" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-bold text-white">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2024 Nova Digital Bank PLC. All rights reserved. Licensed by Bangladesh Bank.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Secure & Encrypted</span>
              <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> VEON Network</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};