import React from 'react';
import { 
  MapPin, 
  Quote
} from 'lucide-react';
import { getClientProfiles } from '../data/importData';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGsapFadeUp } from '../utils/gsapAnimations';

interface ClientsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const clientProfiles = getClientProfiles(language);

  const footprintRef = useGsapFadeUp({ stagger: 0.1, duration: 0.8 });
  const casesRef = useGsapFadeUp({ stagger: 0.15, duration: 0.85, y: 30 });

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
            <span className="text-stone-900 font-semibold">{t.clients.breadcrumb}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.clients.eyebrow}
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-900 mt-2">
              {t.clients.title}
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3">
              {t.clients.subtitle}
            </p>
          </div>
        </div>

        {/* 1. Regional Footprint Summary Cards */}
        <div ref={footprintRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-2">
            <span className="text-xs font-mono text-stone-500 uppercase block">
              {language === 'fr' ? 'Hub Principal Cameroun' : 'Cameroon Primary Hub'}
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">Douala & Yaoundé</h3>
            <p className="text-xs text-stone-600">
              {language === 'fr'
                ? 'Approvisionnement du Marché Central de Douala, Marché Mokolo de Yaoundé, quartier d’affaires d’Akwa et zone de Bonabéri.'
                : 'Serving Marché Central Douala, Marché Mokolo Yaoundé, Akwa business district, and industrial Bonabéri.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-2">
            <span className="text-xs font-mono text-stone-500 uppercase block">
              {language === 'fr' ? 'Grand Ouest Camerounais' : 'Western Cameroon'}
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">Bafoussam & Bamenda</h3>
            <p className="text-xs text-stone-600">
              {language === 'fr'
                ? 'Livraisons hebdomadaires par camions lourds aux coopératives et négociants textiles de la région Ouest.'
                : 'Weekly flatbed distribution to major agricultural and textile merchant associations in the West region.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-2">
            <span className="text-xs font-mono text-stone-500 uppercase block">
              {language === 'fr' ? 'Corridor Nord & Transit' : 'Northern Transit Corridor'}
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">Garoua & N’Djamena</h3>
            <p className="text-xs text-stone-600">
              {language === 'fr'
                ? 'Transit de conteneurs scellés via le réseau ferroviaire Transcamerounais vers les dépôts du Grand Nord et le Tchad.'
                : 'Bonded container transit onward through the Trans-Cameroonian rail network to northern depots and Chad.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-2">
            <span className="text-xs font-mono text-stone-500 uppercase block">
              {language === 'fr' ? 'Pays Voisins CEMAC' : 'CEMAC Neighboring States'}
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">Bangui, RCA & Gabon</h3>
            <p className="text-xs text-stone-600">
              {language === 'fr'
                ? 'Corridors d’exportation transfrontaliers alimentant les papeteries étatiques et entrepreneurs du bâtiment.'
                : 'Cross-border export corridors supplying government tenders, stationery chains, and building contractors.'}
            </p>
          </div>
        </div>

        {/* 2. Client Case Studies & Endorsements */}
        <div className="space-y-8 mb-16">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800">
              {t.clients.casesEyebrow}
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-stone-900 mt-1">
              {t.clients.casesTitle}
            </h2>
          </div>

          <div ref={casesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientProfiles.map((client) => (
              <div
                key={client.id}
                className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-900 font-mono text-[10px] font-bold uppercase">
                      {client.sector}
                    </span>
                    <span className="text-xs font-mono font-bold text-stone-800">
                      {client.volumeAnnually}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                    {client.name}
                  </h3>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-amber-200 absolute -top-3 -left-2 -z-1 opacity-60" />
                    <p className="text-stone-700 italic text-sm leading-relaxed relative z-10 font-serif-luxury pt-2">
                      "{client.testimonial}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{client.signatory}</h4>
                    <p className="text-[11px] text-stone-500 font-mono">{client.title}</p>
                    <p className="text-[10px] text-amber-800 font-mono flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-700" />
                      <span>{client.region}</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60 block">
                      {client.partnershipYears}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Client Onboarding & Allocation Criteria */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.clients.eligibilityEyebrow}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              {t.clients.eligibilityTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {t.clients.eligibilitySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100 text-xs">
            <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? '01. Registre du Commerce' : '01. Entity Verification'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Entreprise commerciale dûment enregistrée avec numéro RCCM et carte de contribuable valide au Cameroun ou en zone CEMAC.'
                  : 'Registered commercial enterprise with valid Cameroon RCCM or CEMAC corporate registration credentials.'}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? '02. Volume & Fréquence' : '02. Volume Commitment'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Capacité de commande minimale de 1 conteneur 20 pieds ou 40 pieds High Cube (FCL) ou allocations mensuelles régulières.'
                  : 'Minimum order capacity of 1x 20ft / 40ft High Cube container or scheduled monthly warehouse allocations.'}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? '03. Règlement Financier' : '03. Trade Settlement'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Règlement par Lettre de Crédit documentaire (Crédit Doc), garantie bancaire ou facilités de trésorerie agréées.'
                  : 'Settlement via confirmed Documentary Letter of Credit (L/C), bank guarantee, or approved treasury credit terms.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-stone-500">
              {language === 'fr' 
                ? 'Desk Commercial : Akwa, Douala • Tél : +237 233 42 88 19'
                : 'Commercial Desk: Akwa, Douala • Tel: +237 233 42 88 19'}
            </span>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-98"
            >
              {t.clients.btnOpenAccount}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
