import React, { useState, useEffect } from 'react';
import { BookOpen, Bookmark, Trash2, Edit3, Plus, Save, Calendar, Tag, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { Language, Lesson, GlossaryItem } from '../types';
import { lessons } from '../data/lessons';
import { glossaryItems } from '../data/glossary';

interface CoupleJournalProps {
  lang: Language;
  savedFavorites: string[]; // List of saved IDs (e.g., 'lesson-1', 'glossary-g1', 'advice-2')
  onToggleFavorite: (id: string) => void;
  onNavigateToLesson: (id: number) => void;
  onNavigateToGlossary: () => void;
}

interface JournalNote {
  id: string;
  title: string;
  category: 'finance' | 'communication' | 'intimacy' | 'general';
  content: string;
  createdAt: string;
}

export default function CoupleJournalView({
  lang,
  savedFavorites,
  onToggleFavorite,
  onNavigateToLesson,
  onNavigateToGlossary
}: CoupleJournalProps) {
  const [notes, setNotes] = useState<JournalNote[]>([]);
  const [activeTab, setActiveTab] = useState<'favorites' | 'notes'>('favorites');
  
  // Note editing form states
  const [isEditing, setIsEditing] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<'finance' | 'communication' | 'intimacy' | 'general'>('general');
  const [formContent, setFormContent] = useState('');

  // Load notes on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sawasdee_journal_notes');
      if (stored) {
        setNotes(JSON.parse(stored));
      } else {
        // Seed default initial note for guidance
        const defaultNote: JournalNote = {
          id: 'note-seed',
          title: lang === 'FR' ? "Nos règles d'or du couple" : lang === 'EN' ? "Our Golden Rules" : "กฎทองคู่ของเรา",
          category: 'general',
          content: lang === 'FR' 
            ? "1. Toujours appliquer le 'Jai Yen' en cas de désaccord.\n2. Parler d'argent le dimanche calmement sans hausser le ton.\n3. Respecter les visites familiales tout en préservant notre cocon intime."
            : lang === 'EN'
              ? "1. Always keep a 'Jai Yen' heart when we disagree.\n2. Discuss finances calmly on weekends without raising voices.\n3. Balance our respect for family with our private couple space."
              : "1. รักษา 'ใจเย็น' เสมอเมื่อเห็นต่างกัน\n2. พูดคุยเรื่องเงินด้วยความประนีประนอม ไม่ใช้อารมณ์เสียงดัง\n3. สร้างความสมดุลระหว่างความกตัญญูและพื้นที่ส่วนตัวของชีวิตคู่",
          createdAt: new Date().toLocaleDateString(lang === 'FR' ? 'fr-FR' : lang === 'EN' ? 'en-US' : 'th-TH')
        };
        setNotes([defaultNote]);
        localStorage.setItem('sawasdee_journal_notes', JSON.stringify([defaultNote]));
      }
    } catch (e) {
      console.error(e);
    }
  }, [lang]);

  const saveNotesToStorage = (updatedNotes: JournalNote[]) => {
    setNotes(updatedNotes);
    try {
      localStorage.setItem('sawasdee_journal_notes', JSON.stringify(updatedNotes));
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenCreateForm = () => {
    setIsEditing(true);
    setEditingNoteId(null);
    setFormTitle('');
    setFormCategory('general');
    setFormContent('');
  };

  const handleOpenEditForm = (note: JournalNote) => {
    setIsEditing(true);
    setEditingNoteId(note.id);
    setFormTitle(note.title);
    setFormCategory(note.category);
    setFormContent(note.content);
  };

  const handleCancelForm = () => {
    setIsEditing(false);
    setEditingNoteId(null);
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    if (editingNoteId) {
      // Update
      const updated = notes.map((n) => {
        if (n.id === editingNoteId) {
          return {
            ...n,
            title: formTitle,
            category: formCategory,
            content: formContent
          };
        }
        return n;
      });
      saveNotesToStorage(updated);
    } else {
      // Create new
      const newNote: JournalNote = {
        id: 'note-' + Date.now(),
        title: formTitle,
        category: formCategory,
        content: formContent,
        createdAt: new Date().toLocaleDateString(lang === 'FR' ? 'fr-FR' : lang === 'EN' ? 'en-US' : 'th-TH')
      };
      saveNotesToStorage([newNote, ...notes]);
    }

    setIsEditing(false);
    setEditingNoteId(null);
  };

  const handleDeleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    saveNotesToStorage(updated);
  };

  // Match saved favorites keys to real lessons/glossary items
  const getFavoriteDetails = (favKey: string) => {
    if (favKey.startsWith('lesson-')) {
      const lessonId = parseInt(favKey.replace('lesson-', ''));
      const lesson = lessons.find((l) => l.id === lessonId);
      if (lesson) {
        return {
          type: 'lesson',
          title: lesson.title[lang],
          subtitle: `Module ${lesson.id} • ${lesson.durationMinutes} min`,
          action: () => onNavigateToLesson(lesson.id)
        };
      }
    } else if (favKey.startsWith('glossary-')) {
      const termId = favKey.replace('glossary-', '');
      const item = glossaryItems.find((g) => g.id === termId);
      if (item) {
        return {
          type: 'glossary',
          title: `${item.term} (${item.thaiScript})`,
          subtitle: item.category[lang],
          action: () => onNavigateToGlossary()
        };
      }
    } else if (favKey.startsWith('advice-')) {
      const lessonId = parseInt(favKey.replace('advice-', ''));
      const lesson = lessons.find((l) => l.id === lessonId);
      if (lesson) {
        return {
          type: 'advice',
          title: lang === 'FR' ? `Conseil Biculturel: ${lesson.title.FR}` : lang === 'EN' ? `Bicultural Advice: ${lesson.title.EN}` : `คำแนะนำเฉพาะคู่: ${lesson.title.TH}`,
          subtitle: `Module ${lesson.id}`,
          action: () => onNavigateToLesson(lesson.id)
        };
      }
    }
    return null;
  };

  const t = {
    title: { FR: "Carnet de Route du Couple", EN: "Couple's Shared Roadmap", TH: "บันทึกการเดินทางร่วมชีวิตคู่ (Journal)" },
    subtitle: {
      FR: "Conservez vos concepts préférés et écrivez ensemble vos résolutions personnelles pour un foyer franco-thaïlandais harmonieux.",
      EN: "Save your favorite concepts and write down your custom resolutions for an aligned Franco-Thai home.",
      TH: "บันทึกข้อมูลบทเรียนที่ชอบและข้อตกลงร่วมกันเพื่อความเข้าใจในชีวิตคู่ต่างวัฒนธรรม"
    },
    tabFavorites: { FR: "Favoris Epinglés", EN: "Bookmarked Guides", TH: "บทเรียนและคำศัพท์ที่ชื่นชอบ" },
    tabNotes: { FR: "Mes Notes & Résolutions", EN: "Our Couple Notes", TH: "บันทึกข้อตกลงและเป้าหมาย" },
    addNote: { FR: "Ajouter une note de couple", EN: "Create Note", TH: "เขียนบันทึกเรื่องราวคู่ของเรา" },
    noFavorites: { FR: "Aucun favori enregistré pour le moment.", EN: "No saved bookmarks yet.", TH: "ยังไม่มีรายการบันทึกที่บันทึกไว้ในขณะนี้" },
    noFavoritesDesc: {
      FR: "Cliquez sur l'icône de signet (favori) dans les fiches de cours ou le glossaire pour les retrouver ici.",
      EN: "Click the bookmark button on any lesson card or glossary term to save it here for reference.",
      TH: "คุณสามารถกดสัญลักษณ์บุ๊กมาร์ก (บันทึก) ในบทเรียนหรือพจนานุกรมคำศัพท์เพื่อให้แสดงในหน้านี้"
    },
    noNotes: { FR: "Aucune note de couple rédigée.", EN: "No notes written yet.", TH: "ยังไม่มีบันทึกข้อมูลใดๆ" },
    formTitle: { FR: "Titre de la Note", EN: "Note Title", TH: "หัวข้อบันทึก" },
    formCategory: { FR: "Catégorie", EN: "Category", TH: "ประเภทหัวข้อ" },
    formContent: { FR: "Contenu de votre résolution", EN: "Resolution Content", TH: "เนื้อหารายละเอียดของบันทึก" },
    saveBtn: { FR: "Enregistrer la note", EN: "Save Note", TH: "บันทึกข้อตกลง" },
    cancelBtn: { FR: "Annuler", EN: "Cancel", TH: "ยกเลิก" },
    categoryFinance: { FR: "Finances & Famille", EN: "Finances & Family", TH: "การเงินและครอบครัว" },
    categoryComm: { FR: "Communication & Jai Yen", EN: "Communication & Keeping Calm", TH: "การสื่อสารและอารมณ์" },
    categoryIntimacy: { FR: "Affection & Intimité", EN: "Affection & Intimacy", TH: "ความรักและพื้นที่ส่วนตัว" },
    categoryGeneral: { FR: "Général / Autre", EN: "General / Other", TH: "เรื่องทั่วไป / อื่นๆ" },
    readLesson: { FR: "Lire le Module", EN: "Read Module", TH: "อ่านบทเรียนนี้" }
  };

  return (
    <div id="couple-journal-view-container" className="bg-white rounded-2xl border border-[#e5e1da] p-6 sm:p-8 space-y-6 shadow-sm">
      
      {/* Header section */}
      <div className="border-b border-[#e5e1da] pb-6 space-y-2">
        <div className="flex items-center gap-2.5">
          <FileText className="w-6 h-6 text-[#b88c5e]" />
          <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-[#403d39]">
            {t.title[lang]}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl font-serif">
          {t.subtitle[lang]}
        </p>
      </div>

      {/* Tabs Controller */}
      <div className="flex border-b border-[#e5e1da] gap-4">
        <button
          type="button"
          onClick={() => { setActiveTab('favorites'); setIsEditing(false); }}
          className={`pb-3 text-xs sm:text-sm font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
            activeTab === 'favorites' 
              ? 'border-[#b88c5e] text-[#b88c5e]' 
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          {t.tabFavorites[lang]}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('notes')}
          className={`pb-3 text-xs sm:text-sm font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
            activeTab === 'notes' 
              ? 'border-[#b88c5e] text-[#b88c5e]' 
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          {t.tabNotes[lang]}
        </button>
      </div>

      {/* Tab CONTENT: Favorites */}
      {activeTab === 'favorites' && (
        <div className="space-y-4">
          {savedFavorites.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-3 bg-[#fdfbf7] rounded-xl border border-dashed border-[#e5e1da]">
              <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-serif text-sm sm:text-base font-extrabold text-slate-600">
                {t.noFavorites[lang]}
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                {t.noFavoritesDesc[lang]}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {savedFavorites.map((favKey) => {
                const details = getFavoriteDetails(favKey);
                if (!details) return null;

                return (
                  <div 
                    key={favKey}
                    className="p-4 rounded-xl border border-[#e5e1da] bg-white shadow-2xs hover:shadow-sm transition-all flex justify-between items-start gap-3 group"
                  >
                    <div className="space-y-1 truncate">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        details.type === 'lesson' 
                          ? 'bg-amber-100 text-[#b88c5e]' 
                          : details.type === 'glossary' 
                            ? 'bg-teal-100 text-teal-800' 
                            : 'bg-rose-100 text-rose-800'
                      }`}>
                        {details.type === 'lesson' ? (lang === 'FR' ? 'Module' : lang === 'EN' ? 'Module' : 'บทเรียน')
                         : details.type === 'glossary' ? (lang === 'FR' ? 'Vocabulaire' : lang === 'EN' ? 'Vocabulary' : 'คำศัพท์')
                         : (lang === 'FR' ? 'Conseil d\'or' : lang === 'EN' ? 'Golden Advice' : 'ข้อเสนอแนะพิเศษ')}
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-slate-800 truncate block pt-1.5">
                        {details.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-semibold truncate">
                        {details.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={details.action}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-[#b88c5e] font-bold text-xs cursor-pointer"
                        title={t.readLesson[lang]}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => onToggleFavorite(favKey)}
                        className="p-1.5 rounded-md hover:bg-rose-50 text-rose-500 cursor-pointer"
                        title="Retirer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab CONTENT: Notes */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          
          {/* Note Form or Note List */}
          {isEditing ? (
            <form onSubmit={handleSaveNote} className="space-y-4 p-5 rounded-xl border border-[#e5e1da] bg-[#fdfbf7] animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Title */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {t.formTitle[lang]}
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#e5e1da] bg-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#e2b07e]/30 text-slate-700"
                    placeholder="ex: Discussion budget de Dimanche"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {t.formCategory[lang]}
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="w-full p-2.5 rounded-lg border border-[#e5e1da] bg-white text-xs sm:text-sm font-bold focus:outline-none text-slate-600"
                  >
                    <option value="general">{t.categoryGeneral[lang]}</option>
                    <option value="finance">{t.categoryFinance[lang]}</option>
                    <option value="communication">{t.categoryComm[lang]}</option>
                    <option value="intimacy">{t.categoryIntimacy[lang]}</option>
                  </select>
                </div>
              </div>

              {/* Content body */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {t.formContent[lang]}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  className="w-full p-3 rounded-lg border border-[#e5e1da] bg-white text-xs sm:text-sm leading-relaxed font-semibold focus:outline-none focus:ring-2 focus:ring-[#e2b07e]/30 text-slate-600"
                  placeholder="..."
                />
              </div>

              {/* Action buttons inside form */}
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-black transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{t.saveBtn[lang]}</span>
                </button>
                <button
                  type="button"
                  onClick={handleCancelForm}
                  className="px-5 py-2.5 bg-white border border-[#e5e1da] hover:bg-slate-100 text-slate-500 rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  {t.cancelBtn[lang]}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              {/* Create new note trigger */}
              <button
                type="button"
                id="create-journal-note-btn"
                onClick={handleOpenCreateForm}
                className="w-full p-3.5 rounded-xl border border-dashed border-[#b88c5e]/50 hover:border-[#b88c5e] text-[#b88c5e] hover:bg-[#b88c5e]/5 transition-all text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer active:scale-99"
              >
                <Plus className="w-4 h-4" />
                <span>{t.addNote[lang]}</span>
              </button>

              {/* List of notes */}
              {notes.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-xs font-medium">
                  {t.noNotes[lang]}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {notes.map((note) => (
                    <div 
                      key={note.id}
                      className="p-5 rounded-xl border border-[#e5e1da] bg-[#fcfbf9]/60 hover:bg-white shadow-3xs hover:shadow-2xs transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#f0ede6] text-[#8c7e6d]">
                              {note.category === 'finance' ? t.categoryFinance[lang]
                               : note.category === 'communication' ? t.categoryComm[lang]
                               : note.category === 'intimacy' ? t.categoryIntimacy[lang]
                               : t.categoryGeneral[lang]}
                            </span>
                            
                            <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {note.createdAt}
                            </span>
                          </div>
                          
                          <h4 className="font-serif text-sm sm:text-base font-black text-slate-800 pt-1">
                            {note.title}
                          </h4>
                        </div>

                        {/* Note Actions */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleOpenEditForm(note)}
                            className="p-1.5 rounded-md hover:bg-slate-100 text-[#b88c5e] cursor-pointer"
                            title="Modifier"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteNote(note.id)}
                            className="p-1.5 rounded-md hover:bg-rose-50 text-rose-500 cursor-pointer"
                            title="Supprimer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Content text block with nice soft spacing */}
                      <p className="text-xs sm:text-sm text-slate-600 whitespace-pre-line leading-relaxed font-semibold">
                        {note.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
