import { useState, useEffect, FormEvent } from 'react';
import { Language, Lesson } from './types';
import { lessons } from './data/lessons';
import Sidebar from './components/Sidebar';
import InteractiveSchema from './components/InteractiveSchema';
import QuizView from './components/QuizView';
import GlossaryView from './components/GlossaryView';
import CertificateView from './components/CertificateView';
import { 
  Menu, BookOpen, GraduationCap, Trophy, CheckCircle, 
  ChevronLeft, ChevronRight, Award, HelpCircle, Heart, 
  BookOpenCheck, ShieldCheck, Sparkles, CheckSquare, Square,
  Lock, Unlock
} from 'lucide-react';

export default function App() {
  // Global States
  const [lang, setLang] = useState<Language>('FR');
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
              <div className="flex gap-1 bg-[#f7f3ed] p-1 rounded-lg border border-[#e5e1da]">
                {(['TH', 'EN', 'FR'] as Language[]).map((code) => {
                  const flag = code === 'TH' ? '🇹🇭' : code === 'EN' ? '🇬🇧' : '🇫🇷';
                  return (
                    <button
                      key={code}
                      id={`top-header-lang-btn-${code}`}
                      onClick={() => handleLanguageChange(code)}
                      type="button"
                      className={`px-2.5 py-1 rounded-md text-xs sm:text-sm transition-all flex items-center gap-1.5 font-bold cursor-pointer ${
                        lang === code
                          ? 'bg-[#e2b07e] text-white shadow-xs'
                          : 'hover:bg-[#efece6] text-slate-600'
                      }`}
                    >
                      <span>{flag}</span>
                      <span className="text-[10px] font-bold hidden sm:inline">{code}</span>
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
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#e5e1da] shadow-md max-w-xl mx-auto text-center space-y-6 my-4">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-[#b88c5e] border border-[#e2b07e]/30">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold text-[#b88c5e] tracking-widest bg-[#e2b07e]/15 px-3 py-1 rounded-full">
                  {lang === 'FR' ? 'Accès Premium Requis' : lang === 'EN' ? 'Premium Access Required' : 'จำเป็นต้องมีสิทธิ์เข้าถึงแบบพรีเมียม'}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#403d39] tracking-tight">
                  {lang === 'FR' ? 'Débloquez la suite du programme' : lang === 'EN' ? 'Unlock the rest of the curriculum' : 'ปลดล็อกหลักสูตรที่เหลือทั้งหมด'}
                </h3>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4 font-sans text-left bg-slate-50/55 p-4 sm:p-5 rounded-xl border border-[#e5e1da]">
                {lang === 'FR' && (
                  <p>
                    Ce module fait partie du programme <strong>Premium</strong> de l'Académie. Pour déverrouiller l'accès complet à tous les modules restants (4 à 12) ainsi qu'au certificat académique final, veuillez demander le mot de passe d'accès à la personne qui vous a partagé ce lien. L'accès total est proposé pour l'équivalent de <strong>10 €</strong>.
                  </p>
                )}
                {lang === 'EN' && (
                  <p>
                    This module is part of the Academy's <strong>Premium</strong> curriculum. To unlock full access to all remaining modules (4 to 12) and the final academic certificate, please ask the person who shared this link with you for the password. Full lifetime access is available for the equivalent of <strong>10 €</strong>.
                  </p>
                )}
                {lang === 'TH' && (
                  <p>
                    บทเรียนนี้เป็นส่วนหนึ่งของหลักสูตร <strong>พรีเมียม</strong> ของสถาบัน หากต้องการปลดล็อกการเข้าถึงบทเรียนที่เหลือทั้งหมด (บทที่ 4 ถึง 12) รวมถึงสิทธิ์รับใบประกาศนียบัตรเกียรติยศ โปรดติดต่อขอรับรหัสผ่านจากบุคคลที่ส่งลิงก์นี้ให้กับคุณ โดยมีค่าธรรมเนียมการเข้าถึงตลอดชีพเทียบเท่า <strong>10 ยูโร</strong>
                  </p>
                )}
              </div>

              <form onSubmit={handleUnlockPremium} className="space-y-3 pt-2 max-w-sm mx-auto">
                <div>
                  <input
                    type="password"
                    placeholder={lang === 'FR' ? 'Saisir le mot de passe...' : lang === 'EN' ? 'Enter password...' : 'กรอกรหัสผ่าน...'}
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      setPasswordError(false);
                    }}
                    className={`w-full px-4 py-3 rounded-xl border-2 text-center text-sm font-bold transition-all outline-none ${
                      passwordError 
                        ? 'border-rose-500 bg-rose-50/20 focus:border-rose-500 text-rose-700' 
                        : 'border-[#e5e1da] focus:border-[#e2b07e] text-slate-800 bg-white'
                    }`}
                  />
                </div>

                {passwordError && (
                  <p className="text-xs text-rose-500 font-bold">
                    {lang === 'FR' ? 'Mot de passe incorrect' : lang === 'EN' ? 'Incorrect password' : 'รหัสผ่านไม่ถูกต้อง'}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-[#e2b07e] hover:bg-[#d4a06d] active:scale-98 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Unlock className="w-4 h-4" />
                  <span>{lang === 'FR' ? 'Déverrouiller le programme' : lang === 'EN' ? 'Unlock curriculum' : 'ปลดล็อกหลักสูตร'}</span>
                </button>
              </form>
            </div>
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

              {/* Interactive Visual Diagram Block */}
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
