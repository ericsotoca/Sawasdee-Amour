import { useState, useEffect } from 'react';
import { QuizQuestion, Language } from '../types';
import { CheckCircle2, XCircle, AlertCircle, RefreshCw, ChevronRight } from 'lucide-react';

interface QuizViewProps {
  quiz: QuizQuestion[];
  lang: Language;
  onQuizComplete: (score: number) => void;
  savedScore?: number;
}

export default function QuizView({ quiz, lang, onQuizComplete, savedScore }: QuizViewProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Reset quiz state when we change the lesson quiz database
  useEffect(() => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  }, [quiz]);

  const activeQuestion = quiz[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOpt(idx);
  };

  const handleSubmit = () => {
    if (selectedOpt === null || isSubmitted) return;
    setIsSubmitted(true);
    if (selectedOpt === activeQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setIsSubmitted(false);
    setSelectedOpt(null);
    if (currentIdx < quiz.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      onQuizComplete(score + (selectedOpt === activeQuestion.correctIndex ? 1 : 0));
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const t = {
    quizTitle: { FR: "Quiz d'Évaluation de Chapitre", EN: "Chapter Validation Quiz", TH: "แบบทดสอบวัดความรู้ประจำบทเรียน" },
    questionCount: { FR: "Question {num} sur {total}", EN: "Question {num} of {total}", TH: "คำถามข้อที่ {num} จากทั้งหมด {total} ข้อ" },
    validateBtn: { FR: "Valider ma réponse", EN: "Submit Answer", TH: "ส่งคำตอบ" },
    nextBtn: { FR: "Question suivante", EN: "Next Question", TH: "คำถามถัดไป" },
    finishBtn: { FR: "Terminer le quiz", EN: "Finish Quiz", TH: "เสร็จสิ้นการทำแบบทดสอบ" },
    passedMessage: { FR: "Félicitations ! Vous avez validé ce quiz.", EN: "Congratulations! You passed this quiz.", TH: "ยินดีด้วย! คุณสอบผ่านแบบทดสอบชุดนี้แล้ว" },
    failedMessage: { FR: "Vous n'avez pas obtenu le score maximal, mais votre progression est enregistrée !", EN: "You did not get a perfect score, but your progress has been recorded!", TH: "คุณยังทำคะแนนได้ไม่เต็ม แต่เราได้บันทึกความก้าวหน้าในการเรียนของคุณแล้ว!" },
    restartBtn: { FR: "Recommencer le quiz", EN: "Retry Quiz", TH: "ทำแบบทดสอบอีกครั้ง" },
    correctLabel: { FR: "Correct !", EN: "Correct!", TH: "คำตอบถูกต้อง!" },
    incorrectLabel: { FR: "Incorrect", EN: "Incorrect", TH: "คำตอบไม่ถูกต้อง" },
    scoreLabel: { FR: "Votre score : {score} / {total}", EN: "Your Score: {score} / {total}", TH: "คะแนนของคุณ: {score} / {total} คะแนน" },
    explanationLabel: { FR: "Explication culturelle / légale :", EN: "Cultural / Legal Explanation:", TH: "คำอธิบายทางวัฒนธรรมและกฎหมายเพิ่มเติม:" },
    alreadyPassed: { FR: "✓ Vous avez déjà validé ce quiz avec un score de {score}/3.", EN: "✓ You have already validated this quiz with a score of {score}/3.", TH: "✓ คุณทำแบบทดสอบประจำบทนี้ผ่านแล้วด้วยคะแนน {score}/3 คะแนน" }
  };

  const replacePlaceholders = (text: string, placeholders: Record<string, string | number>) => {
    let result = text;
    for (const key in placeholders) {
      result = result.replace(`{${key}}`, String(placeholders[key]));
    }
    return result;
  };

  if (quizFinished) {
    const finalScore = score;
    return (
      <div className="bg-white p-5 md:p-6 rounded-xl border border-[#e5e1da] text-center shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
        <h4 className="font-serif text-lg font-bold text-[#403d39] mb-2">
          {t.quizTitle[lang]}
        </h4>
        <p className="text-sm font-semibold text-slate-600 mb-2">
          {replacePlaceholders(t.scoreLabel[lang], { score: finalScore, total: quiz.length })}
        </p>
        <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
          {finalScore === quiz.length ? t.passedMessage[lang] : t.failedMessage[lang]}
        </p>
        <button
          id="quiz-restart-btn-fin"
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f7f3ed] hover:bg-[#efece6] border border-[#e5e1da] text-[#636e72] rounded-lg text-xs font-bold transition-all shadow-2xs"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          {t.restartBtn[lang]}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 md:p-6 rounded-xl border border-[#e5e1da] shadow-sm">
      <div className="flex justify-between items-center border-b border-[#e5e1da] pb-3 mb-4">
        <div>
          <h4 className="font-serif text-base font-bold text-[#403d39]">
            {t.quizTitle[lang]}
          </h4>
          <span className="text-xs text-slate-400">
            {replacePlaceholders(t.questionCount[lang], { num: currentIdx + 1, total: quiz.length })}
          </span>
        </div>
        {savedScore !== undefined && (
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            {replacePlaceholders(t.alreadyPassed[lang], { score: savedScore })}
          </span>
        )}
      </div>

      <div className="space-y-4">
        <h5 className="text-sm md:text-base font-bold text-[#403d39]">
          {activeQuestion.question[lang]}
        </h5>

        <div className="flex flex-col gap-2.5">
          {activeQuestion.options[lang].map((opt, idx) => {
            let btnClass = "bg-white border-[#e5e1da] text-slate-700 hover:border-[#e2b07e]";
            let iconElement = null;

            if (selectedOpt === idx) {
              btnClass = "bg-[#e2b07e]/15 border-[#e2b07e] text-slate-900 font-semibold shadow-2xs";
            }

            if (isSubmitted) {
              if (idx === activeQuestion.correctIndex) {
                btnClass = "bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold";
                iconElement = <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />;
              } else if (selectedOpt === idx) {
                btnClass = "bg-rose-50 border-rose-400 text-rose-800";
                iconElement = <XCircle className="w-4.5 h-4.5 text-rose-500 shrink-0" />;
              } else {
                btnClass = "bg-white border-slate-100 text-slate-400";
              }
            }

            return (
              <button
                key={idx}
                id={`quiz-opt-${idx}`}
                disabled={isSubmitted}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all flex justify-between items-center ${btnClass}`}
              >
                <span>{opt}</span>
                {iconElement}
              </button>
            );
          })}
        </div>

        {/* Bottom validation button or feedback explanation */}
        <div className="pt-3 border-t border-[#e5e1da] mt-4">
          {!isSubmitted ? (
            <button
              id="quiz-submit-btn"
              onClick={handleSubmit}
              disabled={selectedOpt === null}
              className={`w-full py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                selectedOpt === null 
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                  : 'bg-[#e2b07e] text-white hover:bg-[#d4a06d] shadow-sm'
              }`}
            >
              {t.validateBtn[lang]}
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-[#f7f3ed] p-4 rounded-lg border border-[#e5e1da]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#b88c5e] uppercase tracking-wider mb-1.5">
                  <AlertCircle className="w-4 h-4 text-[#b88c5e]" />
                  {t.explanationLabel[lang]}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {activeQuestion.explanation[lang]}
                </p>
              </div>

              <button
                id="quiz-next-btn"
                onClick={handleNext}
                className="w-full py-3 bg-[#e2b07e] text-white hover:bg-[#d4a06d] rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>
                  {currentIdx === quiz.length - 1 ? t.finishBtn[lang] : t.nextBtn[lang]}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
