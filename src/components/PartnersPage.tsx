import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
} from 'lucide-react';
import { getPartnersList } from '../data/importData';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGsapFadeUp } from '../utils/gsapAnimations';

interface PartnersPageProps {
  onNavigate: (page: PageId) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const partnersList = getPartnersList(language);

  const heroBannerRef = useGsapFadeUp({ duration: 0.85, y: 25 });
  const partnersGridRef = useGsapFadeUp({ stagger: 0.12, duration: 0.85, y: 30 });
  const financeRef = useGsapFadeUp({ duration: 0.8, y: 25 });

  return (
    <div className="bg-[#faf9f6] text-stone-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-stone-500">
            <button onClick={() => onNavigate('home')} className="hover:text-amber-800 cursor-pointer">
              {t.nav.home}
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">{t.partners.breadcrumb}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.partners.eyebrow}
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-900 mt-2">
              {t.partners.title}
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3">
              {t.partners.subtitle}
            </p>
          </div>
        </div>

        {/* 1. Featured Sovereign Exclusivity Callout: Double A Paper */}
        <div ref={heroBannerRef} className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1b262b] to-[#121a1d] text-white border border-stone-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold border border-amber-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.partners.exclusiveBadge}</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t.partners.exclusiveTitle}
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {t.partners.exclusiveDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-amber-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                {t.partners.directContract}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                {t.partners.antiCounterfeit}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                {t.partners.stockContinuity}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Strategic Partners Grid */}
        <div className="mb-16">
          <div className="border-b border-stone-200 pb-4 mb-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800">
                {t.partners.networkEyebrow}
              </span>
              <h3 className="font-serif-luxury text-3xl font-bold text-stone-900 mt-1">
                {t.partners.networkTitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500 hidden sm:inline">
              Audited 2026 Standards
            </span>
          </div>

          <div ref={partnersGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersList.map((partner) => (
              <div
                key={partner.id}
                className="p-6 rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 font-mono text-[10px] font-bold uppercase">
                      {partner.category}
                    </span>
                    <span className="text-[11px] font-mono text-amber-800 font-semibold">
                      {partner.country}
                    </span>
                  </div>

                  <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
                    {partner.name}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {partner.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                    {partner.verifiedStatus}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">
                    {partner.logoBadge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Trade Finance & Banking Partners */}
        <div ref={financeRef} className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.partners.financeEyebrow}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              {t.partners.financeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {t.partners.financeSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100 text-xs">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? 'Crédits Documentaires (RUU 600)' : 'Documentary Credits (UCP 600)'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Lettres de crédit irrévocables et confirmées émises via BICEC, Ecobank, Citibank ou Société Générale.'
                  : 'Irrevocable, confirmed Letters of Credit issued through BICEC, Ecobank, Citibank, or Société Générale.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? 'Assurance Maritime (Tous Risques A)' : 'Marine Insurance (Clauses A)'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Police Institute Cargo Clauses (A) couvrant 110 % de la valeur CIF contre tout dommage maritime et conteneur.'
                  : 'Comprehensive Institute Cargo Clauses (A) insuring 110% of CIF value against all maritime and container damage risks.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? 'Connaissement Maritime Original (B/L)' : 'Bonded Release & Bill of Lading'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Jeu complet de connaissements maritimes originaux (3/3) remis à l’acheteur dès autorisation de dédouanement portuaire.'
                  : 'Original ocean Bills of Lading (3/3 set) surrendered directly to buyer upon port clearance authorization.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-stone-500">
              Institutional Trade Desk: trade@wardiere.com
            </span>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-98"
            >
              {t.partners.btnRequestFinance}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
