import React, { useState } from 'react';
import { Anchor, ShieldCheck, Menu, X, FileText, ChevronRight, Globe, Phone, Mail, Check } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenRFQModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenRFQModal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'supply', label: t.nav.supply, badge: '5 Core Pillars' },
    { id: 'logistics', label: t.nav.logistics },
    { id: 'about', label: t.nav.about },
    { id: 'clients', label: t.nav.clients },
    { id: 'team', label: t.nav.team },
    { id: 'partners', label: t.nav.partners },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all">
      {/* Top Utility Bar for Institutional Standard */}
      <div className="bg-[#192227] text-stone-300 text-[11px] py-1.5 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              {language === 'fr' 
                ? 'Importateur Exclusif Papier Double A au Cameroun' 
                : 'Double A A4 Exclusive Importer in Cameroon'}
            </span>
            <span className="hidden sm:inline text-stone-500">|</span>
            <span className="hidden sm:inline text-stone-300">
              Douala Port Hub: Blvd de la Liberté, Akwa
            </span>
          </div>

          <div className="flex items-center space-x-5 text-stone-300 font-mono text-[10px]">
            <a href="mailto:trade@wardiere.com" className="hover:text-amber-300 flex items-center gap-1 transition-colors">
              <Mail className="w-3 h-3 text-amber-400" />
              trade@wardiere.com
            </a>
            <span className="text-stone-600">|</span>
            <a href="tel:+237233428819" className="hover:text-amber-300 flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" />
              +237 233 42 88 19
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Flagship */}
          <div 
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3.5 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-900/10 group-hover:scale-105 transition-all">
              <Anchor className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-luxury text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                  Wardiere & Co.
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/80 rounded-full">
                  {language === 'fr' ? 'Import & Négoce' : 'Imports & Supply'}
                </span>
              </div>
              <p className="text-[10px] text-stone-500 font-medium tracking-wide uppercase font-mono">
                Cameroun • USA • Europe • Asie
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-xs font-medium tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'text-amber-900 font-semibold bg-amber-50/80 shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Switcher & RFQ Button */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Bilingual Switcher (EN | FR) */}
            <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200/80">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-amber-900 shadow-xs border border-stone-200/70'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Switch to English"
              >
                <span>🇬🇧</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  language === 'fr'
                    ? 'bg-white text-amber-900 shadow-xs border border-stone-200/70'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Passer en Français"
              >
                <span>🇫🇷</span>
                <span>FR</span>
              </button>
            </div>

            <button
              id="header-rfq-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-semibold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all flex items-center space-x-2 cursor-pointer active:scale-98"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.nav.rfqButton}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger & Mobile Language Switcher */}
          <div className="xl:hidden flex items-center space-x-2">
            
            {/* Mobile Lang Quick Toggle */}
            <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-xs font-mono font-bold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-white text-amber-900 shadow-2xs' : 'text-stone-500'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded ${language === 'fr' ? 'bg-white text-amber-900 shadow-2xs' : 'text-stone-500'}`}
              >
                FR
              </button>
            </div>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-5 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-left transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-amber-50 text-amber-900 font-bold border-l-3 border-amber-600'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>
              );
            })}

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 rounded-xl bg-amber-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm cursor-pointer active:scale-98"
              >
                <FileText className="w-4 h-4" />
                <span>{t.nav.rfqButton}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
