import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  FileText, 
  Anchor, 
  ChevronLeft, 
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { PageId, CommodityItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PremierDarkHeroProps {
  onNavigate: (page: PageId) => void;
  onOpenRFQModal: (item?: CommodityItem) => void;
}

interface HeroBgSlide {
  id: string;
  image: string;
  pillarEn: string;
  pillarFr: string;
  captionEn: string;
  captionFr: string;
}

const HERO_BG_SLIDES: HeroBgSlide[] = [
  {
    id: 'slide-maritime',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=85',
    pillarEn: 'Transatlantic Maritime Liner',
    pillarFr: 'Ligne Maritime Transatlantique',
    captionEn: 'Direct CMA CGM & Maersk deep-sea loops into Port of Douala (PAD/DIT)',
    captionFr: 'Boucles maritimes directes CMA CGM & Maersk vers le Port de Douala (PAD/DIT)'
  },
  {
    id: 'slide-paper',
    image: '/assets/images/paper_container_loading.webp',
    pillarEn: 'Exclusive Double A Copier Paper',
    pillarFr: 'Papier Reprographique Double A Exclusif',
    captionEn: 'Sovereign mill allocation from Thailand — CIE 165 ultra-whiteness & 24/7 zero-jam',
    captionFr: 'Allocation d’usine exclusive de Thaïlande — Blancheur CIE 165 & Zéro bourrage'
  },
  {
    id: 'slide-popcorn',
    image: '/assets/images/popcorn_bowls_top.jpg',
    pillarEn: 'Argentine Gourmet Popcorn',
    pillarFr: 'Maïs Pop-corn Gourmet d’Argentine',
    captionEn: 'High-expansion non-GMO yellow butterfly & mushroom kernels from Córdoba & Santa Fe',
    captionFr: 'Grains papillon & champignon non-OGM à fort taux d’expansion de Córdoba & Santa Fe'
  },
  {
    id: 'slide-textile',
    image: '/assets/images/dresses_bales_1789399175918.jpg',
    pillarEn: 'European Sorted Textiles & Shoes',
    pillarFr: 'Friperie & Chaussures Triées d’Europe',
    captionEn: 'Grade A original bales & 100% paired shoes consolidated from Antwerp & Rotterdam',
    captionFr: 'Balles originales Grade A & chaussures appariées groupées d’Anvers & Rotterdam'
  },
  {
    id: 'slide-plaster',
    image: '/assets/images/plaster_moulding_corner.jpg',
    pillarEn: 'Pure Gypsum & Construction Plaster',
    pillarFr: 'Plâtre de Gypse Pur de Construction',
    captionEn: '99.2% pure hemihydrate EN 13279-1 standard for architectural staff & mouldings',
    captionFr: '99.2% hémihydrate pur norme EN 13279-1 pour staff architectural & moulures'
  },
  {
    id: 'slide-appliances',
    image: '/assets/images/fridge_open_stocked.jpg',
    pillarEn: 'Home Refrigeration & Appliances',
    pillarFr: 'Réfrigérateurs & Électroménager',
    captionEn: 'Factory-direct fridges, freezers & combo units sourced from Guangzhou & Foshan',
    captionFr: 'Réfrigérateurs, congélateurs & combinés direct usine de Guangzhou & Foshan'
  }
];

export const PremierDarkHero: React.FC<PremierDarkHeroProps> = ({
  onNavigate,
  onOpenRFQModal,
}) => {
  const { language, t } = useLanguage();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto slide effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_BG_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_BG_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_BG_SLIDES.length);
  };

  const scrollToCarousel = () => {
    const el = document.getElementById('pillar-carousel');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlide = HERO_BG_SLIDES[currentSlideIndex];

  return (
    <section className="relative overflow-hidden bg-[#0a0f12] text-white border-b border-stone-800 select-none">
      
      {/* 1. Dynamic Sliding Background Images with Cross-Fade & Ken Burns Transitions */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {HERO_BG_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-35 z-1' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.pillarEn}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=85';
                }}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105 filter brightness-90 contrast-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Multi-layered cinematic gradient overlays for pristine readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f12] via-[#0a0f12]/80 to-[#0a0f12]/50 z-2" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f12]/95 via-transparent to-[#0a0f12]/95 z-2" />
        
        {/* Subtle Ambient Golden Glow & Dot Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-amber-600/15 via-amber-900/5 to-transparent blur-3xl z-2" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:28px_28px] z-2" />
      </div>

      {/* Decorative Golden Accent Line at Top */}
      <div className="relative z-10 h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 relative z-10">
        
        {/* Top Sovereign Clearance Tag & Slide Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider shadow-lg shadow-black/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="uppercase font-semibold">{t.darkHero.badgeStandard}</span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-300">{t.darkHero.badgeGateway}</span>
          </div>

          {/* Background Slider Micro Controls */}
          <div className="flex items-center space-x-2 bg-stone-950/75 border border-stone-800/80 rounded-full px-3 py-1 text-xs font-mono text-stone-400 backdrop-blur-md">
            <span className="text-amber-400 text-[11px] font-semibold tracking-wider">
              {language === 'fr' ? activeSlide.pillarFr : activeSlide.pillarEn}
            </span>
            <span className="text-stone-600">|</span>
            <button
              onClick={handlePrev}
              title="Previous background slide"
              className="p-1 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] text-stone-300 font-bold">
              {currentSlideIndex + 1}/{HERO_BG_SLIDES.length}
            </span>
            <button
              onClick={handleNext}
              title="Next background slide"
              className="p-1 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause background slider" : "Resume background slider"}
              className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
          </div>

        </div>

        {/* Grand Headline Block */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono tracking-[0.28em] uppercase text-amber-400 font-bold block">
              {t.darkHero.subheading}
            </span>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              {t.darkHero.headlinePart1} <br className="hidden sm:inline" />
              <span className="italic font-serif font-normal bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
                {t.darkHero.headlinePart2}
              </span>
            </h1>
          </div>

          <p className="text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            {t.darkHero.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              id="hero-explore-pillars-btn"
              onClick={scrollToCarousel}
              className="px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-900/40 transition-all flex items-center space-x-2 cursor-pointer active:scale-98"
            >
              <span>{t.darkHero.btnExplore}</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              id="hero-open-rfq-btn"
              onClick={() => onOpenRFQModal()}
              className="px-6 py-3.5 rounded-2xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 hover:border-amber-500/50 font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 cursor-pointer active:scale-98 backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>{t.darkHero.btnRFQ}</span>
            </button>

            <button
              id="hero-shipping-lanes-btn"
              onClick={() => onNavigate('logistics')}
              className="px-5 py-3.5 rounded-2xl bg-transparent hover:bg-white/10 text-stone-300 hover:text-white text-xs font-semibold tracking-wide transition-all flex items-center space-x-1.5 cursor-pointer backdrop-blur-sm"
            >
              <Anchor className="w-4 h-4 text-amber-400" />
              <span>{t.darkHero.btnLogistics}</span>
            </button>
          </div>

        </div>

        {/* 4 Key Institutional Stat Badges (Dark Luxury Card Layout) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800/90 hover:border-amber-500/40 transition-all space-y-1 backdrop-blur-md">
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-400 block">
              $120M+
            </span>
            <span className="text-[11px] font-mono text-stone-300 uppercase tracking-wider font-bold block">
              {t.darkHero.statVolumeLabel}
            </span>
            <p className="text-[10px] text-stone-400">{t.darkHero.statVolumeDesc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800/90 hover:border-amber-500/40 transition-all space-y-1 backdrop-blur-md">
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-400 block">
              4
            </span>
            <span className="text-[11px] font-mono text-stone-300 uppercase tracking-wider font-bold block">
              {t.darkHero.statPillarsLabel}
            </span>
            <p className="text-[10px] text-stone-400">{t.darkHero.statPillarsDesc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800/90 hover:border-amber-500/40 transition-all space-y-1 backdrop-blur-md">
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-400 block">
              21 {language === 'fr' ? 'Jours' : 'Days'}
            </span>
            <span className="text-[11px] font-mono text-stone-300 uppercase tracking-wider font-bold block">
              {t.darkHero.statDemurrageLabel}
            </span>
            <p className="text-[10px] text-stone-400">{t.darkHero.statDemurrageDesc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800/90 hover:border-amber-500/40 transition-all space-y-1 backdrop-blur-md">
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-400 block">
              100% {language === 'fr' ? 'Direct' : 'Direct'}
            </span>
            <span className="text-[11px] font-mono text-stone-300 uppercase tracking-wider font-bold block">
              {t.darkHero.statDirectLabel}
            </span>
            <p className="text-[10px] text-stone-400">{t.darkHero.statDirectDesc}</p>
          </div>

        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 pt-6">
          {HERO_BG_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlideIndex ? 'w-8 bg-amber-400' : 'w-2 bg-stone-700 hover:bg-stone-500'
              }`}
              title={language === 'fr' ? slide.pillarFr : slide.pillarEn}
            />
          ))}
        </div>

      </div>

      {/* Live Commodity Status & Ocean Corridor Ticker (Dark to Light Bridge) */}
      <div className="border-t border-stone-800 bg-[#070b0d] py-3 overflow-hidden">
        <div className="flex items-center space-x-8 text-xs font-mono text-stone-400 whitespace-nowrap animate-marquee">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <strong className="text-stone-200">{t.darkHero.tickerPort}</strong>
          </div>
          <span className="text-stone-600">|</span>

          <div className="flex items-center space-x-2">
            <span className="text-amber-400">✦</span>
            <strong className="text-stone-200">{t.darkHero.tickerDoubleA}</strong>
          </div>
          <span className="text-stone-600">|</span>

          <div className="flex items-center space-x-2">
            <span className="text-amber-400">✦</span>
            <strong className="text-stone-200">{t.darkHero.tickerPopcorn}</strong>
          </div>
          <span className="text-stone-600">|</span>

          <div className="flex items-center space-x-2">
            <span className="text-amber-400">✦</span>
            <strong className="text-stone-200">{t.darkHero.tickerTextiles}</strong>
          </div>
          <span className="text-stone-600">|</span>

          <div className="flex items-center space-x-2">
            <span className="text-amber-400">✦</span>
            <strong className="text-stone-200">{t.darkHero.tickerPlaster}</strong>
          </div>
          <span className="text-stone-600">|</span>

          <div className="flex items-center space-x-2">
            <span className="text-emerald-400">✓</span>
            <strong className="text-stone-200">{t.darkHero.tickerAssay}</strong>
          </div>
        </div>
      </div>

    </section>
  );
};
