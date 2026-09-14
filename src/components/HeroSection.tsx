import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  ShieldCheck, 
  Package, 
  FileText, 
  ArrowRight,
  Info
} from 'lucide-react';
import { getHeroSlides, getCommodityItems } from '../data/importData';
import { PageId, CommodityItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectCommodity: (item: CommodityItem) => void;
  onOpenRFQModal: (item?: CommodityItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onSelectCommodity,
  onOpenRFQModal,
}) => {
  const { language, t } = useLanguage();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroSlides = getHeroSlides(language);
  const commodityItems = getCommodityItems(language);

  // Guard index in case bounds change
  const safeIndex = currentSlideIndex % heroSlides.length;
  const currentSlide = heroSlides[safeIndex];
  const activeCommodity = commodityItems.find(c => c.pillar === currentSlide.pillar) || commodityItems[0];

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  // Helper indices for peripheral peeking slides
  const prevIndex = (safeIndex - 1 + heroSlides.length) % heroSlides.length;
  const nextIndex = (safeIndex + 1) % heroSlides.length;

  return (
    <section id="pillar-carousel" className="relative overflow-hidden bg-gradient-to-b from-[#f7f5f0] via-[#fcfbf9] to-white pt-12 pb-20 border-b border-stone-200">
      
      {/* Subtle Luxury Watermark Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge & Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>{t.carousel.badgeCorridors}</span>
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            <span className="font-mono text-[11px] text-amber-800">{t.carousel.badgeHub}</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
            {t.carousel.headingPart1} <br className="hidden sm:inline" />
            <span className="italic font-normal text-amber-900 font-serif">{t.carousel.headingPart2}</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t.carousel.subheading}
          </p>
        </div>

        {/* Curved 3-Slide Carousel Layout */}
        <div className="relative mb-10">
          
          {/* Main Slide Presentation Stage */}
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            
            {/* Left Peeking Slide */}
            <div 
              onClick={handlePrevSlide}
              className="hidden lg:block w-48 h-72 rounded-3xl overflow-hidden opacity-40 hover:opacity-75 transition-all cursor-pointer transform scale-90 shadow-md relative group border border-stone-300"
            >
              <img 
                src={heroSlides[prevIndex].image} 
                alt={heroSlides[prevIndex].title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono text-amber-300 uppercase">{heroSlides[prevIndex].tag}</span>
                <p className="text-xs font-bold truncate">{heroSlides[prevIndex].title}</p>
              </div>
            </div>

            {/* Center Active Curved Card */}
            <div className="w-full max-w-3xl h-[360px] sm:h-[420px] rounded-3xl overflow-hidden relative shadow-2xl curved-slide-shadow border border-amber-900/10 transition-all bg-stone-900">
              <img 
                src={currentSlide.image} 
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1400&q=85';
                }}
                className={`w-full h-full object-cover transition-transform duration-700 ${isTransitioning ? 'scale-105 filter blur-xs' : 'scale-100'}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11181c]/95 via-[#11181c]/50 to-transparent p-6 sm:p-10 flex flex-col justify-between text-white">
                
                {/* Top Tags */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/90 text-stone-950 font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-xs">
                      {currentSlide.tag}
                    </span>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-mono text-[11px]">
                      {currentSlide.origin.split('(')[0]}
                    </span>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-mono text-amber-300">
                    FCL Ocean Cargo
                  </div>
                </div>

                {/* Center Content */}
                <div className="space-y-2 max-w-xl">
                  <p className="text-xs sm:text-sm font-mono text-amber-300 uppercase tracking-widest">
                    {currentSlide.subtitle}
                  </p>
                  <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                    {currentSlide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 sm:line-clamp-3 leading-relaxed font-sans">
                    {currentSlide.description}
                  </p>
                </div>

                {/* Bottom Metric & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div>
                    <span className="text-[10px] font-mono text-stone-300 uppercase block">{currentSlide.metricLabel}</span>
                    <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-amber-300">{currentSlide.keyMetric}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onSelectCommodity(activeCommodity)}
                      className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold tracking-wide transition-all flex items-center space-x-1.5 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-amber-300" />
                      <span>{t.carousel.btnSpecs}</span>
                    </button>
                    <button
                      onClick={() => onOpenRFQModal(activeCommodity)}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold tracking-wide uppercase shadow-md transition-all flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{t.carousel.btnInquire}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Peeking Slide */}
            <div 
              onClick={handleNextSlide}
              className="hidden lg:block w-48 h-72 rounded-3xl overflow-hidden opacity-40 hover:opacity-75 transition-all cursor-pointer transform scale-90 shadow-md relative group border border-stone-300"
            >
              <img 
                src={heroSlides[nextIndex].image} 
                alt={heroSlides[nextIndex].title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono text-amber-300 uppercase">{heroSlides[nextIndex].tag}</span>
                <p className="text-xs font-bold truncate">{heroSlides[nextIndex].title}</p>
              </div>
            </div>

          </div>

          {/* Navigation Controls (< and > buttons) */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button
              id="hero-prev-btn"
              onClick={handlePrevSlide}
              aria-label="Previous Commodity Pillar"
              className="w-10 h-10 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-amber-50 hover:text-amber-800 hover:border-amber-300 shadow-sm transition-all flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center space-x-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === safeIndex 
                      ? 'w-8 bg-amber-700' 
                      : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="hero-next-btn"
              onClick={handleNextSlide}
              aria-label="Next Commodity Pillar"
              className="w-10 h-10 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-amber-50 hover:text-amber-800 hover:border-amber-300 shadow-sm transition-all flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Floating Enterprise Specification Card (No Prices, Light Luxury Card) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-amber-200/60 p-6 sm:p-8 shadow-xl shadow-stone-200/50 relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono text-[10px] font-bold tracking-wider uppercase">
                  {activeCommodity.pillar}
                </span>
                {activeCommodity.exclusiveStatus && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold">
                    {activeCommodity.exclusiveStatus}
                  </span>
                )}
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-stone-900 mt-1">
                {activeCommodity.name}
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-0.5">
                {language === 'fr' ? 'Origine' : 'Origin'}: {activeCommodity.origin} → {language === 'fr' ? 'Destination' : 'Destination'}: {activeCommodity.destination}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectCommodity(activeCommodity)}
                className="px-4 py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-700 text-xs font-semibold transition-all cursor-pointer"
              >
                {t.carousel.btnFullSpecs}
              </button>
              <button
                onClick={() => onOpenRFQModal(activeCommodity)}
                className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer flex items-center space-x-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.carousel.btnRequestAllocation}</span>
              </button>
            </div>
          </div>

          {/* Quick Specifications Strip with Gold Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {activeCommodity.specs.slice(0, 4).map((spec, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100 flex items-start space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                <span className="text-xs text-stone-700 font-medium leading-snug">
                  {spec}
                </span>
              </div>
            ))}
          </div>

          {/* Logistics Container Note */}
          <div className="mt-5 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2 text-stone-700 font-mono">
              <Package className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>{t.carousel.containerLoadability}: <strong>{activeCommodity.containerCapacity}</strong></span>
            </div>
            <div className="flex items-center space-x-2 text-amber-900 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>{t.carousel.sgsAssayed}</span>
            </div>
          </div>

          {/* Scroll Down Anchor */}
          <div className="flex justify-center -mb-13 mt-6">
            <button
              onClick={() => onNavigate('supply')}
              className="w-12 h-12 rounded-full bg-amber-700 hover:bg-amber-800 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
              aria-label="Explore All 4 Supply Pillars"
              title="Explore All 4 Supply Pillars"
            >
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
