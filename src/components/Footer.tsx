import React from 'react';
import { Anchor, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#12191d] text-stone-300 border-t border-stone-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Strip */}
        <div className="pb-12 border-b border-stone-800 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white font-serif-luxury tracking-wide">
                {language === 'fr' ? 'Exclusivité Double A' : 'Double A Exclusivity'}
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {language === 'fr' 
                  ? 'Seul importateur agréé du papier Double A authentique au Cameroun.'
                  : 'Sole authorized importer of genuine Double A A4 paper in Cameroon.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white font-serif-luxury tracking-wide">
                {language === 'fr' ? 'Pop-corn d’Argentine' : 'Argentine Popcorn'}
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {language === 'fr'
                  ? 'Expéditions directes des silos de la Pampa avec taux d’expansion 44+.'
                  : 'Direct Pampa grain elevator shipments with 44+ expansion yield.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white font-serif-luxury tracking-wide">
                {language === 'fr' ? 'Friperie & Chaussures d’Europe' : 'European Bales & Shoes'}
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {language === 'fr'
                  ? 'Vêtements triés Crème & Extra et chaussures 100% appariées.'
                  : 'Rigidly sorted Cream & Grade A clothing and paired footwear.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white font-serif-luxury tracking-wide">
                {language === 'fr' ? 'Plâtre de Gypse Pur' : 'High-Grade Gypsum'}
              </h4>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {language === 'fr'
                  ? 'Plâtre architectural extra-blanc et pur pour marchés CEMAC.'
                  : 'Ultra-pure white construction & moulding plaster for CEMAC markets.'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-[#12191d]">
                <Anchor className="w-5 h-5 stroke-[2.4]" />
              </div>
              <span className="font-serif-luxury text-2xl font-bold tracking-tight text-white">
                Sofomeutex
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 text-xs font-mono text-stone-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{language === 'fr' ? 'RC Cameroun' : 'Cameroon Trade Reg'}: RC/DLA/2012/B/1842</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>US Federal LEI Code: 213800XYZ9087123</span>
              </p>
            </div>
          </div>

          {/* Core Supply Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              {t.footer.colPillars}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onNavigate('supply')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'fr' 
                    ? 'Papier A4 Double A (Exclusivité Cameroun)' 
                    : 'Double A A4 Copier Paper (Cameroon Exclusive)'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('supply')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'fr'
                    ? 'Pop-corn Gourmet d’Argentine (Papillon & Champignon)'
                    : 'Argentine Gourmet Popcorn (Butterfly & Mushroom)'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('supply')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'fr'
                    ? 'Balles de Friperie Européenne & Chaussures Appariées'
                    : 'European Used Clothes Bales & Paired Shoes'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('supply')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {language === 'fr'
                    ? 'Plâtre de Gypse Pur de Construction'
                    : 'High-Purity Gypsum & Construction Plaster'}
                </button>
              </li>
            </ul>
          </div>

          {/* Key Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              {t.footer.colInstitutional}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">{t.nav.about}</button></li>
              <li><button onClick={() => onNavigate('logistics')} className="hover:text-white transition-colors cursor-pointer">{t.nav.logistics}</button></li>
              <li><button onClick={() => onNavigate('clients')} className="hover:text-white transition-colors cursor-pointer">{t.nav.clients}</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-white transition-colors cursor-pointer">{t.nav.team}</button></li>
              <li><button onClick={() => onNavigate('partners')} className="hover:text-white transition-colors cursor-pointer">{t.nav.partners}</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">{t.nav.contact}</button></li>
            </ul>
          </div>

          {/* Regional Desks */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              {t.footer.colDesks}
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium block">
                    {language === 'fr' ? 'Opérations Port de Douala' : 'Douala Port Operations'}
                  </span>
                  <span>Blvd de la Liberté, Akwa, Douala, Cameroun</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium block">
                    {language === 'fr' ? 'Bureau de Liaison États-Unis' : 'New York Liaison Office'}
                  </span>
                  <span>575 Fifth Avenue, New York, NY 10017, USA</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium block">
                    {language === 'fr' ? 'Achat Textile Europe' : 'European Textile Procurement'}
                  </span>
                  <span>Havenlaan 86, Port of Antwerp-Bruges, Belgium</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
            <span>Incoterms® 2020 Compliant</span>
            <span>•</span>
            <span>SGS / BIVAC Assayed</span>
            <span>•</span>
            <span>CEMAC Customs Approved</span>
            <span>•</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
