import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Compass, Volume2, Wind, Sparkles, Heart } from 'lucide-react';
import { Language } from '../types';

interface JaiYenSpaceProps {
  lang: Language;
}

type RhythmType = 'standard' | 'relax' | 'focus';

interface Rhythm {
  id: RhythmType;
  name: { FR: string; EN: string; TH: string };
  desc: { FR: string; EN: string; TH: string };
  inhale: number; // seconds
  hold: number;   // seconds
  exhale: number; // seconds
}

const breathingRhythms: Rhythm[] = [
  {
    id: 'standard',
    name: { FR: "Jai Yen Standard (5s / 5s)", EN: "Standard Jai Yen (5s / 5s)", TH: "ใจเย็นมาตรฐาน (5 วิ / 5 วิ)" },
    desc: {
      FR: "Cohérence idéale pour réguler le stress biculturel, équilibrer le rythme cardiaque et refroidir les tensions.",
      EN: "Perfect coherence rhythm to manage bicultural stress, balance heart rate, and cool down heated tensions.",
      TH: "จังหวะมาตรฐานช่วยปรับความสมดุลของหัวใจ ลดความเครียด และเสริมสร้างสติในการแก้ปัญหาขัดแย้ง"
    },
    inhale: 5,
    hold: 0,
    exhale: 5
  },
  {
    id: 'relax',
    name: { FR: "Sommeil & Profond Apaisement (4s / 6s)", EN: "Deep Rest & Sleep (4s / 6s)", TH: "ผ่อนคลายลึก/เตรียมพักผ่อน (4 วิ / 6 วิ)" },
    desc: {
      FR: "Expiration allongée pour activer le système nerveux parasympathique, calmer l'esprit et favoriser l'endormissement.",
      EN: "Extended exhalation to trigger the parasympathetic nervous system, quiet the mind, and invite peaceful sleep.",
      TH: "เน้นช่วงผ่อนลมหายใจออกยาวนานขึ้นเพื่อลดอัตราการเต้นของหัวใจ ช่วยให้สมองและร่างกายผ่อนคลายอย่างแท้จริง"
    },
    inhale: 4,
    hold: 2,
    exhale: 6
  },
  {
    id: 'focus',
    name: { FR: "Vigueur d'Esprit (6s / 4s)", EN: "Mental Focus & Clarity (6s / 4s)", TH: "รวมสมาธิและการตื่นรู้ (6 วิ / 4 วิ)" },
    desc: {
      FR: "Inspiration prolongée pour oxygéner le cerveau, stimuler la clarté d'esprit et la présence attentive en couple.",
      EN: "Longer inhalation to highly oxygenate the brain, boost focus, and support mindful presence in discussions.",
      TH: "เน้นสูดลมหายใจเข้ายาวลึกเพื่อเพิ่มออกซิเจนแก่สมอง ปลุกความกระปรี้กระเปร่าและพร้อมเรียนรู้สิ่งใหม่"
    },
    inhale: 6,
    hold: 0,
    exhale: 4
  }
];

export default function JaiYenSpaceView({ lang }: JaiYenSpaceProps) {
  const [activeRhythmId, setActiveRhythmId] = useState<RhythmType>('standard');
  const [isPlaying, setIsPlaying] = useState(false);
  const [cyclePhase, setCyclePhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  const activeRhythm = breathingRhythms.find(r => r.id === activeRhythmId) || breathingRhythms[0];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Restart phase timer when play/pause or rhythm changes
  useEffect(() => {
    if (isPlaying) {
      // Set initial duration for current phase
      const startPhaseDuration = () => {
        if (cyclePhase === 'inhale') return activeRhythm.inhale;
        if (cyclePhase === 'hold') return activeRhythm.hold || 1;
        return activeRhythm.exhale;
      };
      setSecondsLeft(startPhaseDuration());
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeRhythmId]);

  // Breathing Loop Countdown Timer
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Transition to next phase
          if (cyclePhase === 'inhale') {
            if (activeRhythm.hold > 0) {
              setCyclePhase('hold');
              return activeRhythm.hold;
            } else {
              setCyclePhase('exhale');
              return activeRhythm.exhale;
            }
          } else if (cyclePhase === 'hold') {
            setCyclePhase('exhale');
            return activeRhythm.exhale;
          } else {
            // Completed a full cycle!
            setCyclePhase('inhale');
            setCyclesCompleted((c) => c + 1);
            return activeRhythm.inhale;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, cyclePhase, activeRhythm]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCyclePhase('inhale');
    setSecondsLeft(activeRhythm.inhale);
    setCyclesCompleted(0);
  };

  const handleSelectRhythm = (id: RhythmType) => {
    const selected = breathingRhythms.find(r => r.id === id) || breathingRhythms[0];
    setActiveRhythmId(id);
    setCyclePhase('inhale');
    setSecondsLeft(selected.inhale);
    setIsPlaying(false);
  };

  const getPhaseInstruction = () => {
    if (cyclePhase === 'inhale') {
      return {
        FR: "Inspirez lentement par le nez...",
        EN: "Inhale slowly through your nose...",
        TH: "สูดลมหายใจเข้าช้าๆ ทางจมูก..."
      };
    } else if (cyclePhase === 'hold') {
      return {
        FR: "Retenez doucement votre souffle...",
        EN: "Gently hold your breath...",
        TH: "กลั้นหายใจไว้เบาๆ ประคองสติ..."
      };
    } else {
      return {
        FR: "Soufflez calmement par la bouche...",
        EN: "Exhale calmly through your mouth...",
        TH: "ผ่อนลมหายใจออกช้าๆ ทางปาก..."
      };
    }
  };

  const t = {
    title: { FR: "Espace Respiratoire 'Jai Yen'", EN: "'Jai Yen' Mindfulness Sanctuary", TH: "พื้นที่ฝึกสมาธิล้างใจเย็น (Jai Yen)" },
    subtitle: {
      FR: "Prenez 5 minutes de respiration consciente avant vos discussions importantes. Le concept bouddhiste thaïlandais du 'Jai Yen' (garder un cœur frais) prévient l'escalade verbale.",
      EN: "Take 5 minutes of mindful coherence before important discussions. The Buddhist Thai concept of 'Jai Yen' (keeping a cool heart) physically halts verbal escalation.",
      TH: "โปรแกรมกำหนดลมหายใจ 5 นาทีเพื่อความสงบสุขทางอารมณ์ ป้องกันการใช้น้ำเสียงรุนแรง และร่วมสร้างความสมดุลในคู่รัก"
    },
    rhythmsHeader: { FR: "Sélectionner un rythme de cohérence", EN: "Choose Your Coherence Rhythm", TH: "เลือกจังหวะการฝึกฝนจิตใจ" },
    cycleLabel: { FR: "Cycles validés", EN: "Cycles completed", TH: "รอบการหายใจสะสม" },
    seconds: { FR: "s", EN: "s", TH: "วิ" },
    howItWorksTitle: { FR: "La sagesse du 'Jai Yen' en couple", EN: "The Wisdom of 'Jai Yen' for Couples", TH: "ปรัชญา 'ใจเย็น' เพื่อความราบรื่นในคู่รัก" },
    howItWorksDesc: {
      FR: "Dans les moments de désaccord, la culture thaïlandaise proscrit formellement la colère visible. S'asseoir côte à côte et harmoniser sa respiration pendant 3 minutes désactive les défenses biologiques de stress et rétablit l'empathie mutuelle.",
      EN: "When disagreements occur, Thai culture strongly discourages visible anger. Breathing in tandem for 3 minutes shuts down biological fight-or-flight triggers, instantly restoring connection.",
      TH: "ในยามที่เริ่มขัดใจกัน วัฒนธรรมไทยให้ความสำคัญกับความเย็นนิ่งเป็นอย่างยิ่ง การร่วมฝึกกำหนดลมหายใจช่วยหยุดปฏิกิริยาส่งเสียงดัง และรักษาความสัมพันธ์ที่หรูหราสง่างาม"
    }
  };

  // Pulse circle class computation based on active phase
  const getCircleScaleClass = () => {
    if (!isPlaying) return 'scale-100 bg-[#e2b07e]/10 border-[#e2b07e]/30 text-[#b88c5e]';
    if (cyclePhase === 'inhale') {
      return 'scale-125 bg-amber-500/15 border-amber-400 text-amber-800 duration-[5000ms]';
    }
    if (cyclePhase === 'hold') {
      return 'scale-125 bg-teal-500/15 border-teal-400 text-teal-800';
    }
    return 'scale-90 bg-rose-500/10 border-rose-300 text-rose-800 duration-[5000ms]';
  };

  return (
    <div id="jai-yen-space-view-container" className="bg-white rounded-2xl border border-[#e5e1da] p-6 sm:p-8 space-y-8 shadow-sm">
      
      {/* Header section */}
      <div className="border-b border-[#e5e1da] pb-6 space-y-2">
        <div className="flex items-center gap-2.5">
          <Wind className="w-6 h-6 text-teal-500 animate-pulse" />
          <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-[#403d39]">
            {t.title[lang]}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl font-serif">
          {t.subtitle[lang]}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Breathing Animator (Large interactive circle) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6 py-6 bg-[#fdfbf7] rounded-2xl border border-[#e5e1da]/60">
          
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            {/* Ambient Pulsing Glow Ripples */}
            {isPlaying && (
              <>
                <div className="absolute inset-0 rounded-full border border-[#e2b07e]/30 animate-ping opacity-25 scale-150" />
                <div className="absolute inset-2 rounded-full border border-teal-300/20 animate-ping opacity-10 scale-125" />
              </>
            )}

            {/* Core breathing bubble */}
            <div 
              id="breathing-bubble-element"
              className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 flex flex-col items-center justify-center text-center p-4 transition-all ease-in-out duration-1000 shadow-sm ${getCircleScaleClass()}`}
            >
              <Compass className="w-5 h-5 mb-1.5 animate-spin-slow opacity-60" />
              <span className="text-4xl font-serif font-black tracking-tighter">
                {secondsLeft}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 block mt-1">
                {cyclePhase === 'inhale' ? (lang === 'FR' ? 'Inspirer' : lang === 'EN' ? 'Inhale' : 'หายใจเข้า')
                 : cyclePhase === 'hold' ? (lang === 'FR' ? 'Apnée' : lang === 'EN' ? 'Hold' : 'กลั้นใจ')
                 : (lang === 'FR' ? 'Expirer' : lang === 'EN' ? 'Exhale' : 'หายใจออก')}
              </span>
            </div>
          </div>

          {/* Interactive Instruction text */}
          <div className="text-center px-4">
            <h4 className="font-serif text-sm sm:text-base font-extrabold text-slate-700 min-h-[24px]">
              {getPhaseInstruction()[lang]}
            </h4>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-semibold mt-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>{t.cycleLabel[lang]} : <strong>{cyclesCompleted}</strong></span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="breathing-play-btn"
              onClick={handleTogglePlay}
              className={`p-3.5 rounded-full transition-all flex items-center justify-center shadow-md active:scale-95 cursor-pointer text-white ${
                isPlaying 
                  ? 'bg-amber-600 hover:bg-amber-700 ring-4 ring-amber-100' 
                  : 'bg-teal-600 hover:bg-teal-700 ring-4 ring-teal-100'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
            </button>

            <button
              type="button"
              id="breathing-reset-btn"
              onClick={handleReset}
              className="p-3 rounded-full border border-[#e5e1da] bg-white hover:bg-slate-100 text-slate-500 transition-all active:scale-95 cursor-pointer shadow-xs"
              title="Réinitialiser"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Info Section (Selection + Cultural context) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-extrabold text-[#8c7e6d] uppercase tracking-wider pl-1">
              {t.rhythmsHeader[lang]}
            </h3>
            
            <div className="grid grid-cols-1 gap-2.5">
              {breathingRhythms.map((rhythm) => {
                const isActive = activeRhythmId === rhythm.id;
                return (
                  <button
                    key={rhythm.id}
                    type="button"
                    onClick={() => handleSelectRhythm(rhythm.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3 group cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#e2b07e] ring-2 ring-[#e2b07e]/10 shadow-sm' 
                        : 'bg-[#fcfbf9] border-[#e5e1da] hover:border-[#e2b07e]/60 hover:bg-white'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border shrink-0 mt-1 flex items-center justify-center transition-colors ${
                      isActive ? 'border-[#e2b07e] bg-[#e2b07e]' : 'border-slate-300 bg-white group-hover:border-[#e2b07e]'
                    }`}>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-black text-slate-800">
                        {rhythm.name[lang]}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                        {rhythm.desc[lang]}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Didactic card */}
          <div className="p-5 sm:p-6 rounded-xl border border-teal-200/50 bg-teal-50/20 space-y-2.5">
            <div className="flex items-center gap-2 text-teal-800">
              <Sparkles className="w-4 h-4 text-teal-600 animate-pulse" />
              <h4 className="font-serif text-xs sm:text-sm font-black">
                {t.howItWorksTitle[lang]}
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.howItWorksDesc[lang]}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
