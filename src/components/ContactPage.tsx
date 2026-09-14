import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Building2, 
  Printer,
  Copy,
  Check
} from 'lucide-react';
import { getCommodityItems } from '../data/importData';
import { CommodityItem, PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGsapFadeUp } from '../utils/gsapAnimations';

interface ContactPageProps {
  initialCommodity?: CommodityItem;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialCommodity, onNavigate }) => {
  const { language, t } = useLanguage();
  const commodityItems = getCommodityItems(language);

  const formSectionRef = useGsapFadeUp({ duration: 0.85, y: 25 });
  const officesRef = useGsapFadeUp({ stagger: 0.12, duration: 0.85, y: 25 });

  const [selectedCommodityId, setSelectedCommodityId] = useState<string>(
    initialCommodity?.id || commodityItems[0].id
  );
  const [containerCount, setContainerCount] = useState<number>(2);
  const [preferredIncoterm, setPreferredIncoterm] = useState<string>('CIF Port of Douala');
  const [dischargePort, setDischargePort] = useState<string>('douala-terminal');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [businessEmail, setBusinessEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [selectedCertificates, setSelectedCertificates] = useState<string[]>([
    'sgs',
    'origin',
    'bivac'
  ]);

  const [submittedRequisitionNumber, setSubmittedRequisitionNumber] = useState<string | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const activeCommodity = commodityItems.find(c => c.id === selectedCommodityId) || commodityItems[0];

  const handleCertificateToggle = (certId: string) => {
    setSelectedCertificates(prev => 
      prev.includes(certId) ? prev.filter(c => c !== certId) : [...prev, certId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `WRD-2026-DLA-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRequisitionNumber(generatedRef);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyRef = () => {
    if (!submittedRequisitionNumber) return;
    navigator.clipboard.writeText(submittedRequisitionNumber);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const certificatesList = [
    { id: 'sgs', label: language === 'fr' ? 'Scellé & Rapport d’Analyse SGS' : 'SGS Assay & Quantity Seal' },
    { id: 'origin', label: language === 'fr' ? 'Certificat d’Origine Formule A' : 'Certificate of Origin Form A' },
    { id: 'bivac', label: language === 'fr' ? 'Attestation de Vérification BIVAC' : 'BIVAC Pre-Shipment Authorization' },
    { id: 'phyto', label: language === 'fr' ? 'Certificat Phytosanitaire SENASA' : 'Phytosanitary / SENASA Certificate' },
    { id: 'iso', label: language === 'fr' ? 'Garantie Usine ISO 9001:2015' : 'ISO 9001:2015 Mill Warranty' },
    { id: 'vet', label: language === 'fr' ? 'Certificat Sanitaire & Désinfection UE' : 'EU Veterinary Health & Disinfection Cert' }
  ];

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
            <span className="text-stone-900 font-semibold">{t.contact.breadcrumb}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.contact.eyebrow}
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-900 mt-2">
              {t.contact.title}
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        {/* Submission Confirmation Modal / Banner */}
        {submittedRequisitionNumber ? (
          <div className="mb-12 p-8 sm:p-10 rounded-3xl bg-white border border-amber-300 shadow-lg space-y-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center space-x-3 text-emerald-700">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                  {language === 'fr' ? 'Demande d’Allocation Enregistrée avec Succès' : 'Consignment Requisition Successfully Registered'}
                </h3>
                <p className="text-xs font-mono text-stone-500">
                  {language === 'fr' ? 'Référence Officielle :' : 'Official Reference:'} <strong className="text-amber-900">{submittedRequisitionNumber}</strong>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-mono space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">
                    {language === 'fr' ? 'Marchandise Allouée :' : 'Allocated Commodity:'}
                  </span>
                  <span className="text-stone-900 font-bold">{activeCommodity.name}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">
                    {language === 'fr' ? 'Volume FCL :' : 'Consignment Volume:'}
                  </span>
                  <span className="text-stone-900 font-bold">{containerCount}x Conteneurs Maritimes FCL</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">
                    {language === 'fr' ? 'Incoterm Retenu :' : 'Delivery Incoterm:'}
                  </span>
                  <span className="text-stone-900 font-bold">{preferredIncoterm}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">
                    {language === 'fr' ? 'Port de Débarquement :' : 'Discharge Port:'}
                  </span>
                  <span className="text-stone-900 font-bold">{dischargePort}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2">
                <span className="text-stone-500">
                  {language === 'fr' ? 'Enregistré au nom de :' : 'Registered to:'} {companyName || (language === 'fr' ? 'Client Institutionnel' : 'Institutional Client')} ({businessEmail})
                </span>
                <span className="text-amber-800 font-bold">
                  {language === 'fr' ? 'Statut : Transmis au Desk Commercial du Port de Douala' : 'Status: Assigned to Douala Port Commercial Desk'}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              {language === 'fr'
                ? `Notre direction financière et commerciale à Douala a bien reçu votre dossier. Une facture proforma détaillée et les fiches SGS vous seront envoyées à ${businessEmail} sous 4 heures ouvrées.`
                : `Our trade finance director in Douala has received your requisition. A customized Proforma Consignment Schedule and SGS assay sheet will be transmitted to ${businessEmail} within 4 business hours.`}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleCopyRef}
                className="px-4 py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-800 text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                {copiedNotification ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedNotification ? (language === 'fr' ? 'Référence Copiée !' : 'Copied Reference!') : (language === 'fr' ? 'Copier la Référence' : 'Copy Reference ID')}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-800 text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>{language === 'fr' ? 'Imprimer le Bordereau' : 'Print Requisition Sheet'}</span>
              </button>
              <button
                onClick={() => setSubmittedRequisitionNumber(null)}
                className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {language === 'fr' ? 'Soumettre une Autre Demande' : 'Submit New Requisition'}
              </button>
            </div>
          </div>
        ) : null}

        {/* 1. Main Grid: Form + Office Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Comprehensive RFQ Form (No Prices) */}
          <div ref={formSectionRef} className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm">
              <div className="border-b border-stone-100 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                  {t.contact.formEyebrow}
                </span>
                <h2 className="font-serif-luxury text-2xl font-bold text-stone-900 mt-0.5">
                  {t.contact.formTitle}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Commodity Selection */}
                <div>
                  <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-2">
                    {t.contact.stepCommodity}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {commodityItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedCommodityId(item.id)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 ${
                          selectedCommodityId === item.id
                            ? 'bg-amber-50/70 border-amber-700 ring-1 ring-amber-700'
                            : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center flex-shrink-0 ${
                          selectedCommodityId === item.id ? 'border-amber-700 bg-amber-700' : 'border-stone-400'
                        }`}>
                          {selectedCommodityId === item.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-stone-900 font-sans">{item.name}</h4>
                          <span className="text-[10px] font-mono text-amber-800 block mt-0.5">
                            {item.pillar}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Container Volume & Incoterms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-2">
                      {t.contact.stepVolume}
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="range"
                        min={1}
                        max={30}
                        value={containerCount}
                        onChange={(e) => setContainerCount(parseInt(e.target.value))}
                        className="flex-1 accent-amber-700"
                      />
                      <span className="w-24 px-3 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono font-bold text-center text-stone-900">
                        {containerCount}x FCL
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 font-mono mt-1">
                      {language === 'fr' ? 'Charge utile :' : 'Payload:'} {activeCommodity.containerCapacity}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-2">
                      {t.contact.stepIncoterm}
                    </label>
                    <select
                      value={preferredIncoterm}
                      onChange={(e) => setPreferredIncoterm(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs font-medium text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-700 cursor-pointer"
                    >
                      <option value="CIF Port of Douala (Cameroon)">CIF Port of Douala (Cameroon) - {language === 'fr' ? 'Standard' : 'Most Popular'}</option>
                      <option value="CFR Port of Douala (Cameroon)">CFR Port of Douala ({language === 'fr' ? 'Fret Prépayé' : 'Freight Pre-Paid'})</option>
                      <option value="FOB Port of Origin">FOB Port of Origin ({language === 'fr' ? 'Navire affrété par l’acheteur' : 'Client Arranges Ocean Liner'})</option>
                      <option value="DAP Akwa Bonded Depot (Douala)">DAP Akwa Bonded Depot ({language === 'fr' ? 'Livraison Entrepôt Akwa' : 'Douala Door Delivery'})</option>
                      <option value="DAP Yaoundé Inland Depot">DAP Yaoundé Inland Depot ({language === 'fr' ? 'Acheminement Train / Camion' : 'Rail / Truck Transport'})</option>
                      <option value="Transit CEMAC (Chad / CAR)">Transit CEMAC ({language === 'fr' ? 'Transit sous douane Tchad / RCA' : 'Customs Bond to N’Djamena / Bangui'})</option>
                    </select>
                  </div>
                </div>

                {/* 3. Discharge Hub / Terminal */}
                <div>
                  <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-2">
                    {t.contact.stepDischarge}
                  </label>
                  <select
                    value={dischargePort}
                    onChange={(e) => setDischargePort(e.target.value)}
                    className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs font-medium text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-700 cursor-pointer"
                  >
                    <option value="Port of Douala Terminal (CMDLA)">{language === 'fr' ? 'Terminal Portuaire de Douala (DIT / PAD)' : 'Port of Douala Container Terminal (DIT / PAD)'}</option>
                    <option value="Kribi Deep Sea Port (CMKBI)">{language === 'fr' ? 'Port en Eau Profonde de Kribi (CMKBI)' : 'Port of Kribi Deep Sea Terminal (CMKBI)'}</option>
                    <option value="Akwa Bonded Warehouse, Douala">{language === 'fr' ? 'Entrepôt sous Douane Sofomeutex à Akwa (Douala)' : 'Sofomeutex Akwa Bonded Warehouse (Douala)'}</option>
                    <option value="Marché Mokolo Distribution, Yaoundé">{language === 'fr' ? 'Plateforme Marché Mokolo (Yaoundé)' : 'Marché Mokolo Hub (Yaoundé)'}</option>
                    <option value="N’Djamena Central Bonded Depot, Chad">{language === 'fr' ? 'Dépôt Central sous Douane de N’Djamena (Tchad)' : 'N’Djamena Central Bonded Depot (Chad)'}</option>
                  </select>
                </div>

                {/* 4. Mandatory Inspection Documents */}
                <div>
                  <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-2">
                    {t.contact.stepCertificates}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {certificatesList.map((cert) => {
                      const isChecked = selectedCertificates.includes(cert.id);
                      return (
                        <div
                          key={cert.id}
                          onClick={() => handleCertificateToggle(cert.id)}
                          className={`p-2.5 rounded-xl border text-xs flex items-center space-x-2.5 cursor-pointer transition-all ${
                            isChecked 
                              ? 'bg-amber-50/60 border-amber-600 text-stone-900 font-semibold' 
                              : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 ${
                            isChecked ? 'bg-amber-700 border-amber-700 text-white' : 'border-stone-400'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span>{cert.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Company & Buyer Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-1">
                      {t.contact.companyName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'fr' ? "Ex. Société Camerounaise d'Importation SARL" : "e.g. Société Camerounaise d'Importation SARL"}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-1">
                      {t.contact.contactName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Patrick Mbarga"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-1">
                      {t.contact.corporateEmail}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.cm"
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-1">
                      {t.contact.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+237 6XX XX XX XX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-700"
                    />
                  </div>
                </div>

                {/* 6. Special Cargo Requirements / Private Specifications */}
                <div>
                  <label className="text-xs font-bold font-mono text-stone-700 uppercase tracking-wider block mb-1">
                    {t.contact.specialNotes}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={language === 'fr' 
                      ? 'Précisez les configurations de palettes, mois souhaité de livraison, banque émettrice du Crédit Doc...'
                      : 'Specify pallet configurations, desired delivery month, Letter of Credit bank details...'}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-700"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t.contact.btnSubmit}</span>
                  </button>
                  <p className="text-center text-[10px] text-stone-500 font-mono mt-2">
                    {language === 'fr' 
                      ? 'Protégé par accord de non-divulgation et de non-contournement ICC (NCNDA).'
                      : 'Protected by ICC Non-Circumvention and Non-Disclosure Agreement (NCNDA).'}
                  </p>
                </div>

              </form>
            </div>
          </div>

          {/* Right Column: Sovereign Desks & Direct Contact Info */}
          <div ref={officesRef} className="lg:col-span-4 space-y-6">
            
            {/* Douala Hub Contact Card */}
            <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-xs space-y-4">
              <div className="flex items-center space-x-2 text-amber-900">
                <Building2 className="w-5 h-5 text-amber-700" />
                <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                  {language === 'fr' ? 'Hub Maritime de Douala' : 'Douala Maritime Hub'}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Direction Régionale Afrique Centrale gérant le dédouanement portuaire, l’entreposage sous douane et le fret terrestre CEMAC.'
                  : 'Central Africa Regional Directorate handling port clearance, container freight stations, and CEMAC overland freight.'}
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono text-stone-700">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-stone-900 font-sans">Boulevard de la Liberté</strong>
                    <span>Immeuble Sofomeutex, Akwa, Douala, Cameroun</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>+237 233 42 88 19 / +237 699 10 44 20</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>douala.desk@wardiere.com</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>{language === 'fr' ? 'Horaires d’ouverture :' : 'Working Hours:'}</span>
                <span className="text-stone-800 font-semibold">Lun – Sam : 08:00 – 18:00 WAT</span>
              </div>
            </div>

            {/* International Headquarters */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <h4 className="font-serif-luxury text-lg font-bold text-stone-900">
                {language === 'fr' ? 'Sièges Internationaux' : 'Global Headquarters'}
              </h4>
              <div className="space-y-3 text-xs font-mono text-stone-600">
                <div>
                  <strong className="text-stone-900 block font-sans">New York Liaison Office</strong>
                  <span>575 Fifth Avenue, 28th Floor, New York, NY 10017, USA</span>
                  <span className="block text-stone-500">Tel: +1 (212) 890-4400</span>
                </div>
                <div className="pt-2 border-t border-stone-100">
                  <strong className="text-stone-900 block font-sans">European Textile Desk (Antwerp)</strong>
                  <span>Havenlaan 86, Port of Antwerp-Bruges, Belgium</span>
                  <span className="block text-stone-500">antwerp@wardiere.com</span>
                </div>
                <div className="pt-2 border-t border-stone-100">
                  <strong className="text-stone-900 block font-sans">Latin America Agro Desk (Buenos Aires)</strong>
                  <span>Av. Corrientes 345, Buenos Aires, Argentina</span>
                  <span className="block text-stone-500">buenosaires@wardiere.com</span>
                </div>
              </div>
            </div>

            {/* Quality Commitment Notice */}
            <div className="p-6 rounded-3xl bg-stone-900 text-white space-y-3">
              <div className="flex items-center space-x-2 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  {language === 'fr' ? 'Garantie d’Exclusivité' : 'Exclusive Guarantee'}
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {language === 'fr'
                  ? 'En qualité d’importateur officiel exclusif du papier Double A au Cameroun, chaque ramette porte le sceau d’authentification d’usine. Certificats usine remis avec chaque livraison.'
                  : 'As the sole official importer of Double A Paper in Cameroon, every ream is laser-scanned with factory authentication seals. Direct mill certification furnished with all ocean deliveries.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
