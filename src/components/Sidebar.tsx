import { Language, Lesson, UserRole } from '../types';
import { Menu, X, BookOpen, GraduationCap, Trophy, HelpCircle, ArrowRight, CheckCircle2, Lock, LogOut, Heart, Wind, FileText } from 'lucide-react';

interface SidebarProps {
  lessons: Lesson[];
  activeLessonId: number;
  onSelectLesson: (id: number) => void;
  completedLessons: number[];
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  isOpen: boolean;
  onToggle: () => void;
  onViewGlossary: () => void;
  onViewCertificate: () => void;
  isCertificateUnlocked: boolean;
  isViewingGlossary: boolean;
  isViewingCertificate: boolean;
  isViewingHarmony: boolean;
  onViewHarmony: () => void;
  isViewingBreathing: boolean;
  onViewBreathing: () => void;
  isViewingJournal: boolean;
  onViewJournal: () => void;
  isPremiumUnlocked: boolean;
  userRole?: UserRole;
  onRoleChange?: (role: UserRole) => void;
  onLogout?: () => void;
}

export default function Sidebar({
  lessons,
  activeLessonId,
  onSelectLesson,
  completedLessons,
  lang,
  onLanguageChange,
  isOpen,
  onToggle,
  onViewGlossary,
  onViewCertificate,
  isCertificateUnlocked,
  isViewingGlossary,
  isViewingCertificate,
  isViewingHarmony,
  onViewHarmony,
  isViewingBreathing,
  onViewBreathing,
  isViewingJournal,
  onViewJournal,
  isPremiumUnlocked,
  userRole,
  onRoleChange,
  onLogout
}: SidebarProps) {
  const progressPercent = Math.round((completedLessons.length / lessons.length) * 100);

  const t = {
    progressLabel: { FR: "Progression Académique", EN: "Academic Progress", TH: "ความก้าวหน้าทางวิชาการ" },
    lessonsHeader: { FR: "Modules du Programme", EN: "Curriculum Modules", TH: "บทเรียนในหลักสูตรทั้งหมด" },
    glossaryBtn: { FR: "Glossaire Trilingue", EN: "Trilingual Glossary", TH: "พจนานุกรมคำศัพท์" },
    certBtn: { FR: "Mon Certificat Académique", EN: "My Academic Certificate", TH: "ประกาศนียบัตรของฉัน" },
    minutes: { FR: "min", EN: "min", TH: "นาที" },
    unlocked: { FR: "Débloqué", EN: "Unlocked", TH: "ปลดล็อกแล้ว" },
    locked: { FR: "Bloqué (Tous les Modules Requis)", EN: "Locked (All Modules Req.)", TH: "ล็อกอยู่ (ต้องเรียนครบทุกบทเรียนก่อน)" },
    harmonyBtn: { FR: "Bilan d'Harmonie", EN: "Harmony Assessment", TH: "แบบทดสอบความสอดคล้อง" },
    breathingBtn: { FR: "Espace Respiratoire 'Jai Yen'", EN: "'Jai Yen' Breathing Space", TH: "ฝึกกำหนดลมหายใจ 'ใจเย็น'" },
    journalBtn: { FR: "Carnet de Route du Couple", EN: "Couple's Shared Roadmap", TH: "บันทึกการเดินทางของคู่เรา" }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'TH', label: 'ไทย', flag: '🇹🇭' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' }
  ];

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          onClick={onToggle}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-[#f7f3ed] border-r border-[#e5e1da] flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col overflow-y-auto flex-1 p-5 space-y-6">
          
          {/* Brand/Header */}
          <div className="flex items-center justify-between border-b border-[#e5e1da] pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#b88c5e] flex items-center justify-center text-white font-bold text-sm shadow-xs">
                S
              </div>
              <div>
                <h1 className="font-serif font-extrabold text-[#b88c5e] text-base leading-none tracking-tight">
                  Sawasdee-Amour
                </h1>
                <span className="text-[10px] text-[#8c7e6d] font-bold tracking-widest block mt-1.5 uppercase">
                  Academy
                </span>
              </div>
            </div>
            
            {/* Close Mobile Drawer */}
            <button 
              id="close-sidebar-btn"
              onClick={onToggle}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Role Selector Card */}
          {userRole && onRoleChange && (
            <div className="bg-[#fcfbf9] p-3 rounded-xl border border-[#e5e1da] flex flex-col gap-2 shadow-2xs">
              <div className="flex justify-between items-center text-[10px] font-bold text-[#a09384] uppercase tracking-widest pl-1">
                <span>{lang === 'FR' ? 'Perspective' : lang === 'EN' ? 'Perspective' : 'บทบาทผู้เรียน'}</span>
                <button 
                  onClick={() => onRoleChange(userRole === 'FEMALE_THAI' ? 'MALE_WESTERN' : 'FEMALE_THAI')}
                  className="text-[#b88c5e] hover:text-[#e2b07e] font-extrabold text-[9px] uppercase tracking-wider cursor-pointer transition-colors"
                >
                  {lang === 'FR' ? 'Changer' : lang === 'EN' ? 'Switch' : 'เปลี่ยน'}
                </button>
              </div>
              <div className="flex items-center gap-2 px-1">
                <span className="text-lg">{userRole === 'FEMALE_THAI' ? '🌺' : '🌍'}</span>
                <span className="text-xs font-extrabold text-slate-700">
                  {userRole === 'FEMALE_THAI' 
                    ? (lang === 'FR' ? 'Femme Thaïlandaise' : lang === 'EN' ? 'Thai Female Partner' : 'ผู้หญิงไทย')
                    : (lang === 'FR' ? 'Homme Occidental' : lang === 'EN' ? 'Western Male Partner' : 'ผู้ชายต่างชาติ/ฝรั่งเศส')
                  }
                </span>
              </div>
            </div>
          )}

          {/* Compact Language Selector (Flag toggles on mobile, labeled on desktop) */}
          <div className="bg-white p-2.5 rounded-xl border border-[#e5e1da] flex justify-between items-center shadow-2xs">
            <span className="text-[10px] font-bold text-[#a09384] uppercase tracking-widest pl-1">
              {lang === 'FR' ? 'Langue' : lang === 'EN' ? 'Language' : 'ภาษา'}
            </span>
            <div className="flex gap-1.5">
              {languages.map((l) => {
                const isTH = l.code === 'TH';
                return (
                  <button
                    key={l.code}
                    id={`lang-btn-${l.code}`}
                    onClick={() => onLanguageChange(l.code)}
                    title={l.label}
                    className={`px-2 py-1 rounded-md text-sm transition-all flex items-center gap-1.5 relative ${
                      lang === l.code
                        ? 'bg-[#e2b07e] text-white font-bold ring-2 ring-[#e2b07e]/30'
                        : isTH
                          ? 'bg-amber-50 text-[#b88c5e] border border-amber-300/50 hover:bg-amber-100/40'
                          : 'hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span className="text-xs font-semibold hidden md:inline">
                      {isTH ? 'TH (แนะนำ)' : l.code}
                    </span>
                    {isTH && lang !== 'TH' && (
                      <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Academic Progression Gauge */}
          <div className="bg-[#f0ede6] p-4 rounded-xl border border-[#e5e1da] shadow-2xs space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-[#8c7e6d]">
              <span>{t.progressLabel[lang]}</span>
              <span className="text-[#b88c5e]">{progressPercent}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-[#e5e1da] h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#e2b07e] h-full transition-all duration-500 rounded-full" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center gap-1 text-[11px] text-[#8c7e6d] font-semibold">
              <Trophy className="w-3.5 h-3.5 text-[#b88c5e]" />
              <span>{completedLessons.length} / {lessons.length} Modules Validés</span>
            </div>
          </div>

          {/* Glossary and Certificate Secondary Links */}
          <div className="space-y-2">
            <button
              id="sidebar-glossary-btn"
              onClick={onViewGlossary}
              className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between border ${
                isViewingGlossary
                  ? 'bg-[#b88c5e] text-white border-[#b88c5e] shadow-sm'
                  : 'bg-white border-[#e5e1da] text-[#636e72] hover:bg-[#efece6]'
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {t.glossaryBtn[lang]}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="sidebar-cert-btn"
              onClick={onViewCertificate}
              className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between border ${
                isViewingCertificate
                  ? 'bg-[#b88c5e] text-white border-[#b88c5e] shadow-sm'
                  : isCertificateUnlocked
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-[#efece6]/60 border-[#e5e1da] text-slate-400 cursor-not-allowed'
              }`}
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                {t.certBtn[lang]}
              </span>
              <span className="text-[9px] font-extrabold uppercase">
                {isCertificateUnlocked ? "OK" : "LOCKED"}
              </span>
            </button>

            {/* Harmony Assessment Button */}
            <button
              id="sidebar-harmony-btn"
              onClick={onViewHarmony}
              className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between border ${
                isViewingHarmony
                  ? 'bg-[#b88c5e] text-white border-[#b88c5e] shadow-sm'
                  : 'bg-white border-[#e5e1da] text-[#636e72] hover:bg-[#efece6]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                {t.harmonyBtn[lang]}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Breathing Space Button */}
            <button
              id="sidebar-breathing-btn"
              onClick={onViewBreathing}
              className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between border ${
                isViewingBreathing
                  ? 'bg-[#b88c5e] text-white border-[#b88c5e] shadow-sm'
                  : 'bg-white border-[#e5e1da] text-[#636e72] hover:bg-[#efece6]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-teal-500" />
                {t.breathingBtn[lang]}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Couple Journal Button */}
            <button
              id="sidebar-journal-btn"
              onClick={onViewJournal}
              className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between border ${
                isViewingJournal
                  ? 'bg-[#b88c5e] text-white border-[#b88c5e] shadow-sm'
                  : 'bg-white border-[#e5e1da] text-[#636e72] hover:bg-[#efece6]'
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" />
                {t.journalBtn[lang]}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Curriculum Lesson list */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-extrabold text-[#a09384] uppercase tracking-wider block pl-1">
              {t.lessonsHeader[lang]}
            </span>

            <div className="space-y-1.5 max-h-72 lg:max-h-none overflow-y-auto pr-1">
              {lessons.map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.id);
                const isActive = activeLessonId === lesson.id && !isViewingGlossary && !isViewingCertificate;

                return (
                  <button
                    key={lesson.id}
                    id={`sidebar-lesson-${lesson.id}`}
                    onClick={() => onSelectLesson(lesson.id)}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex items-start gap-2.5 border ${
                      isActive
                        ? 'bg-[#e2b07e] text-white border-[#e2b07e] font-bold shadow-xs'
                        : 'bg-white border-[#e5e1da] hover:bg-[#efece6] text-[#636e72]'
                    }`}
                  >
                    {/* Tick Checkbox or Lock */}
                    <div className="mt-0.5 shrink-0">
                      {lesson.id >= 4 && !isPremiumUnlocked ? (
                        <Lock className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#b88c5e]'}`} />
                      ) : isCompleted ? (
                        <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                      ) : (
                        <div className={`w-4 h-4 rounded-full border ${isActive ? 'border-white/50' : 'border-slate-300'}`} />
                      )}
                    </div>

                    <div className="truncate">
                      <span className={`flex items-center gap-1.5 text-[10px] font-semibold ${isActive ? 'text-amber-50' : 'text-slate-400'}`}>
                        <span>Module {lesson.id} • {lesson.durationMinutes} {t.minutes[lang]}</span>
                        {lesson.id >= 4 && !isPremiumUnlocked && (
                          <span className={`px-1 py-0.2 rounded-xs text-[8px] font-extrabold tracking-wider ${isActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-[#b88c5e]'}`}>
                            PREMIUM
                          </span>
                        )}
                      </span>
                      <span className="block truncate font-medium">
                        {lesson.title[lang]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Disconnect/Logout Button */}
          {onLogout && (
            <div className="pt-4 border-t border-[#e5e1da]/60">
              <button
                id="sidebar-logout-btn"
                onClick={onLogout}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-extrabold transition-all flex items-center justify-center gap-2 border border-rose-200 bg-rose-50/40 text-rose-700 hover:bg-rose-50 hover:text-rose-800 cursor-pointer active:scale-98"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>
                  {lang === 'FR' ? 'Se déconnecter' : lang === 'EN' ? 'Disconnect' : 'ออกจากระบบ'}
                </span>
              </button>
            </div>
          )}

        </div>

        {/* Footer info inside sidebar */}
        <div className="p-4 border-t border-[#e5e1da] bg-[#f0ede6]/50 text-[10px] text-[#8c7e6d] font-medium text-center">
          © 2026 Sawasdee-Amour Academy
        </div>
      </aside>
    </>
  );
}
