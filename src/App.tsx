import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SupplyPage } from './components/SupplyPage';
import { LogisticsPage } from './components/LogisticsPage';
import { AboutPage } from './components/AboutPage';
import { ClientsPage } from './components/ClientsPage';
import { TeamPage } from './components/TeamPage';
import { PartnersPage } from './components/PartnersPage';
import { ContactPage } from './components/ContactPage';
import { CommodityDetailModal } from './components/CommodityDetailModal';
import { getCommodityItems } from './data/importData';
import { PageId, CommodityItem } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { language } = useLanguage();
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedDetailItemId, setSelectedDetailItemId] = useState<string | null>(null);
  const [selectedRFQItem, setSelectedRFQItem] = useState<CommodityItem | undefined>(undefined);

  const commodityItems = getCommodityItems(language);
  const selectedDetailItem = selectedDetailItemId 
    ? commodityItems.find(item => item.id === selectedDetailItemId) || null 
    : null;

  // Sync with browser hash if present for direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'supply', 'logistics', 'about', 'clients', 'team', 'partners', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRFQModal = (item?: CommodityItem) => {
    if (item) {
      setSelectedRFQItem(item);
    }
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c2427] flex flex-col font-sans selection:bg-amber-700 selection:text-white">
      
      {/* 1. Universal Top Header & Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenRFQModal={() => handleOpenRFQModal()}
      />

      {/* 2. Main Multi-Page Body */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCommodity={(item) => setSelectedDetailItemId(item.id)}
            onOpenRFQModal={handleOpenRFQModal}
          />
        )}

        {activePage === 'supply' && (
          <SupplyPage
            onSelectCommodity={(item) => setSelectedDetailItemId(item.id)}
            onOpenRFQModal={handleOpenRFQModal}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'logistics' && (
          <LogisticsPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'clients' && (
          <ClientsPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'team' && (
          <TeamPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'partners' && (
          <PartnersPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            initialCommodity={selectedRFQItem}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 3. Global Light Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* 4. Deep Inspection Modal */}
      <CommodityDetailModal
        item={selectedDetailItem}
        onClose={() => setSelectedDetailItemId(null)}
        onOpenRFQ={(item) => {
          setSelectedDetailItemId(null);
          handleOpenRFQModal(item);
        }}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
