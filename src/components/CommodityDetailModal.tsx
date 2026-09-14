import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Package, 
  FileText
} from 'lucide-react';
import { CommodityItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CommodityDetailModalProps {
  item: CommodityItem | null;
  onClose: () => void;
  onOpenRFQ: (item: CommodityItem) => void;
}

export const CommodityDetailModal: React.FC<CommodityDetailModalProps> = ({
  item,
  onClose,
  onOpenRFQ,
}) => {
  const { language } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!item) return null;

  const currentImage = item.gallery[activeImageIndex] || item.image;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="commodity-modal-backdrop"
        onClick={onClose}
        className="fixed inset-0"
      />

      <div 
        id="commodity-modal-panel"
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-stone-200 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
      >
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono text-[10px] font-bold uppercase tracking-wider">
              {item.pillar}
            </span>
            {item.exclusiveStatus && (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold">
                {item.exclusiveStatus}
              </span>
            )}
          </div>

          <button
            id="close-commodity-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Top Stage: Gallery & Quick Information */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Gallery Left */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-stone-200">
                <img 
                  src={currentImage} 
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.image;
                  }}
                  className="w-full h-full object-cover transition-all duration-300" 
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-2">
                {item.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-amber-700 ring-1 ring-amber-700' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${item.name} thumbnail ${idx}`} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = item.image;
                      }}
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Information Right */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-mono text-amber-800 uppercase tracking-wider font-semibold">
                  {language === 'fr' ? 'Origine :' : 'Origin:'} {item.origin}
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900 mt-1">
                  {item.name}
                </h3>
                <p className="text-xs font-mono text-stone-500 mt-1">
                  {language === 'fr' ? 'Port cible :' : 'Target Discharge:'} {item.destination} | {language === 'fr' ? 'Code Douanier :' : 'HS Code:'} {item.hsCode}
                </p>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {item.detailedDescription}
              </p>

              {/* Container Specs Box */}
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-amber-900 font-bold">
                  <Package className="w-4 h-4 text-amber-700" />
                  <span>{language === 'fr' ? 'Spécifications Conditionnement & Charge Utile' : 'Packaging & Payload Specifications'}</span>
                </div>
                <div className="space-y-1 text-[11px] font-mono text-stone-700">
                  <p><strong>{language === 'fr' ? 'Capacité :' : 'Capacity:'}</strong> {item.containerCapacity}</p>
                  <p><strong>{language === 'fr' ? 'Conditionnement :' : 'Packing:'}</strong> {item.packaging}</p>
                  <p><strong>{language === 'fr' ? 'Commande Minimale (MOQ) :' : 'Minimum Order (MOQ):'}</strong> {item.moq}</p>
                  <p><strong>{language === 'fr' ? 'Incoterms :' : 'Incoterms:'}</strong> {item.incoterms.join(', ')}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Full Technical Parameter Table */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h4 className="font-serif-luxury text-lg font-bold text-stone-900">
              {language === 'fr' ? 'Métriques Techniques & Analyses Certifiées' : 'Technical Verification & Assay Metrics'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="p-3 rounded-xl bg-stone-50 border border-stone-100 flex items-start justify-between text-xs gap-3">
                  <span className="font-mono text-stone-500 font-medium">{feat.label}:</span>
                  <span className="font-semibold text-stone-900 text-right">{feat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Bullet Specifications */}
          <div className="space-y-2 pt-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-stone-700 font-bold">
              {language === 'fr' ? 'Contrôles Usine & Analyses Qualité :' : 'Factory Mill & Quality Assays:'}
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-start space-x-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Badges Strip */}
          <div className="p-4 rounded-2xl bg-stone-100/70 border border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2 text-stone-700 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>
                {language === 'fr' ? 'Inspection Indépendante :' : 'Independent Inspection:'} <strong>{item.gradeAssay}</strong>
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.certifications.map((c, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-[10px] font-mono text-stone-700 font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-700 text-xs font-semibold transition-all cursor-pointer"
          >
            {language === 'fr' ? 'Fermer l’aperçu' : 'Close Overview'}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenRFQ(item);
            }}
            className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center space-x-2 cursor-pointer active:scale-98"
          >
            <FileText className="w-4 h-4" />
            <span>{language === 'fr' ? 'Demander une Allocation de Conteneur (RFQ)' : 'Request Container Allocation (RFQ)'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
