import { UserRole, Language } from '../types';

export interface RoleAdvice {
  title: string;
  advice: string;
}

export interface LessonPerspective {
  MALE_WESTERN: {
    FR: RoleAdvice;
    EN: RoleAdvice;
    TH: RoleAdvice;
  };
  FEMALE_THAI: {
    FR: RoleAdvice;
    EN: RoleAdvice;
    TH: RoleAdvice;
  };
}

export const rolePerspectives: Record<number, LessonPerspective> = {
  1: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Votre rôle est d'apprendre avec humilité et d'être à l'écoute des codes thaïlandais. Les relations biculturelles demandent de dépasser le point de vue occidental cartésien. Évitez les jugements hâtifs."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Your role is to learn with humility and listen closely to Thai codes. Bicultural relationships require you to move beyond the traditional Western rational mindset. Avoid hasty judgments."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "บทบาทของคุณคือการเรียนรู้ด้วยความอ่อนน้อมถ่อมตนและใส่ใจในวัฒนธรรมไทย ความสัมพันธ์ต่างวัฒนธรรมต้องการการเปิดใจกว้างมากกว่ามุมมองแบบตะวันตกทั่วไป"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Le partenaire occidental apprécie l'honnêteté émotionnelle et la clarté. Il ne sait pas lire les pensées ou interpréter les silences. Exprimez vos ressentis de façon bienveillante mais claire."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Your Western partner appreciates emotional honesty and clarity. He cannot read your mind or easily interpret silences. Express your feelings kindly but clearly."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "คนรักชาวต่างชาติมักให้ความสำคัญกับการสื่อสารที่เปิดเผยและซื่อสัตย์ พวกเขาไม่สามารถคาดเดาความเงียบหรือการใบ้ทางอ้อมได้ การพูดความรู้สึกอย่างนุ่มนวลและตรงไปตรงมาจะช่วยเขาได้มากที่สุด"
      }
    }
  },
  2: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Utiliser correctement 'Khrap' et savoir effectuer un 'Wai' discret montre que vous respectez son monde. C'est le signal que vous n'êtes pas un touriste de passage, mais un homme d'honneur."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Using 'Khrap' correctly and knowing how to perform a polite 'Wai' proves you respect her world. It signals you are not a temporary tourist, but a respectful partner."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "การใช้คำว่า 'ครับ' อย่างถูกต้องและการไหว้ที่ถูกกาลเทศะ แสดงถึงการเคารพในโลกของเธอ เป็นสัญญาณว่าคุณเป็นคนที่ให้เกียรติอย่างแท้จริง"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Sachez qu'un étranger peut se sentir intimidé par la complexité du Wai. Encouragez-le avec douceur et ne vous moquez pas s'il fait des erreurs au début."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Be aware that a foreigner might feel intimidated by the complexity of the Wai. Gently guide and encourage him, and avoid teasing him if he makes mistakes at first."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "หนุ่มต่างชาติอาจรู้สึกกังวลกับการไหว้ที่มีหลายระดับ คุณควรให้กำลังใจและช่วยแนะนำอย่างใจเย็น ไม่ควรหัวเราะล้อเลียนเมื่อเขาทำผิดพลาดในช่วงแรก"
      }
    }
  },
  3: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "La colère ou l'élévation de la voix brisent instantanément le respect dans un couple thaï. Entraînez-vous au 'Jai Yen' (cœur frais). Résolvez les conflits par le calme et la diplomatie."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Anger or raising your voice instantly shatters respect in a Thai relationship. Practice 'Jai Yen' (cool heart). Resolve disagreements with a low tone, calm gestures, and diplomacy."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "การขึ้นเสียงหรือการแสดงความโกรธจะบั่นทอนความเคารพในชีวิตคู่ทันที พยายามฝึกฝนการมี 'ใจเย็น' เพื่อคลี่คลายปัญหาอย่างสันติ"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Pour un occidental, débattre énergiquement est un signe de franchise, pas d'hostilité. S'il s'emporte, dites-lui calmement que sa colère vous blesse au lieu de vous fermer dans le silence."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "For a Westerner, energetic debating is a sign of honesty, not hostility. If he gets passionate or loud, tell him calmly that his tone hurts you instead of retreating into absolute silence."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "หนุ่มตะวันตกมักคุ้นเคยกับการถกเถียงอย่างกระตือรือร้นเพราะมองว่าเป็นความซื่อสัตย์ หากเขเริ่มส่งเสียงดัง ควรบอกเขาอย่างเรียบนิ่งว่าน้ำเสียงของเขาทำให้คุณเสียใจ แทนการเงียบหนีหน้า"
      }
    }
  },
  4: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Le Sinsod n'est pas une transaction commerciale. C'est un gage social d'honneur pour la famille. Ne critiquez pas agressivement cette coutume, parlez-en ouvertement et calmement avec votre partenaire."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Sinsod is not a commercial transaction. It is a social tribute of honor to the family. Avoid aggressive criticism of this custom; discuss it openly and calmly with your partner."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "สินสอดไม่ใช่การซื้อขายทางธุรกิจ แต่เป็นสัญลักษณ์ในการแสดงความเกียรติยศต่อครอบครัว หลีกเลี่ยงการวิจารณ์ประเพณีนี้ด้วยความรุนแรงและพูดคุยด้วยความเคารพ"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Expliquez à votre partenaire étranger que le Sinsod récompense l'éducation reçue et rassure vos parents. Ne lui imposez pas un montant déraisonnable qui le ferait douter de la sincérité de votre amour."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Explain to your foreign partner that Sinsod acknowledges your upbringing and reassures your parents. Do not demand an unrealistic amount that could make him doubt the sincerity of your love."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "คุณควรอธิบายให้เขาเข้าใจว่าสินสอดคือการแสดงความกตัญญูต่อพ่อแม่ที่เลี้ยงดูมา ไม่ควรกำหนดวงเงินที่สูงจนเกินความจริงซึ่งอาจทำให้เขาเคลือบแคลงใจในเจตนารักของคุณ"
      }
    }
  },
  5: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "La belle-famille thaïlandaise est un bloc uni. Vos marques d'affection et d'aide financière discrète envers ses parents vous garantiront leur bienveillance éternelle."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "A Thai extended family functions as a solid unit. Showing gestures of respect and offering moderate, discreet support to her parents will secure their eternal blessings."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "ครอบครัวไทยอยู่กันเป็นกลุ่มก้อนที่แน่นแฟ้น การแสดงความกตัญญูและช่วยเหลือเกื้อกูลพ่อแม่ของเธอตามความเหมาะสม จะทำให้คุณได้รับการต้อนรับอย่างอบอุ่นที่สุด"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "En Occident, le couple prime sur la famille élargie. Protégez votre mari de demandes familiales trop intrusives et aidez-le à garder un espace de vie privé préservé."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "In Western culture, the couple comes before the extended family. Protect your husband from overly intrusive family demands, and help establish clear boundaries to safeguard your privacy."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ครอบครัวชาวตะวันตกมักแยกความเป็นส่วนตัวออกจากครอบครัวขยาย คุณควรปกป้องและสร้างขอบเขตที่ชัดเจนระหว่างญาติพี่น้องกับชีวิตคู่ของคุณสองคนเพื่อไม่ให้เขารู้สึกอึดอัด"
      }
    }
  },
  6: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Les compromis quotidiens ne se gagnent pas par des joutes verbales. Pratiquez l'écoute active et acceptez de faire de petites concessions pour préserver l'harmonie sacrée du foyer."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Daily compromises are not won through verbal debates. Practice active listening and learn to make minor concessions to maintain peaceful domestic harmony."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "การประนีประนอมไม่ได้ตัดสินกันด้วยการโต้เถียงเพื่อเอาชนะ ควรรับฟังอย่างจริงใจและยอมเสียสละจุดเล็กๆ น้อยๆ เพื่อถนอมความรู้สึกร่วมกันในบ้าน"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Un mari occidental attend que vous exprimiez vos désaccords au lieu d'accumuler de la rancœur. Osez dire ce qui ne va pas avec douceur, il saura l'apprécier."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "A Western partner expects you to voice disagreements instead of storing up resentment. Dare to speak up about what is wrong with gentle clarity; he will appreciate it."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "คนรักต่างชาติต้องการให้คุณแสดงความคิดเห็นเพื่อหาขอบเขตร่วมกัน ดีกว่าการเงียบสะสมความโกรธไว้ในใจ ลองฝึกพูดบอกความรู้สึกด้วยน้ำเสียงที่นุ่มนวล"
      }
    }
  },
  7: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Avoir un budget commun transparent rassure votre partenaire. Comprenez que l'indépendance financière totale est parfois perçue comme un manque d'engagement en Thaïlande."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Having a transparent joint budget reassures your partner. Understand that absolute financial independence is sometimes perceived as a lack of serious commitment in Thailand."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "การวางแผนงบประมาณร่วมกันอย่างโปร่งใสช่วยสร้างความมั่นใจให้คู่รัก โปรดเข้าใจว่าการแยกเรื่องเงินอย่างเด็ดขาดบางครั้งถูกมองว่าขาดความจริงใจ"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Les occidentaux sont rigoureux sur la planification financière à long terme. Présentez l'aide financière à vos parents comme une ligne budgétaire claire et négociée, et non comme un fait accompli imprévu."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Westerners are highly disciplined about long-term financial planning. Present help to your parents as a clear, agreed budget item rather than an unpredictable sudden demand."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "คนรักต่างชาติมักมีวินัยสูงกับการเงินระยะยาว คุณควรพูดคุยเรื่องการช่วยเงินพ่อแม่ให้เป็นส่วนหนึ่งของสัดส่วนงบประมาณที่ชัดเจน แทนการดึงเงินกะทันหัน"
      }
    }
  },
  8: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Si elle s'installe dans votre pays d'origine, sachez que le choc culturel et l'éloignement familial sont de dures épreuves. Soyez son soutien inconditionnel, son traducteur patient et encouragez-la à se lier d'amitié avec d'autres expatriés."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "If she moves to your home country, cultural shock and homesickness can be severe. Be her unconditional support system, a patient translator, and guide her to connect with local expat networks."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "หากเธอย้ายไปต่างประเทศ ความเหงาและการปรับตัวเป็นเรื่องยากลำบากอย่างยิ่ง คุณต้องเป็นที่พึ่งพาที่อบอุ่นและช่วยสนับสนุนให้เธอสร้างเพื่อนใหม่"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "N'hésitez pas à demander de l'aide et à partager vos difficultés d'adaptation. Votre conjoint occidental a besoin de comprendre vos défis (langue, climat, démarches) pour pouvoir vous aider efficacement."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Do not hesitate to ask for help and express your adaptation struggles. Your Western spouse needs to understand your challenges (language, weather, rules) to support you effectively."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "อย่าลังเลที่จะแบ่งปันความทุกข์ใจในการปรับตัวในต่างแดน แฟนของคุณต้องทราบถึงปัญหาของคุณ (ภาษา สภาพอากาศ ความรู้สึก) เพื่อจะได้เข้ามาช่วยเหลือได้ตรงจุด"
      }
    }
  },
  9: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Ne la critiquez jamais, même gentiment, devant des tiers ou sa famille. La perte de face est destructrice en Thaïlande. Gardez toutes les discussions sérieuses pour le cadre privé de votre foyer."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Never criticize her—even playfully—in front of others or her family. Loss of face is deeply damaging in Thai culture. Keep all constructive feedback or discussions strictly private."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "ห้ามวิจารณ์เธอต่อหน้าผู้อื่นหรือครอบครัวโดยเด็ดขาด การรักษาหน้าเป็นเรื่องสำคัญยิ่งของไทย ควรเก็บเรื่องส่วนตัวไว้คุยกันในห้องนอนสองคน"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Les conjoints étrangers ont aussi besoin de respect et de valorisation. Ne parlez pas de ses défauts à vos amies ou votre famille sur un ton dévalorisant; cela briserait sa fierté d'homme."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Your foreign spouse also needs respect and appreciation. Do not speak negatively about his flaws to your friends or family; it can wound his male pride and trust."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "คนรักต่างชาติก็ต้องการความเคารพและการให้เกียรติเช่นเดียวกัน หลีกเลี่ยงการนำข้อเสียของเขาไปพูดเล่นกับเพื่อนๆ หรือญาติพี่น้อง เพราะจะทำร้ายความภาคภูมิใจในตัวเองของเขา"
      }
    }
  },
  10: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Le bouddhisme imprègne le quotidien de votre conjointe (autels, offrandes). Respectez ces gestes même si vous êtes athée. Ils traduisent son équilibre psychologique et sa recherche de paix intérieure."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Buddhism infuses your partner's daily routine (shrines, merits, blessings). Respect these spiritual rituals even if you are non-religious. They represent her psychological balance and inner peace."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "พุทธศาสนาเป็นส่วนหนึ่งในชีวิตของเธอ (หิ้งพระ การทำบุญ) โปรดให้ความเคารพในสิ่งเหล่านี้แม้คุณจะไม่มีศาสนา เพราะคือความสุขและความสงบทางใจของเธอ"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Ne forcez pas votre conjoint étranger à se convertir ou à pratiquer si cela ne l'intéresse pas. Montrez-lui la beauté de votre philosophie par vos actes de bienveillance (Metta) au quotidien."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Do not pressure your foreign partner to convert or perform spiritual duties if they aren't interested. Demonstrate the beauty of your beliefs through daily acts of kindness (Metta) instead."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ไม่ควรบังคับหรือกดดันให้เขาหันมานับถือศาสนาตามคุณหากเขาไม่พร้อม แต่แสดงให้เขาเห็นความงดงามของหลักธรรมผ่านการกระทำที่เปี่ยมด้วยความเมตตาและใจกว้างในทุกๆ วัน"
      }
    }
  },
  11: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "La jalousie ou le silence sont souvent l'expression d'un besoin de sécurité affective en Thaïlande. Prenez le temps de rassurer régulièrement votre partenaire sur vos sentiments et votre loyauté."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Jealousy or cold silence is often an expression of a deep need for emotional security in Thailand. Take time to regularly reassure your partner of your devotion and loyalty."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "ความเงียบหรือความหึงหวงบางครั้งเป็นเสียงเรียกร้องความมั่นใจในความรัก ควรใช้เวลาพูดจาปลอบโยนและยืนยันในความสัตย์ซื่อของคุณอย่างสม่ำเสมอ"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Les attitudes possessives extrêmes font fuir les occidentaux, qui y voient un manque de confiance ou une tentative de contrôle. Exprimez vos doutes calmement au lieu de bouder de façon prolongée."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Extreme possessive behavior or tracking can drive Westerners away, as they value personal freedom and trust. Voice your anxieties calmly instead of reacting with silent treatment."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ความหึงหวงที่มากเกินไปและการพยายามควบคุมอาจทำให้คนรักชาวตะวันตกรู้สึกอึดอัดและถอยห่าง ควรเปลี่ยนมาพูดคุยถึงความกังวลใจด้วยเหตุผลเพื่อสร้างความเชื่อมั่นร่วมกัน"
      }
    }
  },
  12: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "L'intimité thaïlandaise est guidée par une pudeur traditionnelle rigoureuse en public, mais se révèle passionnée dans la sphère privée. Soyez doux, attentionné et respectez toujours son rythme émotionnel."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Thai intimacy is guided by strict cultural modesty in public, but is deeply affectionate in private. Be gentle, patient, and always respect her emotional comfort level."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "ความรักของคนไทยมักระมัดระวังในที่สาธารณะแต่หวานซึ้งเมื่ออยู่กันสองคน ควรเป็นคนที่อ่อนโยน ให้เกียรติ และใส่ใจในระดับความสะดวกใจของเธอเสมอ"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Pour les occidentaux, l'épanouissement sexuel passe par une communication ouverte sur ses désirs et ses limites. Libérez-vous des tabous inutiles au sein de votre chambre à coucher et exprimez ce que vous aimez."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "For Westerners, sexual fulfillment relies on open communication about desires and boundaries. Free yourself from restrictive taboos in your private life and share what makes you happy."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ชาวตะวันตกมองว่าชีวิตคู่ที่สมบูรณ์ต้องการการพูดคุยเปิดอกเรื่องเซ็กซ์และความต้องการส่วนตัว การลดความอายในเรื่องบนเตียงและบอกสิ่งที่ชอบจะช่วยเพิ่มความผูกพันให้ยืนยาว"
      }
    }
  },
  13: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Le soutien financier filial est un devoir moral non négociable pour elle. Considérez cette aide comme un investissement spirituel et une preuve de sa loyauté, pas comme une perte sèche de capital."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Supporting aging parents is a non-negotiable moral duty for her. View this help as a spiritual investment and evidence of her loyal nature, rather than a financial loss."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "การส่งเสียดูแลพ่อแม่วัยเกษียณเป็นหน้าที่ทางศีลธรรมสูงสุดของเธอ โปรดมองว่านี่คือการแสดงความกตัญญูที่น่านับถือ ไม่ใช่ความสิ้นเปลืองของครอบครัว"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Négociez à l'avance une somme d'argent fixe destinée à vos parents pour préserver la confiance de votre conjoint. Évitez les demandes imprévues de dernière minute qui l'inquiètent sur l'avenir de votre budget."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Negotiate a fixed, transparent monthly sum for your parents in advance to protect your spouse's trust. Avoid making unexpected, last-minute financial demands that could stress him."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ควรพูดคุยและตกลงวงเงินช่วยเหลือพ่อแม่ที่แน่นอนล่วงหน้ากับสามี เพื่อรักษาความโปร่งใสและหลีกเลี่ยงการขอเงินช่วยเหลือฉุกเฉินบ่อยๆ ซึ่งอาจทำให้เขาเครียดเรื่องเงิน"
      }
    }
  },
  14: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Le 'Kreng Jai' l'empêchera souvent d'avouer qu'elle est fatiguée, malade ou contrariée. Prenez les devants, soyez observateur et posez des questions rassurantes avec patience."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Her 'Kreng Jai' will often stop her from telling you she is tired, unwell, or displeased. Take the initiative, observe micro-expressions, and ask caring questions with patience."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "ความเกรงใจของเธอมักทำให้เธอไม่กล้าบอกว่าเหนื่อยล้าหรือไม่สบาย คุณต้องคอยสังเกตความรู้สึกและสอบถามด้วยความห่วงใยเป็นคนแรกเสมอ"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Dans le couple biculturel, trop de 'Kreng Jai' peut mener à une rupture de communication. Osez exprimer vos limites et vos besoins vitaux, votre partenaire étranger préfère que vous lui parliez plutôt que de vous voir souffrir en silence."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "In a bicultural union, excessive 'Kreng Jai' can lead to a communication breakdown. Dare to voice your boundaries and needs; your foreign partner prefers you to speak up rather than suffer in silence."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ความเกรงใจที่มากเกินไปในชีวิตคู่ทำให้เกิดความไม่เข้าใจกัน คุณควรกล้าบอกความต้องการหรือสิ่งที่คุณไม่ไหวกับสามีตรงๆ เพราะเขาอยากได้ยินและช่วยเหลือดีกว่าปล่อยให้คุณทนเงียบ"
      }
    }
  },
  15: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Le mariage traditionnel thaïlandais est une communion sociale sacrée. Participez-y avec sincérité et fierté, car cela valide votre alliance auprès de l'entièreté de sa communauté locale."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "The traditional Thai wedding is a sacred community covenant. Participate in it with respect and pride, as it officially validates your commitment to her entire community."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "พิธีแต่งงานแบบไทยดั้งเดิมเป็นการเชื่อมความสัมพันธ์ที่ศักดิ์สิทธิ์ต่อหน้าชุมชน การมีส่วนร่วมอย่างตั้งใจจะสร้างความภูมิใจและแสดงถึงการยอมรับจากครอบครัวเธออย่างถาวร"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Détaillez patiemment chaque rite du mariage à votre conjoint étranger (le fil blanc Sai Sin, l'eau sacrée). Comprendre le sens spirituel lui évitera de se sentir comme un simple figurant et le rendra fier du processus."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Patiently explain the meaning behind each wedding ritual to your partner (the white Sai Sin thread, the holy water). Understanding the spiritual context will make him proud to participate rather than feel lost."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ควรอธิบายความหมายของแต่ละขั้นตอนในพิธีแต่งงานไทยให้แฟนเข้าใจล่วงหน้า (เช่น พิธีผูกแขน หรือการรดน้ำสังข์) เพื่อให้เขาประทับใจและร่วมพิธีด้วยความรู้สึกลึกซึ้ง ไม่ใช่แค่ทำตามคำสั่ง"
      }
    }
  },
  16: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Lisez entre les lignes : un 'Mai Pen Rai' froid veut souvent dire le contraire de sa traduction littérale. Sachez écouter les modulations de sa voix et le rythme de ses gestes pour détecter les alertes émotionnelles."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Read between the lines: a cold 'Mai Pen Rai' often means the exact opposite of its literal translation. Pay attention to changes in voice tone and body language to spot emotional warnings."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "จงอ่านความหมายที่แฝงอยู่: คำว่า 'ไม่เป็นไร' ด้วยเสียงที่เรียบนิ่ง บ่อยครั้งแปลว่า 'เป็นอย่างมาก' ต้องใส่ใจในภาษากายและโทนเสียงเพื่อตรวจจับความกังวลใจของเธอ"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Votre mari étranger a une communication littérale. S'il vous demande si tout va bien et que vous répondez 'Mai Pen Rai', il va sincèrement penser que tout va bien. Exprimez vos besoins clairement si vous voulez qu'il s'adapte."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Your foreign husband communicates literally. If he asks if everything is okay and you reply 'Mai Pen Rai', he will honestly think everything is fine. Speak up clearly if you need his support."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "คนรักชาวต่างชาติมีการสื่อสารแบบคำไหนคำนั้น หากเขาถามว่ามีอะไรเกิดขึ้นไหมแล้วคุณตอบว่า 'ไม่เป็นไร' เขาจะเชื่อสนิทใจว่าไม่มีอะไรจริงๆ หากต้องการความช่วยเหลือให้เอ่ยปากบอกเขาตรงๆ"
      }
    }
  },
  17: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Encouragez-la activement à ne parler que thaïlandais aux enfants au quotidien, tandis que vous leur parlerez français. Le bilinguisme précoce est une chance cognitive et humaine immense pour l'avenir de vos enfants."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Actively encourage her to speak only Thai to your children, while you speak English/French. Early bilingualism is an incredible cognitive gift and secures their connection to both sides of the family."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "ส่งเสริมให้เธอพูดภาษาไทยกับลูกให้มากที่สุดในชีวิตประจำวัน ขณะที่คุณพูดภาษาอังกฤษ/ฝรั่งเศส ทักษะสองภาษาจะเป็นของขวัญที่ดีที่สุดสำหรับอนาคตของลูก"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Appliquez la méthode OPOL (One Parent One Language) avec rigueur. Ne mélangez pas les langues dans la même phrase pour ne pas troubler l'enfant. Soyez fière de transmettre votre langue maternelle."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Strictly apply the OPOL method (One Parent One Language). Avoid mixing languages in the same sentence to ensure clean language acquisition. Be proud of passing down your beautiful mother tongue."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ใช้หลักการคนละภาษา (OPOL) อย่างมีวินัย หลีกเลี่ยงการพูดไทยปนภาษาอังกฤษ/ฝรั่งเศสในประโยคเดียวกัน จงภูมิใจในภาษาแม่ของคุณและถ่ายทอดมันให้กับลูกตั้งแต่แรกเกิด"
      }
    }
  },
  18: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Prenez la tête des dossiers administratifs et des demandes de visa. C'est une épreuve stressante et humiliante pour elle si elle doit la vivre seule. C'est la plus belle preuve de protection d'homme que vous puissiez lui offrir."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Take the lead in organizing visa applications and official paperwork. It can be a highly stressful and intimidating experience for her alone. Leading this effort is a powerful way to protect and secure your future."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "ควรเป็นผู้นำในการจัดการเอกสารวีซ่าและราชการ ขั้นตอนที่ยุ่งยากมักสร้างความกังวลใจให้เธอสูง การที่คุณเข้ามาช่วยจัดการคือการแสดงความปกป้องที่ยอดเยี่ยมที่สุด"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "L'administration occidentale demande une précision absolue. Aidez votre mari en lui fournissant rapidement vos certificats d'état civil, photos et signatures sans traîner, car la lenteur administrative est sa bête noire."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Western bureaucracy demands absolute accuracy and specific documents. Help your husband by quickly gathering certificates, photos, and signatures; delaying paperwork causes unnecessary friction."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "ระบบราชการตะวันตกต้องการความแม่นยำสูงมาก คุณควรช่วยเตรียมเอกสารส่วนตัว เช่น ใบเกิด ทะเบียนบ้าน หรือลายเซ็นให้อย่างรวดเร็วและเรียบร้อยเพื่อแบ่งเบาความเครียดในการยื่นคำร้อง"
      }
    }
  },
  19: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Sachez dire non aux demandes familiales abusives (prêts sans retour pour des cousins éloignés), mais faites-le avec un infini respect. Laissez votre femme mener la négociation en privé pour lui éviter de perdre la face."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "Learn to say no to unreasonable extended family financial requests (unreturnable loans for distant cousins), but do so with absolute respect. Let your wife handle the explanation in private to safeguard family honor."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "เรียนรู้วิธีปฏิเสธคำขอช่วยเหลือที่ไม่สมเหตุสมผลของญาติห่างๆ อย่างสุภาพและหนักแน่น และปล่อยให้ภรรยาของคุณเป็นคนอธิบายเป็นการส่วนตัวเพื่อรักษาน้ำใจครอบครัว"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "Votre mari étranger s'inquiète légitimement de l'avenir financier de votre propre foyer. Soutenez-le si vous devez refuser une aide financière injustifiée à des parents éloignés, et montrez-lui que votre priorité absolue est votre vie de couple."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Your foreign partner naturally worries about the financial security of your nuclear family first. Support him when rejecting excessive demands from relatives; prove that your primary loyalty lies with your couple."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "สามีต่างชาติมีความกังวลที่สมเหตุสมผลเรื่องความมั่นคงของครอบครัวเล็กของคุณ คุณควรสนับสนุนเขาและช่วยปฏิเสธคำขอเงินที่เกินตัวจากเครือญาติ เพื่อพิสูจน์ว่าความสัมพันธ์ของคุณทั้งสองคือสิ่งสำคัญที่สุด"
      }
    }
  },
  20: {
    MALE_WESTERN: {
      FR: {
        title: "💡 Perspective pour Lui (Homme Occidental)",
        advice: "Pour la retraite en Thaïlande, sécurisez vos investissements de vie de façon légale (contrat d'usufruit ou bail à long terme). Cela vous protège tout en garantissant un avenir décent et organisé pour votre épouse."
      },
      EN: {
        title: "💡 Perspective for Him (Western Man)",
        advice: "For retirement in Thailand, secure your life-long investments legally (usufruct or long-term leases). This keeps you safe while ensuring a well-organized and secure future for your spouse."
      },
      TH: {
        title: "💡 คำแนะนำสำหรับคุณ (ผู้ชายต่างชาติ)",
        advice: "สำหรับการใช้ชีวิตบั้นปลายในไทย ควรศึกษาการจดทะเบียนสิทธิเก็บกินหรือเช่าที่ดินระยะยาวที่ถูกต้องตามกฎหมาย เพื่อความมั่นคงสูงสุดและช่วยดูแลความปลอดภัยให้ภรรยา"
      }
    },
    FEMALE_THAI: {
      FR: {
        title: "🌸 Perspective pour Elle (Femme Thaïlandaise)",
        advice: "La préparation d'une retraite heureuse demande d'anticiper la santé de votre conjoint étranger (assurance médicale internationale). Discutez sereinement de la gestion du patrimoine pour que chacun se sente en parfaite sécurité."
      },
      EN: {
        title: "🌸 Perspective for Her (Thai Woman)",
        advice: "Planning a happy retirement requires arranging international health insurance for your partner. Discuss property management calmly to ensure both of you feel totally safe and respected."
      },
      TH: {
        title: "🌸 มุมมองสำหรับคุณ (ผู้หญิงไทย)",
        advice: "การวางแผนเกษียณที่ราบรื่นต้องเตรียมพร้อมเรื่องการดูแลสุขภาพของคนรัก (เช่น ประกันสุขภาพชาวต่างชาติ) พูดคุยเรื่องอสังหาริมทรัพย์ร่วมกันอย่างชัดเจนเพื่อให้ทุกคนรู้สึกอบอุ่นใจที่สุด"
      }
    }
  }
};
