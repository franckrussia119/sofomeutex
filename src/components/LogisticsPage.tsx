import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  ArrowRight,
} from 'lucide-react';
import { getShippingLanes } from '../data/importData';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGsapFadeUp } from '../utils/gsapAnimations';

interface LogisticsPageProps {
  onNavigate: (page: PageId) => void;
}

export const LogisticsPage: React.FC<LogisticsPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [selectedCommodityCorridor, setSelectedCommodityCorridor] = useState<string>('paper');
  const [selectedDestinationHub, setSelectedDestinationHub] = useState<string>('douala');

  const simRef = useGsapFadeUp({ duration: 0.8, y: 25 });
  const lanesRef = useGsapFadeUp({ stagger: 0.12, duration: 0.85, y: 30 });
  const protocolRef = useGsapFadeUp({ duration: 0.8, y: 25 });

  const shippingLanes = getShippingLanes(language);

  // Interactive transit calculator logic localized
  const corridorData: Record<string, { nameEn: string; nameFr: string; origin: string; carrier: string; seaDays: number; containerType: string; inspection: string }> = {
    paper: {
      nameEn: 'Double A Paper',
      nameFr: 'Papier Double A',
      origin: language === 'fr' ? 'Port de Laem Chabang, Thaïlande (THLCH)' : 'Port of Laem Chabang, Thailand (THLCH)',
      carrier: 'CMA CGM / Maersk Line',
      seaDays: 28,
      containerType: language === 'fr' ? '40 pieds High Cube avec sachets desséchants (8 000 ramettes)' : '40ft High Cube with Desiccant Bags (8,000 Reams)',
      inspection: language === 'fr' ? 'Vérification humidité & quantité SGS + Certificat usine' : 'SGS Quantity & Moisture Verification + Mill Certificate'
    },
    popcorn: {
      nameEn: 'Argentine Popcorn',
      nameFr: 'Pop-corn d’Argentine',
      origin: language === 'fr' ? 'Port de Buenos Aires / Rosario, Argentine (ARBUE)' : 'Port of Buenos Aires / Rosario, Argentina (ARBUE)',
      carrier: 'MSC Mediterranean Shipping',
      seaDays: 24,
      containerType: language === 'fr' ? 'Conteneur 20 pieds Dry Cargo FCL (26 T en sacs kraft 25 kg)' : '20ft Dry Cargo FCL (26 MT in 25kg Kraft Bags)',
      inspection: language === 'fr' ? 'Certificat phytosanitaire SENASA + Analyse SGS' : 'SENASA Phytosanitary Certificate + SGS Assay'
    },
    textiles: {
      nameEn: 'European Used Apparel',
      nameFr: 'Friperie & Chaussures Europe',
      origin: language === 'fr' ? 'Port d’Anvers-Bruges, Belgique (BEANR)' : 'Port of Antwerp-Bruges, Belgium (BEANR)',
      carrier: 'Hapag-Lloyd / Grimaldi Lines',
      seaDays: 16,
      containerType: language === 'fr' ? '40 pieds High Cube pressé hydrauliquement (26 T balles & sacs)' : '40ft High Cube Hydraulic-Packed (26 MT Bales & Sacks)',
      inspection: language === 'fr' ? 'Certificat sanitaire & désinfection UE + Scellé BIVAC' : 'EU Health & Disinfection Certificate + BIVAC Seal'
    },
    plaster: {
      nameEn: 'Industrial Gypsum Plaster',
      nameFr: 'Plâtre de Gypse Industriel',
      origin: language === 'fr' ? 'Port de Valence / Gênes, Europe du Sud' : 'Port of Valencia / Genoa, Southern Europe',
      carrier: 'ONE Ocean Network Express',
      seaDays: 18,
      containerType: language === 'fr' ? '20 pieds charge lourde FCL (27 T sur palettes filmées)' : '20ft Heavy Payload FCL (27 MT on Shrink-Wrapped Skids)',
      inspection: language === 'fr' ? 'Analyse norme EN 13279-1 + Finesse de mouture SGS' : 'EN 13279-1 Standard Assay + SGS Fineness Test'
    }
  };

  const hubData: Record<string, { nameEn: string; nameFr: string; inlandDays: number; mode: string; notes: string }> = {
    douala: {
      nameEn: 'Douala Port Terminal (PAD/DIT)',
      nameFr: 'Terminal Portuaire de Douala (PAD/DIT)',
      inlandDays: 0,
      mode: language === 'fr' ? 'Débarquement direct portuaire & Entrepôt sous douane' : 'Direct Port Discharge & Bonded Warehouse Staging',
      notes: language === 'fr' ? 'Dédouanement en 48-72h avec franchise surestaries négociée.' : 'Customs cleared in 48-72 hours with zero container demurrage guarantees.'
    },
    yaounde: {
      nameEn: 'Yaoundé Central Depot',
      nameFr: 'Dépôt Central de Yaoundé',
      inlandDays: 2,
      mode: language === 'fr' ? 'Fret ferroviaire Camrail & camions plateaux sécurisés' : 'Camrail Rail Freight & Enclosed Heavy Flatbed Trucking',
      notes: language === 'fr' ? 'Transit direct vers les centres de grossistes de Mokolo & Bastos.' : 'Direct transit to major distribution centers in Mokolo & Bastos.'
    },
    bafoussam: {
      nameEn: 'Bafoussam & West Region',
      nameFr: 'Bafoussam & Région de l’Ouest',
      inlandDays: 3,
      mode: language === 'fr' ? 'Transit par route lourde via Nationale 3 / 4' : 'Heavy Truck Transit via National Route 3 / 4',
      notes: language === 'fr' ? 'Approvisionnement des coopératives régionales et réseaux de négoce.' : 'Supplying regional cooperatives and retail merchant networks.'
    },
    ndjamena: {
      nameEn: 'N’Djamena, Chad (CEMAC Transit)',
      nameFr: 'N’Djamena, Tchad (Transit CEMAC)',
      inlandDays: 7,
      mode: language === 'fr' ? 'Corridor sous caution convention CEMAC sécurisé par balise GPS' : 'Secured Cross-Border Transit Corridor under CEMAC Convention',
      notes: language === 'fr' ? 'Titre de transit (TIF) sous douane avec traçabilité satellitaire continue.' : 'Full transit bond (TIF) with continuous satellite GPS monitoring.'
    },
    bangui: {
      nameEn: 'Bangui, CAR (Central African Rep.)',
      nameFr: 'Bangui, RCA (Rép. Centrafricaine)',
      inlandDays: 9,
      mode: language === 'fr' ? 'Axe routier Douala-Bangui sous escorte' : 'Bilateral Douala-Bangui Freight Highway',
      notes: language === 'fr' ? 'Dédouanement frontalier direct au poste frontière de Garoua-Boulaï.' : 'Direct transit customs clearance at Belabo / Garoua-Boulaï border.'
    }
  };

  const currentCorridor = corridorData[selectedCommodityCorridor] || corridorData['paper'];
  const currentHub = hubData[selectedDestinationHub] || hubData['douala'];
  const totalEstimatedDays = currentCorridor.seaDays + currentHub.inlandDays + 3; // 3 days port customs clearing

  return (
    <div className="bg-[#faf9f6] text-stone-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-stone-500">
            <button onClick={() => onNavigate('home')} className="hover:text-amber-800 cursor-pointer">
              {t.nav.home}
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">{t.logistics.breadcrumb}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                {t.logistics.eyebrow}
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-900 mt-2">
                {t.logistics.title}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
              {t.logistics.subtitle}
            </p>
          </div>
        </div>

        {/* 1. Interactive Ocean & Inland Route Lead-Time Estimator */}
        <div ref={simRef} className="mb-14 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="border-b border-stone-100 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                {t.logistics.simEyebrow}
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                {t.logistics.simTitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">
              ICC Incoterms® 2020 Validated
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-2">
                  {t.logistics.selectCorridor}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(corridorData).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCommodityCorridor(key)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                        selectedCommodityCorridor === key
                          ? 'bg-amber-800 text-white shadow-xs'
                          : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                      }`}
                    >
                      {language === 'fr' ? data.nameFr : data.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-2">
                  {t.logistics.selectHub}
                </label>
                <select
                  value={selectedDestinationHub}
                  onChange={(e) => setSelectedDestinationHub(e.target.value)}
                  className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs font-medium text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-700 cursor-pointer"
                >
                  {Object.entries(hubData).map(([key, data]) => (
                    <option key={key} value={key}>
                      {language === 'fr' ? data.nameFr : data.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-amber-900 font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>{t.logistics.demurrageShieldTitle}</span>
                </div>
                <p className="text-stone-600 leading-relaxed text-[11px]">
                  {t.logistics.demurrageShieldDesc}
                </p>
              </div>
            </div>

            {/* Calculated Route Blueprint Display */}
            <div className="lg:col-span-6 rounded-2xl bg-stone-900 text-white p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  {t.logistics.summaryTitle}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {language === 'fr' ? currentCorridor.nameFr : currentCorridor.nameEn}
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-stone-400">{t.logistics.loadingOrigin}</span>
                  <span className="text-white text-right font-semibold">{currentCorridor.origin}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-stone-400">{t.logistics.oceanCarrier}</span>
                  <span className="text-white text-right font-semibold">
                    {currentCorridor.carrier} ({currentCorridor.seaDays} {language === 'fr' ? 'jours mer' : 'sea days'})
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-stone-400">{t.logistics.containerStowage}</span>
                  <span className="text-white text-right font-semibold">{currentCorridor.containerType}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-stone-400">{t.logistics.mandatoryAssays}</span>
                  <span className="text-emerald-400 text-right font-semibold">{currentCorridor.inspection}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-stone-400">{t.logistics.inlandMode}</span>
                  <span className="text-white text-right font-semibold">{currentHub.mode}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">{t.logistics.totalEstimatedTime}</span>
                  <span className="font-serif-luxury text-3xl font-bold text-amber-400">
                    ~{totalEstimatedDays} {language === 'fr' ? 'Jours' : 'Days'}
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-98"
                >
                  {t.logistics.btnBookSlot}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Detailed Shipping Corridors Grid */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.logistics.lanesEyebrow}
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-stone-900 mt-2">
              {t.logistics.lanesTitle}
            </h2>
          </div>

          <div ref={lanesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingLanes.map((lane) => (
              <div 
                key={lane.id}
                className="p-6 rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 font-mono text-[10px] font-bold uppercase">
                    {lane.status}
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-800">
                    {lane.transitDays} {language === 'fr' ? 'Jours de Mer Moyenne' : 'Days Average Sea Transit'}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                    {lane.name}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 mt-0.5">
                    {lane.originPort} ➔ {lane.destinationPort}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 space-y-1 text-xs">
                  <p className="text-stone-800"><strong>{language === 'fr' ? 'Cargaison :' : 'Assigned Cargo:'}</strong> {lane.commodityCargo}</p>
                  <p className="text-stone-600"><strong>{language === 'fr' ? 'Compagnie Maritime :' : 'Ocean Carrier:'}</strong> {lane.primaryCarrier}</p>
                  <p className="text-stone-600"><strong>{language === 'fr' ? 'Départs :' : 'Sailings:'}</strong> {lane.frequency}</p>
                </div>

                <p className="text-xs text-stone-500 leading-relaxed italic">
                  "{lane.notes}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Port of Douala Terminal Operations & Customs Protocol */}
        <div ref={protocolRef} className="p-8 rounded-3xl bg-white border border-stone-200 space-y-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.logistics.protocolEyebrow}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              {t.logistics.protocolTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {t.logistics.protocolDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-800 text-white font-mono font-bold flex items-center justify-center text-xs">
                01
              </div>
              <h4 className="text-xs font-bold text-stone-900 font-sans uppercase tracking-wider">
                {language === 'fr' ? 'Dépôt Anticipé SGS / BIVAC' : 'Pre-Arrival SGS / BIVAC Filing'}
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Déclaration d’importation (DI) et attestation de vérification SGS (AV/CRF) traitées 5 jours avant accostage.'
                  : 'Import Declaration (DI) and SGS clean report of findings (AV/CRF) processed 5 days before vessel docking.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-800 text-white font-mono font-bold flex items-center justify-center text-xs">
                02
              </div>
              <h4 className="text-xs font-bold text-stone-900 font-sans uppercase tracking-wider">
                {language === 'fr' ? 'Débarquement Quai & Portiques' : 'Berth Disembarkation & Gantry Move'}
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Conteneurs déchargés directement des cales vers nos plateaux sous douane pré-autorisés.'
                  : 'Containers lifted directly from vessel holds to our pre-cleared bonded transport skids under customs seal.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-800 text-white font-mono font-bold flex items-center justify-center text-xs">
                03
              </div>
              <h4 className="text-xs font-bold text-stone-900 font-sans uppercase tracking-wider">
                {language === 'fr' ? 'Stockage Sécurisé à Akwa' : 'Akwa Bonded Warehouse Staging'}
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Entreposage dans nos hangars climatisés et gardés d’Akwa, Douala, à l’abri de l’humidité tropicale.'
                  : 'Cargo staged in climate-controlled security depots in Akwa, Douala, preventing rain exposure to paper and grains.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-800 text-white font-mono font-bold flex items-center justify-center text-xs">
                04
              </div>
              <h4 className="text-xs font-bold text-stone-900 font-sans uppercase tracking-wider">
                {language === 'fr' ? 'Escorte & Livraison CEMAC' : 'Inland Escort & Regional Discharge'}
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Camions porte-conteneurs dédiés acheminés jusqu’aux dépôts clients au Cameroun, Tchad ou RCA.'
                  : 'Dedicated multi-axle freight trucks escorted to customer warehouses across Cameroon, Chad, or Central African Republic.'}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-100">
            <div className="flex items-center space-x-3 text-xs text-stone-600 font-mono">
              <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>
                {language === 'fr' 
                  ? 'Base Opérationnelle : Boulevard de la Liberté, Akwa, Douala, Cameroun'
                  : 'Operations Base: Boulevard de la Liberté, Akwa, Douala, Cameroon'}
              </span>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 active:scale-98"
            >
              <span>{language === 'fr' ? 'Consulter le Responsable Logistique' : 'Consult Logistics Officer'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
