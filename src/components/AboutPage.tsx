import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  Anchor,
} from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGsapFadeUp } from '../utils/gsapAnimations';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const narrativeRef = useGsapFadeUp({ duration: 0.85, y: 25 });
  const pillarsRef = useGsapFadeUp({ stagger: 0.12, duration: 0.85, y: 30 });
  const sustainabilityRef = useGsapFadeUp({ duration: 0.8, y: 25 });

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
            <span className="text-stone-900 font-semibold">{t.about.breadcrumb}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.about.eyebrow}
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-900 mt-2">
              {t.about.title}
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3">
              {t.about.subtitle}
            </p>
          </div>
        </div>

        {/* 1. The Heritage Narrative (Two-Column Layout) */}
        <div ref={narrativeRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-serif-luxury text-3xl font-bold text-stone-900 leading-snug">
              {language === 'fr' 
                ? 'Relier les Continents par des Contrats d’Usines et Fermes Souverains' 
                : 'Bridging Continents Through Sovereign Mill & Farm Contracts'}
            </h2>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              {language === 'fr'
                ? 'Le négoce traditionnel de marchandises en Afrique Centrale a longtemps souffert de chaînes d’intermédiaires informels, de classements hétérogènes et de retards maritimes imprévisibles. Sofomeutex a été créée pour introduire un standard corporate sans compromis dans la région.'
                : 'Traditional commodity trading in Central Africa has long been hampered by informal brokerage chains, inconsistent grading, and unpredictable maritime delays. Sofomeutex was established to introduce an uncompromising tier-one corporate standard to the region.'}
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              {language === 'fr'
                ? 'En garantissant les droits de distribution exclusifs du papier Double A au Cameroun, nous avons prouvé que des produits de classe mondiale peuvent être acheminés directement de Bangkok à Douala avec garantie de zéro bourrage et une disponibilité continue des stocks.'
                : 'By securing the exclusive Cameroon distribution rights for Double A Paper, we proved that high-performance, world-class products can be delivered directly from Bangkok to Douala with guaranteed zero paper jams and continuous stock availability.'}
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              {language === 'fr'
                ? 'Nous avons reproduit ce modèle institutionnel sur nos autres filières clés : la Chambre Argentine du Pop-corn (CAPPEC), les usines de tri textile d’Europe de l’Ouest, et les fours de gypse pur du bassin méditerranéen.'
                : 'We replicated that identical institutional model across our other core verticals: working directly with the Argentine Popcorn Chamber (CAPPEC) in South America, premier textile recycling consortia in Western Europe, and high-purity gypsum kilns in the Mediterranean basin.'}
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <span className="font-serif-luxury text-3xl font-bold text-amber-800 block">$120M+</span>
                <span className="text-xs font-mono text-stone-500 uppercase">
                  {language === 'fr' ? 'Volume Commercial Annuel' : 'Annual Sourcing Capacity'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <span className="font-serif-luxury text-3xl font-bold text-amber-800 block">100% {language === 'fr' ? 'Direct' : 'Direct'}</span>
                <span className="text-xs font-mono text-stone-500 uppercase">
                  {language === 'fr' ? 'Zéro Courtier Intermédiaire' : 'Zero Broker Markups'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200">
              <img 
                src="/assets/images/paper_container_loading.webp" 
                alt="Sofomeutex Container Loading Operations"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent p-8 flex flex-col justify-end text-white">
                <span className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                  {language === 'fr' ? 'Opérations d’Exportation en Direct' : 'Live Export Operations'}
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold mt-1">
                  {language === 'fr' ? 'Chargement Direct de Conteneurs, Origine à Douala' : 'Direct Container Loading, Origin to Douala'}
                </h3>
                <p className="text-xs text-stone-300 mt-1">Thaïlande • Chine • Argentine • Europe → Douala (Akwa)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Core Pillars of Institutional Trust */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {language === 'fr' ? 'Notre Charte Opérationnelle' : 'Our Operating Charter'}
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-stone-900">
              {language === 'fr' ? 'Les Quatre Piliers de Sofomeutex' : 'The Four Cornerstones of Sofomeutex'}
            </h2>
          </div>

          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-stone-900">
                {language === 'fr' ? 'Représentation Exclusive' : 'Exclusive Authorization'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Nous n’importons que des marchandises pour lesquelles nous détenons l’accréditation directe d’usine (ex. Double A), éliminant les contrefaçons.'
                  : 'We only trade products where we possess exclusive direct mill representation, such as Double A paper in Cameroon, eliminating counterfeit or degraded lots.'}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Award className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-stone-900">
                {language === 'fr' ? 'Analyses SGS Avant Embarquement' : 'SGS Pre-Shipment Assays'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Chaque conteneur est scellé sous contrôle d’experts indépendants (SGS / BIVAC / SENASA). Certificats remis avant dédouanement.'
                  : 'Every container is sealed under independent surveyor supervision (SGS / BIVAC / SENASA). Inspection certificates are furnished prior to freight release.'}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center">
                <Anchor className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-stone-900">
                {language === 'fr' ? 'Bouclier Surestaries Portuaire' : 'Port Demurrage Shield'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Nos contrats-cadres avec Maersk et CMA CGM confèrent 21 jours de franchise totale de surestaries au Port de Douala pour nos clients.'
                  : 'By maintaining master container contracts with Maersk and CMA CGM, we secure 21-day free demurrage periods at the Port of Douala for all clients.'}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center">
                <FileCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-stone-900">
                {language === 'fr' ? 'Lettres de Crédit Documentaires' : 'Documentary Letter of Credit'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Conformité absolue aux normes ICC RUU 600 pour crédits documentaires, en partenariat avec BICEC, Ecobank et Citibank.'
                  : 'Full adherence to ICC UCP 600 standards for documentary credits, supported by tier-one partner banks including BICEC, Ecobank, and Citibank.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Sustainable & Ethical Sourcing Practices */}
        <div ref={sustainabilityRef} className="p-8 sm:p-10 rounded-3xl bg-stone-900 text-white space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              {language === 'fr' ? 'ESG & Responsabilité Environnementale' : 'ESG & Environmental Stewardship'}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
              {language === 'fr' 
                ? 'Foresterie Durable, Sécurité Alimentaire & Économie Circulaire' 
                : 'Ethical Forestry, Food Safety & Circular Textile Economy'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {language === 'fr'
                ? 'Chaque marchandise importée en Afrique Centrale répond aux normes internationales les plus exigeantes :'
                : 'We insist that every commodity we import into Central Africa aligns with progressive international standards:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-800 text-xs">
            <div className="space-y-2">
              <h4 className="text-amber-400 font-bold uppercase font-mono">
                {language === 'fr' ? 'Modèle d’Arbres Cultivés Double A' : 'Farmed Trees Double A Model'}
              </h4>
              <p className="text-stone-300 leading-relaxed">
                {language === 'fr'
                  ? 'Le papier Double A utilise des arbres cultivés sur les talus des rizières (« Paper Tree from KHAN-NA »), sans abattage de forêts primaires.'
                  : 'Double A paper utilizes high-fiber trees cultivated on the unused ridges between rice paddies ("Paper Tree from KHAN-NA"), creating rural jobs with zero natural forest logging.'}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-amber-400 font-bold uppercase font-mono">
                {language === 'fr' ? 'Grains Argentins Sans OGM' : 'Non-GMO Argentine Grain'}
              </h4>
              <p className="text-stone-300 leading-relaxed">
                {language === 'fr'
                  ? 'Nos grains de pop-corn sont cultivés avec irrigation de précision en Argentine sous contrôle SENASA, certifiés sans OGM et sans mycotoxines.'
                  : 'Our popcorn grains are grown with precision irrigation in Argentina under SENASA phytosanitary surveillance, completely free from genetic modifications and toxic mycotoxins.'}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-amber-400 font-bold uppercase font-mono">
                {language === 'fr' ? 'Mode Européenne Circulaire' : 'Circular European Fashion'}
              </h4>
              <p className="text-stone-300 leading-relaxed">
                {language === 'fr'
                  ? 'Nos textiles de friperie offrent une seconde vie aux vêtements de qualité supérieure d’Europe, réduisant les déchets tout en habillant le Cameroun.'
                  : 'Our second-hand textiles give a second life to high-grade European garments, keeping thousands of tons of fabrics out of landfills while providing affordable, stylish attire in Cameroon.'}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-stone-400">
              {language === 'fr' 
                ? 'Fondée et basée à Douala, Cameroun • Bureau de Liaison à New York'
                : 'Headquartered in Douala, Cameroon • International Liaison Office in New York'}
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-98"
            >
              {language === 'fr' ? 'Contacter la Direction' : 'Contact Leadership'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
