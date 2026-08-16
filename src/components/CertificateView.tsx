import { useState, useRef } from 'react';
import { Language } from '../types';
import { Award, ShieldAlert, Sparkles, Printer, Check } from 'lucide-react';

interface CertificateViewProps {
  lang: Language;
  onClose: () => void;
}

export default function CertificateView({ lang, onClose }: CertificateViewProps) {
  const [userName, setUserName] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const t = {
    badgeName: { FR: "Conseiller en Relations Franco-Thaï", EN: "Advisor in Franco-Thai Relations", TH: "ที่ปรึกษาความสัมพันธ์ไทย-ฝรั่งเศส" },
    title: { FR: "CERTIFICAT DE RÉUSSITE ACADÉMIQUE", EN: "CERTIFICATE OF ACADEMIC ACHIEVEMENT", TH: "ประกาศนียบัตรสำเร็จการศึกษาหลักสูตร" },
    issuedTo: { FR: "Décerné solennellement à", EN: "Solemnly awarded to", TH: "ขอมอบประกาศนียบัตรฉบับนี้ให้แก่" },
    defaultName: { FR: "Élève Émérite", EN: "Distinguished Scholar", TH: "นักเรียนผู้ทรงเกียรติ" },
    bodyText: {
      FR: "Pour avoir validé avec succès l'intégralité du programme d'apprentissage de la 'Sawasdee-Amour Academy', couvrant l'ensemble des 10 modules théoriques, culturels et légaux régissant les unions franco-thaïlandaises.",
      EN: "For successfully validating the entire curriculum of the 'Sawasdee-Amour Academy', covering all 10 theoretical, cultural, and legal modules governing Franco-Thai unions.",
      TH: "ได้รับการรับรองว่าได้ผ่านการฝึกอบรมบทเรียนและแบบทดสอบวัดความรู้ครบทั้ง 10 บทเรียน ด้านความสัมพันธ์ระหว่างวัฒนธรรมและกฎหมายสองสัญชาติของ 'Sawasdee-Amour Academy' แล้วเป็นผลสำเร็จ"
    },
    authorizedBy: { FR: "Délivré par le Jury Académique de Sawasdee-Amour", EN: "Issued by the Academic Board of Sawasdee-Amour", TH: "ออกให้โดยคณะกรรมการวิชาการ Sawasdee-Amour" },
    dateLabel: { FR: "Date d'émission :", EN: "Date of issue:", TH: "วันที่ออกเอกสาร:" },
    namePlaceholder: { FR: "Entrez votre nom complet...", EN: "Enter your full name...", TH: "พิมพ์ชื่อ-นามสกุลของคุณ..." },
    saveBtn: { FR: "Générer mon certificat", EN: "Generate My Certificate", TH: "บันทึกชื่อบนประกาศนียบัตร" },
    printInstruction: { FR: "Ce certificat est interactif. Vous pouvez l'imprimer pour vos archives.", EN: "This certificate is interactive. You can print it for your records.", TH: "ประกาศนียบัตรนี้ใช้สิทธิ์โต้ตอบได้ คุณสามารถสั่งพิมพ์เพื่อบันทึกเก็บไว้ได้" },
    printBtn: { FR: "Imprimer le Certificat", EN: "Print Certificate", TH: "สั่งพิมพ์ประกาศนียบัตร" },
    sealLabel: { FR: "SCEAU OFFICIEL", EN: "OFFICIAL SEAL", TH: "ตราประทับ" },
    congratsTitle: { FR: "Félicitations Maître !", EN: "Congratulations Scholar!", TH: "ขอแสดงความยินดีด้วย!" }
  };

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date().toLocaleDateString(
    lang === 'FR' ? 'fr-FR' : lang === 'EN' ? 'en-US' : 'th-TH',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div className="bg-[#f7f3ed] p-4 md:p-8 rounded-2xl border border-[#e5e1da] shadow-sm">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Banner congrats */}
        <div className="bg-[#e2b07e]/15 border border-[#e5e1da] p-4 rounded-xl flex items-center gap-3">
          <Award className="w-10 h-10 text-[#b88c5e] shrink-0" />
          <div>
            <h4 className="font-serif font-bold text-[#403d39] text-base">{t.congratsTitle[lang]}</h4>
            <p className="text-xs text-slate-600">
              {t.printInstruction[lang]}
            </p>
          </div>
        </div>

        {/* Form to enter name */}
        {!isSaved ? (
          <div className="bg-white p-4 rounded-xl border border-[#e5e1da] flex flex-col sm:flex-row gap-3 items-center">
            <input
              type="text"
              id="cert-name-input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={t.namePlaceholder[lang]}
              className="w-full px-4 py-2.5 bg-slate-50 border border-[#e5e1da] rounded-lg text-sm focus:outline-hidden focus:border-[#e2b07e] font-medium"
            />
            <button
              id="cert-save-btn"
              onClick={() => setIsSaved(true)}
              disabled={!userName.trim()}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#e2b07e] hover:bg-[#d4a06d] disabled:bg-slate-100 disabled:text-slate-400 text-white rounded-lg text-xs font-bold transition-all shrink-0 flex items-center justify-center gap-1"
            >
              <Check className="w-4 h-4" />
              {t.saveBtn[lang]}
            </button>
          </div>
        ) : (
          <div className="flex justify-end gap-2">
            <button
              id="cert-edit-btn"
              onClick={() => setIsSaved(false)}
              className="px-3 py-1.5 bg-white border border-[#e5e1da] hover:bg-[#efece6] text-[#636e72] rounded-md text-xs font-medium transition-all shadow-2xs"
            >
              Modifier le nom
            </button>
          </div>
        )}

        {/* The Printable Certificate Box */}
        <div 
          id="printable-certificate"
          className="relative bg-white border-[12px] border-double border-[#e2b07e] p-6 md:p-12 rounded-lg shadow-sm overflow-hidden text-center"
          style={{ backgroundImage: 'radial-gradient(circle, #fdfbf7 60%, #f7f3ed 100%)' }}
        >
          {/* Elegant Filigree Borders */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#e2b07e]/40 pointer-events-none" />

          {/* Watermark Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <Award className="w-80 h-80 text-[#b88c5e]" />
          </div>

          <div className="relative space-y-6 z-10">
            {/* Header */}
            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.25em] font-bold text-[#b88c5e] uppercase block">
                SAWASDEE-AMOUR ACADEMY
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-extrabold text-[#403d39] tracking-wide">
                {t.title[lang]}
              </h3>
              <div className="h-[2px] w-24 bg-[#e2b07e]/60 mx-auto my-3" />
            </div>

            {/* Credential */}
            <div className="space-y-2">
              <span className="text-xs italic text-slate-400 block">{t.issuedTo[lang]}</span>
              <div className="font-serif text-2xl md:text-3xl font-bold text-[#403d39] italic border-b border-slate-100 pb-2 max-w-md mx-auto min-h-[44px]">
                {userName.trim() || t.defaultName[lang]}
              </div>
            </div>

            {/* Achievement Badge name */}
            <div className="space-y-1">
              <span className="text-[10px] tracking-widest font-bold text-slate-400 uppercase block">
                AVEC LE TITRE HONORIFIQUE DE
              </span>
              <span className="font-serif text-lg md:text-xl font-bold text-[#b88c5e]">
                {t.badgeName[lang]}
              </span>
            </div>

            {/* Curriculum description */}
            <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed font-serif">
              {t.bodyText[lang]}
            </p>

            {/* Footer with Seal and Signatures */}
            <div className="grid grid-cols-3 gap-4 pt-6 items-end">
              {/* Left Signature */}
              <div className="text-center">
                <div className="font-serif text-xs italic text-slate-400 border-b border-[#e5e1da] pb-1 mx-auto max-w-[120px] font-semibold">
                  E. Sotoca
                </div>
                <span className="text-[9px] text-slate-400 uppercase block mt-1">Directeur</span>
              </div>

              {/* Center Seal */}
              <div className="flex flex-col items-center justify-center relative">
                <div className="w-16 h-16 rounded-full border-4 border-dashed border-[#b88c5e] flex items-center justify-center bg-[#fdfaf5] shadow-xs relative">
                  <Award className="w-8 h-8 text-[#b88c5e]" />
                  {/* Rotating overlay symbol */}
                  <div className="absolute inset-0 border border-[#b88c5e] rounded-full scale-105 pointer-events-none" />
                </div>
                <span className="text-[8px] font-extrabold text-[#b88c5e] tracking-widest uppercase mt-1">
                  {t.sealLabel[lang]}
                </span>
              </div>

              {/* Right Date */}
              <div className="text-center">
                <span className="text-[9px] text-slate-400 uppercase block mb-1">
                  {t.dateLabel[lang]}
                </span>
                <span className="font-serif text-xs font-bold text-[#403d39]">
                  {formattedDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons for printing / actions */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
          <button
            id="print-cert-btn"
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#e2b07e] hover:bg-[#d4a06d] text-white rounded-lg text-xs font-bold transition-all shadow-sm"
          >
            <Printer className="w-4 h-4" />
            {t.printBtn[lang]}
          </button>
          
          <button
            id="close-cert-btn"
            onClick={onClose}
            className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-[#e5e1da] hover:bg-[#efece6] text-[#636e72] rounded-lg text-xs font-semibold transition-all shadow-sm"
          >
            Retour au Tableau de Bord
          </button>
        </div>

      </div>
    </div>
  );
}
