import { useState, FormEvent } from 'react';
import { Lock, Check, Award, Heart, Sparkles, ShieldCheck, BookOpen, Coffee, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface SalesLandingPageProps {
  lang: Language;
  onUnlock: (password: string) => boolean;
}

export default function SalesLandingPage({ lang, onUnlock }: SalesLandingPageProps) {
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const t = {
    badge: {
      FR: "Programme d'Accompagnement Premium",
      EN: "Premium Relationship Coaching Program",
      TH: "หลักสูตรเตรียมความพร้อมชีวิตคู่พรีเมียม"
    },
    title: {
      FR: "Symphonie Biculturelle : De l'Amour à l'Harmonie Durable",
      EN: "Bicultural Symphony: From Love to Lifelong Harmony",
      TH: "ซิมโฟนีสองวัฒนธรรม: จากความรักสู่ชีวิตคู่ที่ยั่งยืน"
    },
    subtitle: {
      FR: "Débloquez l'intégralité de l'Académie (20 Modules) pour surmonter tous les défis et sécuriser votre avenir franco-thaï.",
      EN: "Unlock the complete Academy (20 Modules) to overcome all cultural challenges and secure your Franco-Thai future.",
      TH: "ปลดล็อกหลักสูตรฉบับสมบูรณ์ (20 บทเรียน) เพื่อข้ามผ่านทุกอุปสรรคและสร้างอนาคตไทย-ฝรั่งเศสที่มั่นคง"
    },
    valueTitle: {
      FR: "Ce que vous allez débloquer aujourd'hui",
      EN: "What you will unlock today",
      TH: "สิ่งที่คุณจะได้รับสิทธิ์เข้าเรียนในวันนี้"
    },
    modulesTitle: {
      FR: "Les 17 modules exclusifs restants",
      EN: "The remaining 17 exclusive modules",
      TH: "17 บทเรียนสุดพิเศษที่รอคุณอยู่"
    },
    supportTitle: {
      FR: "Pourquoi investir dans votre couple ?",
      EN: "Why invest in your relationship?",
      TH: "ทำไมการลงทุนในความเข้าใจชีวิตคู่จึงสำคัญที่สุด?"
    },
    supportDesc: {
      FR: "Le taux d'échec des couples biculturels sans accompagnement est estimé à plus de 65%. Cette académie est le fruit d'années d'études sociologiques et de témoignages réels pour vous éviter les erreurs fatales.",
      EN: "The failure rate of bicultural couples without guidance is estimated at over 65%. This academy is built on years of sociological research and real experiences to save you from painful mistakes.",
      TH: "อัตราความล้มเหลวของชีวิตคู่สองวัฒนธรรมที่ขาดการปรับตัวสูงถึงกว่า 65% หลักสูตรนี้สรุปจากผลการวิจัยทางสังคมวิทยาและประสบการณ์จริงเพื่อปกป้องความสัมพันธ์ของคุณ"
    },
    pricingTitle: {
      FR: "Accès Total à Vie",
      EN: "Lifetime Full Access",
      TH: "สิทธิ์การเข้าถึงตลอดชีพ"
    },
    pricingSubtitle: {
      FR: "Une contribution unique et symbolique",
      EN: "A unique and symbolic contribution",
      TH: "การสนับสนุนเพียงครั้งเดียวในราคามิตรภาพ"
    },
    price: {
      FR: "Équivalent de 10 €",
      EN: "Equivalent of 10 €",
      TH: "เทียบเท่าประมาณ 10 ยูโร (380 บาท)"
    },
    howToTitle: {
      FR: "Comment obtenir votre accès ?",
      EN: "How to get access?",
      TH: "ขั้นตอนการขอรหัสผ่านเพื่อปลดล็อก"
    },
    howToDesc: {
      FR: "Demandez simplement le mot de passe d'accès à la personne qui vous a donné ce lien. Une fois votre contribution reçue, elle vous remettra le code secret pour libérer l'intégralité du savoir de l'académie.",
      EN: "Simply ask the person who shared this link with you for the access password. Once your contribution is received, they will hand you the secret code to free all remaining contents.",
      TH: "โปรดติดต่อขอรับรหัสผ่านจากผู้ที่ส่งลิงก์นี้ให้กับคุณโดยตรง เมื่อชำระค่าธรรมเนียมสนับสนุนแล้ว คุณจะได้รับรหัสลับทันทีเพื่อเปิดอ่านบทเรียนทั้งหมดของสถาบัน"
    },
    passwordPlaceholder: {
      FR: "Entrez le mot de passe premium...",
      EN: "Enter premium password...",
      TH: "กรอกรหัสผ่านพรีเมียมที่นี่..."
    },
    unlockBtn: {
      FR: "Déverrouiller l'Académie",
      EN: "Unlock the Academy",
      TH: "ปลดล็อกหลักสูตรทั้งหมดทันที"
    },
    wrongPass: {
      FR: "Mot de passe incorrect. Veuillez vérifier avec votre contact.",
      EN: "Incorrect password. Please verify with your contact.",
      TH: "รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบกับผู้แนะนำของคุณ"
    },
    guarantee: {
      FR: "Certificat académique officiel de Conseiller inclus après validation.",
      EN: "Official Counselor Academic Certificate included upon completion.",
      TH: "รวมสิทธิ์การทดสอบและรับใบประกาศนียบัตรอย่างเป็นทางการของสถาบัน"
    }
  };

  const benefits = {
    FR: [
      { t: "17 Modules de haute valeur", d: "Du module 4 au module 20, englobant les finances, la belle-famille, l'intimité et l'administration." },
      { t: "Outils interactifs exclusifs", d: "Décodeurs relationnels, boussoles de l'intimité, et simulateurs de budget Sinsod." },
      { t: "Quiz de validation académique", d: "Des questionnaires rigoureux pour tester vos connaissances biculturelles." },
      { t: "Certificat Honorifique final", d: "Un document d'excellence à imprimer pour célébrer votre réussite." }
    ],
    EN: [
      { t: "17 High-Value Modules", d: "From module 4 to 20, covering deep family ties, intimacy, financial dower, and legal visas." },
      { t: "Exclusive Interactive Tools", d: "Relationship signal decoders, intimacy compasses, and Sinsod dower simulators." },
      { t: "Academic Assessment Quizzes", d: "Challenging questionnaires to truly validate your bicultural skills." },
      { t: "Honorary Graduation Certificate", d: "A beautiful, printable certificate to validate your commitment and wisdom." }
    ],
    TH: [
      { t: "17 บทเรียนอันทรงคุณค่า", d: "ตั้งแต่บทที่ 4 ถึง 20 ครอบคลุมเรื่องการจัดการเงิน สินสอด ครอบครัว ความรัก และกฎหมาย" },
      { t: "เครื่องมืออินเตอร์แอคทีฟพิเศษ", d: "ระบบถอดรหัสสัญญาณรัก เข็มทิศความแนบแน่น และจำลองคำนวณสินสอด" },
      { t: "แบบทดสอบวัดระดับมาตรฐาน", d: "วัดความเข้าใจสองวัฒนธรรมอย่างเป็นระบบพร้อมคำอธิบายเฉลยที่ลึกซึ้ง" },
      { t: "ใบประกาศนียบัตรเกียรติยศ", d: "เอกสารรับรองวิทยฐานะอย่างเป็นทางการจากสถาบันเพื่อพิมพ์ฉลองความสำเร็จ" }
    ]
  };

  const previewModules = {
    FR: [
      "Mod. 4 : Le Sinsod (Dot) & Négociations",
      "Mod. 5 : La Belle-Famille & Hiérarchie",
      "Mod. 6 : L'art du Compromis du quotidien",
      "Mod. 7 : Gestion du Budget Biculturel",
      "Mod. 8 : Intégration en France / Thailande",
      "Mod. 9 : La notion de Respect & Face",
      "Mod. 10 : Le Bouddhisme & Spiritualité",
      "Mod. 11 : Décoder les Silences & Jalousie",
      "Mod. 12 : Intimité Sexuelle & Tabous",
      "Mod. 13 : Les Attentes financières à long terme",
      "Mod. 14 : Le Kreng Jai & Non-dit relationnel",
      "Mod. 15 : Les Rituels et Mariage Traditionnel",
      "Mod. 16 : Communication indirecte avancée",
      "Mod. 17 : Éducation des Enfants Biculturels",
      "Mod. 18 : Démarches Administratives et Visas",
      "Mod. 19 : Gestion des demandes d'aide familiales",
      "Mod. 20 : Construire un projet de retraite commun"
    ],
    EN: [
      "Mod. 4: Sinsod (Dowry) & Cultural Negotiations",
      "Mod. 5: In-laws, Seniors & Hierarchies",
      "Mod. 6: Everyday Compromise & Harmony",
      "Mod. 7: Bicultural Budgeting & Support",
      "Mod. 8: Integration Challenges (France/Thailand)",
      "Mod. 9: Face, Honor & Social Respect",
      "Mod. 10: Buddhism & Home Spiritual Rituals",
      "Mod. 11: Deciphering Silences & Protectiveness",
      "Mod. 12: Sexual Intimacy & Taboo Barriers",
      "Mod. 13: Long-term Family Financial Expectations",
      "Mod. 14: Kreng Jai & Relationship Non-verbalism",
      "Mod. 15: Wedding Rituals & Religious Ceremonies",
      "Mod. 16: Advanced Indirect Communication Cues",
      "Mod. 17: Raising Bicultural & Bilingual Kids",
      "Mod. 18: Administrative Visas & Relocation Laws",
      "Mod. 19: Handling Extended Family Financial Requests",
      "Mod. 20: Planning a Peaceful Retirement & Lands"
    ],
    TH: [
      "บทที่ 4: สินสอดทองหมั้นและการเจรจาทางวัฒนธรรม",
      "บทที่ 5: ครอบครัวแฟน ลำดับอาวุโส และความเคารพ",
      "บทที่ 6: ศิลปะแห่งการประนีประนอมในชีวิตประจำวัน",
      "บทที่ 7: การบริหารงบประมาณสองวัฒนธรรมและค่าใช้จ่าย",
      "บทที่ 8: ความท้าทายในการย้ายถิ่นฐาน (ฝรั่งเศส/ไทย)",
      "บทที่ 9: เรื่องของเกียรติยศ การรักษาหน้า และสังคม",
      "บทที่ 10: พุทธศาสนา จิตวิญญาณ และพิธีกรรมในบ้าน",
      "บทที่ 11: การถอดรหัสความเงียบและความหึงหวงปกป้อง",
      "บทที่ 12: ชีวิตเซ็กซ์ที่แนบแน่นและความอายทางธรรมเนียม",
      "บทที่ 13: ความคาดหวังเรื่องเงินของครอบครัวในระยะยาว",
      "บทที่ 14: ความเกรงใจและสิ่งที่ไม่เอ่ยปากในชีวิตคู่",
      "บทที่ 15: พิธีแต่งงานแบบดั้งเดิมและธรรมเนียมสงฆ์",
      "บทที่ 16: การสื่อสารทางอ้อมขั้นสูงและการบอกใบ้ทางอารมณ์",
      "บทที่ 17: การเลี้ยงดูลูกสองภาษาและสองวัฒนธรรม",
      "บทที่ 18: ขั้นตอนเอกสารราชการ วีซ่า และการสมรส",
      "บทที่ 19: การจัดการคำขอความช่วยเหลือทางการเงินจากญาติ",
      "บทที่ 20: การวางแผนใช้ชีวิตวัยเกษียณและการซื้อที่ดินร่วมกัน"
    ]
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const success = onUnlock(passwordInput);
    if (!success) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const activeBenefits = benefits[lang] || benefits['TH'];
  const activePreview = previewModules[lang] || previewModules['TH'];

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-4 animate-fade-in">
      {/* Premium Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/70 border border-amber-200 rounded-full text-[10px] md:text-xs font-bold text-[#b88c5e] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500/20" />
          <span>{t.badge[lang]}</span>
        </div>
        
        <h2 className="font-serif text-2xl sm:text-4xl font-black text-slate-800 leading-tight tracking-tight max-w-3xl mx-auto">
          {t.title[lang]}
        </h2>
        
        <p className="text-xs sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle[lang]}
        </p>
      </div>

      {/* Grid of Key Benefits */}
      <div className="space-y-6">
        <h3 className="font-serif text-lg md:text-xl font-extrabold text-slate-800 text-center flex items-center justify-center gap-2">
          <BookOpen className="w-5 h-5 text-[#e2b07e]" />
          <span>{t.valueTitle[lang]}</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeBenefits.map((benefit, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-[#e5e1da] shadow-2xs flex gap-3 items-start transition-all hover:shadow-xs">
              <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600 border border-emerald-100 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">{benefit.t}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{benefit.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Checklist of Locked Modules */}
      <div className="bg-[#fcfbf7] p-5 sm:p-7 rounded-2xl border border-[#e5e1da] space-y-5 shadow-2xs">
        <h4 className="font-serif text-sm sm:text-base font-extrabold text-[#5c5449] flex items-center gap-2">
          <Lock className="w-4 h-4 text-[#e2b07e]" />
          <span>{t.modulesTitle[lang]}</span>
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {activePreview.map((modName, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600 bg-white/70 py-2 px-3 rounded-lg border border-slate-100/80">
              <Lock className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              <span className="font-medium truncate">{modName}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Invest / Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e1da] shadow-3xs">
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-serif text-base sm:text-lg font-extrabold text-slate-800 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500/10" />
            <span>{t.supportTitle[lang]}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
            {t.supportDesc[lang]}
          </p>
        </div>
        <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100 text-center space-y-1">
          <div className="text-2xl sm:text-3xl font-serif font-black text-amber-700">65% +</div>
          <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
            {lang === 'FR' ? "Taux d'échec évité" : lang === 'EN' ? "Avoided failure rate" : "ลดอัตราการเลิกรา"}
          </div>
        </div>
      </div>

      {/* Payment Information & Unlock Gate */}
      <div className="bg-white rounded-3xl border-2 border-[#e2b07e] overflow-hidden shadow-md max-w-2xl mx-auto">
        <div className="bg-[#e2b07e] text-white p-6 text-center space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-3 py-1 rounded-full">
            {t.pricingTitle[lang]}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-black">{t.pricingSubtitle[lang]}</h3>
          <div className="text-3xl sm:text-4xl font-serif font-black tracking-tight pt-1">
            {t.price[lang]}
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-2">
              <Coffee className="w-4 h-4 text-[#e2b07e]" />
              <span>{t.howToTitle[lang]}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              {t.howToDesc[lang]}
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
              <div className="relative">
                <input
                  type="password"
                  placeholder={t.passwordPlaceholder[lang]}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 text-center text-sm font-bold transition-all outline-none ${
                    passwordError 
                      ? 'border-rose-500 bg-rose-50/20 focus:border-rose-500 text-rose-700' 
                      : 'border-[#e5e1da] focus:border-[#e2b07e] text-slate-800 bg-white'
                  }`}
                />
              </div>

              {passwordError && (
                <p className="text-xs text-rose-500 font-bold text-center">
                  {t.wrongPass[lang]}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-[#e2b07e] hover:bg-[#d4a06d] active:scale-98 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <Lock className="w-4 h-4" />
                <span>{t.unlockBtn[lang]}</span>
              </button>
            </form>
          </div>

          <div className="text-center pt-2">
            <p className="text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{t.guarantee[lang]}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
