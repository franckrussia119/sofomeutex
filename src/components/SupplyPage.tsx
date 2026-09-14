import React, { useState } from 'react';
import { 
  CheckCircle2, 
  FileText, 
  Download, 
  Maximize2
} from 'lucide-react';
import { getCommodityItems } from '../data/importData';
import { CommodityItem, PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGsapFadeUp } from '../utils/gsapAnimations';

interface SupplyPageProps {
  onSelectCommodity: (item: CommodityItem) => void;
  onOpenRFQModal: (item: CommodityItem) => void;
  onNavigate: (page: PageId) => void;
}

export const SupplyPage: React.FC<SupplyPageProps> = ({
  onSelectCommodity,
  onOpenRFQModal,
  onNavigate,
}) => {
  const { language, t } = useLanguage();
  const [activePillarFilter, setActivePillarFilter] = useState<string>('all');
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const listRef = useGsapFadeUp({ stagger: 0.15, duration: 0.85, y: 30 });
  const bespokeRef = useGsapFadeUp({ duration: 0.8, y: 25 });

  const commodityItems = getCommodityItems(language);

  const filterOptions = [
    { id: 'all', label: language === 'fr' ? 'Tous les Piliers' : 'All Pillars' },
    { id: 'paper', label: language === 'fr' ? 'Papier Double A (Exclusif)' : 'Double A Paper (Exclusive)' },
    { id: 'popcorn', label: language === 'fr' ? 'Pop-corn Gourmet' : 'Gourmet Popcorn' },
    { id: 'textiles', label: language === 'fr' ? 'Friperie & Chaussures' : 'Textiles & Footwear' },
    { id: 'plaster', label: language === 'fr' ? 'Plâtre de Gypse' : 'Industrial Plaster' },
    { id: 'appliances', label: language === 'fr' ? 'Électroménager' : 'Home Appliances' }
  ];

  const filteredItems = activePillarFilter === 'all'
    ? commodityItems
    : commodityItems.filter(item => {
        if (activePillarFilter === 'paper') return item.id === 'prod-double-a';
        if (activePillarFilter === 'popcorn') return item.id === 'prod-popcorn-arg';
        if (activePillarFilter === 'textiles') return item.id === 'prod-used-clothing';
        if (activePillarFilter === 'plaster') return item.id === 'prod-plaster-gypsum';
        if (activePillarFilter === 'appliances') return item.id === 'prod-fridges-appliances';
        return false;
      });

  const handleDownloadSpec = (item: CommodityItem) => {
    // Trigger the actual PDF download
    const link = document.createElement('a');
    link.href = `/datasheets/${item.id}-datasheet.pdf`;
    link.download = `Sofomeutex-${item.id}-Technical-Data-Sheet.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const msg = language === 'fr'
      ? `Fiche technique officielle pour "${item.name}" téléchargée.`
      : `Official Technical Spec Sheet for "${item.name}" has been downloaded.`;
    setDownloadNotification(msg);
    setTimeout(() => setDownloadNotification(null), 4000);
  };

  return (
    <div className="bg-[#faf9f6] text-stone-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Breadcrumb & Header */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-stone-500">
            <button onClick={() => onNavigate('home')} className="hover:text-amber-800 cursor-pointer">
              {t.nav.home}
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">{t.supply.breadcrumb}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
                {t.supply.eyebrow}
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-900 mt-2">
                {t.supply.title}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 max-w-lg leading-relaxed">
              {t.supply.subtitle}
            </p>
          </div>
        </div>

        {/* Download Notification Toast */}
        {downloadNotification && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono flex items-center justify-between animate-in fade-in duration-200">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{downloadNotification}</span>
            </div>
            <span className="text-[10px] text-emerald-700 font-bold uppercase">SGS Verified Spec</span>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-stone-200">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActivePillarFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activePillarFilter === opt.id
                  ? 'bg-amber-800 text-white font-semibold shadow-xs'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Product Cards Stack */}
        <div ref={listRef} className="space-y-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm transition-all overflow-hidden p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: Image & Gallery Preview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-stone-100 group">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-3 py-1 rounded-full bg-stone-900/90 text-white font-mono text-[10px] font-bold">
                        {item.categoryTag}
                      </span>
                      {item.exclusiveStatus && (
                        <span className="px-3 py-1 rounded-full bg-amber-600 text-white font-mono text-[10px] font-bold shadow-xs">
                          {item.exclusiveStatus}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectCommodity(item)}
                      className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/90 hover:bg-white text-stone-900 shadow-sm backdrop-blur-sm transition-all cursor-pointer"
                      title={language === 'fr' ? 'Inspecter détails' : 'Inspect Details'}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Secondary Thumbnails */}
                  <div className="grid grid-cols-3 gap-2">
                    {item.gallery.slice(0, 3).map((thumb, tIdx) => (
                      <div 
                        key={tIdx} 
                        onClick={() => onSelectCommodity(item)}
                        className="h-20 rounded-xl overflow-hidden border border-stone-200 cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img 
                          src={thumb} 
                          alt={`${item.name} ${tIdx}`} 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = item.image;
                          }}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                  </div>

                  {/* Certifications Badges */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block font-bold">
                      {language === 'fr' ? 'Certificats & Analyses Officiels' : 'Certificates & Assays'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.certifications.map((cert, cIdx) => (
                        <span key={cIdx} className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-[10px] font-mono text-stone-700">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Technical & Institutional Specifications */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-stone-100">
                      <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider">
                        {item.pillar}
                      </span>
                      <span className="text-xs font-mono text-stone-500">
                        {language === 'fr' ? 'Code Douanier HS :' : 'HS Code:'} <strong>{item.hsCode}</strong>
                      </span>
                    </div>

                    <h2 className="font-serif-luxury text-3xl font-bold text-stone-900 mt-2">
                      {item.name}
                    </h2>

                    <p className="text-stone-600 text-sm leading-relaxed mt-2">
                      {item.detailedDescription}
                    </p>

                    {/* Key Specifications Grid */}
                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-800 font-bold">
                        {language === 'fr' ? 'Paramètres d’Analyses Techniques Certifiés' : 'Certified Technical Assay Parameters'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-700 flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Logistic Matrix Bar */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold block">
                          {language === 'fr' ? 'Capacité Conteneur FCL' : 'Container Payload'}
                        </span>
                        <span className="text-stone-800 font-semibold">{item.containerCapacity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold block">
                          {language === 'fr' ? 'Conditionnement' : 'Packaging Type'}
                        </span>
                        <span className="text-stone-800 font-semibold">{item.packaging}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold block">
                          {language === 'fr' ? 'Commande Minimale (MOQ)' : 'Minimum Order Quantity'}
                        </span>
                        <span className="text-stone-800 font-semibold">{item.moq}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold block">
                          {language === 'fr' ? 'Incoterms Port de Débarquement' : 'Discharge Incoterms'}
                        </span>
                        <span className="text-stone-800 font-semibold">{item.incoterms.join(' | ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions (Download Spec Sheet, Inspect, Inquire RFQ - NO PRICES) */}
                  <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDownloadSpec(item)}
                        className="px-3.5 py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-700 text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-stone-600" />
                        <span>{t.supply.btnDownloadSpec}</span>
                      </button>
                      <button
                        onClick={() => onSelectCommodity(item)}
                        className="px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-all cursor-pointer"
                      >
                        {t.supply.btnFullDetails}
                      </button>
                    </div>

                    <button
                      onClick={() => onOpenRFQModal(item)}
                      className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center space-x-2 cursor-pointer active:scale-98"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t.supply.btnRequestAllocation}</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Custom Bilateral Sourcing */}
        <div ref={bespokeRef} className="mt-16 p-8 rounded-3xl bg-[#182327] text-white border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif-luxury text-2xl font-bold text-white">
              {language === 'fr' 
                ? 'Besoin d’une Configuration de Conteneurs sur Mesure ?' 
                : 'Looking for Bespoke Container Cargo Configurations?'}
            </h3>
            <p className="text-xs text-stone-300 max-w-xl">
              {language === 'fr'
                ? 'Nous organisons des groupages sur mesure, des emballages privés et la livraison inland porte-à-porte pour les grossistes au Cameroun, Tchad et zone CEMAC.'
                : 'We structure custom split-loads, private label packaging, and inland door delivery for major wholesalers across Cameroon, Chad, and Central Africa.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-98"
          >
            {language === 'fr' ? 'Desk Commercial Direct' : 'Direct Commercial Desk'}
          </button>
        </div>

      </div>
    </div>
  );
};
