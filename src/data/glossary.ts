import { GlossaryItem } from '../types';

export const glossaryItems: GlossaryItem[] = [
  {
    id: "g1",
    term: "Kreng Jai",
    thaiScript: "เกรงใจ",
    phonetic: "kreng-chai",
    definition: {
      FR: "Considération extrême pour les sentiments d'autrui, volonté absolue de ne pas déranger, gêner ou imposer un fardeau psychologique ou physique à quelqu'un.",
      EN: "Extreme consideration for another person's feelings, leading to an absolute desire to avoid disturbing, annoying, or imposing any burden on them.",
      TH: "ความเกรงใจ การคำนึงถึงความรู้สึกของผู้อื่นเป็นหลัก มีความพยายามที่จะไม่รบกวนหรือสร้างภาระให้แก่ผู้อื่น"
    },
    category: {
      FR: "Culture & Société",
      EN: "Culture & Society",
      TH: "วัฒนธรรมและสังคม"
    }
  },
  {
    id: "g2",
    term: "Sin Sod",
    thaiScript: "สินสอด",
    phonetic: "sin-sot",
    definition: {
      FR: "Dot traditionnelle thaïlandaise versée par le futur marié aux parents de sa fiancée en gage de respect, de gratitude ('Kha Nam Nom') et pour témoigner de sa solidité financière.",
      EN: "Traditional Thai dowry paid by the groom to the bride's parents as a sign of respect, gratitude for her upbringing, and proof of financial security.",
      TH: "เงินหรือทรัพย์สินที่ฝ่ายชายมอบให้แก่บิดามารดาหรือผู้ปกครองฝ่ายหญิง เพื่อตอบแทนที่ยินยอมให้จดทะเบียนสมรส"
    },
    category: {
      FR: "Mariage & Coutumes",
      EN: "Marriage & Customs",
      TH: "การแต่งงานและประเพณี"
    }
  },
  {
    id: "g3",
    term: "Jai Yen",
    thaiScript: "ใจเย็น",
    phonetic: "chai-yen",
    definition: {
      FR: "Littéralement 'cœur frais'. Désigne l'état d'esprit calme, serein, patient et maître de soi, jugé indispensable en Thaïlande pour résoudre tout conflit de manière digne.",
      EN: "Literally 'cool heart'. Refers to a state of calm, patience, and self-control, considered essential in Thailand for resolving conflicts with dignity.",
      TH: "ใจเย็น การควบคุมอารมณ์ให้สงบ ไม่โกรธง่าย มีความอดทนอดกลั้นในการแก้ปัญหา"
    },
    category: {
      FR: "Culture & Société",
      EN: "Culture & Society",
      TH: "วัฒนธรรมและสังคม"
    }
  },
  {
    id: "g4",
    term: "Amphur",
    thaiScript: "อำเภอ",
    phonetic: "am-phoe",
    definition: {
      FR: "Bureau de district administratif en Thaïlande où s'enregistrent officiellement les actes civils, y compris le mariage civil légal.",
      EN: "Administrative district office in Thailand where all civil registries are officially processed, including legally binding marriages.",
      TH: "ส่วนราชการบริหารส่วนภูมิภาคซึ่งเป็นสถานที่ในการจดทะเบียนสมรสและทำธุรกรรมด้านทะเบียนราษฎร์ต่างๆ"
    },
    category: {
      FR: "Aspects Légaux",
      EN: "Legal Aspects",
      TH: "แง่กฎหมาย"
    }
  },
  {
    id: "g5",
    term: "Usufruit",
    thaiScript: "สิทธิเก็บกิน",
    phonetic: "sithi-kep-kin",
    definition: {
      FR: "Droit réel accordant à un étranger le droit légal d'occuper, de louer et d'exploiter à vie un terrain ou une maison en Thaïlande, enregistré auprès du bureau des terres ('Land Office').",
      EN: "A real property right granting a foreigner the legal right to live in, rent, or manage a house or land for life, officially registered on the land title deed.",
      TH: "ทรัพยสิทธิที่ให้อำนาจแก่ผู้ทรงสิทธิ์ในการครอบครอง ใช้ประโยชน์ และจัดการทรัพย์สินของผู้อื่นได้ตลอดชีวิตหรือตามเวลาที่กำหนด"
    },
    category: {
      FR: "Aspects Légaux",
      EN: "Legal Aspects",
      TH: "แง่กฎหมาย"
    }
  },
  {
    id: "g6",
    term: "CCAM",
    thaiScript: "ใบรับรองความสามารถในการสมรส",
    phonetic: "c-c-a-m",
    definition: {
      FR: "Certificat de Capacité à Mariage délivré par l'Ambassade de France après publication des bans. Étape préalable et obligatoire avant de célébrer un mariage binational.",
      EN: "Certificate of Capacity to Marry issued by the French Embassy. A mandatory prior step required before registering a Franco-Thai civil marriage.",
      TH: "เอกสารที่ออกโดยสถานทูตฝรั่งเศสเพื่อรับรองว่าบุคคลสัญชาติฝรั่งเศสมีคุณสมบัติและสถานะพร้อมที่จะสมรสตามกฎหมาย"
    },
    category: {
      FR: "Aspects Légaux",
      EN: "Legal Aspects",
      TH: "แง่กฎหมาย"
    }
  },
  {
    id: "g7",
    term: "Transcription",
    thaiScript: "การบันทึกฐานะแห่งครอบครัว",
    phonetic: "tran-scrip-tion",
    definition: {
      FR: "Procédure d'enregistrement du mariage célébré à l'étranger dans les registres d'état civil de la République Française, permettant la délivrance du Livret de Famille.",
      EN: "Legal process of recording a marriage celebrated abroad onto the French Civil Registry, yielding the official French Family Record Book.",
      TH: "การคัดลอกหรือบันทึกทะเบียนสมรสของไทยเข้าสู่ระบบทะเบียนของฝรั่งเศสอย่างเป็นทางการเพื่อออกใบสมุดครอบครัวฝรั่งเศส"
    },
    category: {
      FR: "Aspects Légaux",
      EN: "Legal Aspects",
      TH: "แง่กฎหมาย"
    }
  },
  {
    id: "g8",
    term: "Wai",
    thaiScript: "ไหว้",
    phonetic: "wai",
    definition: {
      FR: "Geste de salutation traditionnel consistant à joindre les paumes de mains au niveau du buste ou du visage tout en inclinant légèrement la tête, symbolisant le respect et l'harmonie.",
      EN: "Traditional Thai greeting gesture consisting of pressing the palms together near the chest or face while slightly bowing, showing respect and peace.",
      TH: "การแสดงความเคารพทักทayแบบไทยโดยการพนมมือทั้งสองข้างขึ้นจรดใบหน้าและก้มศีรษะลงเล็กน้อย"
    },
    category: {
      FR: "Culture & Société",
      EN: "Culture & Society",
      TH: "วัฒนธรรมและสังคม"
    }
  },
  {
    id: "g9",
    term: "Bunkhun",
    thaiScript: "บุญคุณ",
    phonetic: "bun-khun",
    definition: {
      FR: "Dette spirituelle et morale de gratitude infinie contractée envers les parents ou bienfaiteurs, exigeant respect constant et assistance financière réciproque.",
      EN: "Spiritual and moral debt of gratitude contracted towards parents or benefactors, demanding lifelong respect and reciprocal care.",
      TH: "ความดีหรือการเกื้อหนุนที่ผู้อื่นมอบให้ ซึ่งสร้างพันธะทางศีลธรรมในการทดแทนพระคุณยามเหมาะสม"
    },
    category: {
      FR: "Culture & Société",
      EN: "Culture & Society",
      TH: "วัฒนธรรมและสังคม"
    }
  },
  {
    id: "g10",
    term: "OPOL",
    thaiScript: "หนึ่งคนหนึ่งภาษา",
    phonetic: "o-p-o-l",
    definition: {
      FR: "Méthode éducative 'One Parent, One Language' : chaque parent parle exclusivement sa langue maternelle à l'enfant afin de cultiver un bilinguisme naturel parfait.",
      EN: "Educational method 'One Parent, One Language': each parent speaks exclusively their native language to the child to foster effortless, natural bilingualism.",
      TH: "แนวทางการเลี้ยงลูกสองภาษาโดยให้พ่อแม่แต่ละคนพูดคุยกับลูกด้วยภาษาแม่ของตนเองอย่างสม่ำเสมอเพื่อไม่ให้สับสน"
    },
    category: {
      FR: "Vie Quotidienne",
      EN: "Daily Life",
      TH: "ชีวิตประจำวัน"
    }
  }
];
