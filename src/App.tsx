import { useState, useEffect, FormEvent } from 'react';
import { Language, Lesson, UserRole } from './types';
import { lessons } from './data/lessons';
import Sidebar from './components/Sidebar';
import InteractiveSchema from './components/InteractiveSchema';
import QuizView from './components/QuizView';
import GlossaryView from './components/GlossaryView';
import CertificateView from './components/CertificateView';
import SalesLandingPage from './components/SalesLandingPage';
import RoleSelectionScreen from './components/RoleSelectionScreen';
import { rolePerspectives } from './data/rolePerspectives';
import { 
  Menu, BookOpen, GraduationCap, Trophy, CheckCircle, 
  ChevronLeft, ChevronRight, Award, HelpCircle, Heart, 
  BookOpenCheck, ShieldCheck, Sparkles, CheckSquare, Square,
  Lock, Unlock
} from 'lucide-react';

export default function App() {
  // Global States
  const [lang, setLang] = useState<Language>(() => {
    try {
      return (localStorage.getItem('sawasdee_language') as Language) || 'TH';
    } catch {
      return 'TH';
    }
  });
  
  // User Role State
  const [userRole, setUserRole] = useState<UserRole | null>(() => {
    try {
      return localStorage.getItem('sawasdee_user_role') as UserRole | null;
    } catch {
      return null;
    }
  });

  const [activeLessonId, setActiveLessonId] = useState<number>(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [quizScores, setQuizScores] = useState<Record<number, number>>({});
  
  // Navigation View States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isViewingGlossary, setIsViewingGlossary] = useState(false);
  const [isViewingCertificate, setIsViewingCertificate] = useState(false);
  
  // Modal / Celebration trigger
  const [showCelebration, setShowCelebration] = useState(false);

  // Premium Unlock States
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem('sawasdee_premium_unlocked') === 'true';
    } catch {
      return false;
    }
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // Load progress from localStorage on Mount
  useEffect(() => {
    try {
      const storedCompleted = localStorage.getItem('sawasdee_completed_lessons');
      if (storedCompleted) {
        setCompletedLessons(JSON.parse(storedCompleted));
      }
      const storedScores = localStorage.getItem('sawasdee_quiz_scores');
      if (storedScores) {
        setQuizScores(JSON.parse(storedScores));
      }
    } catch (e) {
      console.error("Failed to load state from localStorage", e);
    }
  }, []);

  // Check if certificate just unlocked
  useEffect(() => {
    if (completedLessons.length === lessons.length && lessons.length > 0) {
      // Check if we already showed it
      const celebrated = sessionStorage.getItem('sawasdee_celebrated_achievement');
      if (!celebrated) {
        setShowCelebration(true);
        sessionStorage.setItem('sawasdee_celebrated_achievement', 'true');
      }
    }
  }, [completedLessons]);

  const activeLesson = lessons.find((l) => l.id === activeLessonId) || lessons[0];

  // Language Change helper
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('sawasdee_language', newLang);
    } catch (e) {
      console.error(e);
    }
  };

  // Role Change helper
  const handleRoleChange = (newRole: UserRole) => {
    setUserRole(newRole);
    try {
      localStorage.setItem('sawasdee_user_role', newRole);
    } catch (e) {
      console.error(e);
    }
  };

  // Toggle single lesson manual checkbox completion
  const handleToggleLessonCompleted = (lessonId: number) => {
    let updated: number[];
    if (completedLessons.includes(lessonId)) {
      updated = completedLessons.filter((id) => id !== lessonId);
    } else {
      updated = [...completedLessons, lessonId];
    }
    setCompletedLessons(updated);
    localStorage.setItem('sawasdee_completed_lessons', JSON.stringify(updated));
  };

  // Record quiz score and auto-mark lesson as completed
  const handleQuizScore = (lessonId: number, score: number) => {
    const updatedScores = { ...quizScores, [lessonId]: score };
    setQuizScores(updatedScores);
    localStorage.setItem('sawasdee_quiz_scores', JSON.stringify(updatedScores));

    // Force mark lesson as completed if they successfully complete quiz
    if (!completedLessons.includes(lessonId)) {
      const updatedCompleted = [...completedLessons, lessonId];
      setCompletedLessons(updatedCompleted);
      localStorage.setItem('sawasdee_completed_lessons', JSON.stringify(updatedCompleted));
    }
  };

  const selectLesson = (id: number) => {
    setActiveLessonId(id);
    setIsViewingGlossary(false);
    setIsViewingCertificate(false);
    setIsSidebarOpen(false); // Close mobile drawer
    // Scroll content to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showGlossary = () => {
    setIsViewingGlossary(true);
    setIsViewingCertificate(false);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showCertificate = () => {
    if (completedLessons.length === lessons.length) {
      setIsViewingCertificate(true);
      setIsViewingGlossary(false);
      setIsSidebarOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const nextLesson = () => {
    if (activeLessonId < lessons.length) {
      selectLesson(activeLessonId + 1);
    }
  };

  const prevLesson = () => {
    if (activeLessonId > 1) {
      selectLesson(activeLessonId - 1);
    }
  };

  const handleUnlockPremium = (e: FormEvent) => {
    e.preventDefault();
    const normalized = passwordInput.trim().toUpperCase();
    if (normalized === 'AMOUR10' || normalized === 'SAWASDEE' || normalized === 'LOVE10') {
      setIsPremiumUnlocked(true);
      setPasswordError(false);
      localStorage.setItem('sawasdee_premium_unlocked', 'true');
    } else {
      setPasswordError(true);
    }
  };

  const handleUnlockWithPassword = (password: string): boolean => {
    const normalized = password.trim().toUpperCase();
    if (normalized === 'AMOUR10' || normalized === 'SAWASDEE' || normalized === 'LOVE10') {
      setIsPremiumUnlocked(true);
      localStorage.setItem('sawasdee_premium_unlocked', 'true');
      return true;
    }
    return false;
  };

  // Global translation text for general layout
  const t = {
    title: "Sawasdee-Amour Academy",
    tagline: { 
      FR: "Guide académique des relations et démarches franco-thaïlandaises", 
      EN: "Academic guide to Franco-Thai relationships and procedures", 
      TH: "คู่มือหลักสูตรความสัมพันธ์และการดำเนินงานไทย-ฝรั่งเศส" 
    },
    duration: { FR: "Durée estimée :", EN: "Estimated reading:", TH: "ระยะเวลาศึกษาโดยประมาณ:" },
    minutes: { FR: "minutes", EN: "minutes", TH: "นาที" },
    markComplete: { FR: "Marquer ce module comme lu et validé", EN: "Mark this module as read & validated", TH: "ทำเครื่องหมายว่าเรียนรู้บทนี้เสร็จสิ้นแล้ว" },
    completedBadge: { FR: "Module validé", EN: "Module validated", TH: "ผ่านการเรียนรู้วิชานี้แล้ว" },
    schemaTitle: { FR: "Schéma Visuel Interactif", EN: "Interactive Visual Schema", TH: "แผนภาพปฏิสัมพันธ์ประกอบบทเรียน" },
    schemaCaption: { 
      FR: "Interagissez avec le schéma ci-dessous pour matérialiser les notions étudiées.", 
      EN: "Interact with the schema below to visualize the studied concepts.", 
      TH: "ทดลองโต้ตอบกับแผนภาพด้านล่างเพื่อเสริมสร้างความเข้าใจเชิงภาพในบทเรียน" 
    },
    nextBtn: { FR: "Module Suivant", EN: "Next Module", TH: "บทเรียนถัดไป" },
    prevBtn: { FR: "Module Précédent", EN: "Previous Module", TH: "บทเรียนก่อนหน้า" },
    celebrationTitle: { FR: "Félicitations de l'Académie !", EN: "Academic Graduation Congratulations!", TH: "ขอแสดงความยินดีจากคณะกรรมการสถาบัน!" },
    celebrationBody: {
      FR: "Vous avez brillamment parcouru et validé l'intégralité des modules éducatifs. Votre certificat de Conseiller en Relations Franco-Thaï est désormais accessible.",
      EN: "You have successfully completed and validated all educational modules. Your Advisor in Franco-Thai Relations certificate is now available.",
      TH: "คุณได้ผ่านการศึกษาและแบบทดสอบวัดความรู้ครบทุกบทเรียนหลักสูตรเรียบร้อยแล้ว ใบประกาศนียบัตรเกียรติยศของคุณได้รับการปลดล็อกพร้อมออกเอกสารแล้ว"
    },
    viewCertBtn: { FR: "Voir mon Certificat", EN: "View My Certificate", TH: "เปิดดูใบประกาศนียบัตร" },
    closeBtn: { FR: "Fermer", EN: "Close", TH: "ปิดหน้าต่าง" },
    conceptsHeader: { FR: "Contenu Pédagogique", EN: "Pedagogical Content", TH: "เนื้อหาหลักสูตรเพื่อการเรียนรู้" },
    manualCheckboxLabel: { FR: "Je confirme avoir assimilé le contenu théorique de ce module", EN: "I confirm that I have absorbed the theoretical content of this module", TH: "ฉันขอยืนยันว่าได้ทำความเข้าใจเนื้อหาเชิงทฤษฎีในบทเรียนนี้แล้ว" },
    glossaryBtn: { FR: "Glossaire Trilingue", EN: "Trilingual Glossary", TH: "พจนานุกรมคำศัพท์" },
    certBtn: { FR: "Mon Certificat Académique", EN: "My Academic Certificate", TH: "ประกาศนียบัตรของฉัน" }
  };

  const isCertificateUnlocked = completedLessons.length === lessons.length;

  if (!userRole) {
    return <RoleSelectionScreen onSelect={(role, language) => { handleRoleChange(role); handleLanguageChange(language); }} />;
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 flex flex-col font-sans antialiased selection:bg-[#e2b07e]/30 selection:text-slate-900">
      
      {/* Main Grid Layout */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-[1440px] w-full mx-auto">
        
        {/* Navigation Sidebar Panel */}
        <Sidebar 
          lessons={lessons}
          activeLessonId={activeLessonId}
          onSelectLesson={selectLesson}
          completedLessons={completedLessons}
          lang={lang}
          onLanguageChange={handleLanguageChange}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          onViewGlossary={showGlossary}
          onViewCertificate={showCertificate}
          isCertificateUnlocked={isCertificateUnlocked}
          isViewingGlossary={isViewingGlossary}
          isViewingCertificate={isViewingCertificate}
          isPremiumUnlocked={isPremiumUnlocked}
          userRole={userRole}
          onRoleChange={handleRoleChange}
        />

        {/* Content Panel with Header and Scrollable Body */}
        <div className="flex-1 flex flex-col min-h-screen w-full">
          
          {/* Main Top Header Bar (Desktop & Mobile) */}
          <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-[#e5e1da] h-16 flex items-center justify-between px-4 md:px-8 z-30 shadow-2xs">
            <div className="flex items-center gap-3">
              {/* Menu Button for Mobile */}
              <button 
                id="global-menu-toggle-btn"
                onClick={() => setIsSidebarOpen(true)}
                type="button"
                className="lg:hidden p-1.5 hover:bg-[#efece6] rounded-md text-[#b88c5e] cursor-pointer"
              >
                <Menu className="w-5.5 h-5.5" />
              </button>
              
              {/* Module Name / Breadcrumb */}
              {!isViewingGlossary && !isViewingCertificate ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[10px] sm:text-xs font-bold text-[#a09384] uppercase tracking-widest">
                    Module {activeLesson.id.toString().padStart(2, '0')}
                  </span>
                  <div className="h-3 w-px bg-[#e5e1da]"></div>
                  <h2 className="font-serif text-[#2d3436] text-xs sm:text-sm md:text-base font-semibold truncate max-w-[180px] sm:max-w-xs md:max-w-md">
                    {activeLesson.title[lang]}
                  </h2>
                </div>
              ) : (
                <h2 className="font-serif text-[#2d3436] text-sm md:text-base font-semibold">
                  {isViewingGlossary ? t.glossaryBtn[lang] : t.certBtn[lang]}
                </h2>
              )}
            </div>

            {/* Language Selection Flags (No JP access!) */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 bg-[#f7f3ed] p-1.5 rounded-xl border border-[#e5e1da]">
                {(['TH', 'EN', 'FR'] as Language[]).map((code) => {
                  const flag = code === 'TH' ? '🇹🇭' : code === 'EN' ? '🇬🇧' : '🇫🇷';
                  const isTH = code === 'TH';
                  return (
                    <button
                      key={code}
                      id={`top-header-lang-btn-${code}`}
                      onClick={() => handleLanguageChange(code)}
                      type="button"
                      className={`px-3 py-1 rounded-lg text-xs sm:text-sm transition-all flex items-center gap-1.5 font-bold cursor-pointer relative ${
                        lang === code
                          ? 'bg-[#e2b07e] text-white shadow-xs ring-2 ring-[#e2b07e]/30'
                          : isTH
                            ? 'bg-amber-50 text-[#b88c5e] border border-amber-300/60 hover:bg-amber-100/40'
                            : 'hover:bg-[#efece6] text-slate-600'
                      }`}
                    >
                      <span>{flag}</span>
                      <span className="text-[10px] font-bold hidden xs:inline">
                        {isTH ? 'TH (แนะนำ)' : code}
                      </span>
                      {isTH && lang !== 'TH' && (
                        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </header>

          {/* Core LMS Content Stage */}
          <main className="flex-1 px-4 pt-6 pb-24 md:p-8 lg:p-12 max-w-4xl mx-auto w-full space-y-8">
          
          {isViewingGlossary ? (
            <GlossaryView lang={lang} />
          ) : isViewingCertificate ? (
            <CertificateView lang={lang} onClose={() => setIsViewingCertificate(false)} />
          ) : activeLesson.id >= 4 && !isPremiumUnlocked ? (
            <SalesLandingPage lang={lang} onUnlock={handleUnlockWithPassword} />
          ) : (
            /* Active Module View */
            <article className="space-y-8">
              
              {/* Module Jumbotron Hero Header */}
              <div className="border-b border-[#e5e1da] pb-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#b88c5e] bg-[#e2b07e]/15 px-3 py-1 rounded-full uppercase tracking-widest font-serif">
                    Module {activeLesson.id}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium">
                      {t.duration[lang]} {activeLesson.durationMinutes} {t.minutes[lang]}
                    </span>

                    {completedLessons.includes(activeLesson.id) && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        {t.completedBadge[lang]}
                      </span>
                    )}
                  </div>
                </div>

                <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-[#403d39] leading-tight">
                  {activeLesson.title[lang]}
                </h1>
                <p className="text-sm md:text-base text-slate-500 italic max-w-2xl font-serif">
                  {activeLesson.subtitle[lang]}
                </p>
              </div>

              {/* Concepts Pedagogical Cards Section */}
              <section className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpenCheck className="w-5 h-5 text-[#b88c5e]" />
                  <h3 className="font-serif text-base md:text-lg font-bold text-[#403d39]">
                    {t.conceptsHeader[lang]}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {activeLesson.concepts.map((concept, index) => {
                    const conceptData = concept[lang];
                    return (
                      <div 
                        key={index} 
                        className="bg-white p-5 rounded-xl border border-[#e5e1da] shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <h4 className="font-serif text-sm sm:text-base font-bold text-[#403d39] mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-4 rounded-full bg-[#e2b07e] shrink-0"></span>
                          {conceptData.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {conceptData.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Specialized Bicultural Advice Section */}
              {rolePerspectives[activeLesson.id] && userRole && (
                <section className="space-y-3">
                  {(() => {
                    const adviceData = rolePerspectives[activeLesson.id][userRole][lang];
                    const isFemale = userRole === 'FEMALE_THAI';
                    return (
                      <div 
                        className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 ${
                          isFemale 
                            ? 'bg-rose-50/40 border-rose-200/60' 
                            : 'bg-amber-50/40 border-amber-200/60'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 mb-3">
                          <span className="text-xl">{isFemale ? '🌺' : '🌍'}</span>
                          <h4 className={`font-serif text-sm sm:text-base font-black ${
                            isFemale ? 'text-rose-800' : 'text-amber-800'
                          }`}>
                            {adviceData.title}
                          </h4>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                            isFemale 
                              ? 'bg-rose-100/60 border-rose-200 text-rose-700' 
                              : 'bg-amber-100/60 border-amber-200 text-amber-700'
                          }`}>
                            {lang === 'FR' ? 'Personnalisé' : lang === 'EN' ? 'Tailored' : 'เฉพาะคุณ'}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {adviceData.advice}
                        </p>
                        
                        {/* Interactive toggle link to read the alternative perspective */}
                        <div className="mt-4 pt-3 border-t border-dashed border-slate-200/80 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400 font-medium italic">
                            {lang === 'FR' 
                              ? "Basé sur votre profil sélectionné" 
                              : lang === 'EN' 
                                ? "Based on your selected profile" 
                                : "ปรับตามโปรไฟล์ที่คุณเลือก"}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRoleChange(isFemale ? 'MALE_WESTERN' : 'FEMALE_THAI')}
                            className="text-[#b88c5e] hover:text-[#e2b07e] font-extrabold cursor-pointer transition-all flex items-center gap-1"
                          >
                            <span>
                              {lang === 'FR' 
                                ? "Lire la perspective opposée" 
                                : lang === 'EN' 
                                  ? "Read opposite perspective" 
                                  : "อ่านมุมมองฝ่ายตรงข้าม"}
                            </span>
                            <span>→</span>
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </section>
              )}

              {/* Interactive Visual Diagram Block */}
              {activeLesson.id <= 12 && (
                <section className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#b88c5e]" />
                    <div>
                      <h3 className="font-serif text-base md:text-lg font-bold text-[#403d39]">
                        {t.schemaTitle[lang]}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {t.schemaCaption[lang]}
                      </p>
                    </div>
                  </div>

                  <InteractiveSchema lessonId={activeLesson.id} lang={lang} />
                </section>
              )}

              {/* Progress Manual Confirmation Button */}
              <section className="bg-white p-4 rounded-xl border border-[#e5e1da] flex items-center gap-3 shadow-2xs">
                <button
                  id="toggle-complete-checkbox"
                  onClick={() => handleToggleLessonCompleted(activeLesson.id)}
                  className="p-1 text-[#b88c5e] hover:bg-slate-50 rounded-md transition-all shrink-0"
                >
                  {completedLessons.includes(activeLesson.id) ? (
                    <CheckSquare className="w-6 h-6 text-emerald-600" />
                  ) : (
                    <Square className="w-6 h-6 text-slate-300" />
                  )}
                </button>
                <span className="text-xs sm:text-sm text-slate-600 font-medium select-none">
                  {t.manualCheckboxLabel[lang]}
                </span>
              </section>

              {/* Quiz Validation Block */}
              <section className="pt-2">
                <QuizView 
                  quiz={activeLesson.quiz} 
                  lang={lang} 
                  onQuizComplete={(score) => handleQuizScore(activeLesson.id, score)} 
                  savedScore={quizScores[activeLesson.id]}
                />
              </section>

              {/* Navigation Pagination Controls */}
              <div className="flex justify-between items-center border-t border-[#e5e1da] pt-6">
                <button
                  id="prev-lesson-btn"
                  onClick={prevLesson}
                  disabled={activeLessonId === 1}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold transition-all border ${
                    activeLessonId === 1
                      ? 'border-[#e5e1da]/40 text-slate-300 bg-slate-50 cursor-not-allowed'
                      : 'border-[#e5e1da] hover:bg-[#efece6] text-[#636e72] bg-white shadow-sm'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t.prevBtn[lang]}
                </button>

                <button
                  id="next-lesson-btn"
                  onClick={nextLesson}
                  disabled={activeLessonId === lessons.length}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold transition-all border ${
                    activeLessonId === lessons.length
                      ? 'border-[#e5e1da]/40 text-slate-300 bg-slate-50 cursor-not-allowed'
                      : 'border-[#e2b07e] hover:bg-[#e2b07e]/5 text-[#b88c5e] bg-white shadow-sm'
                  }`}
                >
                  {t.nextBtn[lang]}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </article>
          )}

        </main>
        </div>
      </div>

      {/* Pop-up modal celebration when 100% completed */}
      {showCelebration && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl border-2 border-[#e5e1da] max-w-md w-full p-6 text-center space-y-4 shadow-xl">
            <Award className="w-16 h-16 text-[#b88c5e] mx-auto animate-bounce" />
            
            <h3 className="font-serif text-xl font-extrabold text-[#403d39]">
              {t.celebrationTitle[lang]}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {t.celebrationBody[lang]}
            </p>

            <div className="flex gap-2 pt-2">
              <button
                id="modal-view-cert-btn"
                onClick={() => {
                  setShowCelebration(false);
                  setIsViewingCertificate(true);
                  setIsViewingGlossary(false);
                }}
                className="flex-1 py-2.5 bg-[#e2b07e] hover:bg-[#d4a06d] text-white rounded-lg text-xs font-bold transition-all shadow-sm"
              >
                {t.viewCertBtn[lang]}
              </button>
              
              <button
                id="modal-close-btn"
                onClick={() => setShowCelebration(false)}
                className="px-4 py-2.5 bg-[#f7f3ed] hover:bg-[#efece6] text-slate-600 rounded-lg text-xs font-semibold transition-all border border-[#e5e1da]"
              >
                {t.closeBtn[lang]}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Floating Bottom Ergonomic Bar */}
      <div className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-xs bg-white/95 backdrop-blur-md border border-[#e5e1da] rounded-2xl shadow-lg px-4 py-2 flex justify-between items-center gap-2">
        <button
          onClick={prevLesson}
          disabled={activeLessonId === 1}
          type="button"
          className={`p-2 rounded-xl flex items-center justify-center transition-all ${
            activeLessonId === 1
              ? 'text-slate-300 cursor-not-allowed'
              : 'text-[#636e72] hover:bg-[#efece6] active:scale-95 cursor-pointer'
          }`}
          title="Précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsSidebarOpen(true)}
          type="button"
          className="flex-1 py-1.5 px-3 bg-[#efece6] hover:bg-[#e5e1da] text-[#b88c5e] font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
        >
          <Menu className="w-4 h-4" />
          <span>Menu</span>
        </button>

        <button
          onClick={nextLesson}
          disabled={activeLessonId === lessons.length}
          type="button"
          className={`p-2 rounded-xl flex items-center justify-center transition-all ${
            activeLessonId === lessons.length
              ? 'text-slate-300 cursor-not-allowed'
              : 'text-[#b88c5e] hover:bg-[#efece6] active:scale-95 cursor-pointer'
          }`}
          title="Suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
