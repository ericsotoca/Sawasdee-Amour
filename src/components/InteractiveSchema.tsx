import { useState } from 'react';
import { Language } from '../types';
import { 
  Thermometer, Info, ArrowRight, DollarSign, Calculator, 
  HelpCircle, Calendar, ShieldCheck, Heart, Sparkles, 
  AlertTriangle, RefreshCw, Layers, CheckCircle2, ChevronRight, User2, MapPin, Scale
} from 'lucide-react';

interface InteractiveSchemaProps {
  lessonId: number;
  lang: Language;
}

export default function InteractiveSchema({ lessonId, lang }: InteractiveSchemaProps) {
  switch (lessonId) {
    case 1:
      return <ThermometerSchema lang={lang} />;
    case 2:
      return <PriorityTreeSchema lang={lang} />;
    case 3:
      return <SinSodSimulator lang={lang} />;
    case 4:
      return <MarriageRoadmap lang={lang} />;
    case 5:
      return <VisaFlowchart lang={lang} />;
    case 6:
      return <BudgetSplitter lang={lang} />;
    case 7:
      return <CultureShockCurve lang={lang} />;
    case 8:
      return <PropertySelector lang={lang} />;
    case 9:
      return <MatrimonialMatrix lang={lang} />;
    case 10:
      return <HarmonyTree lang={lang} />;
    default:
      return null;
  }
}

/* ============================================================================
   MODULE 1: Le thermomètre de la communication
   ============================================================================ */
function ThermometerSchema({ lang }: { lang: Language }) {
  const [activePhrase, setActivePhrase] = useState(0);

  const phrases = [
    {
      label: {
        FR: "« C'est délicieux mais un peu épicé/salé »",
        EN: "“It's delicious but a bit spicy/salty”",
        TH: "“อร่อยดีนะ แต่เผ็ด/เค็มไปนิดนึง”"
      },
      frenchInterpretation: {
        FR: "La cuisine est bonne dans l'ensemble, mais nécessite un petit ajustement technique.",
        EN: "The food is generally good, but needs a small technical seasoning adjustment.",
        TH: "อาหารโดยรวมก็ดี แต่ต้องการการปรับปรุงเรื่องรสชาติเล็กน้อย"
      },
      thaiInterpretation: {
        FR: "C'est une critique polie pour dire que le plat est difficilement mangeable ou décevant.",
        EN: "It is a polite critique meaning the dish is barely edible or disappointing.",
        TH: "เป็นการติเพื่อรักษาความพยายามของคนปรุง เพื่อจะบอกว่ารสชาติกินยากหรือยังไม่โดนใจ"
      },
      tempLevel: 45, // Warm/Indirect context
    },
    {
      label: {
        FR: "« Je vais y réfléchir / On verra »",
        EN: "“I will think about it / We will see”",
        TH: "“เดี๋ยวขอคิดดูก่อนนะ / แล้วค่อยว่ากัน”"
      },
      frenchInterpretation: {
        FR: "Le projet est en cours de réflexion sérieuse, une décision logique sera prise plus tard.",
        EN: "The project is under serious consideration, a logical decision will follow.",
        TH: "โครงการกำลังอยู่ระหว่างการพิจารณาอย่างจริงจัง และจะมีการตัดสินใจในภายหลัง"
      },
      thaiInterpretation: {
        FR: "C'est un refus poli à 95% pour préserver l'harmonie et ne pas froisser l'interlocuteur.",
        EN: "It is a 95% polite refusal to save face and avoid hurting the interlocutor's feelings.",
        TH: "เป็นการปฏิเสธอย่างสุภาพประมาณ 95% เพื่อรักษาความปรองดองและไม่ให้อีกฝ่ายเสียน้ำใจ"
      },
      tempLevel: 85, // Very High Context
    },
    {
      label: {
        FR: "« Es-tu sûr d'avoir raison ? »",
        EN: "“Are you sure you are right?”",
        TH: "“คุณแน่ใจหรอว่าคุณทำถูกต้องแล้ว?”"
      },
      frenchInterpretation: {
        FR: "Une question directe qui invite au débat intellectuel et à l'analyse logique.",
        EN: "A direct question inviting logical analysis and healthy intellectual debate.",
        TH: "คำถามตรงๆ ที่ชวนให้วิเคราะห์ด้วยเหตุผลและการอภิปรายทางความคิด"
      },
      thaiInterpretation: {
        FR: "Perçu comme une confrontation agressive qui remet en cause l'intelligence ou le respect.",
        EN: "Perceived as an aggressive confrontation challenging intelligence or basic respect.",
        TH: "ถูกมองว่าเป็นการเผชิญหน้าอย่างก้าวร้าว ซึ่งท้าทายสติปัญญาหรือระดับความเคารพที่มีให้กัน"
      },
      tempLevel: 95, // Extreme Context Conflict Risk
    }
  ];

  const t = {
    title: { FR: "Thermomètre Interculturel", EN: "Intercultural Thermometer", TH: "เครื่องวัดอุณหภูมิทางวัฒนธรรม" },
    subtitle: { FR: "Cliquez sur une phrase pour mesurer l'écart d'interprétation", EN: "Click a sentence to measure the interpretation gap", TH: "คลิกที่ประโยคเพื่อวัดระดับความเข้าใจที่คลาดเคลื่อน" },
    contextFaible: { FR: "Français (Contexte Faible / Direct)", EN: "French (Low Context / Direct)", TH: "ฝรั่งเศส (บริบทต่ำ / ตรงไปตรงมา)" },
    contextFort: { FR: "Thaïlandais (Contexte Fort / Indirect)", EN: "Thai (High Context / Indirect)", TH: "ไทย (บริบทสูง / อ้อมค้อม)" },
    literalMeaning: { FR: "Sens Littéral Français", EN: "Literal French Meaning", TH: "ความหมายตามตัวอักษรของฝรั่งเศส" },
    culturalMeaning: { FR: "Sens Culturel Thaï", EN: "Cultural Thai Meaning", TH: "ความหมายทางวัฒนธรรมของไทย" },
    highRisk: { FR: "Indice d'ambiguïté élevé", EN: "High ambiguity level", TH: "ระดับความคลุมเครือสูง" }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Thermometer className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Phrases Selection */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {phrases.map((phrase, idx) => (
            <button
              key={idx}
              id={`m1-btn-${idx}`}
              onClick={() => setActivePhrase(idx)}
              className={`text-left p-3.5 rounded-lg border text-sm transition-all duration-300 ${
                activePhrase === idx
                  ? "bg-[#e2b07e]/15 border-[#e2b07e] text-slate-800 font-semibold"
                  : "bg-white border-slate-200 text-slate-600 hover:border-[#e2b07e]/50"
              }`}
            >
              {phrase.label[lang]}
            </button>
          ))}
        </div>

        {/* Thermometer Display */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="relative w-4 h-48 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-yellow-400 via-orange-400 to-red-500 rounded-full transition-all duration-700"
              style={{ height: `${phrases[activePhrase].tempLevel}%` }}
            />
          </div>
          <div className="mt-3 text-xs font-semibold text-[#c68f54]">
            {phrases[activePhrase].tempLevel}°C Context
          </div>
        </div>

        {/* Explanations */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-xs">
            <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              {t.contextFaible[lang]}
            </div>
            <p className="text-sm text-slate-700 font-medium">
              {phrases[activePhrase].frenchInterpretation[lang]}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-[#e2b07e]/20 shadow-xs">
            <div className="flex items-center gap-1.5 text-amber-600 font-semibold text-xs uppercase tracking-wider mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              {t.contextFort[lang]}
            </div>
            <p className="text-sm text-slate-700 font-medium">
              {phrases[activePhrase].thaiInterpretation[lang]}
            </p>
          </div>

          {phrases[activePhrase].tempLevel > 70 && (
            <div className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-100 p-2.5 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t.highRisk[lang]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 2: Cercles de priorités familiales
   ============================================================================ */
function PriorityTreeSchema({ lang }: { lang: Language }) {
  const [activeCircle, setActiveCircle] = useState(0);

  const circles = [
    {
      title: { FR: "1. Parents et Grands-Parents", EN: "1. Parents & Grandparents", TH: "1. บิดามารดาและปู่ย่าตายาย" },
      obligation: { FR: "Absolue (Sacrée)", EN: "Absolute (Sacred)", TH: "สูงสุด (ศักดิ์สิทธิ์)" },
      desc: {
        FR: "La piété filiale exige d'honorer moralement et financièrement ses parents en priorité absolue. Ne jamais contredire un parent âgé publiquement.",
        EN: "Filial piety requires honoring parents both morally and financially as an absolute priority. Never contradict an elder in public.",
        TH: "ความกตัญญูกตเวทีเป็นสิ่งที่อยู่เหนือสิ่งอื่นใด ลูกๆ ต้องดูแลพ่อแม่ทั้งทางร่างกาย จิตใจ และการเงินเป็นอันดับแรก"
      }
    },
    {
      title: { FR: "2. Époux(se) et Enfants", EN: "2. Spouse & Children", TH: "2. คู่สมรสและบุตร" },
      obligation: { FR: "Élevée (Noyau central)", EN: "High (Core nucleus)", TH: "สูง (ครอบครัวหลัก)" },
      desc: {
        FR: "Le cercle de la nouvelle vie commune. Les charges du ménage et l'éducation des enfants binationaux sont gérées ici, mais ne doivent jamais isoler le conjoint thaï de sa famille.",
        EN: "The circle of the new life together. Household costs and children's education are managed here, but must never isolate the Thai partner from parents.",
        TH: "วงจรชีวิตใหม่ที่ร่วมสร้างขึ้น ค่าใช้จ่ายในการดูแลบ้านและการศึกษาของลูกจะอยู่ตรงนี้ แต่ต้องไม่ตัดขาดจากครอบครัวเดิม"
      }
    },
    {
      title: { FR: "3. Fratrie et Oncles", EN: "3. Siblings & Extended Family", TH: "3. พี่น้องและญาติสนิท" },
      obligation: { FR: "Modérée (Solidarité négociée)", EN: "Moderate (Negotiated solidarity)", TH: "ปานกลาง (ความช่วยเหลือตามความเหมาะสม)" },
      desc: {
        FR: "La solidarité s'applique pour des coups durs (maladie, urgence). Cependant, l'aide financière régulière doit être encadrée pour éviter les dépendances abusives.",
        EN: "Solidarity applies in hard times (illness, emergency). However, regular monthly support should be bounded to avoid abusive dependencies.",
        TH: "ความช่วยเหลือในยามยากลำบak (เช่น เจ็บป่วย อุบัติเหตุ) แต่การสนับสนุนรายเดือนเป็นประจำต้องพูดคุยตกลงกันอย่างรอบคอบ"
      }
    },
    {
      title: { FR: "4. Communauté et Temple", EN: "4. Community & Temple", TH: "4. ชุมชนและวัด" },
      obligation: { FR: "Symbolique (Karma & Mérite)", EN: "Symbolic (Karma & Merit-making)", TH: "เชิงสัญลักษณ์ (การทำบุญและสร้างกุศล)" },
      desc: {
        FR: "Faire des dons au temple local ('Faire le mérite' ou 'Tham Bun') et aider les voisins préserve la réputation spirituelle et l'honneur social de la famille.",
        EN: "Making donations to the local temple ('Making merit' or 'Tham Bun') and supporting neighbors preserves spiritual honor and family reputation.",
        TH: "การทำบุญตักบาตร ทอดกฐิน หรือช่วยเหลือเพื่อนบ้านเพื่อสร้างกุศล เป็นการสะสมกรรมดีและรักษาหน้าตาทางสังคมของครอบครัว"
      }
    }
  ];

  const t = {
    title: { FR: "Arbre des Priorités Familiales", EN: "Family Priority Tree", TH: "แผนผังลำดับความสำคัญในครอบครัว" },
    subtitle: { FR: "Sélectionnez un cercle social pour comprendre l'obligation morale thaïlandaise", EN: "Select a social circle to understand Thai moral obligation", TH: "เลือกวงจรสมาคมเพื่อทำความเข้าใจภาระหน้าที่ทางศีลธรรมของไทย" },
    obligationLabel: { FR: "Niveau d'obligation :", EN: "Obligation level:", TH: "ระดับหน้าที่ความรับผิดชอบ:" }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Clickable concentric circles */}
        <div className="flex items-center justify-center p-4">
          <div className="relative w-64 h-64 flex items-center justify-center bg-white rounded-full border border-slate-100 shadow-inner">
            {/* Circle 4 */}
            <button 
              id="circle-btn-3"
              onClick={() => setActiveCircle(3)}
              className={`absolute w-60 h-60 rounded-full border-2 transition-all duration-300 flex items-end justify-center pb-3 ${
                activeCircle === 3 ? 'border-[#e2b07e] bg-[#e2b07e]/5 shadow-sm' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">4. Commu</span>
            </button>

            {/* Circle 3 */}
            <button 
              id="circle-btn-2"
              onClick={() => setActiveCircle(2)}
              className={`absolute w-44 h-44 rounded-full border-2 transition-all duration-300 flex items-end justify-center pb-3 ${
                activeCircle === 2 ? 'border-[#c68f54] bg-[#c68f54]/5 shadow-sm' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">3. Famille Élargie</span>
            </button>

            {/* Circle 2 */}
            <button 
              id="circle-btn-1"
              onClick={() => setActiveCircle(1)}
              className={`absolute w-28 h-28 rounded-full border-2 transition-all duration-300 flex items-end justify-center pb-2 ${
                activeCircle === 1 ? 'border-amber-600 bg-amber-600/5 shadow-sm' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="text-[9px] uppercase tracking-wider text-slate-700 font-bold">2. Couple</span>
            </button>

            {/* Circle 1 */}
            <button 
              id="circle-btn-0"
              onClick={() => setActiveCircle(0)}
              className={`absolute w-14 h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-center p-1 ${
                activeCircle === 0 ? 'border-red-600 bg-red-600/10 shadow-sm' : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              <span className="text-[9px] uppercase tracking-tight text-red-700 font-extrabold leading-none">1. Parents</span>
            </button>
          </div>
        </div>

        {/* Informational display card */}
        <div className="bg-white p-5 rounded-lg border border-slate-200/60 shadow-xs flex flex-col justify-between h-full min-h-[180px]">
          <div>
            <h5 className="font-bold text-slate-800 text-base mb-2">
              {circles[activeCircle].title[lang]}
            </h5>
            <div className="flex items-center gap-1.5 text-xs font-semibold mb-3">
              <span className="text-slate-500">{t.obligationLabel[lang]}</span>
              <span className={`px-2 py-0.5 rounded-full ${
                activeCircle === 0 ? 'bg-red-50 text-red-700 border border-red-100' :
                activeCircle === 1 ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                activeCircle === 2 ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                'bg-slate-50 text-slate-600 border border-slate-100'
              }`}>
                {circles[activeCircle].obligation[lang]}
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {circles[activeCircle].desc[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 3: Simulateur de Sin Sod
   ============================================================================ */
function SinSodSimulator({ lang }: { lang: Language }) {
  const [eduLevel, setEduLevel] = useState(1); // 0: rurale/bac, 1: licence/master, 2: doctorat/haute position
  const [socialStatus, setSocialStatus] = useState(0); // 0: rural/modeste, 1: classe moyenne urbaine, 2: très aisée/haute société
  const [hasDivorced, setHasDivorced] = useState(false);

  // Compute Sin Sod range (purely educational simulation explaining the variables)
  let baseMin = 100000;
  let baseMax = 250000;

  if (eduLevel === 1) {
    baseMin += 200000;
    baseMax += 400000;
  } else if (eduLevel === 2) {
    baseMin += 600000;
    baseMax += 1200000;
  }

  if (socialStatus === 1) {
    baseMin += 200000;
    baseMax += 500000;
  } else if (socialStatus === 2) {
    baseMin += 1000000;
    baseMax += 2500000;
  }

  if (hasDivorced) {
    baseMin = Math.max(50000, baseMin * 0.4);
    baseMax = Math.max(100000, baseMax * 0.4);
  }

  const t = {
    title: { FR: "Simulateur Pédagogique de Sin Sod", EN: "Sin Sod Educational Simulator", TH: "โปรแกรมจำลองการวิเคราะห์สินสอดเชิงการเรียนรู้" },
    subtitle: { 
      FR: "Comprenez comment les facteurs sociaux influencent traditionnellement l'évaluation de la dot.",
      EN: "Understand how social factors traditionally influence dowry evaluations.",
      TH: "ทำความเข้าใจว่าปัจจัยทางสังคมมีอิทธิพลต่อการประเมินมูลค่าสินสอดตามประเพณีอย่างไร"
    },
    edu: { FR: "Niveau d'études & Carrière", EN: "Education Level & Career", TH: "ระดับการศึกษาและการทำงาน" },
    status: { FR: "Milieu Social & Origine", EN: "Social Background & Origin", TH: "ภูมิหลังทางสังคมและครอบครัว" },
    divorced: { FR: "Déjà mariée auparavant ?", EN: "Previously married?", TH: "เคยผ่านการสมรสหรือมีบุตรมาก่อนหรือไม่?" },
    yes: { FR: "Oui", EN: "Yes", TH: "เคย" },
    no: { FR: "Non", EN: "No", TH: "ไม่เคย" },
    estimatedRange: { FR: "Évaluation Symbolique Attendue", EN: "Expected Symbolic Range", TH: "มูลค่าประเมินเชิงสัญลักษณ์ที่คาดหวัง" },
    restitutionRate: { FR: "Taux habituel de restitution au couple", EN: "Usual rate of return to the couple", TH: "อัตราเฉลี่ยที่บิดามารดาจะส่งคืนเพื่อตั้งตัว" },
    disclaimer: {
      FR: "⚠️ Note éducative : Dans 80% des mariages modernes de couples franco-thaïlandais, la Sin Sod est exposée pour l'honneur de la famille le jour de la cérémonie, puis rendue discrètement au couple pour les aider à s'installer.",
      EN: "⚠️ Educational Note: In 80% of modern Franco-Thai weddings, the Sin Sod is displayed to honor the family on the wedding day, then discreetly returned to the couple to help them start their life.",
      TH: "⚠️ บันทึกย่อเพื่อการเรียนรู้: ในงานแต่งงานยุคใหม่ร้อยละ 80 บิดามารดาจะวางสินสอดเพื่อเป็นเกียรติแก่ครอบครัวในวันงาน และแอบส่งคืนให้คู่สมรสเพื่อเป็นทุนสร้างครอบครัวหลังเสร็จพิธี"
    }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.edu[lang]}</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { FR: "Bac / Technique", EN: "High School / Voc", TH: "ม.ปลาย / ปวช." },
                { FR: "Licence / Master", EN: "Bachelor / Master", TH: "ปริญญาตรี / โท" },
                { FR: "Doctorat / Cadre", EN: "PhD / Executive", TH: "ปริญญาเอก / ผู้บริหาร" }
              ].map((item, idx) => (
                <button
                  key={idx}
                  id={`edu-btn-${idx}`}
                  onClick={() => setEduLevel(idx)}
                  className={`p-2.5 rounded-lg text-xs border transition-all ${
                    eduLevel === idx 
                      ? 'bg-[#e2b07e]/20 border-[#e2b07e] text-slate-800 font-semibold' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {item[lang]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.status[lang]}</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { FR: "Milieu Rural", EN: "Rural Background", TH: "ชนบท / เกษตรกรรม" },
                { FR: "Classe Moyenne", EN: "Middle Class", TH: "ชนชั้นกลางเมือง" },
                { FR: "Haute Société", EN: "Upper Class / Elite", TH: "ตระกูลดัง / ธุรกิจใหญ่" }
              ].map((item, idx) => (
                <button
                  key={idx}
                  id={`status-btn-${idx}`}
                  onClick={() => setSocialStatus(idx)}
                  className={`p-2.5 rounded-lg text-xs border transition-all ${
                    socialStatus === idx 
                      ? 'bg-[#e2b07e]/20 border-[#e2b07e] text-slate-800 font-semibold' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {item[lang]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.divorced[lang]}</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input 
                  type="radio" 
                  id="divorced-yes"
                  checked={hasDivorced === true} 
                  onChange={() => setHasDivorced(true)}
                  className="accent-[#c68f54]" 
                />
                {t.yes[lang]}
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input 
                  type="radio" 
                  id="divorced-no"
                  checked={hasDivorced === false} 
                  onChange={() => setHasDivorced(false)}
                  className="accent-[#c68f54]" 
                />
                {t.no[lang]}
              </label>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">
              {t.estimatedRange[lang]}
            </span>
            <div className="text-2xl md:text-3xl font-extrabold text-[#c68f54] my-2">
              {baseMin.toLocaleString()} - {baseMax.toLocaleString()} THB
            </div>
            <div className="text-xs text-slate-400 mt-1">
              ≈ {(baseMin / 38).toFixed(0)}€ - {(baseMax / 38).toFixed(0)}€
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 mt-4 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">{t.restitutionRate[lang]}</span>
              <span className="font-bold text-emerald-600">80% - 100%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[90%]" />
            </div>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed bg-[#fdfbf7] p-3 rounded-lg border border-[#e2b07e]/20 mt-4">
            {t.disclaimer[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 4: Roadmap mariage administratif
   ============================================================================ */
function MarriageRoadmap({ lang }: { lang: Language }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: { FR: "Constitution Dossier CCAM", EN: "Prepare CCAM Folder", TH: "เตรียมเอกสารขอใบ CCAM" },
      duration: { FR: "1 - 2 mois", EN: "1 - 2 months", TH: "1 - 2 เดือน" },
      docs: {
        FR: "Actes de naissance récents, certificats de célibat, justificatifs de domicile et d'identité.",
        EN: "Recent birth certificates, certificates of single status, proofs of address and identities.",
        TH: "สูติบัตร, ใบรับรองโสดของทั้งสองฝ่าย, ทะเบียนบ้าน, และหนังสือเดินทางพร้อมสำเนา"
      },
      tip: {
        FR: "Faites traduire tous les documents thaïlandais par un traducteur agréé par l'Ambassade de France.",
        EN: "Have all Thai documents translated by an official translator approved by the French Embassy.",
        TH: "เอกสารภาษาไทยต้องได้รับการแปลเป็นภาษาฝรั่งเศสโดยนักแปลที่สถานทูตรับรองเท่านั้น"
      }
    },
    {
      num: "02",
      title: { FR: "Publication des Bans & CCAM", EN: "Bans Publication & CCAM", TH: "ประกาศโฆษณาการสมรสและรับใบ CCAM" },
      duration: { FR: "4 - 8 semaines", EN: "4 - 8 weeks", TH: "4 - 8 สัปดาห์" },
      docs: {
        FR: "Le dossier est envoyé à la mairie du domicile en France pour publier les bans durant 10 jours.",
        EN: "The file is sent to the French spouse's hometown hall to post marriage bans for 10 days.",
        TH: "คำร้องจะส่งไปตรวจสอบและปิดประกาศ ณ ที่ว่าการอำเภอเมืองเกิดของฝ่ายชายในฝรั่งเศสเป็นเวลา 10 วัน"
      },
      tip: {
        FR: "L'Ambassade délivre le CCAM une fois le certificat de non-opposition retourné par la mairie française.",
        EN: "The Embassy issues the CCAM once the certificate of non-opposition is returned by the French city hall.",
        TH: "สถานทูตจะออกใบ CCAM ให้หลังจากเทศบาลที่ฝรั่งเศสตอบกลับว่าไม่มีผู้คัดค้านการสมรส"
      }
    },
    {
      num: "03",
      title: { FR: "Mariage Civil à l'Amphur", EN: "Civil Wedding at Amphur", TH: "จดทะเบียนสมรส ณ ที่ว่าการอำเภอ" },
      duration: { FR: "1 - 2 jours", EN: "1 - 2 days", TH: "1 - 2 วัน" },
      docs: {
        FR: "CCAM traduit en thaïlandais et certifié par le MFA thaïlandais, présence de deux témoins.",
        EN: "CCAM translated into Thai and certified by the Thai MFA, with two witnesses present.",
        TH: "ใบ CCAM แปลเป็นภาษาไทยและผ่านการรับรองโดยกระทรวงการต่างประเทศของไทย พร้อมพยานสองคน"
      },
      tip: {
        FR: "C'est l'étape légale unique en Thaïlande. Les livrets roses et bleus de mariage ('Kor Ror 2' et 'Kor Ror 3') vous sont remis.",
        EN: "This is the only legal wedding step in Thailand. You will receive the pink/blue certificates (Kor Ror 2 & 3).",
        TH: "นี่คือขั้นตอนจดทะเบียนตามกฎหมายที่สำคัญที่สุด คุณจะได้รับใบสำคัญการสมรส (คร.2 และ คร.3)"
      }
    },
    {
      num: "04",
      title: { FR: "Traduction & Légalisation MFA", EN: "MFA Translation & Legalization", TH: "แปลและรับรองโดยกระทรวงการต่างประเทศ" },
      duration: { FR: "1 semaine", EN: "1 week", TH: "1 สัปดาห์" },
      docs: {
        FR: "Traduction en français des actes de mariage thaïlandais Kor Ror 2 et Kor Ror 3.",
        EN: "Translation into French of the Thai marriage certificates Kor Ror 2 and Kor Ror 3.",
        TH: "แปลทะเบียนสมรส คร.2 และ คร.3 จากภาษาไทยเป็นภาษาฝรั่งเศส"
      },
      tip: {
        FR: "Faites légaliser ces traductions par le Ministère thaïlandais des Affaires Étrangères (MFA) à Bangkok.",
        EN: "Get these translations officially legalized by the Thai Ministry of Foreign Affairs (MFA) in Bangkok.",
        TH: "นำเอกสารที่แปลแล้วไปผ่านการรับรองตราประทับ ณ กรมการกงสุล กระทรวงการต่างประเทศ (แจ้งวัฒนะ)"
      }
    },
    {
      num: "05",
      title: { FR: "Transcription & Livret de Famille", EN: "Transcription & Family Book", TH: "คัดลอกบันทึกและรับสมุดทะเบียนครอบครัว" },
      duration: { FR: "3 - 6 semaines", EN: "3 - 6 weeks", TH: "3 - 6 สัปดาห์" },
      docs: {
        FR: "Dépôt des actes légalisés à l'Ambassade de France pour transcrire l'acte.",
        EN: "Submit legalized certificates to the French Embassy for official transcription.",
        TH: "ยื่นเอกสารทั้งหมดที่ผ่านการรับรองแก่สถานทูตฝรั่งเศสเพื่อทำเรื่อง Transcription"
      },
      tip: {
        FR: "Cette étape donne naissance au Livret de Famille français indispensable pour entamer le visa de conjoint.",
        EN: "This step generates the official French Family Record Book (Livret de Famille), vital for the spouse visa.",
        TH: "ขั้นตอนนี้จะทำให้ได้รับสมุดทะเบียนครอบครัวฝรั่งเศส ซึ่งเป็นกุญแจสำคัญสำหรับขอวีซ่าพำนักถาวรต่อไป"
      }
    }
  ];

  const t = {
    title: { FR: "Ligne du Temps de l'Administration", EN: "Administrative Timeline", TH: "เส้นเวลาการดำเนินงานราชการสำหรับการแต่งงาน" },
    subtitle: { FR: "Sélectionnez chaque étape clé du parcours de mariage franco-thaïlandais", EN: "Select each key step of the Franco-Thai wedding journey", TH: "เลือกในแต่ละขั้นตอนเพื่อดูเอกสารและคำแนะนำสำหรับการแต่งงานสองสัญชาติ" },
    timeFrame: { FR: "Durée estimée :", EN: "Estimated duration:", TH: "ระยะเวลาโดยประมาณ:" },
    neededDocs: { FR: "Documents requis :", EN: "Required documents:", TH: "เอกสารที่จำเป็น:" },
    proTip: { FR: "Conseil pratique :", EN: "Pro Tip:", TH: "คำแนะนำเพิ่มเติม:" }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      {/* Progress Dots Bar */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6">
        {steps.map((step, idx) => (
          <button
            key={idx}
            id={`step-btn-${idx}`}
            onClick={() => setActiveStep(idx)}
            className={`flex-1 flex items-center gap-2 p-2 rounded-lg text-left transition-all ${
              activeStep === idx 
                ? 'bg-[#e2b07e] text-white font-semibold' 
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              activeStep === idx ? 'bg-white text-[#c68f54]' : 'bg-slate-200 text-slate-600'
            }`}>
              {step.num}
            </span>
            <span className="text-xs truncate hidden sm:inline">{step.title[lang]}</span>
          </button>
        ))}
      </div>

      {/* Detailed view of active step */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex justify-between items-start border-b border-slate-100 pb-3 mb-4">
          <div>
            <span className="text-xs font-bold text-[#c68f54] uppercase tracking-widest block mb-1">
              {t.timeFrame[lang]} {steps[activeStep].duration[lang]}
            </span>
            <h5 className="font-serif text-lg font-bold text-slate-800">
              {steps[activeStep].title[lang]}
            </h5>
          </div>
          <span className="text-4xl font-extrabold text-slate-100">{steps[activeStep].num}</span>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.neededDocs[lang]}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {steps[activeStep].docs[lang]}
            </p>
          </div>

          <div className="bg-[#fdfbf7] p-3.5 rounded-lg border border-[#e2b07e]/30 flex gap-2.5 items-start">
            <Info className="w-4 h-4 text-[#c68f54] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#c68f54] mb-0.5">
                {t.proTip[lang]}
              </div>
              <p className="text-xs text-slate-600 leading-normal">
                {steps[activeStep].tip[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 5: Organigramme Visa
   ============================================================================ */
function VisaFlowchart({ lang }: { lang: Language }) {
  const [duration, setDuration] = useState<'short' | 'long' | null>(null);
  const [isMarried, setIsMarried] = useState<'yes' | 'no' | null>(null);

  const handleReset = () => {
    setDuration(null);
    setIsMarried(null);
  };

  const t = {
    title: { FR: "Organigramme d'Aide aux Visas", EN: "Visa Decision Assistant Flowchart", TH: "แผนผังการเลือกประเภทวีซ่า" },
    subtitle: { FR: "Répondez aux questions pour trouver le visa approprié", EN: "Answer the questions to determine the correct visa type", TH: "ตอบคำถามสั้นๆ เพื่อวิเคราะห์ประเภทวีซ่าที่ตรงตามวัตถุประสงค์ของคุณ" },
    q1: { FR: "1. Quelle est la durée prévue du séjour ?", EN: "1. What is the planned duration of stay?", TH: "1. ระยะเวลาที่ต้องการพำนักในฝรั่งเศส?" },
    q2: { FR: "2. Êtes-vous déjà mariés civilement ?", EN: "2. Are you already legally married?", TH: "2. คุณจดทะเบียนสมรสอย่างถูกต้องตามกฎหมายแล้วหรือยัง?" },
    shortStay: { FR: "Moins de 90 jours (Visite)", EN: "Less than 90 days (Visit)", TH: "ไม่เกิน 90 วัน (ท่องเที่ยว/เยี่ยมเยียน)" },
    longStay: { FR: "Plus de 90 jours (S'installer)", EN: "More than 90 days (Relocate)", TH: "มากกว่า 90 วัน (ย้ายไปอยู่อาศัย)" },
    yes: { FR: "Oui, mariage enregistré", EN: "Yes, marriage registered", TH: "เรียบร้อยแล้ว" },
    no: { FR: "Non / Célibataire / Fiançailles", EN: "No / Single / Engaged", TH: "ยังไม่ได้จด / เป็นแฟนกัน" },
    recommendation: { FR: "Option de visa recommandée", EN: "Recommended visa option", TH: "ประเภทวีซ่าที่แนะนำสำหรับคุณ" },
    reset: { FR: "Recommencer", EN: "Restart Flowchart", TH: "วิเคราะห์ใหม่" },
    docsLabel: { FR: "Pièces justificatives majeures :", EN: "Primary documents needed:", TH: "เอกสารสำคัญที่ต้องใช้:" }
  };

  const visaResults = {
    schengen: {
      name: { FR: "Visa Court Séjour Court 'Schengen'", EN: "Schengen Short-Stay Visa", TH: "วีซ่าพำนักระยะสั้น (เชงเก้น)" },
      desc: {
        FR: "Idéal pour des vacances ou rendre visite à la famille. Ne permet pas de travailler ni de s'installer de manière stable.",
        EN: "Perfect for holidays or visiting relatives. Does not permit employment or permanent relocation.",
        TH: "เหมาะสำหรับการท่องเที่ยวหรือไปเยี่ยมเยียนญาติพี่น้อง ไม่ได้รับอนุญาตให้ทำงานหรือพำนักถาวร"
      },
      docs: {
        FR: "Attestation d'accueil (mairie), assurance Schengen (30k €), preuve de revenus du conjoint français, garanties de retour en Thaïlande.",
        EN: "Attestation d'Accueil (town hall), Schengen insurance (€30k), French partner's income proof, strong evidence of returning to Thailand.",
        TH: "ใบรับรองการให้ที่พัก (จากเทศบาล), ประกันภัยเชงเก้น (วงเงิน 30,000 ยูโร), หลักฐานรายได้ฝ่ายเชิญ, และหลักฐานผูกพันเพื่อกลับไทย"
      }
    },
    conjoint: {
      name: { FR: "Visa de Long Séjour Conjoint de Français (VLS-TS)", EN: "Long Stay French Spouse Visa (VLS-TS)", TH: "วีซ่าพำนักระยะยาวสำหรับคู่สมรสชาวฝรั่งเศส (VLS-TS)" },
      desc: {
        FR: "Droit légal gratuit pour s'installer en France. Permet de travailler immédiatement et donne accès à la sécurité sociale.",
        EN: "Free legal right to settle in France. Authorizes immediate employment and grants state healthcare access.",
        TH: "ได้รับสิทธิ์ตามกฎหมายโดยไม่มีค่าธรรมเนium เพื่อย้ายไปอยู่ฝรั่งเศส ทำงานได้ทันทีและมีสิทธิ์เข้าถึงประกันสังคม"
      },
      docs: {
        FR: "Acte de mariage transcrit par l'Ambassade de France, passeport thaïlandais, justificatifs d'identité du conjoint français.",
        EN: "Marriage certificate transcribed by the French Embassy, Thai passport, French spouse's identity papers.",
        TH: "ทะเบียนสมรสฝรั่งเศส (หลังผ่านการคัดลอก Transcription), หนังสือเดินทางของคู่สมรสไทย, และหลักฐานแสดงตัวตนของฝ่ายฝรั่งเศส"
      }
    },
    visiteur: {
      name: { FR: "Visa Long Séjour Visiteur / Long Séjour Temporaire", EN: "Long Stay Visitor Visa (VLS-TS Visiteur)", TH: "วีซ่าประเภทผู้พำนักระยะยาว/ผู้มาเยือนชั่วคราว" },
      desc: {
        FR: "Utile pour vivre ensemble en France avant le mariage (ex: PACS) mais interdit de travailler sur le sol français.",
        EN: "Useful to live together in France before marriage (e.g., PACS status) but strictly prohibits any local employment.",
        TH: "มีประโยชน์สำหรับการทดลองใช้ชีวิตร่วมกันในฝรั่งเศสก่อนแต่งงาน (เช่น การทำสัญญา PACS) แต่ห้ามทำงานในฝรั่งเศสอย่างเด็ดขาด"
      },
      docs: {
        FR: "Preuves de ressources substantielles indépendantes (épargne), attestation de non-activité professionnelle en France, assurance santé d'un an.",
        EN: "Proof of substantial independent financial resources, written oath not to work in France, one-year comprehensive health insurance.",
        TH: "หลักฐานทางการเงินส่วนตัวที่เพียงพอและมั่นคง, หนังสือยินยอมไม่ทำงานในฝรั่งเศส, ประกันสุขภาพครอบคลุมระยะเวลา 1 ปี"
      }
    }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs min-h-[220px] flex flex-col justify-between">
        {duration === null ? (
          <div>
            <h5 className="font-bold text-slate-800 text-sm mb-3">{t.q1[lang]}</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                id="dur-short"
                onClick={() => setDuration('short')}
                className="p-4 rounded-lg border border-slate-200 text-left text-xs font-semibold hover:border-[#e2b07e] hover:bg-[#e2b07e]/5 transition-all flex items-center justify-between"
              >
                <span>{t.shortStay[lang]}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button 
                id="dur-long"
                onClick={() => setDuration('long')}
                className="p-4 rounded-lg border border-slate-200 text-left text-xs font-semibold hover:border-[#e2b07e] hover:bg-[#e2b07e]/5 transition-all flex items-center justify-between"
              >
                <span>{t.longStay[lang]}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        ) : duration === 'short' ? (
          /* Schengen Result immediately */
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-extrabold text-[#c68f54] uppercase tracking-wider">{t.recommendation[lang]}</span>
              <button id="flow-reset-short" onClick={handleReset} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5" /> {t.reset[lang]}
              </button>
            </div>
            <h5 className="text-base font-serif font-bold text-slate-800">{visaResults.schengen.name[lang]}</h5>
            <p className="text-xs text-slate-600 leading-relaxed">{visaResults.schengen.desc[lang]}</p>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">{t.docsLabel[lang]}</div>
              <p className="text-xs text-slate-700 leading-normal">{visaResults.schengen.docs[lang]}</p>
            </div>
          </div>
        ) : isMarried === null ? (
          <div>
            <h5 className="font-bold text-slate-800 text-sm mb-3">{t.q2[lang]}</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                id="married-yes"
                onClick={() => setIsMarried('yes')}
                className="p-4 rounded-lg border border-slate-200 text-left text-xs font-semibold hover:border-[#e2b07e] hover:bg-[#e2b07e]/5 transition-all flex items-center justify-between"
              >
                <span>{t.yes[lang]}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button 
                id="married-no"
                onClick={() => setIsMarried('no')}
                className="p-4 rounded-lg border border-slate-200 text-left text-xs font-semibold hover:border-[#e2b07e] hover:bg-[#e2b07e]/5 transition-all flex items-center justify-between"
              >
                <span>{t.no[lang]}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        ) : (
          /* Long stay results based on marriage */
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-extrabold text-[#c68f54] uppercase tracking-wider">{t.recommendation[lang]}</span>
              <button id="flow-reset-long" onClick={handleReset} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5" /> {t.reset[lang]}
              </button>
            </div>
            {isMarried === 'yes' ? (
              <>
                <h5 className="text-base font-serif font-bold text-slate-800">{visaResults.conjoint.name[lang]}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{visaResults.conjoint.desc[lang]}</p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">{t.docsLabel[lang]}</div>
                  <p className="text-xs text-slate-700 leading-normal">{visaResults.conjoint.docs[lang]}</p>
                </div>
              </>
            ) : (
              <>
                <h5 className="text-base font-serif font-bold text-slate-800">{visaResults.visiteur.name[lang]}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{visaResults.visiteur.desc[lang]}</p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">{t.docsLabel[lang]}</div>
                  <p className="text-xs text-slate-700 leading-normal">{visaResults.visiteur.docs[lang]}</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 6: Répartiteur budgétaire
   ============================================================================ */
function BudgetSplitter({ lang }: { lang: Language }) {
  const [totalIncome, setTotalIncome] = useState(2500);
  const [supportAmount, setSupportAmount] = useState(300);

  // Math variables
  const fixedCharges = Math.round(totalIncome * 0.45); // e.g. rent/bills at 45%
  const lifeCharges = Math.round(totalIncome * 0.35); // daily life at 35%
  const currentSavings = Math.max(0, totalIncome - fixedCharges - lifeCharges - supportAmount);

  const supportPct = Math.round((supportAmount / totalIncome) * 100);

  const t = {
    title: { FR: "Calculateur Budgétaire Équilibré", EN: "Balanced Budget Splitter", TH: "เครื่องคำนวณการจัดสรรงบประมาณครอบครัว" },
    subtitle: { FR: "Ajustez le soutien financier pour préserver l'équilibre de votre foyer en France", EN: "Adjust the financial support to secure your household balance in France", TH: "ปรับอัตราการส่งเงินให้ครอบครัวเพื่อสร้างความสมดุลด้านการเงินในฝรั่งเศส" },
    incomeLabel: { FR: "Revenus cumulés du couple en France :", EN: "Couple's combined income in France:", TH: "รายได้รวมของชีวิตคู่ในฝรั่งเศส:" },
    supportLabel: { FR: "Soutien financier mensuel (Thaïlande) :", EN: "Monthly family support (Thailand):", TH: "จำนวนเงินที่สนับสนุนทางครอบครัวในไทยรายเดือน:" },
    pieFixed: { FR: "Loyer & Charges Fixes (45%)", EN: "Rent & Fixed Bills (45%)", TH: "ค่าเช่าบ้านและค่าใช้จ่ายประจำ (45%)" },
    pieLife: { FR: "Vie Quotidienne & Loisirs (35%)", EN: "Daily Life & Groceries (35%)", TH: "อาหารและค่าครองชีพประจำวัน (35%)" },
    pieSupport: { FR: "Soutien Familial", EN: "Family Support", TH: "ส่งเสียครอบครัวฝ่ายไทย" },
    pieSavings: { FR: "Épargne Rémanente", EN: "Remaining Savings", TH: "เงินเก็บออมคงเหลือ" },
    warningTitle: { FR: "Soutien Élevé (Fardeau possible)", EN: "High Support (Potential strain)", TH: "สัดส่วนเงินส่งเสียอยู่ในระดับสูง (อาจตึงมือ)" },
    warningDesc: {
      FR: "L'envoi représente plus de 10% de vos revenus cumulés. Veillez à ce que cela soit pleinement consenti et ne sacrifie pas votre épargne de sécurité.",
      EN: "This transfer represents over 10% of your joint income. Ensure this is fully consensual and does not wipe out your emergency savings.",
      TH: "เงินส่วนนี้มีสัดส่วนเกินกว่า 10% ของรายได้รวม ควรตกลงร่วมกันอย่างชัดเจนและระวังไม่ให้กระทบเงินออมยามฉุกเฉิน"
    },
    safeTitle: { FR: "Soutien Équilibré", EN: "Balanced Support Level", TH: "สัดส่วนเงินส่งเสียสมดุลดี" },
    safeDesc: {
      FR: "Ce soutien financier reste inférieur ou égal à 10%. Il préserve vos capacités d'épargne en France tout en assumant votre devoir filial.",
      EN: "This support remains under or at 10%. It protects your saving capacity in France while honoring your filial duty.",
      TH: "สัดส่วนเงินต่ำกว่าร้อยละ 10 ซึ่งช่วยคุ้มครองเงินออมในฝรั่งเศส ขณะเดียวกันก็ยังเกื้อหนุนพ่อแม่ได้อย่างสม่ำเสมอ"
    }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders Input */}
        <div className="lg:col-span-5 space-y-5 bg-white p-4 rounded-xl border border-slate-200">
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
              <span>{t.incomeLabel[lang]}</span>
              <span className="text-[#c68f54]">{totalIncome} €</span>
            </div>
            <input 
              type="range" 
              id="income-range"
              min="1500" 
              max="6000" 
              step="100"
              value={totalIncome}
              onChange={(e) => {
                const val = Number(e.target.value);
                setTotalIncome(val);
                if (supportAmount > val * 0.4) {
                  setSupportAmount(Math.round(val * 0.1));
                }
              }}
              className="w-full accent-[#c68f54]" 
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
              <span>{t.supportLabel[lang]}</span>
              <span className="text-[#c68f54]">{supportAmount} € ({supportPct}%)</span>
            </div>
            <input 
              type="range" 
              id="support-range"
              min="50" 
              max="800" 
              step="25"
              value={supportAmount}
              onChange={(e) => setSupportAmount(Number(e.target.value))}
              className="w-full accent-[#c68f54]" 
            />
            <div className="text-[10px] text-slate-400 text-right mt-1">
              ≈ {(supportAmount * 38).toLocaleString()} THB
            </div>
          </div>
        </div>

        {/* Charts and Alerts output */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Visual Bar stack */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{t.pieFixed[lang]}</span>
                  <span className="font-semibold text-slate-700">{fixedCharges} €</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-slate-400 h-full" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{t.pieLife[lang]}</span>
                  <span className="font-semibold text-slate-700">{lifeCharges} €</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-400 h-full" style={{ width: '35%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{t.pieSupport[lang]}</span>
                  <span className="font-bold text-amber-600">{supportAmount} €</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: `${supportPct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{t.pieSavings[lang]}</span>
                  <span className={`font-bold ${currentSavings > 100 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {currentSavings} €
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className={`h-full ${currentSavings > 100 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ width: `${Math.max(0, (currentSavings / totalIncome) * 100)}%` }} />
                </div>
              </div>
            </div>

            {/* Assessment feedback based on budget percentages */}
            <div className="h-full flex items-center">
              {supportPct > 10 ? (
                <div className="bg-amber-50/70 border border-amber-200/60 p-4 rounded-xl flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    {t.warningTitle[lang]}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">{t.warningDesc[lang]}</p>
                </div>
              ) : (
                <div className="bg-emerald-50/70 border border-emerald-200/60 p-4 rounded-xl flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    {t.safeTitle[lang]}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">{t.safeDesc[lang]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 7: Courbe en U du choc culturel
   ============================================================================ */
function CultureShockCurve({ lang }: { lang: Language }) {
  const [activeCurvePoint, setActiveCurvePoint] = useState(0);

  const points = [
    {
      title: { FR: "Phase 1 : La Lune de Miel", EN: "Phase 1: The Honeymoon", TH: "ระยะที่ 1 : ฮันนีมูนแสนหวาน" },
      emotion: "+100% (Euphorie)",
      desc: {
        FR: "Découverte joyeuse de la France, sentiment d'aventure, tout est beau, la gastronomie est originale.",
        EN: "Joyful discovery of France, feeling of adventure, everything is beautiful, the local food feels unique.",
        TH: "ความตื่นเต้นและเพลิดเพลินกับการผจญภัยในฝรั่งเศส ทุกอย่างดูสวยงาม แปลกใหม่ และน่าตื่นตาตื่นใจ"
      },
      advices: {
        FR: "Profitez-en pour vous inscrire immédiatement à des cours intensifs de français avant que la fatigue ne s'installe.",
        EN: "Take advantage of this energy to register immediately in intensive French classes before fatigue sets in.",
        TH: "ใช้พลังในช่วงนี้สมัครเรียนภาษาฝรั่งเศสทันทีเพื่อสร้างพื้นฐานก่อนที่จะเริ่มเหนื่อยล้า"
      },
      morale: "high"
    },
    {
      title: { FR: "Phase 2 : La Crise (Choc)", EN: "Phase 2: The Crisis (Shock)", TH: "ระยะที่ 2 : วิกฤตช็อกทางวัฒนธรรม" },
      emotion: "-80% (Dépression)",
      desc: {
        FR: "Frustration intense face à la langue, sentiment de solitude, manque cruel de la famille, météo grise et froide.",
        EN: "Intense frustration regarding the language barrier, deep isolation, missing relatives, cold and grey weather.",
        TH: "ความอึดอัดกับภาษาที่สื่อสารไม่ได้ ความเหงาจับใจ คิดถึงครอบครัวและอาหารไทย คลุกเคล้ากับอากาศหนาวเย็น"
      },
      advices: {
        FR: "Ne restez pas seul à la maison. Cuisinez thaïlandais, connectez-vous avec des amies thaïes locales, sortez marcher.",
        EN: "Do not stay isolated at home. Cook Thai dishes, connect with local Thai peers, and go out for walks.",
        TH: "อย่าอุดอู้อยู่คนเดียวในบ้าน ทำอาหารไทยที่ชอบ ติดต่อกลุ่มสมาคมคนไทย และหมั่นออกไปเดินเล่นสูดอากาศ"
      },
      morale: "low"
    },
    {
      title: { FR: "Phase 3 : L'Ajustement", EN: "Phase 3: The Adjustment", TH: "ระยะที่ 3 : การปรับตัวเข้าหา" },
      emotion: "+20% (Stabilité)",
      desc: {
        FR: "On commence à s'exprimer un peu en français, obtention du permis, décodage des habitudes locales.",
        EN: "Starting to speak some basic French, getting the driving license, understanding local social codes.",
        TH: "เริ่มสื่อสารภาษาฝรั่งเศสในชีวิตประจำวันได้บ้าง มีใบอนุญาตขับขี่ เข้าใจวิถีชีวิตคนท้องถิ่นมากขึ้น"
      },
      advices: {
        FR: "Recherchez un emploi de proximité ou intégrez des activités bénévoles pour pratiquer activement la langue.",
        EN: "Seek a local job or join volunteering activities to actively practice and master the language.",
        TH: "มองหางานพาร์ทไทม์ใกล้บ้านหรือร่วมกิจกรรมอาสาสมัครเพื่อฝึกทักษะภาษาในสถานการณ์จริง"
      },
      morale: "medium"
    },
    {
      title: { FR: "Phase 4 : L'Intégration", EN: "Phase 4: The Integration", TH: "ระยะที่ 4 : การผสมผสานกลมกลืน" },
      emotion: "+80% (Épanouissement)",
      desc: {
        FR: "Sentiment de sécurité et d'appartenance, biculturalisme assumé avec fierté, autonomie complète.",
        EN: "Feeling of safety and belonging, proud of a bicultural life, complete autonomy.",
        TH: "รู้สึกปลอดภัยและอบอุ่นใจ มีความภูมิใจในความเป็นครอบครัวสองวัฒนธรรมและมีอิสระในการใช้ชีวิตเต็มเปี่ยม"
      },
      advices: {
        FR: "Vous êtes chez vous. Transmettez votre double culture aux enfants et continuez d'honorer vos racines.",
        EN: "You are home. Pass your rich dual-culture to your children and continue to honor your roots.",
        TH: "ฝรั่งเศสกลายเป็นบ้านอีกหลังของคุณแล้ว ส่งทอดวัฒนธรรมที่งดงามให้ลูกหลานและไม่ลืมรากเหง้าของตนเอง"
      },
      morale: "high"
    }
  ];

  const t = {
    title: { FR: "La Courbe du Choc Culturel en U", EN: "The Culture Shock U-Curve", TH: "กราฟการปรับตัวทางวัฒนธรรมรูปตัว U" },
    subtitle: { FR: "Cliquez sur chaque étape pour découvrir le parcours psychologique et les conseils", EN: "Click on each stage to explore the psychological phases and helpful actions", TH: "คลิกเลือกแต่ละระยะเพื่อทำความเข้าใจการแปรปรวนของสภาวะจิตใจและคำแนะนำปฏิบัติ" },
    tips: { FR: "Conseils de survie :", EN: "Survival Advice:", TH: "คำแนะนำเพื่อการปรับตัว:" },
    emotionalState: { FR: "Moral estimé :", EN: "Estimated Morale:", TH: "สภาวะจิตใจโดยประมาณ:" }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      {/* Visually representation of U-Curve in HTML/CSS */}
      <div className="relative bg-white border border-slate-200 rounded-xl p-6 mb-6">
        <div className="h-28 flex items-end justify-between relative px-4">
          {/* Sinuous SVG Curve in background */}
          <svg className="absolute top-0 left-0 w-full h-full text-slate-100 pointer-events-none" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M 0 15 Q 100 95, 200 80 T 400 30" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>

          {points.map((pt, idx) => (
            <button
              key={idx}
              id={`curve-btn-${idx}`}
              onClick={() => setActiveCurvePoint(idx)}
              className={`relative z-10 flex flex-col items-center group transition-all`}
              style={{
                transform: idx === 0 ? 'translateY(-50%)' :
                           idx === 1 ? 'translateY(10%)' :
                           idx === 2 ? 'translateY(-15%)' : 'translateY(-40%)'
              }}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-all ${
                activeCurvePoint === idx 
                  ? 'bg-[#c68f54] text-white ring-4 ring-[#e2b07e]/30 scale-110' 
                  : 'bg-white text-[#c68f54] border-2 border-[#e2b07e]/50 hover:border-[#c68f54]'
              }`}>
                {idx + 1}
              </span>
              <span className="text-[10px] font-semibold text-slate-500 mt-1 uppercase tracking-tight hidden sm:block">
                {idx === 0 ? "Miel" : idx === 1 ? "Choc" : idx === 2 ? "Ajustement" : "Intégration"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Details Display */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-3">
          <h5 className="font-bold text-slate-800 text-sm">
            {points[activeCurvePoint].title[lang]}
          </h5>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
            points[activeCurvePoint].morale === 'high' ? 'bg-emerald-50 text-emerald-700' :
            points[activeCurvePoint].morale === 'medium' ? 'bg-blue-50 text-blue-700' :
            'bg-rose-50 text-rose-700 animate-pulse'
          }`}>
            {t.emotionalState[lang]} {points[activeCurvePoint].emotion}
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {points[activeCurvePoint].desc[lang]}
        </p>

        <div className="bg-[#fdfbf7] p-3 rounded-lg border border-[#e2b07e]/20 flex gap-2 items-start">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-0.5">{t.tips[lang]}</div>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">{points[activeCurvePoint].advices[lang]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 8: Options immobilières
   ============================================================================ */
function PropertySelector({ lang }: { lang: Language }) {
  const [activeOpt, setActiveOpt] = useState(0);

  const options = [
    {
      title: { FR: "1. Achat d'un Condominium", EN: "1. Buying a Condominium", TH: "1. การซื้ออาคารชุด (คอนโดมิเนียม)" },
      security: { FR: "Excellente (100% à votre nom)", EN: "Excellent (100% in your name)", TH: "ดีเยี่ยม (ถือครองชื่อต่างชาติได้ 100%)" },
      complex: { FR: "Faible", EN: "Low", TH: "ต่ำ" },
      desc: {
        FR: "La loi thaïlandaise permet à un étranger d'être propriétaire à part entière d'un appartement si au moins 51% de la surface de l'immeuble appartient à des Thaïlandais.",
        EN: "Thai law permits foreigners to have absolute legal ownership of a condo if at least 51% of the building's total area is owned by Thais.",
        TH: "กฎหมายไทยเปิดช่องให้ต่างชาติถือกรรมสิทธิ์ห้องชุดได้โดยสมบูรณ์ มีเงื่อนไขว่าโควตาเจ้าของชาวไทยในตึกนั้นต้องรวมกันไม่น้อยกว่า 51%"
      },
      rating: 90
    },
    {
      title: { FR: "2. Contrat d'Usufruit à vie", EN: "2. Lifelong Usufruct Contract", TH: "2. การจดทะเบียนสิทธิเก็บกินตลอดชีวิต" },
      security: { FR: "Élevée (Sécurisé pour l'étranger)", EN: "High (Highly secure for foreigner)", TH: "สูงมาก (คุ้มครองต่างชาติได้มั่นคง)" },
      complex: { FR: "Moyenne (Validation Land Office)", EN: "Medium (Requires Land Office approval)", TH: "ปานกลาง (ต้องผ่านความเห็นชอบของสำนักงานที่ดิน)" },
      desc: {
        FR: "Garantit à l'étranger le droit d'occuper et gérer le bien à vie, même si le conjoint décède ou en cas de divorce. Doit être inscrit sur le titre Chanote.",
        EN: "Guarantees the foreigner the right to live in and manage the property for life, regardless of divorce or spouse's death. Must be recorded on the Chanote.",
        TH: "การจดทะเบียนสิทธิ์ไว้หลังโฉนด มอบอำนาจในการครอบครองและใช้ประโยชน์ในที่ดินตลอดชีวิต แม้หย่าร้างหรือคู่สมรสเสียชีวิตก็ไม่สูญสิ้นสิทธิ์"
      },
      rating: 80
    },
    {
      title: { FR: "3. Bail à long terme de 30 ans", EN: "3. 30-Year Lease agreement", TH: "3. สัญญาเช่าระยะยาว 30 ปี" },
      security: { FR: "Moyenne (Renouvellement incertain)", EN: "Medium (Renewal uncertainty)", TH: "ปานกลาง (มีความเสี่ยงเรื่องสิทธิ์การต่อสัญญา)" },
      complex: { FR: "Faible", EN: "Low", TH: "ต่ำ" },
      desc: {
        FR: "Le bail de 30 ans est enregistré officiellement. Bien que légal, les clauses de renouvellement automatique à 60 ou 90 ans restent fragiles devant les tribunaux.",
        EN: "A 30-year lease is officially registered. Although legal, clauses promising automatic renewals up to 60 or 90 years remain legally fragile in courts.",
        TH: "สัญญาเช่าที่จดทะเบียนอย่างเป็นทางการสูงสุด 30 ปี แม้ว่าสัญญานี้จะชอบด้วยกฎหมาย แต่เงื่อนไขในการขอต่ออายุหลัง 30 ปีอาจยังมีข้อจำกัดในศาล"
      },
      rating: 60
    },
    {
      title: { FR: "4. Achat au nom seul du conjoint", EN: "4. Purchase in Spouse's name only", TH: "4. การซื้อในนามคู่สมรสชาวไทยเพียงผู้เดียว" },
      security: { FR: "Nulle pour l'étranger", EN: "None for the foreigner", TH: "ไม่มีความปลอดภัยสำหรับชาวต่างชาติเลย" },
      complex: { FR: "Aucune", EN: "None", TH: "ไม่มีเลย" },
      desc: {
        FR: "Le conjoint français doit signer un document au bureau des terres stipulant que les fonds sont un cadeau et qu'il n'a aucun droit sur le terrain.",
        EN: "The French spouse must sign a declaration at the Land Office stating that the funds are a personal gift and they hold zero claims on the land.",
        TH: "คู่สมรสต่างชาติต้องลงนามรับรองในเอกสารของสำนักงานที่ดินว่า เงินที่นำมาซื้อนั้นเป็นสินส่วนตัวของฝ่ายไทย และตนเองไม่มีสิทธิ์ในที่ดินผืนนี้"
      },
      rating: 20
    }
  ];

  const t = {
    title: { FR: "Matrice Immobilière Sécurisée", EN: "Secure Real Estate Matrix", TH: "ตารางวิเคราะห์ความปลอดภัยด้านอสังหาริมทรัพย์" },
    subtitle: { FR: "Sélectionnez une option pour évaluer la sécurité de l'investisseur étranger", EN: "Select an option to assess the security for foreign investors", TH: "คลิกที่แต่ละหัวข้อเพื่อประเมินระดับสิทธิ์และความปลอดภัยของผู้ลงทุนต่างชาติ" },
    secLevel: { FR: "Indice de sécurité :", EN: "Security Index:", TH: "ระดับความปลอดภัยในการลงทุน:" },
    compLevel: { FR: "Complexité administrative :", EN: "Administrative complexity:", TH: "ความซับซ้อนในเชิงระบบเอกสาร:" }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Option cards */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {options.map((opt, idx) => (
            <button
              key={idx}
              id={`prop-btn-${idx}`}
              onClick={() => setActiveOpt(idx)}
              className={`text-left p-3 rounded-lg border transition-all ${
                activeOpt === idx 
                  ? 'bg-[#e2b07e]/15 border-[#e2b07e] text-slate-800 font-semibold shadow-xs' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className="text-xs">{opt.title[lang]}</div>
            </button>
          ))}
        </div>

        {/* Evaluation details */}
        <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <h5 className="font-serif text-base font-bold text-slate-800 mb-3">
              {options[activeOpt].title[lang]}
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {options[activeOpt].desc[lang]}
            </p>
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-3">
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-1">
                <span className="text-slate-500">{t.secLevel[lang]}</span>
                <span className={`font-bold ${options[activeOpt].rating > 70 ? 'text-emerald-600' : options[activeOpt].rating > 40 ? 'text-amber-500' : 'text-red-500'}`}>
                  {options[activeOpt].security[lang]}
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    options[activeOpt].rating > 70 ? 'bg-emerald-500' : options[activeOpt].rating > 40 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${options[activeOpt].rating}%` }} 
                />
              </div>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-slate-500 font-medium">{t.compLevel[lang]}</span>
              <span className="font-semibold text-slate-700">{options[activeOpt].complex[lang]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 9: Matrice des régimes légaux
   ============================================================================ */
function MatrimonialMatrix({ lang }: { lang: Language }) {
  const [selectedAsset, setSelectedAsset] = useState<number>(0);

  const assets = [
    {
      name: { FR: "Héritage reçu par l'un avant mariage", EN: "Inheritance received before marriage", TH: "มรดกที่ได้รับมาก่อนการแต่งงาน" },
      frenchRegime: {
        FR: "Reste un bien propre individuel (séparé à 100%).",
        EN: "Remains individual personal property (100% separate).",
        TH: "คงเหลือเป็นทรัพย์สินส่วนตัวของฝ่ายนั้นโดยสมบูรณ์"
      },
      thaiRegime: {
        FR: "Considéré comme 'Sin Suan Tua' (bien propre). Exclu du partage lors d'un divorce.",
        EN: "Considered 'Sin Suan Tua' (personal property). Excluded from partition during divorce.",
        TH: "ถือเป็น 'สินส่วนตัว' ไม่ถูกนำมาร่วมคำนวณหรือแบ่งเมื่อมีการหย่า"
      }
    },
    {
      name: { FR: "Maison bâtie sur terrain du conjoint", EN: "House built on spouse's land", TH: "บ้านสร้างขึ้นใหม่บนที่ดินชื่อคู่สมรสไทย" },
      frenchRegime: {
        FR: "Si aucun contrat, la maison suit le sol ou se partage à 50% selon l'origine vérifiable des fonds.",
        EN: "Without a contract, the house may follow the land or be split 50/50 based on verified funding.",
        TH: "หากไม่มีการระบุจะอิงตามหลักส่วนควบ หรือแบ่งตามสัดส่วนเงินทุนที่มีหลักฐานชัดเจน"
      },
      thaiRegime: {
        FR: "Le terrain appartient au conjoint thaï. Sans usufruit ni contrat de mariage enregistré, l'étranger risque d'être expulsé sans indemnité.",
        EN: "The land belongs exclusively to the Thai spouse. Without a registered usufruct, the foreigner faces eviction with no return.",
        TH: "ที่ดินผืนนั้นจะตกเป็นของฝ่ายไทยโดยสมบูรณ์ หากไม่มีสิทธิเก็บกินหรือสัญญาก่อนสมรส ต่างชาติเสี่ยงโดนให้ออกโดยไม่ได้รับค่าชดเชย"
      }
    },
    {
      name: { FR: "Épargne cumulée pendant le mariage", EN: "Savings built during the marriage", TH: "เงินเก็บออมที่สะสมพูนขึ้นระหว่างแต่งงาน" },
      frenchRegime: {
        FR: "Considéré comme bien commun acquis durant l'union (partagé à 50/50 en cas de divorce).",
        EN: "Considered community asset acquired during marriage (split 50/50 during divorce).",
        TH: "ถือเป็นสินสมรสของทั้งสองฝ่าย ซึ่งจะต้องแบ่งเท่ากันคนละครึ่ง 50/50 ในกรณีที่หย่าร้าง"
      },
      thaiRegime: {
        FR: "Considéré comme 'Sin Somros'. Se partage obligatoirement à parts égales (50/50).",
        EN: "Considered 'Sin Somros' (joint marital property). Legally split 50/50 between spouses.",
        TH: "ถือเป็น 'สินสมรส' และต้องถูกแบ่งครึ่งคนละครึ่ง 50/50 ตามประมวลกฎหมายแพ่งอย่างเท่าเทียม"
      }
    }
  ];

  const t = {
    title: { FR: "Matrice de Répartition Légale des Biens", EN: "Matrimonial Asset Allocation Matrix", TH: "ตารางเปรียบเทียบการจัดสรรทรัพย์สินตามกฎหมาย" },
    subtitle: { FR: "Sélectionnez un type d'actif pour simuler l'impact juridique lors d'un divorce", EN: "Select an asset type to simulate the legal impact during a divorce", TH: "เลือกประเภทสินทรัพย์เพื่อประเมitผลกระทบทางกฎหมายในกรณีที่ชีวิตคู่สิ้นสุดลง" },
    regimeFr: { FR: "Régime Légal Français", EN: "French Legal Regime", TH: "ตามประมวลกฎหมายแพ่งฝรั่งเศส" },
    regimeTh: { FR: "Régime Légal Thaïlandais", EN: "Thai Legal Regime", TH: "ตามประมวลกฎหมายแพ่งและพาณิชย์ไทย" }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Scale className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      {/* Asset selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
        {assets.map((asset, idx) => (
          <button
            key={idx}
            id={`asset-btn-${idx}`}
            onClick={() => setSelectedAsset(idx)}
            className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
              selectedAsset === idx 
                ? 'bg-[#c68f54] text-white border-[#c68f54] shadow-sm' 
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            {asset.name[lang]}
          </button>
        ))}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 border-b border-slate-50 pb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            {t.regimeFr[lang]}
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {assets[selectedAsset].frenchRegime[lang]}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#e2b07e]/30 shadow-xs">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2 border-b border-slate-50 pb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            {t.regimeTh[lang]}
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {assets[selectedAsset].thaiRegime[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 10: L'arbre de l'harmonie
   ============================================================================ */
function HarmonyTree({ lang }: { lang: Language }) {
  const [activeLeaf, setActiveLeaf] = useState(0);

  const leaves = [
    {
      title: { FR: "1. L'Écoute Active", EN: "1. Active Listening", TH: "1. การรับฟังอย่างเข้าอกเข้าใจ" },
      wisdom: {
        FR: "Comprendre que le silence de votre partenaire thaïlandais cache souvent du respect ou de l'embarras ('Kreng Jai'). Apprenez à lire les signaux non-verbaux.",
        EN: "Understand that your Thai partner's silence often hides respect or politeness ('Kreng Jai'). Train yourself to decode non-verbal hints.",
        TH: "ทำความเข้าใจว่าความเงียบของคนไทยมักแฝงไปด้วยความเกรงใจหรือหลีกเลี่ยงการโต้เถียง ควรฝึกมองสัญญาณทางกายและนัยน์ตา"
      }
    },
    {
      title: { FR: "2. Le Compromis Budgétaire", EN: "2. Financial Compromise", TH: "2. การตกลงร่วมกันเรื่องเงินทอง" },
      wisdom: {
        FR: "Soutenir les beaux-parents thaïlandais de manière digne et régulière en accordant ce geste au budget et capacités réelles de votre ménage en France.",
        EN: "Support Thai parents-in-law in a dignified and regular manner, matching this support to your household budget in France.",
        TH: "การส่งเสียดูแลพ่อแม่ฝ่ายไทยอย่างสม่ำเสมอด้วยความเคารพ โดยคำนวณให้อยู่ในขอบเขตกิริยาความสามารถของครอบครัวในฝรั่งเศส"
      }
    },
    {
      title: { FR: "3. La Biculturalité Festive", EN: "3. Festive Biculturalism", TH: "3. การฉลองร่วมสองวัฒนธรรม" },
      wisdom: {
        FR: "Introduire de la joie en fêtant ensemble Noël et le Nouvel An d'un côté, et le Songkran ainsi que Loy Krathong de l'autre.",
        EN: "Bring joy into your home by celebrating Christmas and Western New Year alongside Songkran and Loy Krathong.",
        TH: "การสืบสานความสุขภายในบ้านด้วยการฉลองคริสต์มาสและปีใหม่สากล เคียงคู่ไปกับวันลอยกระทงและสงกรานต์อันแสนอบอุ่น"
      }
    },
    {
      title: { FR: "4. Le Bilinguisme OPOL", EN: "4. OPOL Bilingualism", TH: "4. การสอนลูกสองภาษา (OPOL)" },
      wisdom: {
        FR: "Si vous avez des enfants, parlez chacun exclusivement votre langue maternelle. Le français pour l'école, le thaï pour garder le lien familial profond.",
        EN: "If you have children, speak each parent's native language. French for school, Thai to keep a strong connection with the maternal side.",
        TH: "หากมีบุตร พ่อควรพูดภาษาฝรั่งเศส แม่พูดภาษาไทยอย่างสม่ำเสมอ เพื่อให้ลูกเติบโตขึ้นมารู้ทั้งสองภาษาอย่างเป็นธรรมชาติ"
      }
    },
    {
      title: { FR: "5. La Gestion du Conflit 'Jai Yen'", EN: "5. 'Jai Yen' Conflict Care", TH: "5. การดับร้อนด้วย 'ใจเย็น'" },
      wisdom: {
        FR: "Ne jamais hausser le ton ni s'énerver en public. Résolvez les litiges calmement à la maison, guidé par le respect de la face de chacun.",
        EN: "Never raise your voice or show anger in public. Resolve disagreements peacefully at home, protecting each other's social face.",
        TH: "ไม่ขึ้นเสียงหรือใส่อารมณ์ใส่กันในที่สาธารณะอย่างเด็ดขาด ให้พูดคุยเปิดอกด้วยเหตุผลอย่างใจเย็นภายในบ้านเพื่อรักษาหน้าของกันและกัน"
      }
    }
  ];

  const t = {
    title: { FR: "L'Arbre de l'Harmonie Franco-Thaï", EN: "The Franco-Thai Harmony Tree", TH: "ต้นไม้แห่งความกลมเกลียวไทย-ฝรั่งเศส" },
    subtitle: { FR: "Cliquez sur une branche pour révéler une règle d'or d'intégration réussie", EN: "Click on any branch to reveal a golden rule of successful integration", TH: "คลิกที่กิ่งก้านใบไม้เพื่อเปิดรับกุญแจสำคัญสู่ความสำเร็จของชีวิตคู่" }
  };

  return (
    <div className="bg-[#fdfbf7] p-4 md:p-6 rounded-xl border border-[#e2b07e]/30 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-[#c68f54] w-5 h-5" />
        <h4 className="font-serif text-lg font-bold text-slate-800">{t.title[lang]}</h4>
      </div>
      <p className="text-sm text-slate-500 mb-6">{t.subtitle[lang]}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Styled leaf branches list */}
        <div className="flex flex-col gap-2">
          {leaves.map((leaf, idx) => (
            <button
              key={idx}
              id={`leaf-btn-${idx}`}
              onClick={() => setActiveLeaf(idx)}
              className={`text-left p-3.5 rounded-lg border flex items-center gap-3 transition-all ${
                activeLeaf === idx 
                  ? 'bg-amber-500/10 border-amber-500 text-slate-800 font-bold shadow-xs' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                activeLeaf === idx ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm">{leaf.title[lang]}</span>
            </button>
          ))}
        </div>

        {/* Display wisdom */}
        <div className="bg-white p-5 rounded-xl border border-[#e2b07e]/30 shadow-xs flex flex-col justify-center">
          <div className="text-center max-w-sm mx-auto">
            <Heart className="w-10 h-10 text-[#c68f54] mx-auto mb-3 animate-pulse" />
            <h5 className="font-serif font-bold text-[#c68f54] text-base mb-2">
              {leaves[activeLeaf].title[lang]}
            </h5>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic">
              "{leaves[activeLeaf].wisdom[lang]}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
