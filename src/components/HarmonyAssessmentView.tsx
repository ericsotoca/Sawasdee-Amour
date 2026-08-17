import React, { useState, useEffect } from 'react';
import { Heart, RefreshCw, Award, CheckCircle2, AlertCircle, ShieldCheck, HelpCircle, BookOpen } from 'lucide-react';
import { Language, UserRole } from '../types';

interface HarmonyAssessmentProps {
  lang: Language;
  userRole: UserRole;
}

interface Question {
  id: number;
  category: 'finance' | 'communication' | 'intimacy';
  title: {
    FR: string;
    EN: string;
    TH: string;
  };
  scenario: {
    FR: string;
    EN: string;
    TH: string;
  };
  options: {
    score: number; // 0 to 10 points
    text: {
      FR: string;
      EN: string;
      TH: string;
    };
    explanation: {
      FR: string;
      EN: string;
      TH: string;
    };
  }[];
}

const assessmentQuestions: Question[] = [
  {
    id: 1,
    category: 'finance',
    title: {
      FR: "Soutien financier familial",
      EN: "Family Financial Support",
      TH: "การเกื้อกูลทางการเงินแก่ครอบครัว"
    },
    scenario: {
      FR: "La famille de votre partenaire thaïlandaise demande une aide financière imprévue pour réparer le toit ou soigner un proche.",
      EN: "Your Thai partner's family requests unexpected financial help to repair their roof or pay for a relative's medical care.",
      TH: "ครอบครัวฝ่ายหญิงมีความจำเป็นเร่งด่วน เช่น ซ่อมแซมบ้านหรือรักษาพยาบาล และติดต่อขอความช่วยเหลือทางการเงิน"
    },
    options: [
      {
        score: 10,
        text: {
          FR: "Discuter calmement en couple, fixer un budget limite raisonnable ensemble, et l'envoyer comme un don d'équipe sans menacer l'épargne du foyer.",
          EN: "Discuss calmly as a couple, set a reasonable joint limit together, and send it as a team gift without threatening household savings.",
          TH: "ร่วมกันปรึกษากับคนรักด้วยความเข้าใจ ตกลงกำหนดงบประมาณช่วยเหลือร่วมกันที่เหมาะสมโดยไม่กระทบความมั่นคงของคู่"
        },
        explanation: {
          FR: "Parfait ! La concertation en couple et le respect de la piété filiale thaïlandaise renforcent l'unité.",
          EN: "Perfect! Consultation as a couple combined with respect for Thai filial piety strengthens unit cohesion.",
          TH: "ยอดเยี่ยมที่สุด! การร่วมใจกันประเมินและช่วยเหลือตามสมควรช่วยรักษาเกียรติของครอบครัวและคงความสมานฉันท์ในคู่"
        }
      },
      {
        score: 5,
        text: {
          FR: "Refuser fermement par principe de financer la belle-famille, en disant que chacun gère son argent de son côté.",
          EN: "Refuse firmly on principle to fund the in-laws, stating that each side manages their money independently.",
          TH: "ปฏิเสธทันทีตามหลักการ เพราะคิดว่าเรื่องเงินของแต่ละครอบครัวควรแยกแยะจัดการกันเองโดยเด็ดขาด"
        },
        explanation: {
          FR: "Risqué : Un refus sec est perçu en Thaïlande comme un manque profond de respect et d'amour envers les parents.",
          EN: "Risky: A blunt refusal is perceived in Thailand as a severe lack of respect and love towards parents.",
          TH: "มีความเสี่ยง: การปฏิเสธอย่างไร้เยื่อใยอาจถูกมองว่าเป็นการขาดความเคารพและความกตัญญู ซึ่งเป็นเรื่องสำคัญมากในวัฒนธรรมไทย"
        }
      },
      {
        score: 3,
        text: {
          FR: "Envoyer l'intégralité de la somme demandée en cachette pour éviter tout conflit, même si cela vide vos comptes personnels.",
          EN: "Send the full amount in secret to avoid conflict, even if it drains your personal accounts.",
          TH: "แอบโอนเงินช่วยเหลือทั้งหมดไปเงียบๆ เพื่อเลี่ยงความขัดแย้ง แม้จะทำให้งบส่วนตัวตึงตัวก็ตาม"
        },
        explanation: {
          FR: "Néfaste : Le secret nuit gravement à la confiance du couple et crée des ressentis négatifs à long terme.",
          EN: "Harmful: Secrecy damages trust and builds long-term resentment within the relationship.",
          TH: "ส่งผลเสีย: การปิดบังข้อมูลทำลายความไว้ใจในชีวิตคู่ และอาจก่อให้เกิดปัญหาบานปลายในภายหลัง"
        }
      }
    ]
  },
  {
    id: 2,
    category: 'communication',
    title: {
      FR: "Gestion du désaccord et du ton",
      EN: "Disagreements & Tone of Voice",
      TH: "การจัดการความเห็นต่างและการใช้น้ำเสียง"
    },
    scenario: {
      FR: "Une tension s'installe lors d'une discussion sur le planning des vacances.",
      EN: "Tension arises during a discussion about vacation planning.",
      TH: "เกิดความตึงเครียดหรือความเห็นไม่ตรงกันระหว่างพูดคุยเรื่องการจัดตารางเวลาพักผ่อน"
    },
    options: [
      {
        score: 10,
        text: {
          FR: "Parler doucement (Jai Yen), faire une pause si la colère monte, et aborder le sujet sans hausser la voix.",
          EN: "Speak softly (Jai Yen), take a break if anger rises, and discuss without raising your voice.",
          TH: "ใช้น้ำเสียงที่อ่อนโยน (ใจเย็น) หากเริ่มรู้สึกขุ่นเคืองให้หยุดพักก่อน แล้วจึงกลับมาคุยด้วยความสุภาพ"
        },
        explanation: {
          FR: "Excellent. En Thaïlande, hausser la voix équivaut à perdre le contrôle de soi et détruit la communication.",
          EN: "Excellent. Raising your voice in Thailand is seen as losing self-control and destroys communication instantly.",
          TH: "ยอดเยี่ยมมาก การรักษาความอ่อนโยนและใจเย็นเป็นกุญแจสำคัญ วัฒนธรรมไทยมองว่าการขึ้นเสียงคือการขาดสติ"
        }
      },
      {
        score: 6,
        text: {
          FR: "Argumenter de manière passionnée, directe et vive pour prouver votre point de vue, comme il est coutume en France.",
          EN: "Argue passionately, directly, and loudly to prove your point, as is customary in Western culture.",
          TH: "โต้เถียงอย่างตรงไปตรงมาและดุดันเพื่อแสดงเหตุผลส่วนตนเต็มที่ ตามแนวคิดแบบตะวันตกที่เน้นความชัดเจน"
        },
        explanation: {
          FR: "Incompréhension : L'expression vive et directe est vécue comme une agression brutale par le partenaire thaï.",
          EN: "Misunderstanding: Direct and loud arguing is experienced as physical aggression by a Thai partner.",
          TH: "อาจเข้าใจผิด: การโต้เถียงด้วยอารมณ์รุนแรงอาจทำให้ฝ่ายไทยรู้สึกหวาดกลัว รู้สึกไม่ปลอดภัย และถอยห่างเพื่อเลี่ยงความขัดแย้ง"
        }
      },
      {
        score: 2,
        text: {
          FR: "S'enfermer dans un silence de marbre pendant trois jours sans donner aucune explication.",
          EN: "Shut down in absolute silence for three days without giving any explanation.",
          TH: "เงียบประชดประชัน ไม่ยอมพูดจาด้วยเลยเป็นเวลาหลายวันโดยไม่มีคำอธิบายใดๆ"
        },
        explanation: {
          FR: "Destructeur : Le mutisme prolongé ronge le lien d'attachement et crée un stress émotionnel inutile.",
          EN: "Destructive: Prolonged silent treatment erodes the emotional connection and breeds chronic anxiety.",
          TH: "บ่อนทำลายคู่: การเงียบตึงใส่กันข้ามวันรังแต่จะบั่นทอนความรู้สึกและสะสมความอึดอัดใจ"
        }
      }
    ]
  },
  {
    id: 3,
    category: 'intimacy',
    title: {
      FR: "Affection publique",
      EN: "Public Affection",
      TH: "การแสดงความรักในที่สาธารณะ"
    },
    scenario: {
      FR: "Vous vous promenez dans un centre commercial ou un parc très fréquenté à Bangkok.",
      EN: "You are walking through a busy shopping mall or park in Bangkok.",
      TH: "คุณกับคนรักกำลังเดินเล่นในห้างสรรพสินค้าหรือสวนสาธารณะที่มีผู้คนหนาแน่นในกรุงเทพฯ"
    },
    options: [
      {
        score: 10,
        text: {
          FR: "Se tenir pudiquement par la main ou par le bras, en évitant les baisers passionnés sur la bouche devant les autres.",
          EN: "Hold hands or lock arms modestly, avoiding passionate kissing on the mouth in front of others.",
          TH: "จับมือหรือเดินควงแขนกันอย่างสุภาพ น่ารัก หลีกเลี่ยงการกอดจูบอย่างดูดดื่มต่อหน้าธารกำนัล"
        },
        explanation: {
          FR: "Bravo ! C'est le juste milieu : affectueux mais respectueux des normes de pudeur thaïlandaises.",
          EN: "Bravo! The perfect sweet spot: affectionate yet deeply respectful of Thai societal standards of modesty.",
          TH: "เก่งมาก! นี่คือความพอดีที่แสดงความรักและให้เกียรติขนบธรรมเนียมอันเรียบร้อยของสังคมไทยไปพร้อมกัน"
        }
      },
      {
        score: 5,
        text: {
          FR: "S'embrasser langoureusement à chaque coin de rue pour prouver votre passion romantique.",
          EN: "Kiss passionately on every street corner to show off your romantic connection.",
          TH: "แสดงความรักอย่างเปิดเผยและแสดงอารมณ์รักหวือหวาเพื่อยืนยันความโรแมนติกแบบตะวันตก"
        },
        explanation: {
          FR: "Inconfort : Le partenaire thaïlandais (et l'entourage) ressentira une gêne intense (perte de dignité / 'Face').",
          EN: "Discomfort: Your Thai partner (and bystanders) will feel intense discomfort and loss of face.",
          TH: "ขัดเขินใจ: การแสดงออกที่เกินงามอาจทำให้ฝ่ายไทยรู้สึกอายและเสียหน้าท่ามกลางคนรอบข้าง"
        }
      },
      {
        score: 4,
        text: {
          FR: "Garder une distance de 1 mètre et refuser tout contact physique pour ne pas froisser la culture.",
          EN: "Keep a 1-meter distance and refuse any physical touch to avoid offending the culture.",
          TH: "เดินห่างกันเป็นเมตรและหลีกเลี่ยงการสัมผัสตัวโดยสิ้นเชิงเพื่อป้องกันไม่ให้ขัดต่อวัฒนธรรม"
        },
        explanation: {
          FR: "Froid : Une distance excessive peut être interprétée comme un désintérêt amoureux ou de la froideur.",
          EN: "Cold: Excessive physical distance can be misconstrued as coldness or a lack of romantic interest.",
          TH: "เหินห่างเกินไป: การรักษาระยะห่างมากไปอาจถูกตีความผิดว่าไม่มีความเสน่หาหรือเย็นชาต่อกัน"
        }
      }
    ]
  },
  {
    id: 4,
    category: 'finance',
    title: {
      FR: "Le Sinsod (Dot de mariage)",
      EN: "The Sinsod (Dowry Tradition)",
      TH: "พิธีสินสอดทองหมั้น"
    },
    scenario: {
      FR: "Vous abordez le sujet du Sinsod en vue d'officialiser votre union devant la communauté.",
      EN: "You approach the topic of Sinsod ahead of formalizing your wedding within the community.",
      TH: "เมื่อมีการพูดคุยหารือเกี่ยวกับการจัดเตรียม 'สินสอด' เพื่อการแต่งงานที่เป็นเกียรติแก่ครอบครัว"
    },
    options: [
      {
        score: 10,
        text: {
          FR: "Comprendre que c'est un honneur social pour les parents, en discuter à l'avance pour fixer une somme réaliste, souvent restituée discrètement après la cérémonie.",
          EN: "Understand it represents social honor for the parents, discuss it in advance to set a realistic amount, which is often quietly returned after the ceremony.",
          TH: "ศึกษาความหมายที่แท้จริงว่าเป็นเกียรติยศของพ่อแม่ฝ่ายหญิง ปรึกษาตกลงยอดที่เหมาะสมล่วงหน้า ซึ่งส่วนใหญ่จะมอบคืนให้คู่สมรสตั้งตัว"
        },
        explanation: {
          FR: "Parfait ! Vous alliez réalisme financier occidental et respect de la fierté sociale de la belle-famille.",
          EN: "Perfect! You combine Western financial realism with respect for the in-laws' social pride.",
          TH: "สุดยอดมาก! การเปิดใจเข้าใจมุมมองนี้ช่วยลดความขัดแย้ง และแสดงความเคารพต่อความรักของบิดามารดาผู้ให้กำเนิดอย่างงดงาม"
        }
      },
      {
        score: 4,
        text: {
          FR: "S'énerver et accuser la famille de vouloir 'vendre' leur fille pour s'enrichir.",
          EN: "Get angry and accuse the family of trying to 'sell' their daughter for money.",
          TH: "แสดงความโกรธเคืองและกล่าวหาว่าครอบครัวฝ่ายหญิงกำลังใช้ประเพณีเพื่อ 'ซื้อขาย' หรือหาผลประโยชน์"
        },
        explanation: {
          FR: "Choc culturel : Cette accusation est une insulte d'une violence extrême qui peut briser définitivement le couple.",
          EN: "Cultural Shock: This accusation is an extremely violent insult that can permanently break the relationship.",
          TH: "วิกฤตความสัมพันธ์: คำพูดรุนแรงทำนองนี้ถือเป็นการลบหลู่เกียรติของวงศ์ตระกูลฝ่ายหญิงอย่างร้ายแรงที่สุด"
        }
      },
      {
        score: 6,
        text: {
          FR: "Accepter sans sourciller un montant exorbitant qui vous pousse au surendettement pour impressionner les villageois.",
          EN: "Accept an exorbitant amount without questioning it, driving yourself into debt just to impress the villagers.",
          TH: "ยอมตกลงตามยอดเรียกเก็บที่สูงเกินกำลังทรัพย์จริงเพื่ออวดบารมี จนต้องไปกู้หนี้ยืมสินมาแต่ง"
        },
        explanation: {
          FR: "Déséquilibre : Mettre en danger la santé financière du couple pour le paraître est une grave erreur de gestion.",
          EN: "Imbalance: Jeopardizing the couple's financial health just for appearance is a major management error.",
          TH: "ไม่สมดุล: การสร้างหนี้ตั้งแต่เริ่มต้นชีวิตคู่เพื่อหน้าตาทางสังคมส่งผลเสียต่อความมั่นคงในระยะยาว"
        }
      }
    ]
  },
  {
    id: 5,
    category: 'communication',
    title: {
      FR: "Décoder le 'Kreng Jai' et le silence",
      EN: "Decoding 'Kreng Jai' and Silence",
      TH: "การตีความความเกรงใจและการนิ่งเงียบ"
    },
    scenario: {
      FR: "Votre partenaire thaïlandaise vous dit avec un sourire timide 'Comme tu veux, tout me va' (Mai Pen Rai), mais semble un peu pensive.",
      EN: "Your Thai partner tells you with a shy smile 'Up to you, anything is fine' (Mai Pen Rai), but seems a bit thoughtful.",
      TH: "คนรักเอ่ยปากบอกว่า 'แล้วแต่เลย อะไรก็ได้ (ไม่เป็นไร)' พร้อมรอยยิ้มบางๆ แต่แววตาดูครุ่นคิดเป็นกังวล"
    },
    options: [
      {
        score: 10,
        text: {
          FR: "Prendre le temps d'observer, lui poser doucement la question à plusieurs reprises avec affection, et lui assurer qu'exprimer son envie de cœur vous rend heureux.",
          EN: "Take time to observe, ask gently and affectionately more than once, and reassure her that knowing her true heart's desire makes you happy.",
          TH: "สังเกตท่าทีอย่างใส่ใจ ค่อยๆ ถามไถ่ด้วยความนุ่มนวลและอ่อนโยนเพื่อแสดงให้เห็นว่าความคิดเห็นของเธอสำคัญสำหรับคุณ"
        },
        explanation: {
          FR: "Magique ! C'est la clé pour contourner le Kreng Jai et permettre à l'autre de s'ouvrir en sécurité.",
          EN: "Magic! This is the golden key to bypass Kreng Jai and let your partner open up safely.",
          TH: "วิเศษมาก! นี่คือวิธีทะลุกำแพงความเกรงใจ ช่วยให้ฝ่ายหญิงรู้สึกปลอดภัยที่จะพูดความในใจอย่างแท้จริง"
        }
      },
      {
        score: 5,
        text: {
          FR: "Prendre ses mots au pied de la lettre, décider seul et passer à autre chose sans chercher à comprendre.",
          EN: "Take her words literally, make the decision alone, and move on without looking deeper.",
          TH: "เชื่อตามคำพูดนั้นทันทีโดยไม่ติดใจ แล้วข้ามไปตัดสินใจเองคนเดียวโดยไม่ถามต่อ"
        },
        explanation: {
          FR: "Incompréhension : À force d'ignorer ses souhaits inexprimés, elle finira par ressentir de l'isolement et de la tristesse.",
          EN: "Misunderstanding: By ignoring unexpressed wishes, your partner will eventually feel lonely and unheard.",
          TH: "อาจสะสมปัญหา: การมองข้ามความรู้สึกที่ซ่อนอยู่นานวันเข้า จะทำให้เธอรู้สึกไม่มีตัวตนและอึดอัดใจ"
        }
      }
    ]
  },
  {
    id: 6,
    category: 'intimacy',
    title: {
      FR: "La notion de liberté individuelle",
      EN: "Individual Freedom Dynamics",
      TH: "พื้นที่ส่วนตัวและความเป็นอิสระของกันและกัน"
    },
    scenario: {
      FR: "Votre partenaire souhaite passer une soirée entière au téléphone avec ses amis ou sa famille au pays, alors que vous aviez prévu un film.",
      EN: "Your partner wants to spend an entire evening on the phone with family or friends back home, when you had planned a movie.",
      TH: "คนรักต้องการใช้เวลาคุยโทรศัพท์ยาวนานกับครอบครัวหรือเพื่อนฝูงในไทย ในเย็นวันที่คุณตั้งใจจะดูภาพยนตร์ด้วยกัน"
    },
    options: [
      {
        score: 10,
        text: {
          FR: "Respecter ce besoin vital de connexion avec sa communauté, lui accorder ce temps chaleureusement, et planifier la soirée cinéma le lendemain.",
          EN: "Respect this vital connection with their community, grant them this time warmly, and reschedule the movie night for tomorrow.",
          TH: "เคารพและเข้าใจในความผูกพันกับครอบครัว อนุญาตให้เธอได้พูดคุยอย่างเต็มใจ แล้วจึงเลื่อนเวลาดูหนังเป็นวันรุ่งขึ้นแทน"
        },
        explanation: {
          FR: "Excellent. La cohésion sociale et familiale est un pilier de l'identité et du bonheur d'un Thaïlandais.",
          EN: "Excellent. Social and family cohesion is a pillar of a Thai person's identity and happiness.",
          TH: "ดีเยี่ยม การเข้าใจความผูกพันของครอบครัวคนไทยเป็นเรื่องพื้นฐานที่ทำให้ชีวิตคู่ต่างวัฒนธรรมดำเนินไปได้อย่างราบรื่น"
        }
      },
      {
        score: 4,
        text: {
          FR: "Bouder ou vous énerver, en reprochant à votre partenaire de faire passer sa famille avant votre couple.",
          EN: "Pout or get angry, complaining that your partner values their family more than your relationship.",
          TH: "แง่งอนหรือโกรธเคือง และตัดพ้อว่าคนรักให้ความสำคัญกับครอบครัวมากกว่าตัวคุณ"
        },
        explanation: {
          FR: "Douloureux : Mettre un Thaïlandais en demeure de choisir entre sa famille et son conjoint crée un déchirement intime.",
          EN: "Painful: Forcing a Thai person to choose between family and partner causes deep emotional distress.",
          TH: "สร้างรอยร้าว: การบังคับให้คนไทยเลือกฝั่งระหว่างคนรักกับครอบครัวมีแต่จะสร้างความขมขื่นใจ"
        }
      }
    ]
  }
];

export default function HarmonyAssessmentView({ lang, userRole }: HarmonyAssessmentProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [scoreHistory, setScoreHistory] = useState<{ score: number; date: string }[]>([]);

  // Load history on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sawasdee_harmony_history');
      if (stored) {
        setScoreHistory(JSON.parse(stored));
      }
      
      const storedAnswers = localStorage.getItem('sawasdee_harmony_answers');
      const storedCompleted = localStorage.getItem('sawasdee_harmony_completed') === 'true';
      if (storedAnswers) {
        setAnswers(JSON.parse(storedAnswers));
      }
      if (storedCompleted) {
        setIsCompleted(true);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSelectOption = (score: number) => {
    const updatedAnswers = { ...answers, [assessmentQuestions[currentQuestionIdx].id]: score };
    setAnswers(updatedAnswers);
    localStorage.setItem('sawasdee_harmony_answers', JSON.stringify(updatedAnswers));

    if (currentQuestionIdx < assessmentQuestions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      // Calculate final scores
      const totalScore = (Object.values(updatedAnswers) as number[]).reduce((sum: number, val: number) => sum + val, 0);
      const maxScore = assessmentQuestions.length * 10;
      const percentScore = Math.round((totalScore / maxScore) * 100);

      const newHistoryItem = {
        score: percentScore,
        date: new Date().toLocaleDateString(lang === 'FR' ? 'fr-FR' : lang === 'EN' ? 'en-US' : 'th-TH', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      };

      const updatedHistory = [newHistoryItem, ...scoreHistory].slice(0, 5);
      setScoreHistory(updatedHistory);
      localStorage.setItem('sawasdee_harmony_history', JSON.stringify(updatedHistory));
      localStorage.setItem('sawasdee_harmony_completed', 'true');
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setIsCompleted(false);
    localStorage.removeItem('sawasdee_harmony_answers');
    localStorage.removeItem('sawasdee_harmony_completed');
  };

  const getHarmonyLabel = (score: number) => {
    if (score >= 85) {
      return {
        title: { FR: "Harmonie Biculturelle Sublime", EN: "Sublime Bicultural Harmony", TH: "ความเข้าใจอันดีเยี่ยมและสมบูรณ์" },
        desc: {
          FR: "Félicitations ! Vous possédez une empathie culturelle rare et une intuition aiguisée des subtilités thaïlandaises et occidentales. Votre couple repose sur des bases extrêmement solides.",
          EN: "Congratulations! You display rare cultural empathy and a sharp understanding of Thai-Western dynamics. Your relationship is built on solid foundations.",
          TH: "ขอแสดงความยินดีด้วย! คุณและคู่รักมีความเข้าใจและเคารพในวัฒนธรรมของกันและกันเป็นอย่างดียิ่ง ความสัมพันธ์ของคุณตั้งอยู่บนรากฐานที่มั่นคงและสวยงามอย่างมาก"
        },
        color: "text-emerald-700 bg-emerald-50 border-emerald-200"
      };
    } else if (score >= 60) {
      return {
        title: { FR: "Équilibre et Apprentissage En Cours", EN: "Balanced & Evolving Understanding", TH: "ความเข้าใจในระดับปานกลางและกำลังพัฒนา" },
        desc: {
          FR: "Bon travail ! Vous comprenez les fondamentaux de la culture de l'autre, mais certains ajustements de communication et d'empathie quotidienne renforceront encore votre harmonie financière et intime.",
          EN: "Good job! You grasp the fundamentals of each other's culture, but fine-tuning your daily communication and financial alignment will further prevent friction.",
          TH: "ดีมาก! คุณเข้าใจแนวคิดพื้นฐานของคนรักต่างชาติได้ดีแล้ว แต่ยังมีบางจุดเรื่องการเงินและการสื่อสารในชีวิตประจำวันที่สามารถขยับปรับจูนเพิ่มเติมร่วมกันได้"
        },
        color: "text-amber-700 bg-amber-50 border-amber-200"
      };
    } else {
      return {
        title: { FR: "Choc Culturel Actif (Points de Vigilance)", EN: "Cultural Clashes Present (Focus Needed)", TH: "มีความเข้าใจที่คลาดเคลื่อนและต้องระมัดระวัง" },
        desc: {
          FR: "Attention. Plusieurs points de friction majeurs (finances, famille, expression des limites) menacent la fluidité de votre couple. Lisez attentivement les 20 modules de l'Académie pour désamorcer les conflits.",
          EN: "Take care. Several key friction points (finances, family duty, expressing personal limits) are putting pressure on your relationship. Study the Academy modules to avoid silent resentment.",
          TH: "ต้องระมัดระวังเป็นพิเศษ มีความเห็นหรือแนวคิดบางอย่างเรื่องการเงินและครอบครัวที่ขัดแย้งกันค่อนข้างชัดเจน แนะนำให้เปิดใจศึกษาคู่มือทั้ง 20 บทเรียนเพื่อหาทางออกร่วมกัน"
        },
        color: "text-rose-700 bg-rose-50 border-rose-200"
      };
    }
  };

  // Calculate scores per dimension
  const getDimensionScores = () => {
    let financeTotal = 0, financeCount = 0;
    let commTotal = 0, commCount = 0;
    let intimacyTotal = 0, intimacyCount = 0;

    assessmentQuestions.forEach((q) => {
      const score = answers[q.id] || 0;
      if (q.category === 'finance') {
        financeTotal += score;
        financeCount++;
      } else if (q.category === 'communication') {
        commTotal += score;
        commCount++;
      } else if (q.category === 'intimacy') {
        intimacyTotal += score;
        intimacyCount++;
      }
    });

    return {
      finance: financeCount > 0 ? Math.round((financeTotal / (financeCount * 10)) * 100) : 0,
      communication: commCount > 0 ? Math.round((commTotal / (commCount * 10)) * 100) : 0,
      intimacy: intimacyCount > 0 ? Math.round((intimacyTotal / (intimacyCount * 10)) * 100) : 0
    };
  };

  const dimScores = getDimensionScores();
  const overallScore = Math.round(
    (Object.values(answers) as number[]).reduce((sum: number, val: number) => sum + val, 0) / (assessmentQuestions.length * 10) * 100
  );

  const activeQuestion = assessmentQuestions[currentQuestionIdx];
  const progressPercent = Math.round(((currentQuestionIdx) / assessmentQuestions.length) * 100);

  const t = {
    testTitle: { FR: "Bilan d'Harmonie Biculturelle", EN: "Bicultural Harmony Assessment", TH: "แบบทดสอบความสอดคล้องทางวัฒนธรรม" },
    testIntro: {
      FR: "Mesurez scientifiquement la synergie et la compatibilité de votre couple face aux situations concrètes de la vie franco-thaïlandaise.",
      EN: "Scientifically assess your couple's alignment and mutual understanding through practical Franco-Thai relational scenarios.",
      TH: "วัดความเข้าใจและประเมินระดับความสอดคล้องในคู่รักไทย-ต่างชาติ ผ่านสถานการณ์จริงที่พบบ่อย"
    },
    startTestBtn: { FR: "Commencer le Bilan", EN: "Start Assessment", TH: "เริ่มทำแบบทดสอบ" },
    progressLabel: { FR: "Progression du Bilan", EN: "Assessment Progress", TH: "ความคืบหน้าแบบทดสอบ" },
    questionOf: { FR: "Situation", EN: "Situation", TH: "สถานการณ์ที่" },
    yourDiagnosis: { FR: "Votre Diagnostic d'Harmonie", EN: "Your Harmony Diagnostics", TH: "ผลลัพธ์การวินิจฉัยความสอดคล้องในคู่ของคุณ" },
    dimensionsTitle: { FR: "Analyse par Dimension de Vie", EN: "Analysis by Life Dimension", TH: "คะแนนเจาะลึกแต่ละมิติความสัมพันธ์" },
    dimensionFinance: { FR: "Finances & Famille", EN: "Finances & Family Duty", TH: "การจัดการเงินและครอบครัว" },
    dimensionComm: { FR: "Communication & Jai Yen", EN: "Communication & Keeping Calm", TH: "การสื่อสารและการใช้อารมณ์" },
    dimensionIntimacy: { FR: "Affection & Intimité", EN: "Affection & Private Modesty", TH: "การแสดงความรักและพื้นที่ส่วนตัว" },
    retakeTest: { FR: "Refaire le Bilan", EN: "Retake Assessment", TH: "ทำแบบทดสอบอีกครั้ง" },
    testHistory: { FR: "Historique de vos bilans", EN: "Your Assessment History", TH: "ประวัติผลการทดสอบของคุณ" }
  };

  return (
    <div id="harmony-assessment-view-container" className="bg-white rounded-2xl border border-[#e5e1da] p-6 sm:p-8 space-y-8 shadow-sm">
      
      {/* View Header */}
      <div className="border-b border-[#e5e1da] pb-6 space-y-2">
        <div className="flex items-center gap-2.5">
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-[#403d39]">
            {t.testTitle[lang]}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl font-serif">
          {t.testIntro[lang]}
        </p>
      </div>

      {!isCompleted ? (
        <div className="space-y-6">
          {/* Question Stepper Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <span>{t.progressLabel[lang]}</span>
              <span>{currentQuestionIdx + 1} / {assessmentQuestions.length}</span>
            </div>
            <div className="w-full bg-[#f0ede6] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-[#e2b07e] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent || 5}%` }}
              />
            </div>
          </div>

          {/* Active Question Panel */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fdfbf7] border border-[#e5e1da] space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#b88c5e] uppercase tracking-wider">
              <span>{t.questionOf[lang]} {activeQuestion.id}</span>
              <span>•</span>
              <span className="bg-amber-100 text-[#b88c5e] px-2 py-0.5 rounded-full text-[9px]">
                {activeQuestion.category === 'finance' 
                  ? t.dimensionFinance[lang] 
                  : activeQuestion.category === 'communication' 
                    ? t.dimensionComm[lang] 
                    : t.dimensionIntimacy[lang]}
              </span>
            </div>
            
            <h3 className="font-serif text-base sm:text-lg font-black text-slate-800 leading-snug">
              {activeQuestion.title[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed italic">
              "{activeQuestion.scenario[lang]}"
            </p>
          </div>

          {/* Options List */}
          <div className="grid grid-cols-1 gap-3">
            {activeQuestion.options.map((option, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(option.score)}
                className="text-left p-4 sm:p-5 rounded-xl border border-[#e5e1da] hover:border-[#e2b07e] bg-white hover:bg-[#fdfbf7] transition-all duration-300 shadow-2xs hover:shadow-sm flex items-start gap-3.5 group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-[#e2b07e] group-hover:bg-[#e2b07e]/10 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-[#b88c5e] shrink-0 mt-0.5 transition-colors">
                  {String.fromCharCode(65 + idx)}
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                    {option.text[lang]}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-8 animate-fade-in">
          
          {/* Diagnostic Card */}
          {(() => {
            const diag = getHarmonyLabel(overallScore);
            return (
              <div className={`p-6 sm:p-8 rounded-2xl border ${diag.color} space-y-4`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {t.yourDiagnosis[lang]}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-black">
                      {diag.title[lang]}
                    </h3>
                  </div>

                  {/* Big Circular Score */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-200">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle 
                        cx="100%" 
                        cy="100%" 
                        r="34" 
                        className="stroke-slate-100" 
                        strokeWidth="6"
                        fill="transparent"
                      />
                      {/* We mock standard CSS percentage circles using absolute values or direct dash offsets */}
                    </svg>
                    <div className="text-center">
                      <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tighter">
                        {overallScore}%
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {diag.desc[lang]}
                </p>
              </div>
            );
          })()}

          {/* Dimension scores breakdown */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-black text-[#403d39] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#b88c5e]" />
              {t.dimensionsTitle[lang]}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Finance Dimension bar */}
              <div className="p-4 rounded-xl border border-[#e5e1da] bg-slate-50/50 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-600">{t.dimensionFinance[lang]}</span>
                  <span className="font-extrabold text-[#b88c5e]">{dimScores.finance}%</span>
                </div>
                <div className="w-full bg-[#efece6] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${dimScores.finance}%` }}
                  />
                </div>
              </div>

              {/* Communication Dimension bar */}
              <div className="p-4 rounded-xl border border-[#e5e1da] bg-slate-50/50 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-600">{t.dimensionComm[lang]}</span>
                  <span className="font-extrabold text-teal-600">{dimScores.communication}%</span>
                </div>
                <div className="w-full bg-[#efece6] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${dimScores.communication}%` }}
                  />
                </div>
              </div>

              {/* Intimacy Dimension bar */}
              <div className="p-4 rounded-xl border border-[#e5e1da] bg-slate-50/50 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-600">{t.dimensionIntimacy[lang]}</span>
                  <span className="font-extrabold text-rose-500">{dimScores.intimacy}%</span>
                </div>
                <div className="w-full bg-[#efece6] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-rose-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${dimScores.intimacy}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive history and reset controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e5e1da]/60">
            {scoreHistory.length > 1 ? (
              <div className="text-left space-y-1 w-full sm:w-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  {t.testHistory[lang]}
                </span>
                <div className="flex flex-wrap gap-2">
                  {scoreHistory.map((h, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f7f3ed] border border-[#e5e1da] text-slate-500">
                      {h.date}: <strong className="text-slate-800">{h.score}%</strong>
                    </span>
                  ))}
                </div>
              </div>
            ) : <div />}

            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2.5 rounded-lg text-xs font-black bg-[#e2b07e] text-white hover:bg-[#d4a06d] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-98 w-full sm:w-auto justify-center"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t.retakeTest[lang]}</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
