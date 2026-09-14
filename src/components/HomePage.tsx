import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Anchor, 
  Truck, 
  CheckCircle2, 
} from 'lucide-react';
import { PremierDarkHero } from './PremierDarkHero';
import { HeroSection } from './HeroSection';
import { 
  getCommodityItems, 
  getKeyStats, 
  getClientProfiles, 
  getShippingLanes 
} from '../data/importData';
import { PageId, CommodityItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGsapFadeUp } from '../utils/gsapAnimations';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectCommodity: (item: CommodityItem) => void;
  onOpenRFQModal: (item?: CommodityItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCommodity,
  onOpenRFQModal,
}) => {
  const { language, t } = useLanguage();

  const commodityItems = getCommodityItems(language);
  const keyStats = getKeyStats(language);
  const clientProfiles = getClientProfiles(language);
  const shippingLanes = getShippingLanes(language);

  // GSAP scroll trigger animation refs
  const statsRef = useGsapFadeUp({ stagger: 0.1, duration: 0.8 });
  const pillarsGridRef = useGsapFadeUp({ stagger: 0.14, duration: 0.85, y: 30 });
  const logisticsRef = useGsapFadeUp({ stagger: 0.12, duration: 0.8 });
  const clientQuotesRef = useGsapFadeUp({ stagger: 0.15, duration: 0.85 });
  const ctaRef = useGsapFadeUp({ duration: 0.7, y: 20 });

  return (
    <div className="bg-[#faf9f6] text-stone-900">
      
      {/* 1. Premier Dark Luxury Hero Section with Sliding Background Images and Ken Burns Transitions */}
      <PremierDarkHero
        onNavigate={onNavigate}
        onOpenRFQModal={onOpenRFQModal}
      />

      {/* 2. Curved 4-Pillars Carousel Section matching the user reference screenshot */}
      <HeroSection
        onNavigate={onNavigate}
        onSelectCommodity={onSelectCommodity}
        onOpenRFQModal={onOpenRFQModal}
      />

      {/* 3. Institutional Performance Metrics (American 1-Million Standard) */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-all text-center space-y-1"
              >
                <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-amber-900">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
                <p className="text-[11px] text-stone-500 leading-tight pt-1">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The 4 Sovereign Import Pillars (Detailed Cards, No Prices, Light Luxury) */}
      <section className="py-20 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
                {t.home.pillarsTag}
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900">
                {t.home.pillarsHeading}
              </h2>
              <p className="text-sm text-stone-600 max-w-2xl">
                {t.home.pillarsDescription}
              </p>
            </div>

            <button
              onClick={() => onNavigate('supply')}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-900 group cursor-pointer"
            >
              <span>{t.home.viewAllSpecs}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div ref={pillarsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commodityItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80';
                      }}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 font-mono text-[10px] font-bold uppercase shadow-xs">
                        {item.pillar.split('(')[0]}
                      </span>
                      {item.exclusiveStatus && (
                        <span className="px-3 py-1 rounded-full bg-amber-600 text-white font-mono text-[10px] font-bold shadow-xs">
                          {item.exclusiveStatus}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-mono text-amber-800 uppercase tracking-wider font-semibold">
                        {language === 'fr' ? 'Origine' : 'Origin'}: {item.origin}
                      </span>
                      <h3 className="font-serif-luxury text-2xl font-bold text-stone-900 mt-1 leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {/* Spec Bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-100">
                      {item.specs.slice(0, 3).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center space-x-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Container Loadability */}
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs font-mono text-stone-700">
                      <strong>{language === 'fr' ? 'Capacité Conteneur :' : 'Payload:'}</strong> {item.containerCapacity}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectCommodity(item)}
                    className="flex-1 py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-700 font-semibold text-xs tracking-wide transition-all text-center cursor-pointer"
                  >
                    {t.home.btnViewSpecs}
                  </button>
                  <button
                    onClick={() => onOpenRFQModal(item)}
                    className="flex-1 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-all text-center shadow-xs cursor-pointer flex items-center justify-center space-x-1.5 active:scale-98"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{t.home.btnInquireFcl}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Port of Douala Gateway & Logistics Corridors */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div ref={logisticsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                <Anchor className="w-3.5 h-3.5" />
                <span>{t.home.logisticsTag}</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                {t.home.logisticsHeading}
              </h2>

              <p className="text-stone-600 text-sm leading-relaxed">
                {t.home.logisticsDescription}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs text-stone-700">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-sans">
                      {language === 'fr' ? 'Accostage Direct & Protection Surestaries' : 'Direct Berth Allocation & Demurrage Shield'}
                    </strong>
                    <span>
                      {language === 'fr' 
                        ? 'Créneaux de manutention dédiés au Terminal de Douala (DIT/PAD) avec dédouanement accéléré sous douane.'
                        : 'Dedicated stevedoring slots at Douala Container Terminal (DIT/PAD) with fast-track bonded release.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs text-stone-700">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-sans">
                      {language === 'fr' ? 'Flotte Multi-Modale Dédiée' : 'Multi-Modal Fleet Dispatch'}
                    </strong>
                    <span>
                      {language === 'fr'
                        ? 'Plateaux porte-conteneurs et fourgons tôlés sécurisés livrant directement à vos entrepôts.'
                        : 'Heavy-duty container flatbeds and secure enclosed dry vans transporting cargo directly to your depot.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs text-stone-700">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-sans">
                      {language === 'fr' ? 'Corridor de Transit Tchad & RCA' : 'Transit Corridor to Chad & CAR'}
                    </strong>
                    <span>
                      {language === 'fr'
                        ? 'Dossiers de cautionnement sous convention CEMAC pour une livraison transfrontalière fluide.'
                        : 'Full transit bond documentation under the CEMAC convention for frictionless cross-border delivery.'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('logistics')}
                  className="px-5 py-3 rounded-xl bg-[#1a2327] hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer shadow-sm"
                >
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>{t.home.btnLogisticsCorridors}</span>
                </button>
              </div>
            </div>

            {/* Right Side: Active Maritime Corridors Card */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-3xl bg-stone-50 border border-stone-200 p-6 sm:p-8">
                <h3 className="font-serif-luxury text-xl font-bold text-stone-900 mb-4 flex items-center justify-between">
                  <span>{t.home.shippingLanesTitle}</span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    {t.home.liveSchedulesBadge}
                  </span>
                </h3>

                <div className="space-y-3">
                  {shippingLanes.map((lane) => (
                    <div 
                      key={lane.id}
                      className="p-4 rounded-2xl bg-white border border-stone-200/80 hover:border-amber-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 rounded-full bg-amber-600" />
                          <h4 className="text-xs font-bold text-stone-900 font-sans">{lane.name}</h4>
                        </div>
                        <p className="text-[11px] font-mono text-stone-500">
                          {lane.originPort} → {lane.destinationPort}
                        </p>
                        <p className="text-[11px] text-amber-900 font-medium">
                          {language === 'fr' ? 'Cargaison :' : 'Cargo:'} {lane.commodityCargo}
                        </p>
                      </div>

                      <div className="flex items-center sm:flex-col sm:items-end justify-between gap-1 border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-100">
                        <span className="text-xs font-mono font-bold text-stone-800">
                          {lane.transitDays} {language === 'fr' ? 'Jours de Mer' : 'Days Transit'}
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">
                          {language === 'fr' ? 'Armateur :' : 'Carrier:'} {lane.primaryCarrier}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>{language === 'fr' ? 'Dédouanement : 48–72 Heures' : 'Customs Clearance: 48–72 Hours'}</span>
                  <span>Port of Douala (CMDLA)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Institutional Buyer Quotes & Regional Trust */}
      <section className="py-20 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.home.clientNetworkTag}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900">
              {t.home.clientNetworkHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              {t.home.clientNetworkDesc}
            </p>
          </div>

          <div ref={clientQuotesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientProfiles.slice(0, 2).map((client) => (
              <div 
                key={client.id}
                className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-amber-200 shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 font-bold">
                      {client.sector}
                    </span>
                    <span className="text-xs font-mono text-amber-800 font-bold">
                      {client.volumeAnnually}
                    </span>
                  </div>

                  <p className="text-stone-700 italic text-sm leading-relaxed font-serif-luxury">
                    "{client.testimonial}"
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-100 mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{client.signatory}</h4>
                    <p className="text-[11px] text-stone-500 font-mono">{client.title}</p>
                    <p className="text-[10px] text-stone-400 font-mono">{client.region}</p>
                  </div>
                  <span className="text-[10px] font-mono text-amber-800 font-semibold bg-amber-50 px-2 py-1 rounded-md border border-amber-200/50">
                    {client.partnershipYears}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('clients')}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-900 cursor-pointer"
            >
              <span>{t.home.btnViewAllClients}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 7. Quick RFQ Requisition Callout */}
      <section className="py-16 bg-[#162024] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ctaRef} className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                {t.home.ctaTag}
              </span>
              <h3 className="font-serif-luxury text-3xl font-bold text-white">
                {t.home.ctaHeading}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {t.home.ctaDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2 cursor-pointer active:scale-98"
              >
                <FileText className="w-4 h-4" />
                <span>{t.home.btnSubmitRfq}</span>
              </button>
              <button
                onClick={() => onNavigate('supply')}
                className="px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>{t.home.btnBrowseProducts}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
