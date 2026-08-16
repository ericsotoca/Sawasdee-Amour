import { UserRole, Language } from '../types';
import { Heart, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface RoleSelectionScreenProps {
  onSelect: (role: UserRole, lang: Language) => void;
}

export default function RoleSelectionScreen({ onSelect }: RoleSelectionScreenProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden font-sans">
      {/* Decorative Elegant Background Elements */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-amber-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-amber-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl w-full space-y-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100/70 border border-amber-200/60 rounded-full text-xs font-bold text-[#b88c5e] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20 animate-pulse" />
            <span>Sawasdee-Amour Academy</span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            ยินดีต้อนรับ • Bienvenue • Welcome
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xl mx-auto uppercase tracking-wider">
            โปรดเลือกสถานะเพื่อเข้าสู่หลักสูตรที่ออกแบบมาสำหรับคุณโดยเฉพาะ
            <span className="block mt-1 text-[11px] text-slate-400 italic font-sans lowercase normal-case">
              Veuillez sélectionner votre profil pour accéder à un contenu personnalisé.
            </span>
          </p>
        </div>

        {/* 3 Main Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Card 1: Thai Woman */}
          <button
            onClick={() => onSelect('FEMALE_THAI', 'TH')}
            className="group bg-white p-6 sm:p-8 rounded-2xl border border-[#e5e1da] shadow-sm hover:border-[#e2b07e] hover:shadow-md transition-all text-left flex flex-col justify-between space-y-6 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-500/10 active:scale-98"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#b88c5e] border border-amber-100 group-hover:bg-amber-100/60 transition-colors">
                <span className="text-2xl">🇹🇭</span>
              </div>
              
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg font-black text-slate-800">
                  ฉันคือผู้หญิงไทย
                </h3>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#b88c5e]">
                  Thai Female Partner
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                เรียนรู้วัฒนธรรม ความคิด และภาษาของคู่รักต่างชาติ/ฝรั่งเศส ปรับความเข้าใจเพื่อสร้างชีวิตคู่ที่ราบรื่นและมั่นคงไปด้วยกัน
              </p>
            </div>

            <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-[#b88c5e] text-xs font-extrabold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              <span>เข้าสู่หลักสูตร TH</span>
              <Compass className="w-4 h-4" />
            </div>
          </button>

          {/* Card 2: French Man */}
          <button
            onClick={() => onSelect('MALE_WESTERN', 'FR')}
            className="group bg-white p-6 sm:p-8 rounded-2xl border border-[#e5e1da] shadow-sm hover:border-[#e2b07e] hover:shadow-md transition-all text-left flex flex-col justify-between space-y-6 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-500/10 active:scale-98"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#b88c5e] border border-amber-100 group-hover:bg-amber-100/60 transition-colors">
                <span className="text-2xl">🇫🇷</span>
              </div>
              
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg font-black text-slate-800">
                  Homme Français
                </h3>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#b88c5e]">
                  French Male Partner
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                Apprenez à décoder la culture de votre partenaire thaïlandaise, évitez les maladresses et construisez un avenir harmonieux et sécurisé.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-[#b88c5e] text-xs font-extrabold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              <span>Accéder en Français</span>
              <Compass className="w-4 h-4" />
            </div>
          </button>

          {/* Card 3: English Foreign Man */}
          <button
            onClick={() => onSelect('MALE_WESTERN', 'EN')}
            className="group bg-white p-6 sm:p-8 rounded-2xl border border-[#e5e1da] shadow-sm hover:border-[#e2b07e] hover:shadow-md transition-all text-left flex flex-col justify-between space-y-6 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-500/10 active:scale-98"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#b88c5e] border border-amber-100 group-hover:bg-amber-100/60 transition-colors">
                <span className="text-2xl">🇬🇧</span>
              </div>
              
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg font-black text-slate-800">
                  Western / Foreign Man
                </h3>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#b88c5e]">
                  English Speaking Partner
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                Understand your Thai partner's expectations, master the unspoken codes of respect, family support, and ensure long-term harmony.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-[#b88c5e] text-xs font-extrabold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              <span>Access in English</span>
              <Compass className="w-4 h-4" />
            </div>
          </button>

        </div>

        {/* Footer info */}
        <div className="text-center pt-4">
          <p className="text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              Savoir biculturel validé de manière impartiale et académique • Les deux perspectives sont incluses dans l'accès complet
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
