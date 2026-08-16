export type Language = 'FR' | 'EN' | 'TH';

export interface QuizQuestion {
  id: string;
  question: {
    FR: string;
    EN: string;
    TH: string;
  };
  options: {
    FR: string[];
    EN: string[];
    TH: string[];
  };
  correctIndex: number;
  explanation: {
    FR: string;
    EN: string;
    TH: string;
  };
}

export interface Lesson {
  id: number;
  title: {
    FR: string;
    EN: string;
    TH: string;
  };
  subtitle: {
    FR: string;
    EN: string;
    TH: string;
  };
  durationMinutes: number;
  concepts: {
    FR: { title: string; content: string };
    EN: { title: string; content: string };
    TH: { title: string; content: string };
  }[];
  quiz: QuizQuestion[];
}

export interface GlossaryItem {
  id: string;
  term: string;
  thaiScript: string;
  phonetic: string;
  definition: {
    FR: string;
    EN: string;
    TH: string;
  };
  category: {
    FR: string;
    EN: string;
    TH: string;
  };
}

export interface UserProgress {
  completedLessons: number[]; // Array of lesson IDs
  quizScores: Record<number, number>; // Lesson ID -> quiz score out of 3
}
