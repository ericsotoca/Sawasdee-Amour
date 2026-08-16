import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: {
      FR: "Les Codes de Communication Interculturelle",
      EN: "Intercultural Communication Codes",
      TH: "รหัสการสื่อสารระหว่างวัฒนธรรม"
    },
    subtitle: {
      FR: "Décoder l'art du non-dit et de l'harmonie sociale",
      EN: "Decoding the art of non-verbal cues and social harmony",
      TH: "ถอดรหัสศิลปะแห่งการไม่พูดและความกลมเกลียวทางสังคม"
    },
    durationMinutes: 15,
    concepts: [
      {
        FR: {
          title: "Contexte fort vs Contexte faible",
          content: "La France est une culture à contexte faible : la communication est directe, explicite et logique. La Thaïlande est une culture à contexte fort : la communication est indirecte, s'appuie sur le contexte, les relations, l'art du non-dit et la préservation de la face (saving face). Dire 'non' directement est évité en Thaïlande car cela est perçu comme impoli."
        },
        EN: {
          title: "High Context vs Low Context",
          content: "France has a low-context culture: communication is direct, explicit, and logical. Thailand has a high-context culture: communication is indirect, relying on environment, relationships, non-verbal cues, and 'saving face'. Saying 'no' directly is avoided in Thailand as it is considered impolite."
        },
        TH: {
          title: "บริบทสูง vs บริบต่ำ",
          content: "ฝรั่งเศสเป็นวัฒนธรรมบริบทต่ำ (Low-context): การสื่อสารเป็นไปอย่างตรงไปตรงมา ชัดเจน และมีเหตุผล ส่วนประเทศไทยเป็นวัฒนธรรมบริบทสูง (High-context): การสื่อสารเป็นทางอ้อม อาศัยบริบท ความสัมพันธ์ ศิลปะแห่งการไม่พูด และการรักษาหน้า การปฏิเสธตรงๆ มักจะหลีกเลี่ยงในประเทศไทยเพราะถือว่าไม่สุภาพ"
        }
      },
      {
        FR: {
          title: "Décoder le Sourire Thaïlandais",
          content: "En Occident, un sourire exprime principalement la joie. En Thaïlande, le sourire ('Yim') possède plus de 13 nuances distinctes. Il peut exprimer la politesse, la gêne, l'excuse, la tristesse ou la volonté de désamorcer une tension ('Yim thak thai' pour la salutation, 'Yim chuen chom' pour l'admiration, ou 'Yim haeng' pour l'embarras)."
        },
        EN: {
          title: "Decoding the Thai Smile",
          content: "In the West, a smile primarily expresses joy. In Thailand, the smile ('Yim') has more than 13 distinct nuances. It can convey politeness, embarrassment, apology, sadness, or a desire to diffuse tension ('Yim thak thai' for greeting, 'Yim chuen chom' for admiration, or 'Yim haeng' for awkwardness)."
        },
        TH: {
          title: "การถอดรหัสรอยยิ้มไทย",
          content: "ในโลกตะวันตก รอยยิ้มแสดงถึงความสุขเป็นหลัก แต่ในประเทศไทย รอยยิ้ม ('ยิ้ม') มีความหมายที่แตกต่างกันมากกว่า 13 แบบ สามารถแสดงถึงความสุภาพ ความเขินอาย การขอโทษ ความเศร้า หรือความต้องการลดความตึงเครียด (เช่น ยิ้มทักทาย, ยิ้มชื่นชม หรือ ยิ้มแห้ง เมื่อรู้สึกทำตัวไม่ถูก)"
        }
      },
      {
        FR: {
          title: "La gestion du conflit : 'Jai Yen'",
          content: "Le concept de 'Jai Yen' (le cœur frais) est fondamental. Face à un désaccord, élever la voix ou montrer des signes de colère (caractéristique d'un tempérament 'Jai Ron' - cœur chaud) brise l'harmonie et détruit le respect mutuel. Garder son calme et sourire est le seul moyen honorable de résoudre un problème."
        },
        EN: {
          title: "Conflict Management: 'Jai Yen'",
          content: "The concept of 'Jai Yen' (cool heart) is fundamental. Facing a disagreement, raising one's voice or showing signs of anger (typical of a 'Jai Ron' - hot heart - temperament) breaks harmony and destroys mutual respect. Staying calm and smiling is the only honorable way to solve problems."
        },
        TH: {
          title: "การจัดการความขัดแย้ง: 'ใจเย็น'",
          content: "แนวคิดเรื่อง 'ใจเย็น' มีความสำคัญอย่างยิ่ง เมื่อเผชิญกับความเห็นต่าง การขึ้นเสียงหรือแสดงความโกรธ (ซึ่งเป็นลักษณะของคน 'ใจร้อน') จะทำลายความปรองดองและความเคารพซึ่งกันและกัน การรักษาความสงบและรอยยิ้มเป็นวิธีเดียวที่มีเกียรติในการแก้ปัญหา"
        }
      }
    ],
    quiz: [
      {
        id: "q1_1",
        question: {
          FR: "Que signifie une réaction en colère ('Jai Ron') lors d'une discussion en Thaïlande ?",
          EN: "What does an angry reaction ('Jai Ron') signify during a discussion in Thailand?",
          TH: "การแสดงปฏิกิริยาโกรธ ('ใจร้อน') ระหว่างการสนทนาในประเทศไทยหมายถึงอะไร?"
        },
        options: {
          FR: [
            "De la franchise et de l'honnêteté intellectuelle.",
            "Une perte totale de contrôle et de respect mutuel.",
            "Une simple marque d'enthousiasme."
          ],
          EN: [
            "Frankness and intellectual honesty.",
            "A total loss of control and mutual respect.",
            "A simple sign of enthusiasm."
          ],
          TH: [
            "ความตรงไปตรงมาและความซื่อสัตย์ทางความคิด",
            "การสูญเสียการควบคุมตนเองและความเคารพซึ่งกันและกันโดยสิ้นเชิง",
            "เพียงแค่การแสดงความกระตือรือร้น"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Élever la voix ou s'énerver est perçu en Thaïlande comme un manque flagrant d'autodiscipline. Cela rompt immédiatement le respect et ferme la porte à la résolution du problème.",
          EN: "Raising your voice or getting angry is perceived in Thailand as a major lack of self-discipline. It immediately breaks respect and shuts the door to any resolution.",
          TH: "การขึ้นเสียงหรือการแสดงความโกรธในประเทศไทยถูกมองว่าเป็นการขาดการควบคุมตนเองอย่างรุนแรง ซึ่งจะทำลายความเคารพและปิดกั้นการแก้ไขปัญหาทันที"
        }
      },
      {
        id: "q1_2",
        question: {
          FR: "Comment un partenaire thaïlandais exprime-t-il généralement un désaccord ou un refus ?",
          EN: "How does a Thai partner generally express disagreement or refusal?",
          TH: "คู่รักชาวไทยมักแสดงความไม่เห็นด้วยหรือการปฏิเสธอย่างไร?"
        },
        options: {
          FR: [
            "En disant clairement 'Non' avec des arguments logiques.",
            "En évitant de répondre directement ou en souriant doucement.",
            "En lançant un débat philosophique contradictoire."
          ],
          EN: [
            "By clearly saying 'No' accompanied by logical arguments.",
            "By avoiding a direct answer or smiling gently.",
            "By starting a contradictory debate."
          ],
          TH: [
            "โดยการพูดปฏิเสธว่า 'ไม่' อย่างชัดเจนพร้อมเหตุผล",
            "โดยการหลีกเลี่ยงการตอบตรงๆ หรือยิ้มเบาๆ",
            "โดยการเริ่มอภิปรายโต้เถียงกันอย่างเผ็ดร้อน"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La préservation de la face et l'harmonie incitent à éviter un refus direct. Une hésitation, un silence, ou un changement de sujet équivalent souvent à un 'non'.",
          EN: "Saving face and maintaining harmony prevent direct refusal. Hesitation, silence, or changing the subject often equivalent to a soft 'no'.",
          TH: "การรักษาหน้าและความกลมเกลียวทำให้คนไทยเลี่ยงการปฏิเสธตรงๆ ความลังเล ความเงียบ หรือการเปลี่ยนเรื่องพูด มักมีความหมายเท่ากับคำว่า 'ไม่'"
        }
      },
      {
        id: "q1_3",
        question: {
          FR: "Le sourire thaïlandais ('Yim') signifie-t-il toujours de la joie ?",
          EN: "Does the Thai smile ('Yim') always signify joy?",
          TH: "รอยยิ้มของคนไทย ('ยิ้ม') หมายถึงความสุขเสมอไปหรือไม่?"
        },
        options: {
          FR: [
            "Oui, c'est le pays du sourire donc tout le monde est toujours heureux.",
            "Non, il peut exprimer l'embarras, la tristesse ou l'excuse.",
            "Non, c'est un geste purement commercial."
          ],
          EN: [
            "Yes, it is the Land of Smiles, so everyone is always happy.",
            "No, it can express embarrassment, sadness, or apology.",
            "No, it is a purely commercial gesture."
          ],
          TH: [
            "ใช่ เพราะเป็นเมืองยิ้ม ทุกคนจึงมีความสุขตลอดเวลา",
            "ไม่ใช่ รอยยิ้มสามารถแสดงถึงความอาย ความเศร้า หรือการขอโทษได้ด้วย",
            "ไม่ใช่ เป็นเพียงพฤติกรรมทางการค้าเท่านั้น"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le sourire thaïlandais a de multiples facettes sociales. Il sert notamment à masquer des émotions négatives pour ne pas troubler son interlocuteur.",
          EN: "The Thai smile has multiple social dimensions. It is often used to mask negative emotions to avoid troubling the interlocutor.",
          TH: "รอยยิ้มไทยมีมิติทางสังคมที่หลากหลาย มักใช้เพื่อซ่อนความรู้สึกเชิงลบเพื่อไม่ให้คู่สนทนาอึดอัด"
        }
      }
    ]
  },
  {
    id: 2,
    title: {
      FR: "La Structure Familiale et la Société",
      EN: "Family Structure and Society",
      TH: "โครงสร้างครอบครัวและสังคม"
    },
    subtitle: {
      FR: "Comprendre les cercles de priorité et la notion de 'Kreng Jai'",
      EN: "Understanding the priority circles and the concept of 'Kreng Jai'",
      TH: "ทำความเข้าใจวงจรความสำคัญในครอบครัวและแนวคิดเรื่อง 'เกรงใจ'"
    },
    durationMinutes: 18,
    concepts: [
      {
        FR: {
          title: "Le concept de 'Kreng Jai'",
          content: "Le 'Kreng Jai' est l'extrême considération pour les sentiments d'autrui. Cela se traduit par le désir de ne pas déranger, de ne pas imposer de fardeau psychologique ou physique à quelqu'un, même à son partenaire. Cela peut parfois créer des malentendus où un partenaire thaï n'exprime pas un besoin réel par excès de politesse."
        },
        EN: {
          title: "The Concept of 'Kreng Jai'",
          content: "'Kreng Jai' represents extreme consideration for other people's feelings. It translates to a deep desire not to disturb or impose a mental or physical burden on anyone, even a partner. This can lead to misunderstandings where a Thai partner does not express a real need out of extreme politeness."
        },
        TH: {
          title: "แนวคิดเรื่อง 'เกรงใจ'",
          content: "'ความเกรงใจ' คือความใส่ใจต่อความรู้สึกของผู้อื่นอย่างที่สุด หมายถึงความปรารถนาอย่างลึกซึ้งที่จะไม่รบกวนหรือสร้างภาระให้ผู้อื่น แม้กระทั่งกับคู่ชีวิต สิ่งนี้บางครั้งอาจทำให้เกิดความเข้าใจผิดเมื่อคู่รักชาวไทยไม่ยอมบอกความต้องการที่แท้จริงเพราะเกรงใจมากเกินไป"
        }
      },
      {
        FR: {
          title: "La piété filiale et l'ordre social",
          content: "Inspirée des valeurs bouddhistes et confucéennes, la piété filiale est sacrée. Les enfants ont le devoir moral et financier de prendre soin de leurs parents vieillissants (concept de 'Bunkhun' ou dette de gratitude). La structure sociale est strictement hiérarchisée selon l'âge et le statut social."
        },
        EN: {
          title: "Filial Piety and Social Order",
          content: "Inspired by Buddhist and Confucian values, filial piety is sacred. Children have a moral and financial duty to care for their aging parents (the concept of 'Bunkhun' or debt of gratitude). The social structure is strictly hierarchical based on age and social status."
        },
        TH: {
          title: "ความกตัญญูกตเวทีและลำดับขั้นทางสังคม",
          content: "ความกตัญญูกตเวทีเป็นสิ่งที่ศักดิ์สิทธิ์ซึ่งได้รับอิทธิพลจากพุทธศาสนา ลูกๆ มีหน้าที่ทางศีลธรรมและการเงินในการดูแลพ่อแม่ที่แก่ชรา (แนวคิดเรื่อง 'บุญคุณ' หรือหนี้บุญคุณที่ต้องตอบแทน) โครงสร้างทางสังคมมีการแบ่งลำดับขั้นอย่างชัดเจนตามอายุและสถานะ"
        }
      },
      {
        FR: {
          title: "Le rôle des aînés dans le couple",
          content: "Les décisions majeures d'un couple (mariage, investissement, lieu de vie) impliquent souvent l'avis et le consentement des aînés de la famille thaïlandaise. Ignorer ces conseils ou manquer de respect ('Wai' inadéquat, ton inapproprié) peut gravement compromettre l'acceptation du partenaire français."
        },
        EN: {
          title: "The Role of Elders in the Relationship",
          content: "Major life decisions (marriage, investment, residence) often involve the advice and consent of the Thai family elders. Ignoring this advice or showing disrespect (improper 'Wai', inappropriate tone) can severely compromise the acceptance of the French partner."
        },
        TH: {
          title: "บทบาทของผู้อาวุโสในชีวิตคู่",
          content: "การตัดสินใจครั้งใหญ่ของชีวิตคู่ (การแต่งงาน การลงทุน ที่อยู่อาศัย) มักจะต้องขอคำแนะนำและความเห็นชอบจากผู้อาวุโสในครอบครัวฝ่ายไทย การละเลยคำปรึกษาเหล่านี้หรือการแสดงความไม่เคารพ (เช่น การไหว้ที่ไม่ถูกต้อง หรือน้ำเสียงไม่เหมาะสม) อาจทำให้คู่รักชาวฝรั่งเศสไม่ได้รับการยอมรับจากครอบครัว"
        }
      }
    ],
    quiz: [
      {
        id: "q2_1",
        question: {
          FR: "Qu'est-ce que le 'Kreng Jai' ?",
          EN: "What is 'Kreng Jai'?",
          TH: "'ความเกรงใจ' คืออะไร?"
        },
        options: {
          FR: [
            "Un plat traditionnel pimenté de Thaïlande.",
            "L'extrême considération pour ne pas déranger ou imposer de fardeau à autrui.",
            "Le fait d'avoir peur des esprits de la maison."
          ],
          EN: [
            "A traditional spicy Thai dish.",
            "Extreme consideration to avoid disturbing or imposing on others.",
            "The fear of household spirits."
          ],
          TH: [
            "อาหารไทยรสจัดจ้านแบบดั้งเดิมชนิดหนึ่ง",
            "ความเกรงอกเกรงใจอย่างยิ่งเพื่อไม่ให้เป็นการรบกวนหรือสร้างภาระแก่ผู้อื่น",
            "ความกลัวต่อพระภูมิเจ้าที่"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le 'Kreng Jai' pousse souvent les Thaïlandais à refuser une offre ou masquer un besoin pour éviter de causer de la gêne, ce qui demande une écoute attentive.",
          EN: "'Kreng Jai' often leads Thais to refuse an offer or hide a need to avoid causing trouble, which requires attentive listening from their partner.",
          TH: "'ความเกรงใจ' มักทำให้คนไทยปฏิเสธข้อเสนอหรือซ่อนความต้องการเพื่อหลีกเลี่ยงการสร้างความลำบากใจ ซึ่งทำให้ฝ่ายคู่รักต้องคอยสังเกตและใส่ใจเป็นพิเศษ"
        }
      },
      {
        id: "q2_2",
        question: {
          FR: "Pourquoi la piété filiale est-elle fondamentale en Thaïlande ?",
          EN: "Why is filial piety fundamental in Thailand?",
          TH: "ทำความเข้าใจว่าทำไมความกตัญญูกตเวทีจึงเป็นเรื่องพื้นฐานในประเทศไทย?"
        },
        options: {
          FR: [
            "Parce qu'elle est codifiée par le code civil comme une obligation fiscale.",
            "C'est un devoir moral sacré et bouddhiste de gratitude ('Bunkhun') envers les parents.",
            "C'est une coutume réservée uniquement aux familles royales."
          ],
          EN: [
            "Because it is codified by the civil code as a tax obligation.",
            "It is a sacred, Buddhist moral duty of gratitude ('Bunkhun') towards parents.",
            "It is a custom reserved exclusively for royal families."
          ],
          TH: [
            "เพราะถูกบัญญัติไว้ในประมวลกฎหมายแพ่งว่าเป็นหน้าที่ทางภาษี",
            "เป็นหน้าที่ทางศีลธรรมและพุทธศาสนาอันศักดิ์สิทธิ์ในการแสดงความกตัญญู ('บุญคุณ') ต่อพ่อแม่",
            "เป็นธรรมเนียมที่สงวนไว้สำหรับราชวงศ์เท่านั้น"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "En Thaïlande, s'occuper de ses parents vieillissants est perçu comme le remboursement d'une dette morale spirituelle immense, essentielle pour le karma.",
          EN: "In Thailand, taking care of aging parents is seen as repaying an immense spiritual and moral debt, essential for one's karma.",
          TH: "ในประเทศไทย การดูแลพ่อแม่ยามแก่ชราถือเป็นการตอบแทนหนี้บุญคุณอันยิ่งใหญ่ทางจิตวิญญาณและศีลธรรม ซึ่งสำคัญต่อเรื่องกรรม"
        }
      },
      {
        id: "q2_3",
        question: {
          FR: "Comment saluer respectueusement un membre plus âgé de la famille thaïlandaise ?",
          EN: "How do you respectfully greet an older member of the Thai family?",
          TH: "วิธีการทักทายผู้อาวุโสในครอบครัวไทยอย่างเคารพทำอย่างไร?"
        },
        options: {
          FR: [
            "En lui serrant fermement la main.",
            "En faisant un 'Wai' (mains jointes) en inclinant légèrement la tête.",
            "En lui faisant une bise sur les deux joues."
          ],
          EN: [
            "By shaking their hand firmly.",
            "By performing a 'Wai' (palms pressed together) and bowing the head slightly.",
            "By kissing them on both cheeks."
          ],
          TH: [
            "โดยการจับมืออย่างมั่นคง",
            "โดยการ 'ไหว้' (พนมมือ) พร้อมกับก้มศีรษะลงเล็กน้อย",
            "โดยการหอมแก้มทั้งสองข้าง"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le geste du 'Wai' avec les pouces placés au niveau du menton ou du nez (selon l'âge de l'interlocuteur) est la marque universelle de respect.",
          EN: "The 'Wai' gesture, with thumbs placed at chin or nose level (depending on the elder's age), is the universal sign of respect.",
          TH: "การไหว้โดยให้หัวแม่มืออยู่ที่ระดับคางหรือจมูก (ขึ้นอยู่กับความอาวุโส) คือเครื่องหมายแสดงความเคารพที่เป็นสากล"
        }
      }
    ]
  },
  {
    id: 3,
    title: {
      FR: "Les Coutumes Amoureuses et la Dot (Sin Sod)",
      EN: "Dating Customs and the Dowry (Sin Sod)",
      TH: "ธรรมเนียมความรักและสินสอด"
    },
    subtitle: {
      FR: "Comprendre le rôle social, symbolique et financier de la dot",
      EN: "Understanding the social, symbolic, and financial role of the dowry",
      TH: "ทำความเข้าใจบทบาททางสังคม สัญลักษณ์ และการเงินของสินสอด"
    },
    durationMinutes: 20,
    concepts: [
      {
        FR: {
          title: "La parade nuptiale et la décence sociale",
          content: "Dans la culture thaïlandaise traditionnelle, la discrétion publique est primordiale. Les démonstrations d'affection en public (PDAs) sont mal vues. La parade amoureuse valorise l'évaluation des intentions sérieuses de l'homme sur le long terme plutôt que la passion immédiate."
        },
        EN: {
          title: "Courtship and Social Decency",
          content: "In traditional Thai culture, public discretion is paramount. Public displays of affection (PDAs) are frowned upon. Courtship values evaluating a man's serious long-term intentions rather than immediate passion."
        },
        TH: {
          title: "การเกี้ยวพาราสีและความเหมาะสมทางสังคม",
          content: "ในวัฒนธรรมไทยดั้งเดิม การแสดงออกในที่สาธารณะอย่างเหมาะสมเป็นสิ่งสำคัญ การแสดงความรักในที่สาธารณะ (PDA) เป็นสิ่งที่ไม่ได้รับการยอมรับ การเกี้ยวพาราสีให้คุณค่ากับการประเมินความตั้งใจจริงในระยะยาวของผู้ชายมากกว่าความลุ่มหลงชั่วคราว"
        }
      },
      {
        FR: {
          title: "Le sens profond de la 'Sin Sod'",
          content: "La 'Sin Sod' est la dot traditionnelle versée par le futur marié aux parents de la mariée. Elle remplit trois fonctions : témoigner du statut financier du marié pour subvenir aux besoins de sa femme, honorer les parents pour l'éducation reçue (lait maternel ou 'Kha Nam Nom'), et préserver la réputation de la famille dans la communauté."
        },
        EN: {
          title: "The Deep Meaning of 'Sin Sod'",
          content: "'Sin Sod' is the traditional dowry paid by the groom to the bride's parents. It serves three main purposes: demonstrating the groom's financial ability to care for his wife, thanking the parents for raising her ('milk money' or 'Kha Nam Nom'), and preserving family honor in the community."
        },
        TH: {
          title: "ความหมายที่แท้จริงของ 'สินสอด'",
          content: "'สินสอด' คือทรัพย์สินที่ฝ่ายชายมอบให้แก่บิดามารดาฝ่ายหญิงเพื่อตอบแทนการเลี้ยงดู มีหน้าที่สำคัญสามประการ: แสดงสถานะทางการเงินของเจ้าบ่าวว่าสามารถดูแลเจ้าสาวได้, ตอบแทนพระคุณบิดามารดาสำหรับการอบรมสั่งสอน (ค่าน้ำนม) และรักษาชื่อเสียงเกียรติยศของครอบครัวในชุมชน"
        }
      },
      {
        FR: {
          title: "La réalité moderne : Négociation et Restitution",
          content: "Aujourd'hui, le montant varie selon l'éducation, le statut social et la situation géographique (campagne vs Bangkok). Dans les mariages modernes (et particulièrement mixtes), la dot est très souvent restituée intégralement ou en grande partie au jeune couple le jour du mariage pour les aider à démarrer leur vie commune."
        },
        EN: {
          title: "Modern Reality: Negotiation and Return",
          content: "Today, the amount varies based on education, social status, and geography (rural vs Bangkok). In modern (and especially cross-cultural) weddings, the dowry is very often returned in full or in part to the young couple on the wedding day to help them start their life together."
        },
        TH: {
          title: "ความเป็นจริงในปัจจุบัน: การเจรจาและการคืนสินสอด",
          content: "ในปัจจุบัน จำนวนสินสอดแปรผันตามการศึกษา สถานะทางสังคม และทำเลที่ตั้ง (ชนบท vs กรุงเทพฯ) ในการแต่งงานยุคใหม่ (โดยเฉพาะการแต่งงานกับชาวต่างชาติ) บ่อยครั้งที่บิดามารดาจะคืนเงินสินสอดทั้งหมดหรือส่วนใหญ่ให้แก่คู่บ่าวสาวในวันแต่งงานเพื่อตั้งตัว"
        }
      }
    ],
    quiz: [
      {
        id: "q3_1",
        question: {
          FR: "Qu'est-ce que le 'Kha Nam Nom' dans le contexte de la Sin Sod ?",
          EN: "What is 'Kha Nam Nom' in the context of Sin Sod?",
          TH: "'ค่าน้ำนม' ในบริบทของสินสอดหมายถึงอะไร?"
        },
        options: {
          FR: [
            "Le prix du lait maternel pour nourrir le bébé des mariés.",
            "Une compensation financière symbolique aux parents pour l'éducation de leur fille.",
            "Une taxe sur les produits laitiers lors du repas de mariage."
          ],
          EN: [
            "The cost of milk formula for the newborn baby.",
            "A symbolic financial compensation to parents for raising their daughter.",
            "A tax on dairy products served during the wedding."
          ],
          TH: [
            "ราคาค่านมผงสำหรับเด็กแรกเกิด",
            "เงินค่าเลี้ยงดูและอบรมสั่งสอนบุตรสาวที่มอบให้บิดามารดาตามธรรมเนียม",
            "ภาษีผลิตภัณฑ์นมที่เสิร์ฟในงานแต่งงาน"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le 'Kha Nam Nom' désigne littéralement le 'prix de l'allaitement'. C'est une marque de gratitude profonde envers la mère de la mariée.",
          EN: "'Kha Nam Nom' literally translates to 'milk water price'. It represents a deep gesture of gratitude towards the bride's mother.",
          TH: "'ค่าน้ำนม' แปลตรงตัวถึงค่าน้ำนมของมารดา เป็นการแสดงความกตัญญูกตเวทีอย่างสูงสุดต่อมารดาผู้ให้กำเนิดและเลี้ยงดูเจ้าสาว"
        }
      },
      {
        id: "q3_2",
        question: {
          FR: "Que se passe-t-il fréquemment avec la Sin Sod lors des mariages modernes ?",
          EN: "What frequently happens to Sin Sod in modern marriages?",
          TH: "เกิดอะไรขึ้นบ่อยครั้งกับสินสอดในงานแต่งงานยุคปัจจุบัน?"
        },
        options: {
          FR: [
            "Elle est confisquée par le chef du village.",
            "Elle est entièrement dépensée en feux d'artifice.",
            "Elle est restituée discrètement au couple pour financer leur vie commune."
          ],
          EN: [
            "It is confiscated by the village chief.",
            "It is entirely spent on fireworks.",
            "It is discreetly returned to the couple to finance their joint life."
          ],
          TH: [
            "ถูกริบโดยผู้ใหญ่บ้าน",
            "ถูกใช้ไปกับพลุดอกไม้ไฟทั้งหมด",
            "ถูกส่งคืนให้กับคู่บ่าวสาวอย่างเงียบๆ เพื่อเป็นทุนในการสร้างครอบครัว"
          ]
        },
        correctIndex: 2,
        explanation: {
          FR: "De nombreuses familles thaïlandaises choisissent de rendre la Sin Sod aux mariés sous forme de cadeau de mariage pour démontrer qu'ils ne vendent pas leur fille.",
          EN: "Many Thai families choose to return the Sin Sod to the couple as a wedding gift, proving they are not 'selling' their daughter.",
          TH: "ครอบครัวไทยจำนวนมากเลือกที่จะคืนสินสอดให้กับคู่สมรสเพื่อเป็นขวัญถุง ซึ่งแสดงให้เห็นว่าพวกเขาไม่ได้ทำการ 'ขายลูกสาว' แต่อย่างใด"
        }
      },
      {
        id: "q3_3",
        question: {
          FR: "Quelle attitude est recommandée en public concernant l'affection amoureuse ?",
          EN: "What attitude is recommended in public regarding romantic affection?",
          TH: "พฤติกรรมใดที่แนะนำให้ทำในที่สาธารณะเกี่ยวกับความรัก?"
        },
        options: {
          FR: [
            "Une grande discrétion et retenue physique (éviter les baisers passionnés).",
            "Une liberté totale de démonstration d'affection.",
            "L'interdiction absolue de se tenir par la main."
          ],
          EN: [
            "Great discretion and physical restraint (avoid passionate kissing).",
            "Total freedom of public displays of affection.",
            "Absolute prohibition of holding hands."
          ],
          TH: [
            "ความสุภาพเรียบร้อยและสำรวมท่าทางในที่สาธารณะ (หลีกเลี่ยงการกอดจูบกันอย่างดูดดื่ม)",
            "ความอิสระอย่างเต็มที่ในการแสดงความรัก",
            "การห้ามจับมือกันโดยเด็ดขาด"
          ]
        },
        correctIndex: 0,
        explanation: {
          FR: "Se tenir la main est aujourd'hui toléré pour les jeunes couples, mais les baisers ou étreintes intimes en public restent mal vus et offensants pour les aînés.",
          EN: "Holding hands is tolerated today for young couples, but kissing or hugging in public remains highly frowned upon and offensive to elders.",
          TH: "การจับมือกันเป็นเรื่องที่ยอมรับได้แล้วในปัจจุบันสำหรับคู่รักรุ่นใหม่ แต่การกอดหรือจูบอย่างดูดดื่มในที่สาธารณะยังคงถูกมองว่าไม่เหมาะสมและเป็นการลบหลู่ผู้ใหญ่"
        }
      }
    ]
  },
  {
    id: 4,
    title: {
      FR: "Le Mariage Franco-Thaïlandais (Aspects Légaux)",
      EN: "Franco-Thai Marriage (Legal Aspects)",
      TH: "การแต่งงานไทย-ฝรั่งเศส (แง่กฎหมาย)"
    },
    subtitle: {
      FR: "S'orienter dans le labyrinthe des démarches administratives",
      EN: "Navigating the administrative maze of bi-national marriage",
      TH: "การนำทางผ่านขั้นตอนการบริหารจัดการการแต่งงานสองสัญชาติ"
    },
    durationMinutes: 22,
    concepts: [
      {
        FR: {
          title: "Le certificat de capacité à mariage (CCAM)",
          content: "Pour qu'un mariage célébré en Thaïlande soit reconnu en France, le conjoint français doit obligatoirement obtenir un CCAM auprès de l'Ambassade de France à Bangkok AVANT la cérémonie civile thaïlandaise. Cette procédure implique le dépôt d'un dossier complet, la publication des bans en France et parfois un entretien d'évaluation."
        },
        EN: {
          title: "The Certificate of Capacity to Marry (CCAM)",
          content: "For a marriage celebrated in Thailand to be legally recognized in France, the French partner must obtain a CCAM from the French Embassy in Bangkok BEFORE the Thai civil ceremony. This procedure requires submitting a full application, the publication of marriage bans in France, and potentially an interview."
        },
        TH: {
          title: "ใบรับรองโสดเพื่อการสมรส (CCAM)",
          content: "เพื่อให้การแต่งงานในประเทศไทยได้รับการยอมรับตามกฎหมายของฝรั่งเศส คู่สมรสฝ่ายฝรั่งเศสจะต้องยื่นขอใบ CCAM จากสถานเอกอัครราชทูตฝรั่งเศสประจำกรุงเทพฯ ก่อนพิธีจดทะเบียนสมรส ขั้นตอนนี้รวมถึงการยื่นเอกสารอย่างครบถ้วน การประกาศโฆษณาการสมรสที่ฝรั่งเศส และบางครั้งอาจมีการสัมภาษณ์เพื่อประเมินคู่สมรส"
        }
      },
      {
        FR: {
          title: "L'enregistrement civil en Thaïlande : L'Amphur",
          content: "Le mariage légal en Thaïlande n'est pas la cérémonie bouddhiste traditionnelle, mais l'enregistrement civil au bureau de district ('Amphur'). Pour s'y enregistrer, l'Amphur exige la traduction en thaïlandais et la légalisation par le Ministère thaïlandais des Affaires Étrangères (MFA) du certificat d'affirmation de mariage délivré par l'Ambassade."
        },
        EN: {
          title: "Civil Registration in Thailand: The Amphur",
          content: "Legal marriage in Thailand is not the traditional Buddhist ceremony, but the civil registration at the district office ('Amphur'). To register, the Amphur requires the translation into Thai and legalization by the Thai Ministry of Foreign Affairs (MFA) of the marriage affirmation certificate issued by the Embassy."
        },
        TH: {
          title: "การจดทะเบียนสมรสในไทย: สำนักงานเขต/ที่ว่าการอำเภอ",
          content: "การแต่งงานที่ถูกต้องตามกฎหมายในประเทศไทยไม่ใช่งานพิธีทางศาสนาพุทธ แต่คือการจดทะเบียนสมรส ณ ที่ว่าการอำเภอ/สำนักงานเขต ซึ่งทางอำเภอจะกำหนดให้ต้องแปลเอกสารใบรับรองความสามารถในการสมรสที่ออกโดยสถานทูตเป็นภาษาไทย และผ่านการรับรองจากกระทรวงการต่างประเทศ (MFA) เสียก่อน"
        }
      },
      {
        FR: {
          title: "La transcription sur l'état civil français",
          content: "Après le mariage à l'Amphur, le conjoint français doit faire transcrire l'acte de mariage thaïlandais sur les registres d'état civil français auprès de l'Ambassade. Cette étape indispensable permet d'obtenir le Livret de Famille français et l'acte de mariage français, nécessaires pour la demande de visa de conjoint."
        },
        EN: {
          title: "Transcription on French Civil Registries",
          content: "After the wedding at the Amphur, the French partner must request the transcription of the Thai marriage certificate onto the French civil registries at the Embassy. This step is essential to obtain the French Family Record Book (Livret de Famille) and the French marriage certificate, which are mandatory for the spouse visa application."
        },
        TH: {
          title: "การบันทึกฐานะแห่งครอบครัวในทะเบียนราษฎร์ฝรั่งเศส",
          content: "ภายหลังการสมรสที่อำเภอ คู่สมรสฝ่ายฝรั่งเศสจะต้องยื่นเรื่องขอคัดลอก (Transcription) ทะเบียนสมรสไทยเข้าสู่ทะเบียนราษฎร์ฝรั่งเศส ณ สถานทูต ขั้นตอนนี้จำเป็นอย่างยิ่งเพื่อรับ 'สมุดบันทึกครอบครัวฝรั่งเศส' (Livret de Famille) และทะเบียนสมรสฝรั่งเศส ซึ่งใช้เป็นหลักฐานประกอบการขอวีซ่าคู่สมรส"
        }
      }
    ],
    quiz: [
      {
        id: "q4_1",
        question: {
          FR: "Quand faut-il faire la demande de CCAM auprès de l'Ambassade de France ?",
          EN: "When must the CCAM application be submitted to the French Embassy?",
          TH: "ควรยื่นคำขอใบ CCAM ต่อสถานทูตฝรั่งเศสเมื่อใด?"
        },
        options: {
          FR: [
            "Après le mariage civil à l'Amphur.",
            "Avant d'enregistrer le mariage civil à l'Amphur.",
            "Cinq ans après avoir vécu ensemble."
          ],
          EN: [
            "After the civil marriage at the Amphur.",
            "Before registering the civil marriage at the Amphur.",
            "Five years after living together."
          ],
          TH: [
            "หลังจากจดทะเบียนสมรสที่อำเภอแล้ว",
            "ก่อนการจดทะเบียนสมรสที่อำเภอ",
            "ห้าปีหลังจากที่ได้ใช้ชีวิตอยู่ร่วมกัน"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le CCAM doit être obtenu préalablement au mariage civil. Sans lui, la transcription ultérieure du mariage en France sera extrêmement difficile et ralentie.",
          EN: "The CCAM must be obtained prior to the civil marriage. Without it, the subsequent transcription of the marriage in France will be extremely difficult and delayed.",
          TH: "ต้องได้รับใบ CCAM ก่อนการจดทะเบียนสมรส มิฉะนั้น การบันทึกทะเบียนสมรสเข้าสู่ระบบของประเทศฝรั่งเศสในภายหลังจะทำได้ยากและล่าช้าเป็นอย่างมาก"
        }
      },
      {
        id: "q4_2",
        question: {
          FR: "Qu'est-ce qui rend une union franco-thaïlandaise juridiquement légale en Thaïlande ?",
          EN: "What makes a Franco-Thai union legally binding in Thailand?",
          TH: "อะไรที่ทำให้การแต่งงานระหว่างชาวฝรั่งเศสและไทยมีผลผูกพันตามกฎหมายในประเทศไทย?"
        },
        options: {
          FR: [
            "La bénédiction de 9 moines bouddhistes au temple local.",
            "L'enregistrement de l'union au bureau de district ('Amphur').",
            "La signature d'une lettre d'engagement sur l'honneur."
          ],
          EN: [
            "The blessing of 9 Buddhist monks at the local temple.",
            "The registration of the union at the district office ('Amphur').",
            "The signature of a letter of commitment on honor."
          ],
          TH: [
            "พิธีเจริญพระพุทธมนต์โดยพระสงฆ์ 9 รูป ณ วัดในท้องถิ่น",
            "การจดทะเบียนสมรส ณ ที่ว่าการอำเภอ/สำนักงานเขต",
            "การลงนามในหนังสือบันทึกข้อตกลงเกียรติยศ"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La cérémonie traditionnelle bouddhiste a une valeur culturelle et familiale immense, mais n'a aucun effet légal aux yeux de la loi thaïlandaise et française.",
          EN: "The traditional Buddhist ceremony holds immense cultural and familial value, but carries zero legal weight under both Thai and French laws.",
          TH: "พิธีแต่งงานแบบไทยดั้งเดิมมีความสำคัญทางวัฒนธรรมและครอบครัวอย่างยิ่ง แต่ไม่มีผลผูกพันทางกฎหมายใดๆ ทั้งตามกฎหมายไทยและกฎหมายฝรั่งเศส"
        }
      },
      {
        id: "q4_3",
        question: {
          FR: "Quel document officiel français est indispensable pour prouver le mariage en France ?",
          EN: "Which official French document is indispensable to prove the marriage in France?",
          TH: "เอกสารราชการฝรั่งเศสใดที่จำเป็นอย่างยิ่งในการพิสูจน์การสมรสในประเทศฝรั่งเศส?"
        },
        options: {
          FR: [
            "Le passeport du conjoint traduit par un ami.",
            "Le Livret de Famille et l'acte de mariage français transcrit.",
            "L'invitation papier au repas de mariage."
          ],
          EN: [
            "The spouse's passport translated by a friend.",
            "The Livret de Famille and the transcribed French marriage certificate.",
            "The paper wedding invitation."
          ],
          TH: [
            "หนังสือเดินทางของคู่สมรสที่แปลโดยคนรู้จัก",
            "สมุดทะเบียนครอบครัว (Livret de Famille) และทะเบียนสมรสฝรั่งเศสที่ผ่านการคัดลอกแล้ว",
            "การ์ดเชิญร่วมงานเลี้ยงฉลองสมรส"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La transcription donne lieu à la délivrance du livret de famille français, document de référence pour prouver l'état matrimonial en France.",
          EN: "Transcription leads to the issuance of the French Family Record Book, which is the official document verifying your marriage status in France.",
          TH: "การบันทึกฐานะแห่งครอบครัวทำให้ได้รับสมุดทะเบียนครอบครัวฝรั่งเศส ซึ่งเป็นเอกสารอ้างอิงหลักที่ใช้พิสูจน์สถานภาพการสมรสในประเทศฝรั่งเศส"
        }
      }
    ]
  },
  {
    id: 5,
    title: {
      FR: "Visas et Procédures d'Immigration",
      EN: "Visas and Immigration Procedures",
      TH: "วีซ่าและขั้นตอนการตรวจคนเข้าเมือง"
    },
    subtitle: {
      FR: "Sélectionner la bonne voie d'immigration et préparer un dossier solide",
      EN: "Selecting the correct immigration path and preparing a solid file",
      TH: "การเลือกช่องทางวีซ่าที่ถูกต้องและการเตรียมเอกสารประกอบคำขอที่แน่นหนา"
    },
    durationMinutes: 18,
    concepts: [
      {
        FR: {
          title: "Visa Court Séjour (Schengen)",
          content: "Le visa de court séjour 'Schengen' permet au partenaire thaïlandais de voyager en France pour un maximum de 90 jours sur une période de 180 jours. Il requiert la preuve de ressources financières suffisantes, une assurance voyage couvrant 30 000 €, une attestation d'accueil validée par la mairie du conjoint français et la preuve d'un lien d'attache fort en Thaïlande pour garantir le retour."
        },
        EN: {
          title: "Short Stay Visa (Schengen)",
          content: "The 'Schengen' short-stay visa allows a Thai partner to visit France for up to 90 days within any 180-day period. It requires proof of sufficient financial resources, travel insurance covering €30,000, an 'Attestation d'Accueil' (proof of accommodation) approved by the French spouse's town hall, and evidence of strong ties to Thailand to guarantee return."
        },
        TH: {
          title: "วีซ่าพำนักระยะสั้น (เชงเก้น)",
          content: "วีซ่าพำนักระยะสั้น 'เชงเก้น' อนุญาตให้คู่รักชาวไทยเดินทางเข้าประเทศฝรั่งเศสได้ไม่เกิน 90 วันภายในระยะเวลา 180 วัน โดยต้องแสดงหลักฐานการเงินที่เพียงพอ ประกันภัยการเดินทางวงเงินคุ้มครอง 30,000 ยูโร ใบตอบรับการให้ที่พัก (Attestation d'Accueil) ที่รับรองโดยเทศบาลของคู่รักฝรั่งเศส และหลักฐานความผูกพันที่มั่นคงในไทยเพื่อรับประกันการเดินทางกลับ"
        }
      },
      {
        FR: {
          title: "Visa Long Séjour Conjoint de Français (VLS-TS)",
          content: "Délivré gratuitement après la transcription du mariage, ce visa permet de s'installer durablement en France. Il dispense d'avoir à justifier de ressources financières (le droit au respect de la vie familiale prévaut). À l'arrivée en France, le visa doit être validé en ligne auprès de l'OFII."
        },
        EN: {
          title: "Long Stay Spouse Visa (VLS-TS)",
          content: "Issued free of charge after the marriage transcription, this visa allows the Thai spouse to move and reside in France. It bypasses financial resource requirements (the right to family life prevails). Upon arrival in France, the visa must be validated online with the OFII."
        },
        TH: {
          title: "วีซ่าพำนักระยะยาวสำหรับคู่สมรสชาวฝรั่งเศส (VLS-TS)",
          content: "วีซ่านี้ออกให้โดยไม่มีค่าธรรมเนียมภายหลังการบันทึกสมรสในทะเบียนราษฎร์ฝรั่งเศส เพื่อให้คู่สมรสชาวไทยสามารถย้ายมาพำนักระยะยาวในฝรั่งเศสได้ โดยได้รับการยกเว้นไม่ต้องแสดงหลักฐานทางการเงินขั้นต่ำ (เน้นสิทธิการใช้ชีวิตครอบครัว) เมื่อเดินทางถึงฝรั่งเศสแล้ว จะต้องลงทะเบียนรักษาสิทธิ์ออนไลน์กับสำนักงาน OFII"
        }
      },
      {
        FR: {
          title: "Le Contrat d'Intégration Républicaine (CIR)",
          content: "Le conjoint thaïlandais signera le CIR à l'OFII. Ce contrat implique une formation civique obligatoire sur les valeurs de la République Française, un test de langue française (exigence de niveau A1 requis initialement, puis A2 pour la carte de résident de 10 ans), et un accompagnement vers l'emploi."
        },
        EN: {
          title: "The Republican Integration Contract (CIR)",
          content: "The Thai spouse must sign the CIR at the OFII. This contract involves mandatory civic training on the values of the French Republic, a French language assessment (A1 level required initially, progressing to A2 for the 10-year resident card), and career counseling support."
        },
        TH: {
          title: "สัญญาการบูรณาการของสาธารณรัฐ (CIR)",
          content: "คู่สมรสชาวไทยจะต้องลงนามในสัญญา CIR ณ สำนักงาน OFII ข้อตกลงนี้กำหนดให้ต้องเข้ารับการอบรมความเป็นพลเมืองเกี่ยวกับค่านิยมของสาธารณรัฐฝรั่งเศส การทดสอบภาษาฝรั่งเศส (ต้องได้ระดับ A1 ในเบื้องต้น และสะสมจนถึงระดับ A2 สำหรับบัตรพำนัก 10 ปี) พร้อมทั้งการช่วยเหลือแนะแนวการหางานทำ"
        }
      }
    ],
    quiz: [
      {
        id: "q5_1",
        question: {
          FR: "Quel niveau initial de français est requis dans le cadre du CIR pour obtenir les premiers renouvellements de titre de séjour ?",
          EN: "What initial level of French is required under the CIR to obtain the first residence permit renewals?",
          TH: "ภาษาฝรั่งเศสระดับเริ่มต้นใดที่กำหนดไว้ภายใต้ข้อตกลง CIR เพื่อยื่นขอต่ออายุบัตรพำนักครั้งแรก?"
        },
        options: {
          FR: [
            "Le niveau C1 (parfaite maîtrise académique).",
            "Le niveau A1 (maîtrise des expressions quotidiennes simples).",
            "Aucun niveau n'est demandé."
          ],
          EN: [
            "Level C1 (perfect academic fluency).",
            "Level A1 (basic understanding of simple daily expressions).",
            "No language level is required."
          ],
          TH: [
            "ระดับ C1 (ความเชี่ยวชาญทางวิชาการที่สมบูรณ์)",
            "ระดับ A1 (ความเข้าใจและการใช้ประโยคพื้นฐานในชีวิตประจำวัน)",
            "ไม่มีการกำหนดระดับภาษา"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le niveau A1 est l'objectif linguistique minimal fixé par l'OFII. Un apprentissage précoce du français avant le départ de Thaïlande est extrêmement bénéfique.",
          EN: "Level A1 is the minimal language goal set by the OFII. Starting to learn French early before departing Thailand is highly recommended and beneficial.",
          TH: "ระดับ A1 คือเป้าหมายทางภาษาขั้นต่ำที่กำหนดโดย OFII การเรียนรู้ภาษาฝรั่งเศสตั้งแต่เนิ่นๆ ก่อนเดินทางออกจากประเทศไทยจะเป็นประโยชน์อย่างยิ่ง"
        }
      },
      {
        id: "q5_2",
        question: {
          FR: "Pour le visa Schengen, quel élément est crucial pour démontrer que le partenaire thaïlandais retournera en Thaïlande ?",
          EN: "For a Schengen visa, what is crucial to prove that the Thai partner will return to Thailand?",
          TH: "สำหรับวีซ่าเชงเก้น ปัจจัยใดที่สำคัญที่สุดในการแสดงว่าคู่รักชาวไทยจะเดินทางกลับประเทศไทย?"
        },
        options: {
          FR: [
            "Un billet d'avion de retour uniquement.",
            "Des attaches professionnelles, familiales ou patrimoniales fortes en Thaïlande.",
            "Une promesse écrite rédigée par le conjoint français."
          ],
          EN: [
            "A return airplane ticket only.",
            "Strong professional, family, or property ties in Thailand.",
            "A written promise signed by the French spouse."
          ],
          TH: [
            "เพียงแค่ตั๋วเครื่องบินขากลับเท่านั้น",
            "ความผูกพันที่แน่นหนาด้านการงาน ครอบครัว หรือทรัพย์สินในประเทศไทย",
            "จดหมายสัญญาเป็นลายลักษณ์อักษรจากคู่สมรสฝรั่งเศส"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le consulat évalue le 'risque migratoire'. Prouver un emploi stable, des études en cours ou des propriétés immobilières en Thaïlande renforce considérablement le dossier.",
          EN: "The consulate assesses the 'immigration risk'. Proving stable employment, ongoing studies, or property ownership in Thailand greatly reinforces the application.",
          TH: "สถานกงสุลจะประเมิน 'ความเสี่ยงด้านการย้ายถิ่นฐาน' การแสดงหลักฐานการทำงานที่มั่นคง การเรียนที่ยังไม่จบ หรือการเป็นเจ้าของทรัพย์สินในไทยจะช่วยเพิ่มน้ำหนักให้กับเอกสารได้เป็นอย่างมาก"
        }
      },
      {
        id: "q5_3",
        question: {
          FR: "Quel est le coût des frais de visa de conjoint de Français ?",
          EN: "What is the cost of the French spouse visa application fee?",
          TH: "ค่าธรรมเนียมการยื่นขอวีซ่าคู่สมรสชาวฝรั่งเศสราคาเท่าใด?"
        },
        options: {
          FR: [
            "Il est gratuit (droits de chancellerie offerts).",
            "Il coûte environ 500 €.",
            "Il dépend de l'âge du conjoint thaïlandais."
          ],
          EN: [
            "It is free of charge (consular fee waived).",
            "It costs approximately €500.",
            "It depends on the age of the Thai spouse."
          ],
          TH: [
            "ไม่มีค่าธรรมเนียม (ได้รับการยกเว้นค่าบริการทางกงสุล)",
            "ราคาประมาณ 500 ยูโร",
            "ขึ้นอยู่กับอายุของคู่สมรสชาวไทย"
          ]
        },
        correctIndex: 0,
        explanation: {
          FR: "Le visa de long séjour pour conjoint de Français est exonéré de frais de dossier par la réglementation française pour faciliter le regroupement des familles.",
          EN: "The long-stay visa for spouses of French citizens is exempt from application fees under French law to support family reunification.",
          TH: "วีซ่าพำนักระยะยาวสำหรับคู่สมรสชาวฝรั่งเศสได้รับการยกเว้นค่าธรรมเนียมการดำเนินการตามกฎหมายฝรั่งเศส เพื่ออำนวยความสะดวกในการกลับมาอยู่ร่วมกันของครอบครัว"
        }
      }
    ]
  },
  {
    id: 6,
    title: {
      FR: "Le Soutien Financier à la Famille",
      EN: "Family Financial Support (Sending Money)",
      TH: "การสนับสนุนทางการเงินแก่ครอบครัว"
    },
    subtitle: {
      FR: "Gérer la solidarité familiale et fixer des limites saines",
      EN: "Managing family solidarity and establishing healthy boundaries",
      TH: "การจัดการความเกื้อกูลในครอบครัวและการกำหนดขอบเขตที่เหมาะสมร่วมกัน"
    },
    durationMinutes: 20,
    concepts: [
      {
        FR: {
          title: "La notion d'obligation morale familiale",
          content: "L'envoi d'argent mensuel à la famille ('Sending Money') est une pratique courante en Thaïlande. Il s'agit d'un symbole matériel de gratitude ('Bunkhun') et de respect, en particulier pour les parents issus des milieux ruraux sans système de retraite publique solide. Ce soutien fait partie intégrante de l'identité sociale du conjoint thaïlandais."
        },
        EN: {
          title: "The Notion of Family Moral Obligation",
          content: "Sending monthly money to the family is a common practice in Thailand. It is a tangible symbol of gratitude ('Bunkhun') and respect, especially for parents from rural backgrounds without solid state pensions. This support is integral to the social identity of the Thai spouse."
        },
        TH: {
          title: "แนวคิดเรื่องหน้าที่ทางศีลธรรมต่อครอบครัว",
          content: "การส่งเงินรายเดือนให้ครอบครัวเป็นประเพณีปฏิบัติทั่วไปในไทย เป็นสัญลักษณ์ที่เป็นรูปธรรมของความกตัญญูกตเวที ('บุญคุณ') และความเคารพ โดยเฉพาะสำหรับพ่อแม่ในชนบทที่ไม่มีระบบบำนาญของรัฐ การสนับสนุนนี้เป็นส่วนสำคัญในตัวตนทางสังคมของคู่สมรสฝ่ายไทย"
        }
      },
      {
        FR: {
          title: "Le risque de ressentiment dans le couple mixte",
          content: "Le conjoint français, issu d'une culture individualiste où la solidarité est gérée par l'État (sécurité sociale, retraites), peut percevoir cette aide comme un abus ou un fardeau déraisonnable. L'absence de dialogue ouvert sur ce sujet est l'une des causes majeures de divorce dans les couples franco-thaïlandais."
        },
        EN: {
          title: "Risk of Resentment in Cross-Cultural Couples",
          content: "The French partner, coming from an individualistic culture where social safety nets are state-managed (social security, pensions), might perceive this aid as an abuse or unreasonable burden. A lack of open dialogue about this topic is one of the leading causes of divorce in Franco-Thai couples."
        },
        TH: {
          title: "ความเสี่ยงของความขัดแย้งในชีวิตคู่ต่างวัฒนธรรม",
          content: "ฝ่ายฝรั่งเศสซึ่งมาจากวัฒนธรรมแบบปัจเจกนิยมที่รัฐเป็นผู้ดูแลสวัสดิการ (ประกันสังคม บำนาญ) อาจมองว่าการช่วยเหลือนี้เป็นการเอาเปรียบหรือภาระที่ไม่สมเหตุสมผล การขาดการหารืออย่างเปิดเผยในเรื่องนี้เป็นหนึ่งในสาเหตุหลักของการหย่าร้างในคู่ชีวิตไทย-ฝรั่งเศส"
        }
      },
      {
        FR: {
          title: "La planification budgétaire transparente",
          content: "La solution clé réside dans l'établissement d'un budget clair et consenti. Le couple doit convenir d'un montant fixe, raisonnable et adapté aux ressources du ménage en France, tout en s'assurant que l'argent envoyé sert à des besoins essentiels (santé, nourriture, logement) plutôt qu'à financer des dépenses superflues de la fratrie."
        },
        EN: {
          title: "Transparent Budget Planning",
          content: "The key solution lies in establishing a clear, agreed-upon budget. The couple must agree on a fixed, reasonable monthly amount tailored to their household budget in France, ensuring the money covers essential needs (healthcare, food, shelter) rather than non-essential spending by siblings."
        },
        TH: {
          title: "การวางแผนงบประมาณที่โปร่งใส",
          content: "ทางออกที่สำคัญคือการจัดตั้งงบประมาณร่วมกันที่ชัดเจน ชีวิตคู่ต้องเห็นพ้องในจำนวนเงินรายเดือนที่แน่นอนและสมเหตุสมผลโดยพิจารณาจากรายรับรายจ่ายในฝรั่งเศส และต้องดูแลให้เงินที่ส่งไปนั้นใช้เพื่อความจำเป็นพื้นฐาน (สุขภาพ อาหาร ที่พัก) มากกว่าการใช้จ่ายที่ไม่จำเป็นของเครือญาติ"
        }
      }
    ],
    quiz: [
      {
        id: "q6_1",
        question: {
          FR: "Pourquoi le soutien financier aux parents est-il si répandu en Thaïlande ?",
          EN: "Why is financial support for parents so widespread in Thailand?",
          TH: "ทำไมการสนับสนุนทางการเงินแก่บิดามารดาจึงแพร่หลายมากในประเทศไทย?"
        },
        options: {
          FR: [
            "C'est une obligation légale vérifiée par la police thaïlandaise.",
            "C'est une expression concrète de piété filiale en l'absence de système de retraite suffisant.",
            "C'est un jeu de hasard populaire."
          ],
          EN: [
            "It is a legal obligation monitored by the Thai police.",
            "It is a concrete expression of filial piety due to the lack of adequate state pensions.",
            "It is a popular betting game."
          ],
          TH: [
            "เป็นหน้าที่ตามกฎหมายที่ตรวจสอบโดยตำรวจไทย",
            "เป็นการแสดงความกตัญญูกตเวทีอย่างเป็นรูปธรรมเนื่องจากระบบบำนาญของรัฐยังไม่ครอบคลุมเพียงพอ",
            "เป็นเรื่องของการพนันที่นิยมกัน"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Dans les zones rurales de Thaïlande, le système de protection sociale est faible. Les parents dépendent matériellement de la réussite et de la générosité de leurs enfants.",
          EN: "In rural areas of Thailand, the social safety net is limited. Parents rely directly on the success and generosity of their children to survive.",
          TH: "ในชนบทของไทย สวัสดิการสังคมของรัฐยังมีอยู่อย่างจำกัด บิดามารดาจึงต้องพึ่งพาความสำเร็จและความกตัญญูจากลูกๆ ในการยังชีพ"
        }
      },
      {
        id: "q6_2",
        question: {
          FR: "Quelle est la meilleure approche pour éviter les conflits liés aux envois d'argent ?",
          EN: "What is the best approach to avoid conflicts related to sending money?",
          TH: "แนวทางที่ดีที่สุดในการหลีกเลี่ยงความขัดแย้งเกี่ยวกับการส่งเงินคืออะไร?"
        },
        options: {
          FR: [
            "Cacher ses comptes bancaires à son partenaire.",
            "Discuter ouvertement et fixer d'un commun accord un montant mensuel stable et budgétisé.",
            "Interdire catégoriquement tout envoi d'argent."
          ],
          EN: [
            "Hide bank accounts from your partner.",
            "Discuss openly and mutually agree on a stable, budgeted monthly amount.",
            "Strictly forbid any financial transfers."
          ],
          TH: [
            "ซ่อนบัญชีธนาคารไม่ให้คู่รักรับรู้",
            "พูดคุยกันอย่างเปิดเผยและกำหนดวงเงินรายเดือนที่แน่นอนร่วมกันในงบประมาณครอบครัว",
            "สั่งห้ามส่งเงินโดยเด็ดขาด"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La clarté budgétaire élimine les suspicions. Définir un cadre consenti protège l'équilibre financier et psychologique du couple en France.",
          EN: "Budgetary clarity eliminates suspicions. Setting a mutual framework protects both the financial and emotional balance of the couple in France.",
          TH: "ความชัดเจนเรื่องงบประมาณจะช่วยขจัดความระแวง การกำหนดกรอบข้อตกลงร่วมกันจะช่วยปกป้องความมั่นคงทางการเงินและจิตใจของชีวิตคู่ในฝรั่งเศส"
        }
      },
      {
        id: "q6_3",
        question: {
          FR: "Qui est prioritaire pour recevoir un soutien financier selon la tradition morale thaïlandaise ?",
          EN: "Who is prioritised for financial support according to Thai moral tradition?",
          TH: "ตามธรรมเนียมศีลธรรมไทย ใครคือผู้ที่ควรได้รับการสนับสนุนทางการเงินเป็นอันดับแรก?"
        },
        options: {
          FR: [
            "Les frères et sœurs en âge de travailler.",
            "Les parents (père et mère).",
            "Les amis d'enfance et voisins du village."
          ],
          EN: [
            "Brothers and sisters of working age.",
            "Parents (father and mother).",
            "Childhood friends and village neighbours."
          ],
          TH: [
            "พี่ชายน้องชายพี่สาวน้องสาวที่อยู่ในวัยทำงาน",
            "บิดามารดา (พ่อและแม่)",
            "เพื่อนในวัยเด็กและเพื่อนบ้านในหมู่บ้าน"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La piété filiale cible directement les parents qui ont donné la vie. Soutenir les frères et sœurs capables de travailler ne relève pas de la même obligation.",
          EN: "Filial piety focuses directly on the parents who gave life. Supporting healthy siblings capable of working is not under the same moral mandate.",
          TH: "ความกตัญญูกตเวทีมุ่งตรงไปยังพ่อแม่ผู้ให้กำเนิด การส่งเงินให้พี่น้องที่ร่างกายแข็งแรงและสามารถทำงานได้นั้น ไม่ได้ถือเป็นหน้าที่ผูกพันทางศีลธรรมในระดับเดียวกัน"
        }
      }
    ]
  },
  {
    id: 7,
    title: {
      FR: "Relocalisation et Intégration en France",
      EN: "Relocation and Integration in France",
      TH: "การย้ายถิ่นฐานและการปรับตัวในฝรั่งเศส"
    },
    subtitle: {
      FR: "Accompagner la transition de vie et surmonter le choc culturel",
      EN: "Supporting the life transition and overcoming culture shock",
      TH: "การสนับสนุนการเปลี่ยนผ่านของชีวิตและการก้าวผ่านภาวะช็อกทางวัฒนธรรม"
    },
    durationMinutes: 20,
    concepts: [
      {
        FR: {
          title: "La courbe du choc culturel en U",
          content: "L'installation en France passe par 4 phases psychologiques distinctes : la Lune de Miel (excitation des nouveautés), la Crise/Choc culturel (frustration face aux barrières de la langue, solitude, climat froid, sentiment d'impuissance), l'Ajustement (apprentissage des codes locaux, autonomie croissante), et l'Intégration (double identité épanouie)."
        },
        EN: {
          title: "The U-Curve of Culture Shock",
          content: "Relocating to France involves 4 distinct psychological phases: the Honeymoon phase (excitement of novelty), the Culture Shock/Crisis phase (frustration over language barriers, isolation, cold weather, feeling of helplessness), the Adjustment phase (learning local codes, growing autonomy), and the Integration phase (bicultural identity)."
        },
        TH: {
          title: "กราฟการปรับตัวทางวัฒนธรรมรูปตัว U",
          content: "การย้ายมาพำนักในฝรั่งเศสผ่านขั้นตอนทางจิตวิทยา 4 ระยะ: ระยะฮันนีมูน (ความตื่นเต้นกับสิ่งใหม่), ระยะวิกฤต/ช็อกทางวัฒนธรรม (ความอึดอัดจากกำแพงภาษา ความเหงา อากาศหนาว รู้สึกช่วยเหลือตัวเองไม่ได้), ระยะการปรับตัว (เริ่มเรียนรู้วัฒนธรรมท้องถิ่น มีอิสระมากขึ้น) และระยะการผสมผสาน (การปรับตัวเข้ากับสองวัฒนธรรมอย่างมีความสุข)"
        }
      },
      {
        FR: {
          title: "Le défi de l'isolement et de l'indépendance",
          content: "En Thaïlande, la vie sociale se déroule en plein air et en collectivité. En France, la vie est plus intériorisée et individualiste. Pour éviter la dépression, le partenaire thaïlandais doit rapidement acquérir des outils d'autonomie : maîtrise de la langue française, obtention du permis de conduire et recherche d'une activité professionnelle ou associative."
        },
        EN: {
          title: "The Challenge of Isolation and Autonomy",
          content: "In Thailand, social life happens outdoors and in community settings. In France, life is more private and individualistic. To prevent depression, the Thai partner must rapidly acquire tools for independence: learning French, passing the driving license, and seeking professional or community activities."
        },
        TH: {
          title: "ความท้าทายจากความโดดเดี่ยวและความเป็นอิสระ",
          content: "ในประเทศไทย ชีวิตทางสังคมมักดำเนินไปกลางแจ้งและในชุมชนที่ใกล้ชิด แต่ในฝรั่งเศส ชีวิตจะมีความเป็นส่วนตัวและเป็นปัจเจกมากกว่า เพื่อหลีกเลี่ยงภาวะซึมเศร้า คู่สมรสชาวไทยต้องรีบสร้างอิสรภาพในการดำเนินชีวิตอย่างรวดเร็ว เช่น การฝึกภาษา การมีใบอนุญาตขับขี่ และการหางานทำหรือร่วมกิจกรรมสมาคม"
        }
      },
      {
        FR: {
          title: "Le rôle de soutien actif du conjoint français",
          content: "Le partenaire français ne doit pas se comporter en simple tuteur autoritaire mais en coéquipier. Valoriser l'héritage thaïlandais à la maison (nourriture, fêtes, langue), encourager l'indépendance financière du partenaire thaïlandais et faciliter la connexion avec des associations ou réseaux de la communauté thaïlandaise locale sont des facteurs essentiels de réussite."
        },
        EN: {
          title: "The Active Support Role of the French Spouse",
          content: "The French partner must act as a supportive teammate, not a strict guardian. Valuing the Thai heritage at home (cooking, festivals, language), encouraging financial independence, and facilitating connections with local Thai community associations are key factors for success."
        },
        TH: {
          title: "บทบาทการสนับสนุนเชิงรุกของคู่รักฝรั่งเศส",
          content: "คู่รักชาวฝรั่งเศสต้องไม่ทำตัวเป็นเพียงผู้ปกครองที่คอยสั่งการ แต่ต้องเป็นเพื่อนร่วมทีม คอยสนับสนุนการรักษาวัฒนธรรมไทยในบ้าน (อาหาร เทศกาล ภาษา) ส่งเสริมให้อีกฝ่ายมีอิสรภาพทางการเงิน และช่วยประสานสายสัมพันธ์กับสมาคมหรือเครือข่ายคนไทยในท้องถิ่น ซึ่งเป็นปัจจัยสำคัญสู่ความสำเร็จ"
        }
      }
    ],
    quiz: [
      {
        id: "q7_1",
        question: {
          FR: "Quelle est la deuxième phase de la courbe en U de la relocalisation ?",
          EN: "What is the second phase of the U-curve of relocation?",
          TH: "ระยะที่สองของกราฟการปรับตัวรูปตัว U คืออะไร?"
        },
        options: {
          FR: [
            "La Lune de Miel.",
            "La phase d'ajustement.",
            "La phase de crise ou de choc culturel."
          ],
          EN: [
            "The Honeymoon phase.",
            "The adjustment phase.",
            "The crisis or culture shock phase."
          ],
          TH: [
            "ระยะฮันนีมูน",
            "ระยะการปรับตัว",
            "ระยะวิกฤตหรืออาการช็อกทางวัฒนธรรม"
          ]
        },
        correctIndex: 2,
        explanation: {
          FR: "Après l'excitation des premiers mois (Lune de Miel), les difficultés quotidiennes et la barrière de la langue provoquent souvent une phase de déprime passagère appelée choc culturel.",
          EN: "After the initial excitement of the first months (Honeymoon), daily struggles and the language barrier often trigger a temporary emotional dip called culture shock.",
          TH: "หลังจากความตื่นเต้นในช่วงเดือนแรกๆ (ระยะฮันนีมูน) อุปสรรคในชีวิตประจำวันและกำแพงทางภาษา มักทำให้เกิดช่วงจิตตกชั่วคราวที่เรียกว่าภาวะช็อกทางวัฒนธรรม"
        }
      },
      {
        id: "q7_2",
        question: {
          FR: "Quel outil est indispensable pour l'autonomie géographique du conjoint thaïlandais en dehors des grandes villes ?",
          EN: "Which tool is indispensable for the geographical autonomy of the Thai partner outside big cities?",
          TH: "เครื่องมือใดที่จำเป็นที่สุดสำหรับความเป็นอิสระในการเดินทางของคู่สมรสไทยนอกเมืองใหญ่?"
        },
        options: {
          FR: [
            "Une carte de métro parisien.",
            "L'obtention du permis de conduire français (ou conversion).",
            "Une boussole de randonnée."
          ],
          EN: [
            "A Paris metro map.",
            "Obtaining a French driving license (or converting the Thai one).",
            "A hiking compass."
          ],
          TH: [
            "แผนที่รถไฟใต้ดินปารีส",
            "การได้รับใบอนุญาตขับขี่ฝรั่งเศส (หรือการเทียบแปลงใบขับขี่ไทย)",
            "เข็มทิศสำหรับเดินป่า"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "En dehors des métropoles, l'absence de transports en commun fluides rend le permis de conduire indispensable pour travailler, faire des courses et rompre l'isolement.",
          EN: "Outside of major transit-heavy cities, the lack of public transportation makes a driving license mandatory to work, shop, and prevent severe isolation.",
          TH: "นอกเขตเมืองใหญ่ การไม่มีระบบขนส่งสาธารณะที่สะดวกสบายทำให้ใบอนุญาตขับขี่กลายเป็นสิ่งจำเป็นอย่างยิ่งในการไปทำงาน ซื้อของ และลดความโดดเดี่ยว"
        }
      },
      {
        id: "q7_3",
        question: {
          FR: "Comment le conjoint français peut-il aider son partenaire à surmonter l'isolement ?",
          EN: "How can the French partner help their spouse overcome isolation?",
          TH: "คู่รักชาวฝรั่งเศสจะช่วยให้คู่สมรสผ่านพ้นความโดดเดี่ยวได้อย่างไร?"
        },
        options: {
          FR: [
            "En lui interdisant de contacter sa famille en Thaïlande.",
            "En facilitant les liens avec la communauté thaïlandaise locale et en l'encourageant à apprendre le français.",
            "En l'obligeant à rester à la maison pour s'occuper du ménage."
          ],
          EN: [
            "By forbidding them from contacting their family in Thailand.",
            "By facilitating links with the local Thai community and encouraging them to learn French.",
            "By forcing them to stay at home and do housework."
          ],
          TH: [
            "โดยการสั่งห้ามติดต่อครอบครัวที่ประเทศไทย",
            "โดยการช่วยประสานความสัมพันธ์กับกลุ่มคนไทยในท้องถิ่น และสนับสนุนให้เรียนภาษาฝรั่งเศสอย่างต่อเนื่อง",
            "โดยการให้อยู่แต่ในบ้านเพื่อดูแลงานบ้านเพียงอย่างเดียว"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Garder un lien avec sa culture d'origine tout en s'ouvrant pas à pas à la langue du pays d'accueil est l'équilibre parfait pour une bonne intégration.",
          EN: "Maintaining a connection with their original culture while progressively embracing the host country's language is the optimal balance for successful integration.",
          TH: "การรักษาความเชื่อมโยงกับวัฒนธรรมดั้งเดิมควบคู่ไปกับการเปิดรับภาษาของประเทศใหม่อย่างค่อยเป็นค่อยไป คือความสมดุลที่สมบูรณ์แบบสำหรับการปรับตัวที่ดี"
        }
      }
    ]
  },
  {
    id: 8,
    title: {
      FR: "Droits de Propriété et Immobilier en Thaïlande",
      EN: "Property Rights and Real Estate in Thailand",
      TH: "สิทธิในทรัพย์สินและอสังหาริมทรัพย์ในไทย"
    },
    subtitle: {
      FR: "Sécuriser ses investissements et comprendre les restrictions légales",
      EN: "Securing investments and understanding legal restrictions",
      TH: "การคุ้มครองความปลอดภัยในการลงทุนและทำความเข้าใจข้อจำกัดทางกฎหมาย"
    },
    durationMinutes: 20,
    concepts: [
      {
        FR: {
          title: "L'interdiction de propriété foncière pour les étrangers",
          content: "En vertu de la loi thaïlandaise, un citoyen étranger n'a pas le droit de posséder de terrain (sol) à son nom propre en Thaïlande. Si un couple mixte achète une maison avec terrain, le titre de propriété du terrain ('Chanote') doit être enregistré exclusivement au nom du conjoint thaïlandais."
        },
        EN: {
          title: "Foreign Land Ownership Prohibition",
          content: "Under Thai law, foreigners are strictly forbidden from owning land in their own name. If a cross-cultural couple buys a house with land, the land title deed ('Chanote') must be registered exclusively in the name of the Thai spouse."
        },
        TH: {
          title: "ข้อห้ามต่างชาติถือครองที่ดิน",
          content: "ภายใต้กฎหมายไทย คนต่างด้าวไม่มีสิทธิ์เป็นเจ้าของที่ดิน (ผืนดิน) ในนามของตนเองในประเทศไทย หากคู่สมรสต่างชาติซื้อบ้านพร้อมที่ดิน โฉนดที่ดิน ('โฉนด') จะต้องจดทะเบียนเป็นชื่อของคู่สมรสชาวไทยแต่เพียงผู้เดียวเท่านั้น"
        }
      },
      {
        FR: {
          title: "Le contrat d'usufruit (Usufruct)",
          content: "Pour protéger le conjoint étranger ayant financé l'achat, l'usufruit ('Sithi-Kep-Kin') est une option solide. Enregistré sur le Chanote au bureau de cadastre ('Land Office'), il accorde à l'étranger le droit légal d'occuper, de louer et de gérer la propriété à vie, même en cas de décès du conjoint thaïlandais ou de divorce."
        },
        EN: {
          title: "The Usufruct Agreement",
          content: "To protect the foreign spouse who funded the purchase, a lifelong usufruct ('Sithi-Kep-Kin') is a powerful option. Registered on the Chanote at the Land Office, it grants the foreigner the legal right to occupy, rent, and manage the property for life, even in the event of divorce or the Thai spouse's death."
        },
        TH: {
          title: "สัญญาจดสิทธิเก็บกิน (Usufruct)",
          content: "เพื่อคุ้มครองคู่สมรสต่างชาติที่สนับสนุนเงินทุนในการซื้อ การจด 'สิทธิเก็บกิน' ถือเป็นทางเลือกที่มั่นคง ซึ่งจะถูกบันทึกไว้ในโฉนด ณ สำนักงานที่ดิน มอบสิทธิ์ทางกฎหมายให้ชาวต่างชาติสามารถอยู่อาศัย ให้เช่า และจัดการทรัพย์สินได้ตลอดชีวิต แม้ในกรณีที่คู่สมรสชาวไทยเสียชีวิตหรือมีการหย่าร้าง"
        }
      },
      {
        FR: {
          title: "Le bail de 30 ans et le Condominium Act",
          content: "D'autres alternatives existent : le bail à long terme ('Leasehold') de 30 ans renouvelable, inscrit au Land Office. Par ailleurs, le 'Condominium Act' permet aux étrangers de posséder à 100% en nom propre un appartement en copropriété, sous réserve que la part totale détenue par des étrangers dans l'immeuble ne dépasse pas 49%."
        },
        EN: {
          title: "30-Year Lease and Condominium Act",
          content: "Other alternatives exist: a registered 30-year long-term lease ('Leasehold'), renewable at the Land Office. Additionally, the 'Condominium Act' allows foreigners to own 100% of a condo apartment in their own name, provided the total foreign ownership in the building does not exceed 49%."
        },
        TH: {
          title: "สัญญาเช่า 30 ปี และ พ.ร.บ. อาคารชุด",
          content: "ยังมีทางเลือกอื่นๆ เช่น สัญญาเช่าระยะยาว ('Leasehold') 30 ปี จดทะเบียน ณ สำนักงานที่ดิน นอกจากนี้ 'พระราชบัญญัติอาคารชุด' (Condominium Act) ยังอนุญาตให้ชาวต่างชาติเป็นเจ้าของห้องชุดคอนโดมิเนียมในชื่อตนเองได้ 100% มีเงื่อนไขว่าโควตาการถือครองของคนต่างชาติในอาคารชุดนั้นๆ ต้องไม่เกิน 49%"
        }
      }
    ],
    quiz: [
      {
        id: "q8_1",
        question: {
          FR: "Un citoyen français peut-il acheter un terrain en Thaïlande directement à son propre nom ?",
          EN: "Can a French citizen buy land in Thailand directly in their own name?",
          TH: "พลเมืองชาวฝรั่งเศสสามารถซื้อที่ดินในประเทศไทยในชื่อของตนเองโดยตรงได้หรือไม่?"
        },
        options: {
          FR: [
            "Oui, sans aucune restriction.",
            "Non, la loi thaïlandaise l'interdit strictement aux étrangers.",
            "Oui, mais seulement si le terrain mesure moins de 100 m²."
          ],
          EN: [
            "Yes, without any restrictions.",
            "No, Thai law strictly prohibits foreigners from owning land.",
            "Yes, but only if the land is smaller than 100 sqm."
          ],
          TH: [
            "ได้ โดยไม่มีข้อจำกัดใดๆ",
            "ไม่ได้ กฎหมายไทยห้ามคนต่างชาติเป็นเจ้าของที่ดินอย่างเด็ดขาด",
            "ได้ แต่เฉพาะในกรณีที่ที่ดินมีขนาดน้อยกว่า 100 ตารางเมตรเท่านั้น"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La protection foncière nationale thaïlandaise réserve l'achat de parcelles de terre exclusivement aux nationaux thaïlandais, d'où la nécessité de montages légaux sécurisés.",
          EN: "Thai national land protection laws reserve direct land ownership exclusively for Thai citizens, necessitating secure legal arrangements for mixed couples.",
          TH: "กฎหมายคุ้มครองที่ดินของไทยสงวนการซื้อที่ดินไว้ให้เฉพาะผู้มีสัญชาติไทยเท่านั้น จึงจำเป็นต้องมีการจัดการทางกฎหมายที่ปลอดภัยสำหรับคู่สมรสต่างชาติ"
        }
      },
      {
        id: "q8_2",
        question: {
          FR: "Quel est l'avantage majeur du contrat d'usufruit ('Sithi-Kep-Kin') ?",
          EN: "What is the major benefit of a usufruct agreement ('Sithi-Kep-Kin')?",
          TH: "ประโยชน์หลักของการจดทะเบียนสัญญา 'สิทธิเก็บกิน' คืออะไร?"
        },
        options: {
          FR: [
            "Il donne le droit de vote en Thaïlande.",
            "Il garantit à vie à l'étranger le droit d'occuper et louer la propriété, même en cas de divorce.",
            "Il permet d'obtenir la nationalité thaïlandaise immédiatement."
          ],
          EN: [
            "It grants voting rights in Thailand.",
            "It guarantees the foreigner a lifelong right to occupy and rent the property, even in case of divorce.",
            "It grants immediate Thai citizenship."
          ],
          TH: [
            "ทำให้ได้รับสิทธิ์ในการออกเสียงเลือกตั้งในประเทศไทย",
            "ช่วยคุ้มครองสิทธิ์ของชาวต่างชาติในการอยู่อาศัยและเก็บเกี่ยวผลประโยชน์จากทรัพย์สินตลอดชีวิต แม้จะมีการหย่าร้างเกิดขึ้น",
            "ทำให้ได้รับสัญชาติไทยในทันที"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "L'usufruit est un droit réel inscrit sur le titre de propriété. Il est extrêmement difficile à révoquer unilatéralement et survit à la dissolution du mariage.",
          EN: "The usufruct is a real right recorded on the property deed. It is extremely difficult to revoke unilaterally and survives the dissolution of marriage.",
          TH: "สิทธิเก็บกินเป็นทรัพยสิทธิที่ถูกบันทึกไว้ในโฉนดที่ดิน มีความมั่นคงสูงและยากมากที่จะยกเลิกฝ่ายเดียว และยังคงมีผลอยู่แม้จะสิ้นสุดการสมรส"
        }
      },
      {
        id: "q8_3",
        question: {
          FR: "Quelle part de surface totale d'un immeuble en copropriété (Condo) peut être détenue en nom propre par des étrangers ?",
          EN: "What maximum ratio of a condominium building's total area can be owned directly by foreigners?",
          TH: "อัตราส่วนพื้นที่ทั้งหมดของอาคารชุด (คอนโด) ที่คนต่างด้าวสามารถถือกรรมสิทธิ์ในชื่อตนเองได้สูงสุดคือเท่าใด?"
        },
        options: {
          FR: [
            "100 %.",
            "49 % maximum.",
            "75 %."
          ],
          EN: [
            "100%.",
            "49% maximum.",
            "75%."
          ],
          TH: [
            "100%",
            "สูงสุดไม่เกิน 49%",
            "75%"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le Condominium Act fixe une limite stricte : la majorité de la surface habitable d'une copropriété (51%) doit rester détenue par des ressortissants thaïlandais.",
          EN: "The Condominium Act imposes a strict quota: the majority of the living space in a building (51%) must remain owned by Thai nationals.",
          TH: "พ.ร.บ. อาคารชุดกำหนดสัดส่วนไว้อย่างเข้มงวด: พื้นที่ส่วนใหญ่ของอาคารชุด (ร้อยละ 51) จะต้องถือครองโดยผู้มีสัญชาติไทย"
        }
      }
    ]
  },
  {
    id: 9,
    title: {
      FR: "Droit de la Famille et Protection en cas de Séparation",
      EN: "Family Law and Protection in Case of Separation",
      TH: "กฎหมายครอบครัวและการคุ้มครองเมื่อแยกทาง"
    },
    subtitle: {
      FR: "Comprendre les régimes matrimoniaux et la garde des enfants",
      EN: "Understanding matrimonial regimes and child custody",
      TH: "ทำความเข้าใจเกี่ยวกับสินสมรส สินส่วนตัว และการคุ้มครองสิทธิ์ดูแลบุตร"
    },
    durationMinutes: 20,
    concepts: [
      {
        FR: {
          title: "Le contrat de mariage (Séparation de biens)",
          content: "Rédiger un contrat de mariage de droit français (généralement sous le régime de la séparation de biens) chez un notaire en France avant le mariage est essentiel. Pour être applicable en Thaïlande, ce contrat (connu sous le nom de 'Pre-nuptial agreement') doit être enregistré à l'Amphur en même temps que le mariage civil."
        },
        EN: {
          title: "The Prenuptial Agreement (Separation of Assets)",
          content: "Drafting a French law prenuptial agreement (usually under the separation of assets regime) before a notary in France before marriage is crucial. To be applicable in Thailand, this contract must be officially registered at the Amphur at the exact same time as the civil marriage."
        },
        TH: {
          title: "สัญญาก่อนสมรส (การแยกทรัพย์สิน)",
          content: "การทำสัญญาก่อนสมรสตามกฎหมายฝรั่งเศส (โดยทั่วไปมักเลือกระบบแยกทรัพย์สิน) ต่อหน้าโนตารี (เจ้าพนักงานรับรองเอกสาร) ในฝรั่งเศสก่อนแต่งงานเป็นสิ่งสำคัญมาก และเพื่อให้มีผลบังคับใช้ในประเทศไทยด้วย สัญญานี้ต้องนำมาจดทะเบียน ณ ที่ว่าการอำเภอไปพร้อมกับการจดสมรส"
        }
      },
      {
        FR: {
          title: "Biens Propres (Sin Suan Tua) vs Biens Communs (Sin Somros)",
          content: "Le code civil thaïlandais sépare les biens acquis avant le mariage (Sin Suan Tua, qui restent propres à chaque époux) des biens acquis pendant le mariage (Sin Somros, qui sont partagés à 50/50 en cas de divorce). Sans contrat de mariage clair, la provenance des fonds (notamment l'argent envoyé de France par l'époux étranger) peut être difficile à prouver."
        },
        EN: {
          title: "Personal Property (Sin Suan Tua) vs Common Property (Sin Somros)",
          content: "The Thai Civil Code distinguishes between assets acquired before marriage (Sin Suan Tua, which remain separate) and assets acquired during marriage (Sin Somros, split 50/50 upon divorce). Without a clear prenuptial contract, proving the origin of funds (such as money wired from France by the foreign spouse) can be extremely difficult."
        },
        TH: {
          title: "สินส่วนตัว (Sin Suan Tua) vs สินสมรส (Sin Somros)",
          content: "ประมวลกฎหมายแพ่งและพาณิชย์ของไทยแยกความแตกต่างระหว่างทรัพย์สินที่ได้มาก่อนสมรส (สินส่วนตัว ซึ่งยังคงเป็นของแต่ละฝ่าย) และทรัพย์สินที่ได้มาระหว่างสมรส (สินสมรส ซึ่งจะแบ่งคนละครึ่ง 50/50 เมื่อหย่าร้าง) หากไม่มีสัญญาก่อนสมรสที่ชัดเจน การพิสูจน์แหล่งที่มาของเงินทุน (เช่น เงินที่ฝ่ายชายโอนมาจากฝรั่งเศส) อาจทำได้ยากมาก"
        }
      },
      {
        FR: {
          title: "Garde des enfants binationaux et enlèvement international",
          content: "En cas de séparation, la garde des enfants binationaux est un sujet hautement sensible. La Thaïlande et la France sont signataires de la Convention de La Haye sur les aspects civils de l'enlèvement international d'enfants, visant à empêcher le déplacement illicite d'un enfant d'un pays à l'autre sans l'accord des deux parents."
        },
        EN: {
          title: "Bicultural Child Custody and International Abduction",
          content: "In the event of separation, the custody of dual-national children is highly sensitive. Both Thailand and France are signatories to the Hague Convention on the Civil Aspects of International Child Abduction, which aims to prevent the illicit removal of a child from one country to another without both parents' consent."
        },
        TH: {
          title: "สิทธิ์เลี้ยงดูบุตรสองสัญชาติและการลักพาตัวเด็กข้ามแดน",
          content: "ในกรณีที่แยกทางกัน การดูแลบุตรสองสัญชาติเป็นประเด็นที่อ่อนไหวอย่างยิ่ง ทั้งประเทศไทยและฝรั่งเศสเป็นภาคีของอนุสัญญาปารุงกรุงเฮกว่าด้วยแง่มุมทางแพ่งของการลักพาตัวเด็กระหว่างประเทศ ซึ่งมีวัตถุประสงค์เพื่อป้องกันการเคลื่อนย้ายเด็กโดยมิชอบด้วยกฎหมายจากประเทศหนึ่งไปยังอีกประเทศหนึ่งโดยไม่ได้รับความยินยอมจากบิดามารดาทั้งสองฝ่าย"
        }
      }
    ],
    quiz: [
      {
        id: "q9_1",
        question: {
          FR: "Quand faut-il faire enregistrer un contrat de mariage (Pre-nuptial) en Thaïlande ?",
          EN: "When must a prenuptial agreement be registered in Thailand?",
          TH: "ต้องจดทะเบียนสัญญาก่อนสมรสในประเทศไทยเมื่อใด?"
        },
        options: {
          FR: [
            "N'importe quand, même 10 ans après le mariage.",
            "Simultanément lors de l'enregistrement du mariage civil à l'Amphur.",
            "Uniquement lors de l'audience de divorce."
          ],
          EN: [
            "Anytime, even 10 years after the marriage.",
            "Simultaneously at the time of civil marriage registration at the Amphur.",
            "Only during the divorce hearing."
          ],
          TH: [
            "เมื่อใดก็ได้ แม้แต่ 10 ปีหลังการสมรส",
            "ยื่นจดทะเบียนไปพร้อมกันในขณะจดทะเบียนสมรส ณ ที่ว่าการอำเภอ",
            "เฉพาะในระหว่างการพิจารณาคดีหย่าเท่านั้น"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le code civil thaïlandais exige que le contrat de mariage soit inscrit dans le registre matrimonial de l'Amphur AU MOMENT du mariage. Aucun contrat post-nuptial n'a la même force juridique.",
          EN: "The Thai Civil Code mandates that the prenuptial agreement must be recorded in the Amphur's marriage register AT THE TIME of the marriage. Postnuptial agreements do not hold the same legal strength.",
          TH: "ประมวลกฎหมายแพ่งและพาณิชย์ของไทยกำหนดให้ต้องยื่นสัญญาก่อนสมรสต่อนายทะเบียนในขณะจดทะเบียนสมรส สัญญาที่ทำขึ้นภายหลังการสมรส (สัญญาระหว่างสมรส) จะไม่มีความมั่นคงทางกฎหมายเท่า"
        }
      },
      {
        id: "q9_2",
        question: {
          FR: "Qu'est-ce que le 'Sin Somros' selon le droit de la famille thaïlandais ?",
          EN: "What is 'Sin Somros' under Thai family law?",
          TH: "'สินสมรส' ตามกฎหมายครอบครัวไทยคืออะไร?"
        },
        options: {
          FR: [
            "Les biens personnels acquis par héritage avant le mariage.",
            "Les biens communs acquis par les époux durant le mariage.",
            "Le montant payé pour la cérémonie religieuse."
          ],
          EN: [
            "Personal assets acquired through inheritance before marriage.",
            "Common assets acquired by spouses during the marriage.",
            "The fee paid for the religious ceremony."
          ],
          TH: [
            "ทรัพย์สินส่วนตัวที่ได้รับจากมรดกก่อนการสมรส",
            "ทรัพย์สินร่วมกันที่คู่สมรสได้มาระหว่างสมรส",
            "ค่าใช้จ่ายที่จ่ายสำหรับพิธีกรรมทางศาสนา"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le 'Sin Somros' constitue le patrimoine commun du couple. En cas de divorce, il est réparti équitablement par moitié entre les deux conjoints.",
          EN: "'Sin Somros' represents the joint estate of the couple. Upon divorce, it is divided equally (50/50) between the two spouses.",
          TH: "'สินสมรส' คือทรัพย์สินร่วมกันของคู่สมรส ในกรณีที่จดทะเบียนหย่า สินสมรสจะถูกแบ่งเป็นสัดส่วนเท่าๆ กัน (คนละครึ่ง) ระหว่างคู่สมรสทั้งสองฝ่าย"
        }
      },
      {
        id: "q9_3",
        question: {
          FR: "Quel traité international aide à prévenir le déplacement non consenti d'un enfant par l'un des parents ?",
          EN: "Which international treaty helps prevent the non-consensual removal of a child by one parent?",
          TH: "สนธิสัญญาระหว่างประเทศใดที่ช่วยป้องกันการนำบุตรหลานเดินทางออกนอกประเทศโดยไม่ได้รับความยินยอมจากผู้ปกครองอีกฝ่าย?"
        },
        options: {
          FR: [
            "La Convention de Genève.",
            "La Convention de La Haye sur l'enlèvement international d'enfants.",
            "L'Accord de Schengen."
          ],
          EN: [
            "The Geneva Convention.",
            "The Hague Convention on International Child Abduction.",
            "The Schengen Agreement."
          ],
          TH: [
            "อนุสัญญาเจนีวา",
            "อนุสัญญากรุงเฮกว่าด้วยการลักพาตัวเด็กระหว่างประเทศ",
            "ข้อตกลงเชงเก้น"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La Convention de La Haye lie la France et la Thaïlande. Elle oblige au retour immédiat d'un enfant déplacé de manière illicite pour restaurer la situation de garde préexistante.",
          EN: "The Hague Convention binds France and Thailand, forcing the prompt return of a child wrongfully removed from their habitual residence to restore the pre-existing custody status.",
          TH: "อนุสัญญากรุงเฮกมีผลผูกพันระหว่างฝรั่งเศสและไทย โดยกำหนดให้ต้องส่งคืนตัวเด็กที่ถูกนำตัวไปโดยมิชอบกลับสู่ประเทศถิ่นที่อยู่ถาวรโดยเร็ว เพื่อคืนสู่สถานะสิทธิ์การดูแลเดิมก่อนหน้า"
        }
      }
    ]
  },
  {
    id: 10,
    title: {
      FR: "Les Clés d'une Intégration à Long Terme Réussie",
      EN: "Keys to a Successful Long-Term Integration",
      TH: "กุญแจสู่ความสำเร็จในการใช้ชีวิตคู่ระยะยาว"
    },
    subtitle: {
      FR: "Cultiver le respect mutuel, le compromis et le biculturalisme",
      EN: "Cultivating mutual respect, compromise, and biculturalism",
      TH: "การปลูกฝังความเคารพซึ่งกันและกัน การประนีประนอม และการเป็นครอบครัวสองวัฒนธรรม"
    },
    durationMinutes: 15,
    concepts: [
      {
        FR: {
          title: "Le double compromis culturel",
          content: "La réussite ne consiste pas à demander à l'un de s'assimiler totalement à l'autre. Le conjoint français doit s'ouvrir à la culture bouddhiste, l'importance de la famille et la gastronomie thaïlandaise. Le conjoint thaïlandais doit apprendre à exprimer ses opinions plus directement, comprendre l'esprit critique français et s'approprier les codes administratifs et sociaux français."
        },
        EN: {
          title: "The Double Cultural Compromise",
          content: "Success is not about asking one partner to assimilate entirely into the other's culture. The French spouse must embrace Buddhist philosophy, family closeness, and Thai cuisine. The Thai spouse must learn to voice opinions more directly, understand the French critical debate culture, and navigate Western social and administrative structures."
        },
        TH: {
          title: "การประนีประนอมทางวัฒนธรรมแบบสองทาง",
          content: "ความสำเร็จไม่ได้เกิดจากการขอให้อีกฝ่ายกลืนกลายไปกับอีกวัฒนธรรมหนึ่งโดยสิ้นเชิง คู่สมรสฝ่ายฝรั่งเศสควรเปิดใจเรียนรู้พุทธศาสนา ความอบอุ่นของครอบครัว และอาหารไทย ส่วนคู่สมรสฝ่ายไทยควรเรียนรู้ที่จะแสดงความคิดเห็นอย่างตรงไปตรงมามากขึ้น ทำความเข้าใจวัฒนธรรมการวิจารณ์เชิงสร้างสรรค์ และปรับตัวเข้ากับระบบสังคมฝรั่งเศส"
        }
      },
      {
        FR: {
          title: "Célébrer les traditions des deux mondes",
          content: "Un foyer harmonieux intègre le biculturalisme de manière active : fêter le Nouvel An occidental et le Songkran (Nouvel An thaïlandais), célébrer Noël et le Loy Krathong. Ces moments festifs renforcent le sentiment d'appartenance à un projet de vie commun riche et respectueux des racines de chacun."
        },
        EN: {
          title: "Celebrating Traditions of Both Worlds",
          content: "A harmonious home actively practices biculturalism: celebrating the Western New Year alongside Songkran (Thai New Year), and Christmas alongside Loy Krathong. These festive moments reinforce the sense of belonging to a rich, mutual project that respects everyone's roots."
        },
        TH: {
          title: "การเฉลิมฉลองประเพณีของทั้งสองโลก",
          content: "บ้านที่มีความสุขคือบ้านที่นำความงดงามของสองวัฒนธรรมมาปฏิบัติจริงร่วมกัน: การฉลองวันปีใหม่สากลควบคู่กับวันสงกรานต์ (ปีใหม่ไทย) และการฉลองคริสต์มาสควบคู่กับวันลอยกระทง ช่วงเวลาแห่งเทศกาลเหล่านี้จะช่วยกระชับความผูกพันและสร้างความเคารพในรากเหง้าของกันและกัน"
        }
      },
      {
        FR: {
          title: "Le bilinguisme des enfants : une richesse",
          content: "Si le couple a des enfants, le bilinguisme précoce (chaque parent parle sa langue maternelle à l'enfant selon la méthode OPOL - One Parent One Language) est un cadeau inestimable. C'est la clé de voûte pour que l'enfant conserve un lien d'amour solide et profond avec ses deux familles en France et en Thaïlande."
        },
        EN: {
          title: "Bilingualism in Children: A Gift",
          content: "If the couple has children, early bilingualism (each parent speaking their native tongue using the OPOL - One Parent One Language - method) is a priceless gift. It serves as the foundation for the child to maintain deep, loving, and lasting relationships with both families in France and Thailand."
        },
        TH: {
          title: "การสอนสองภาษาแก่บุตร: ของขวัญอันล้ำค่า",
          content: "หากมีบุตร การฝึกพูดสองภาษาตั้งแต่เด็ก (โดยให้พ่อแม่แต่ละคนพูดภาษาแม่ของตนเองกับลูก ตามหลักการ OPOL - หนึ่งคนหนึ่งภาษา) คือของขวัญอันล้ำค่าและประเมินค่าไม่ได้ เป็นสะพานเชื่อมโยงให้เด็กคงความผูกพันอันแน่นแฟ้นและลึกซึ้งกับครอบครัวของทั้งสองฝ่ายทั้งในฝรั่งเศสและไทย"
        }
      }
    ],
    quiz: [
      {
        id: "q10_1",
        question: {
          FR: "Quelle méthode est recommandée pour élever des enfants bilingues franco-thaï ?",
          EN: "Which method is recommended for raising bilingual Franco-Thai children?",
          TH: "วิธีใดที่แนะนำสำหรับการเลี้ยงดูบุตรสองภาษาไทย-ฝรั่งเศส?"
        },
        options: {
          FR: [
            "Parler uniquement français à la maison et rejeter le thaï.",
            "La méthode OPOL : chaque parent s'adresse à l'enfant dans sa propre langue maternelle.",
            "Attendre l'âge de 15 ans avant de commencer l'anglais."
          ],
          EN: [
            "Speaking only French at home and ignoring Thai.",
            "The OPOL method: each parent speaks to the child in their own native language.",
            "Waiting until age 15 before introducing English."
          ],
          TH: [
            "พูดแต่ภาษาฝรั่งเศสในบ้านและละทิ้งภาษาไทย",
            "หลักการ OPOL: พ่อและแม่แต่ละคนพูดคุยกับลูกด้วยภาษาแม่ของตนเองอย่างสม่ำเสมอ",
            "รอจนถึงอายุ 15 ปีก่อนเริ่มเรียนภาษาอังกฤษ"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La méthode OPOL ('One Parent, One Language') évite la confusion linguistique et permet un apprentissage simultané naturel de haute qualité.",
          EN: "The OPOL ('One Parent, One Language') method prevents linguistic confusion and allows natural, high-quality simultaneous bilingual development.",
          TH: "วิธีการพูดคุยแบบ 'หนึ่งคนหนึ่งภาษา' (OPOL) ช่วยป้องกันความสับสนทางภาษา และช่วยให้เด็กมีพัฒนาการเรียนรู้ทั้งสองภาษาพร้อมกันได้อย่างเป็นธรรมชาติที่สุด"
        }
      },
      {
        id: "q10_2",
        question: {
          FR: "Pour réussir à long terme, quelle attitude face aux traditions nationales est conseillée ?",
          EN: "For long-term success, what attitude towards national traditions is recommended?",
          TH: "เพื่อความสำเร็จของชีวิตคู่ในระยะยาว แนะนำให้มีทัศนคติอย่างไรต่อขนบธรรมเนียมประเพณีของทั้งสองชาติ?"
        },
        options: {
          FR: [
            "Célébrer activement les fêtes des deux pays (Songkran, Noël, etc.) pour cultiver la biculturalité.",
            "Supprimer toutes les fêtes pour être parfaitement neutre.",
            "N'autoriser que les fêtes françaises en France."
          ],
          EN: [
            "Actively celebrate festivals of both countries (Songkran, Christmas, etc.) to foster biculturalism.",
            "Suppress all celebrations to remain completely neutral.",
            "Only allow French celebrations in France."
          ],
          TH: [
            "ร่วมเฉลิมฉลองเทศกาลของทั้งสองประเทศอย่างกระตือรือร้น (เช่น วันสงกรานต์ คริสต์มาส เป็นต้น) เพื่อส่งเสริมความเป็นครอบครัวสองวัฒนธรรม",
            "ยกเลิกการฉลองทุกเทศกall เพื่อความเป็นกลางอย่างสมบูรณ์",
            "อนุญาตให้ฉลองเฉพาะเทศกาลฝรั่งเศสเท่านั้นเมื่ออยู่ในฝรั่งเศส"
          ]
        },
        correctIndex: 0,
        explanation: {
          FR: "La célébration alternée des fêtes offre des occasions de partage joyeux et renforce l'estime de soi de chaque conjoint au sein du foyer.",
          EN: "Alternating and celebrating festivals provides joyful moments of sharing and reinforces each spouse's self-esteem inside the home.",
          TH: "การสลับหมุนเวียนเฉลิมฉลองเทศกาลมอบโอกาสแห่งการแบ่งปันความสุขร่วมกัน และเสริมสร้างความภาคภูมิใจในตนเองของคู่สมรสแต่ละฝ่ายภายในบ้าน"
        }
      },
      {
        id: "q10_3",
        question: {
          FR: "Qu'est-ce qui caractérise l'arbre de l'harmonie franco-thaïlandaise ?",
          EN: "What characterises the Franco-Thai harmony tree?",
          TH: "ลักษณะเด่นของต้นไม้แห่งความกลมเกลียวไทย-ฝรั่งเศสคืออะไร?"
        },
        options: {
          FR: [
            "Le fait que l'un doive effacer sa culture pour plaire à l'autre.",
            "Le compromis réciproque où chacun fait un pas vers l'autre avec curiosité et amour.",
            "La rivalité constante pour imposer ses coutumes."
          ],
          EN: [
            "One partner having to erase their culture to please the other.",
            "Reciprocal compromise where each partner takes a step towards the other with curiosity and love.",
            "Constant rivalry to impose one's customs."
          ],
          TH: [
            "การที่ฝ่ายใดฝ่ายหนึ่งต้องลบล้างวัฒนธรรมตนเองออกไปเพื่อให้ถูกใจอีกฝ่าย",
            "การประนีประนอมและการปรับตัวเข้าหากันอย่างเท่าเทียม โดยต่างฝ่ายต่างก้าวเข้าหากันด้วยความเคารพและรัก",
            "การแข่งขันกันตลอดเวลาเพื่อครอบงำหรือยัดเยียดธรรมเนียมของตนเอง"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Une relation saine ne repose pas sur la soumission culturelle mais sur un enrichissement bilingue et mutuel constant.",
          EN: "A healthy relationship is never built on cultural submission but on constant bilingual and mutual enrichment.",
          TH: "ชีวิตคู่ที่แข็งแรงไม่ได้ตั้งอยู่บนการยอมจำนนทางวัฒนธรรม แต่สร้างขึ้นจากการส่งเสริมสองภาษาและการแลกเปลี่ยนเรียนรู้อย่างต่อเนื่องของทั้งสองฝ่าย"
        }
      }
    ]
  },
  {
    id: 11,
    title: {
      FR: "Malentendus et Incompréhensions Amoureuses",
      EN: "Romantic Misunderstandings and Expectation Gaps",
      TH: "ความเข้าใจผิดและการสื่อสารที่คลาดเคลื่อนในความรัก"
    },
    subtitle: {
      FR: "Décoder le silence amoureux, la jalousie et la pudeur biculturelle",
      EN: "Decoding romantic silence, jealousy, and bicultural modesty",
      TH: "ถอดรหัสความเงียบในความรัก ความหึงหวง และความเขินอายสองวัฒนธรรม"
    },
    durationMinutes: 15,
    concepts: [
      {
        FR: {
          title: "Le silence amoureux : pudeur vs désaccord",
          content: "En France, le silence au sein du couple est souvent interprété négativement (boudage, désaccord caché). En Thaïlande, le silence ('Nging') ou le retrait temporaire est une stratégie d'évitement des conflits visant à protéger la relation. Ce silence est une marque de respect et de pudeur sentimentale, non d'indifférence."
        },
        EN: {
          title: "Silence in Love: Modesty vs Disagreement",
          content: "In France, silence within a couple is often interpreted negatively (sulking, hidden disagreement). In Thailand, silence ('Nging') or temporary withdrawal is a conflict-avoidance strategy to protect the relationship. This silence represents emotional modesty and respect, not indifference."
        },
        TH: {
          title: "ความเงียบในความรัก: ความเหนียมอาย vs ความไม่ลงรอยกัน",
          content: "ในฝรั่งเศส ความเงียบในชีวิตคู่มักถูกตีความในแง่ลบ (การบึ้งตึง หรือความไม่พอใจที่ซ่อนอยู่) แต่ในประเทศไทย ความเงียบ ('เงียบ') หรือการนิ่งเฉยชั่วคราวเป็นกลยุทธ์การหลีกเลี่ยงความขัดแย้งเพื่อรักษาความสัมพันธ์ ความเงียบนี้แสดงถึงความเกรงใจและความสำรวมทางอารมณ์ ไม่ใช่ความเย็นชาหรือเพิกเฉย"
        }
      },
      {
        FR: {
          title: "Affection en public : pudeur thaïlandaise vs démonstration française",
          content: "Les couples français manifestent volontiers leur affection en public (s'embrasser, se tenir par la taille). En Thaïlande, la pudeur corporelle reste forte. Se tenir la main est aujourd'hui accepté chez les jeunes, mais s'embrasser sur la bouche en public reste tabou et perçu comme un manque de respect envers la société et la famille de la partenaire."
        },
        EN: {
          title: "Public Affection: Thai modesty vs French romance",
          content: "French couples readily display affection in public (kissing, holding waists). In Thailand, physical modesty remains strong. Holding hands is now accepted among the youth, but kissing on the mouth in public remains taboo and is viewed as a lack of respect for society and the partner's family."
        },
        TH: {
          title: "การแสดงความรักในที่สาธารณะ: ความสำรวมแบบไทย vs การแสดงออกแบบฝรั่งเศส",
          content: "คู่รักชาวฝรั่งเศสมักแสดงความรักในที่สาธารณะอย่างเปิดเผย (การจูบ การโอบกอด) แต่ในประเทศไทย ความสำรวมทางกายยังคงสูง การจับมือถือแขนเป็นที่ยอมรับมากขึ้นในกลุ่มคนรุ่นใหม่ แต่การจูบปากในที่สาธารณะยังคงเป็นเรื่องต้องห้ามและถูกมองว่าขาดความเคารพต่อขนบธรรมเนียมและครอบครัวของอีกฝ่าย"
        }
      },
      {
        FR: {
          title: "La jalousie ('Teung') et possessivité",
          content: "En Thaïlande, la jalousie excessive ('Teung') est parfois perçue comme une preuve d'amour intense et d'investissement émotionnel. En Occident, elle est souvent vue comme un signe d'insécurité ou de toxicité. Comprendre cette différence évite de juger trop sévèrement les inquiétudes de son conjoint thaïlandais."
        },
        EN: {
          title: "Jealousy ('Teung') and possessiveness",
          content: "In Thailand, strong jealousy ('Teung') is sometimes interpreted as a proof of deep love and emotional investment. In the West, it is often viewed as a sign of insecurity or toxic behavior. Understanding this difference prevents judging a Thai partner's anxiety too harshly."
        },
        TH: {
          title: "ความหึงหวง ('หึง') และการแสดงความเป็นเจ้าของ",
          content: "ในประเทศไทย ความหึงหวงอย่างรุนแรง ('หึง') บางครั้งถูกมองว่าเป็นข้อพิสูจน์ถึงความรักอันลึกซึ้งและการดูแลเอาใจใส่ แต่ในโลกตะวันตก มักถูกมองว่าเป็นสัญญาณของความไม่มั่นคงในใจหรือพฤติกรรมที่เป็นพิษ การเข้าใจความแตกต่างนี้จะช่วยให้ไม่ตัดสินความกังวลของคนรักชาวไทยรุนแรงจนเกินไป"
        }
      }
    ],
    quiz: [
      {
        id: "q11_1",
        question: {
          FR: "Comment interpréter le silence ('Nging') d'un partenaire thaï lors d'un désaccord ?",
          EN: "How should you interpret the silence ('Nging') of a Thai partner during a disagreement?",
          TH: "ควรตีความความเงียบ ('เงียบ') ของคู่รักชาวไทยอย่างไรเมื่อมีความเห็นไม่ตรงกัน?"
        },
        options: {
          FR: [
            "Comme de l'indifférence froide ou du mépris.",
            "Comme une tentative pudique de préserver l'harmonie et d'éviter l'escalade de la colère.",
            "Comme une acceptation totale de tous vos arguments."
          ],
          EN: [
            "As cold indifference or contempt.",
            "As a modest attempt to preserve harmony and avoid escalating anger.",
            "As total agreement with all your arguments."
          ],
          TH: [
            "เป็นการเพิกเฉยอย่างเย็นชาหรือการดูหมิ่น",
            "เป็นความพยายามอย่างสุภาพในการรักษาความประนีประนอมและเลี่ยงการโต้เถียงด้วยอารมณ์โกรธ",
            "เป็นการยอมรับเหตุผลทั้งหมดของคุณอย่างสิ้นเชิง"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le silence thaïlandais est une stratégie d'apaisement temporaire. Il vise à calmer le jeu pour protéger la relation et respecter le 'Jai Yen'.",
          EN: "Thai silence is a temporary calming strategy. It aims to cool down the situation to protect the relationship and honor 'Jai Yen'.",
          TH: "ความเงียบของคนไทยคือกลยุทธ์การสงบอารมณ์ชั่วคราว มีวัตถุประสงค์เพื่อลดอุณหภูมิความตึงเครียดเพื่อรักษาความสัมพันธ์และรักษากฎ 'ใจเย็น'"
        }
      },
      {
        id: "q11_2",
        question: {
          FR: "Quelle est l'attitude recommandée concernant les démonstrations d'affection publiques en Thaïlande ?",
          EN: "What is the recommended attitude regarding public displays of affection in Thailand?",
          TH: "คำแนะนำที่เหมาะสมเกี่ยวกับการแสดงความรักในที่สาธารณะในประเทศไทยคืออะไร?"
        },
        options: {
          FR: [
            "S'embrasser passionnément sur la bouche partout pour normaliser le romantisme.",
            "Se limiter à des gestes simples (se tenir la main) et réserver l'intimité au cadre privé.",
            "Éviter tout contact visuel ou physique, même à l'abri des regards."
          ],
          EN: [
            "Kissing passionately on the mouth everywhere to normalize romance.",
            "Limiting to simple gestures (holding hands) and keeping intimacy private.",
            "Avoiding all visual or physical contact, even behind closed doors."
          ],
          TH: [
            "จูบปากอย่างดูดดื่มในทุกที่เพื่อแสดงออกถึงความรักอันทันสมัย",
            "จำกัดอยู่เพียงการแสดงออกง่ายๆ (เช่น การจับมือ) และเก็บความใกล้ชิดไว้ในพื้นที่ส่วนตัว",
            "หลีกเลี่ยงการสบตาหรือสัมผัสร่างกายทุกชนิดแม้จะอยู่ลับสายตาคนอื่น"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La société thaïlandaise valorise la retenue corporelle en public. Une affection discrète témoigne d'un grand respect pour la culture locale et la famille.",
          EN: "Thai society values physical modesty in public. Discretion in public displays of affection shows deep respect for local culture and family values.",
          TH: "สังคมไทยให้คุณค่ากับการสำรวมร่างกายในที่สาธารณะ การแสดงความรักอย่างมีขอบเขตและให้เกียรติสถานที่แสดงถึงความเคารพต่อวัฒนธรรมท้องถิ่นและครอบครัว"
        }
      }
    ]
  },
  {
    id: 12,
    title: {
      FR: "Intimité Sexuelle et Différences d'Attentes",
      EN: "Sexual Intimacy and Divergent Expectations",
      TH: "ชีวิตคู่ที่แนบแน่นและความต่างของความคาดหวังทางเพศ"
    },
    subtitle: {
      FR: "Naviguer entre pudeur traditionnelle, éducation sexuelle et harmonie des désirs",
      EN: "Navigating between traditional modesty, sex education, and harmony of desires",
      TH: "การจัดการระหว่างความอายตามธรรมเนียม เพศศึกษา และความสอดคล้องของแรงปรารถนา"
    },
    durationMinutes: 15,
    concepts: [
      {
        FR: {
          title: "Pudeur et éducation sexuelle : les non-dits",
          content: "L'éducation sexuelle en Thaïlande reste très conservatrice et axée sur la pudeur. Contrairement à la France où le plaisir sexuel is discuté de manière plus ouverte et décomplexée, les partenaires thaïlandais peuvent éprouver d'immenses difficultés à exprimer verbalement leurs désirs ou leurs insatisfactions par peur d'être jugés impolis ou immodestes."
        },
        EN: {
          title: "Modesty and Sex Education: The Unspoken Words",
          content: "Sex education in Thailand remains very conservative and focused on modesty. Unlike France, where sexual pleasure is discussed more openly and without complex, Thai partners may experience immense difficulty expressing their desires or dissatisfactions verbally, fearing they might be judged as impolite or immodest."
        },
        TH: {
          title: "ความเขินอายและเพศศึกษา: สิ่งที่ไม่มีการเอ่ยปาก",
          content: "เพศศึกษาและการพูดคุยเรื่องเพศในประเทศไทยยังคงค่อนข้างเป็นไปในทางอนุรักษนิยมและเน้นความสำรวม ต่างจากประเทศฝรั่งเศสที่ความสุขทางเพศถูกอภิปรายอย่างเปิดเผยและเป็นเรื่องปกติ คู่รักชาวไทยอาจรู้สึกอึดอัดหรือยากลำบากอย่างยิ่งในการสื่อสารความต้องการหรือความไม่พอใจในเรื่องนี้ตรงๆ เพราะกลัวถูกมองว่าก้าวร้าวหรือไม่เรียบร้อย"
        }
      },
      {
        FR: {
          title: "L'art de l'insinuation et des signaux indirects",
          content: "Faute de communication directe, le partenaire thaïlandais s'appuiera souvent sur des indices subtils et non verbaux pour exprimer son accord ou sa réticence. Le partenaire français doit apprendre à lire ces signaux émotionnels et corporels (mouvements, sourires embarrassés, ton de la voix) plutôt que d'attendre un refus explicite."
        },
        EN: {
          title: "The Art of Insinuation and Indirect Signals",
          content: "In the absence of direct communication, a Thai partner will often rely on subtle, non-verbal cues to express consent, desire, or reluctance. The French partner must learn to read these emotional and physical signals (movements, shy smiles, voice pitch) rather than expecting explicit verbal feedback."
        },
        TH: {
          title: "ศิลปะแห่งการส่งสัญญาณอ้อมและสัญญาณทางร่างกาย",
          content: "เมื่อไม่มีการสื่อสารตรงๆ คู่รักชาวไทยมักอาศัยร่องรอยที่ละเอียดอ่อนและสัญลักษณ์ทางร่างกายเพื่อแสดงการตอบรับหรือปฏิเสธ คู่รักชาวฝรั่งเศสต้องเรียนรู้ที่จะถอดรหัสสัญญาณทางอารมณ์และภาษากายเหล่านี้ (เช่น ท่าทีที่เปลี่ยนไป รอยยิ้มอ้อมแอ้ม น้ำเสียง) มากกว่าที่จะรอฟังคำพูดปฏิเสธแบบตรงตัว"
        }
      },
      {
        FR: {
          title: "Harmoniser les attentes et surmonter les tabous",
          content: "Créer un espace de sécurité émotionnelle sans jugement est la clé pour surmonter les tabous. Discuter de l'intimité sous l'angle du bien-être mutuel et de l'amour sincère permet de dissiper la gêne. Le partenaire français doit faire preuve de patience, d'écoute attentive et de douceur communicative."
        },
        EN: {
          title: "Harmonizing Expectations and Overcoming Taboos",
          content: "Creating a safe, judgment-free emotional space is key to overcoming cultural taboos. Framing discussions about intimacy around mutual well-being and sincere love helps dissipate awkwardness. The Western partner should display patience, active listening, and communicative warmth."
        },
        TH: {
          title: "การประสานความคาดหวังและข้ามผ่านข้อห้ามทางความคิด",
          content: "การสร้างพื้นที่ปลอดภัยทางอารมณ์ที่ปราศจากการตัดสินคือหัวใจสำคัญในการเอาชนะข้อห้ามทางวัฒนธรรม การพูดคุยเรื่องความใกล้ชิดในแง่มุมของสุขภาวะที่ดีร่วมกันและความรักที่จริงใจจะช่วยขจัดความเคอะเขินลงได้ คู่รักชาวฝรั่งเศสต้องอาศัยความอดทน การตั้งใจฟัง และการแสดงออกที่อ่อนโยนและนุ่มนวล"
        }
      }
    ],
    quiz: [
      {
        id: "q12_1",
        question: {
          FR: "Pourquoi un partenaire thaïlandais peut-il hésiter à parler ouvertement de ses préférences intimes ?",
          EN: "Why might a Thai partner hesitate to speak openly about intimacy preferences?",
          TH: "ทำไมคู่รักชาวไทยจึงอาจลังเลที่จะพูดคุยเกี่ยวกับรสนิยมหรือความต้องการส่วนตัวเรื่องบนเตียงอย่างเปิดเผย?"
        },
        options: {
          FR: [
            "Parce que cela ne l'intéresse absolument pas.",
            "En raison d'une éducation traditionnelle valorisant la pudeur extrême et évitant ces sujets.",
            "Parce qu'il considère cela comme un sujet purement administratif."
          ],
          EN: [
            "Because they are absolutely not interested in it.",
            "Due to traditional education valuing extreme modesty and avoiding such conversations.",
            "Because they consider it a purely administrative subject."
          ],
          TH: [
            "เพราะพวกเขาไม่มีความสนใจในเรื่องนี้เลยแม้แต่น้อย",
            "เนื่องจากการได้รับการอบรมสั่งสอนแบบดั้งเดิมที่เน้นเรื่องความรักนวลสงวนตัวอย่างยิ่งและเลี่ยงการพูดเรื่องเพศ",
            "เพราะคิดว่าเป็นเพียงหัวข้อทางธุรการเท่านั้น"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "La pudeur sociale thaïlandaise s'applique fortement à la sphère intime. En faire un sujet décomplexé demande du temps et un climat de sécurité absolue.",
          EN: "Thai social modesty applies strongly to the intimate sphere. Turning it into an open, comfortable subject requires time and absolute emotional safety.",
          TH: "ความสุภาพสำรวมตามสังคมไทยครอบคลุมอย่างมากถึงเรื่องส่วนตัว การแปรเปลี่ยนให้เป็นหัวข้อสนทนาที่ผ่อนคลายและปลอดภัยจึงต้องอาศัยระยะเวลาและความไว้ใจขั้นสูงสุด"
        }
      },
      {
        id: "q12_2",
        question: {
          FR: "Comment le conjoint occidental doit-il réagir s'il ressent une différence d'attentes sexuelles ?",
          EN: "How should the Western spouse react if they sense a difference in sexual expectations?",
          TH: "คู่รักชาวตะวันตกควรตอบสนองอย่างไรเมื่อสังเกตพบความแตกต่างของความคาดหวังในเรื่องเพศ?"
        },
        options: {
          FR: [
            "Insister lourdement jusqu'à obtenir entière satisfaction.",
            "Créer un espace de dialogue patient, sans reproche, fondé sur le bien-être réciproque.",
            "Ignorer complètement le sujet pour éviter tout malaise biculturel."
          ],
          EN: [
            "Insisting heavily until getting full satisfaction.",
            "Creating a patient, blame-free dialogue space centered on mutual well-being.",
            "Ignoring the subject entirely to avoid bicultural awkwardness."
          ],
          TH: [
            "คะยั้นคะยอหรือกดดันอย่างต่อเนื่องเพื่อให้ได้ตามใจตนเอง",
            "สร้างพื้นที่การสนทนาอย่างอดทน ปราศจากการติติง และยึดสุขภาวะที่ดีร่วมกันเป็นหลัก",
            "แกล้งทำเป็นมองข้ามเรื่องนี้ไปเลยเพื่อหลีกเลี่ยงความเคอะเขินสองวัฒนธรรม"
          ]
        },
        correctIndex: 1,
        explanation: {
          FR: "Le dialogue bienveillant, l'écoute des signaux subtils et l'absence de jugement permettent d'harmoniser les désirs tout en douceur.",
          EN: "Kind dialogue, listening to subtle cues, and avoiding judgment allow for a gentle harmonization of desires over time.",
          TH: "การพูดคุยที่เปี่ยมด้วยความหวังดี การสังเกตและใส่ใจภาษากายที่ละเอียดอ่อน และการไม่ตำหนิตัดสิน จะช่วยให้สามารถปรับความต้องการเข้าหากันได้อย่างนุ่มนวล"
        }
      }
    ]
  }
];
