import { Language, Lesson } from '../types';
import { Menu, X, BookOpen, GraduationCap, Trophy, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

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
  isViewingCertificate
}: SidebarProps) {
  const progressPercent = Math.round((completedLessons.length / lessons.length) * 100);

  const t = {
    progressLabel: { FR: "Progression Académique", EN: "Academic Progress", TH: "ความก้าวหน้าทางวิชาการ" },
    lessonsHeader: { FR: "Modules du Programme", EN: "Curriculum Modules", TH: "บทเรียนในหลักสูตรทั้งหมด" },
    glossaryBtn: { FR: "Glossaire Trilingue", EN: "Trilingual Glossary", TH: "พจนานุกรมคำศัพท์" },
    certBtn: { FR: "Mon Certificat Académique", EN: "My Academic Certificate", TH: "ประกาศนียบัตรของฉัน" },
    minutes: { FR: "min", EN: "min", TH: "นาที" },
    unlocked: { FR: "Débloqué", EN: "Unlocked", TH: "ปลดล็อกแล้ว" },
    locked: { FR: "Bloqué (10/10 Requis)", EN: "Locked (10/10 Req.)", TH: "ล็อกอยู่ (ต้องผ่าน 10 บทก่อน)" }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'TH', label: 'ไทย', flag: '🇹🇭' }
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

          {/* Compact Language Selector (Flag toggles on mobile, labeled on desktop) */}
          <div className="bg-white p-2.5 rounded-xl border border-[#e5e1da] flex justify-between items-center shadow-2xs">
            <span className="text-[10px] font-bold text-[#a09384] uppercase tracking-widest pl-1">
              Langue
            </span>
            <div className="flex gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  id={`lang-btn-${l.code}`}
                  onClick={() => onLanguageChange(l.code)}
                  title={l.label}
                  className={`px-2 py-1 rounded-md text-sm transition-all flex items-center gap-1 ${
                    lang === l.code
                      ? 'bg-[#e2b07e]/15 text-[#b88c5e] font-bold ring-1 ring-[#e2b07e]'
                      : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <span className="text-base">{l.flag}</span>
                  <span className="text-xs font-semibold hidden md:inline">{l.code}</span>
                </button>
              ))}
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
                    {/* Tick Checkbox */}
                    <div className="mt-0.5 shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                      ) : (
                        <div className={`w-4 h-4 rounded-full border ${isActive ? 'border-white/50' : 'border-slate-300'}`} />
                      )}
                    </div>

                    <div className="truncate">
                      <span className={`block text-[10px] font-semibold ${isActive ? 'text-amber-50' : 'text-slate-400'}`}>
                        Module {lesson.id} • {lesson.durationMinutes} {t.minutes[lang]}
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

        </div>

        {/* Footer info inside sidebar */}
        <div className="p-4 border-t border-[#e5e1da] bg-[#f0ede6]/50 text-[10px] text-[#8c7e6d] font-medium text-center">
          © 2026 Sawasdee-Amour Academy
        </div>
      </aside>
    </>
  );
}
