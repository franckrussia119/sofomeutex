import React from 'react';
import { 
  MapPin, 
  Mail, 
} from 'lucide-react';
import { getTeamMembers } from '../data/importData';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useGsapFadeUp } from '../utils/gsapAnimations';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const teamMembers = getTeamMembers(language);

  const teamGridRef = useGsapFadeUp({ stagger: 0.12, duration: 0.85, y: 30 });
  const complianceRef = useGsapFadeUp({ duration: 0.8, y: 25 });

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
            <span className="text-stone-900 font-semibold">{t.team.breadcrumb}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.team.eyebrow}
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-900 mt-2">
              {t.team.title}
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3">
              {t.team.subtitle}
            </p>
          </div>
        </div>

        {/* 1. Executive Board Grid */}
        <div ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-stone-100">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80';
                    }}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-stone-900/80 backdrop-blur-md text-white flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{member.location.split(',')[0]}</span>
                    </span>
                    <span className="text-[10px] text-stone-300">{member.role.split(',')[0]}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono font-bold text-amber-800 mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-[11px] font-mono text-stone-500">
                      {member.location}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {member.bio}
                  </p>

                  {/* Credentials / Honors */}
                  <div className="pt-3 border-t border-stone-100 space-y-1">
                    <span className="text-[10px] font-mono text-stone-500 uppercase block font-bold">
                      {language === 'fr' ? 'Accréditations & Gouvernance :' : 'Credentials & Governance:'}
                    </span>
                    {member.credentials.map((cred, cIdx) => (
                      <div key={cIdx} className="text-[11px] text-stone-700 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 rounded-xl border border-stone-200 hover:border-amber-300 text-stone-700 hover:text-amber-900 text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer active:scale-98"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-700" />
                  <span>{t.team.btnConsult}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Governance Advisory & Anti-Fraud Standards */}
        <div ref={complianceRef} className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              {t.team.complianceEyebrow}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              {t.team.complianceTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {t.team.complianceSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100 text-xs">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? 'Anti-Corruption & FCPA' : 'Anti-Corruption & FCPA'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Conformité absolue avec le Foreign Corrupt Practices Act américain (FCPA) et les réglementations de la CONAC au Cameroun.'
                  : 'Full compliance with the U.S. Foreign Corrupt Practices Act (FCPA) and Cameroon Anti-Corruption Commission (CONAC) regulations.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? 'Filtrage Sanctions & LCB-FT' : 'Sanctions & AML Screening'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Chaque opération commerciale fait l’objet d’une vérification automatisée sur les listes de sanctions OFAC, UE et ONU avant émission des connaissements maritimes.'
                  : 'Every trade transaction undergoes automated OFAC, EU, and UN sanctions list screening before container bills of lading are issued.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <span className="font-mono text-amber-800 font-bold block text-sm">
                {language === 'fr' ? 'Séquestre & Protection Crédit Doc' : 'Escrow & LC Protection'}
              </span>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr'
                  ? 'Les dépôts clients et lettres de crédit sont domiciliés dans des banques régulées de premier rang (BICEC, Ecobank, Citibank).'
                  : 'Client deposits and letters of credit are held in dedicated trust facilities through regulated banking partners (BICEC, Ecobank, Citibank).'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
