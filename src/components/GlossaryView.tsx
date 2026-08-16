import { useState } from 'react';
import { glossaryItems } from '../data/glossary';
import { Language } from '../types';
import { Search, BookOpen, Sparkles, HelpCircle } from 'lucide-react';

interface GlossaryViewProps {
  lang: Language;
}

export default function GlossaryView({ lang }: GlossaryViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Multi-language glossary translation texts
  const t = {
    title: { FR: "Glossaire Multilingue Essentiel", EN: "Essential Multilingual Glossary", TH: "พจนานุกรมคำศัพท์สามภาษาประจำสถาบัน" },
    subtitle: {
      FR: "Maîtrisez les concepts culturels, légaux et pratiques indispensables au quotidien.",
      EN: "Master the key cultural, legal, and practical concepts for daily life.",
      TH: "เรียนรู้แนวคิดหลักด้านวัฒนธรรม กฎหมาย และวิถีชีวิตประจำวันเพื่อความสุขในชีวิตคู่"
    },
    searchPlaceholder: { FR: "Rechercher un terme (ex: Sin Sod)...", EN: "Search a term (e.g., Sin Sod)...", TH: "ค้นหาคำศัพท์ (เช่น สินสอด)..." },
    noResult: { FR: "Aucun terme trouvé pour votre recherche.", EN: "No terms found for your search.", TH: "ไม่พบคำศัพท์ที่คุณค้นหา" },
    categoryAll: { FR: "Tous", EN: "All", TH: "ทั้งหมด" },
    phoneticLabel: { FR: "Prononciation :", EN: "Pronunciation:", TH: "คำอ่านออกเสียง:" },
    thaiScriptLabel: { FR: "Écriture thaïe :", EN: "Thai script:", TH: "อักษรไทย:" },
  };

  // Get unique categories for filters
  const categories = ['All', ...Array.from(new Set(glossaryItems.map(item => item.category[lang])))];

  // Filter items based on search and category
  const filteredItems = glossaryItems.filter(item => {
    const matchesSearch = 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.thaiScript.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phonetic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition[lang].toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = activeCategory === 'All' || item.category[lang] === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#f7f3ed] p-5 md:p-8 rounded-2xl border border-[#e5e1da] shadow-sm">
      <div className="max-w-3xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e2b07e]/15 text-[#b88c5e] mb-3">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-[#403d39] mb-2">
            {t.title[lang]}
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              id="glossary-search"
              placeholder={t.searchPlaceholder[lang]}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#e5e1da] focus:border-[#e2b07e] rounded-xl text-sm transition-all focus:outline-hidden shadow-2xs text-slate-800 font-medium"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cat-btn-${cat.replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#b88c5e] text-white border-[#b88c5e] shadow-sm'
                    : 'bg-white border-[#e5e1da] text-[#636e72] hover:bg-[#efece6]'
                }`}
              >
                {cat === 'All' ? t.categoryAll[lang] : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms list */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-5 rounded-xl border border-[#e5e1da] hover:border-[#e2b07e] hover:shadow-md transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#403d39]">
                        {item.term}
                      </h4>
                      <span className="text-[10px] font-bold text-[#b88c5e] bg-[#e2b07e]/15 px-2.5 py-0.5 rounded-full tracking-wider">
                        {item.category[lang]}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-slate-400 block font-serif" dir="ltr">
                        {item.thaiScript}
                      </span>
                      <span className="text-[10px] text-slate-400 italic block">
                        /{item.phonetic}/
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-[#e5e1da]">
                    {item.definition[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-xl border border-[#e5e1da] shadow-xs">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-sm text-slate-500 font-medium">{t.noResult[lang]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
