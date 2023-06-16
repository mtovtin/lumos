import LocalizedStrings from 'react-localization';
import klara from '../images/klara.png';
import dima from '../images/dima.png';
import xtina from '../images/xtina.png';
import kate from '../images/kate.png';

let strings = new LocalizedStrings({
  en: {
      title1: "Клара",
      text1: "Все гарно! Матеріал подається добре що не потрібно заучувати. Мені лише потрібно збільшувати словниковий запас. Все добре, мені подобається.",
      title2: "Катерина",
      text2: "Курсом дуже-дуже задоволена, бо є ж з чим порівнювати. Інформації багато, але заняття структуроване. Також є баланс граматики, розмовної практики і тд. Довго можно говорити але якщо коротко, то дуже крутий курс, дякую!",
      title3: "Христина",
      text3: "Дуже дякую за підтримку протягом процесу збирання документів та за всю інформацію, яка була надана вчасно та доступно, я вперше стикнулася зі вступом в іноземний вуз, але завдяки вашій підтримці та допомозі, було набагато легше.",
      title4: "Батько студента STU, Дмитра",
      text4: "Дівчата з Lumos організували вступ нашого сина до Технічного університету в Братиславі. Вчасно оформили та подали документи по університету, допомогли зі всім. Приємні та кваліфіковані фахівці! Лише найкращі рекомендації!",
      img1: klara,
      img2: kate,
      img3: xtina,
      img4: dima
  },
  ua: {
    title1: "Clara",
    text1: "It's all right! The material is presented well, it doesn't need to be memorized.",
    title2: "Katerina",
    text2: "I am more than satisfied with the course, more than that. The information is rich, but the structure is busy. So is the balance of grammar, language practice, etc. For a long time you can speak a little more briefly, then even a cool course, that's it!",
    title3: "Christina",
    text3: "Even though the process of collecting documents for all the information, as soon as it was available, I bumped into the entrance to a foreign university, but after your help, it was easier.",
    title4: "Dmitra, STU student's father",
    text4: "The girls from Lumos organized our son's entry to the Technical University in Bratislava. They filled out the documents for the university in an hour, helped with everything. Accept that qualification of a faculty! Only the best recommendations!",
  },
  sk: {
    title1: "Clara",
    text1: "To je v poriadku! Materiál je podaný dobre, netreba sa ho učiť naspamäť.",
    title2: "Katerina",
    text2: "S kurzom som viac než spokojný, viac ako to. Informácie sú bohaté, ale štruktúra je zaneprázdnená. Rovnako aj vyváženosť gramatiky, jazykové cvičenia atď. Dlho môžete hovoriť trochu viac krátko, potom dokonca skvelý kurz, to je ono!",
    title3: "Christina",
    text3: "Aj keď proces zbierania podkladov ku všetkým informáciám, hneď ako boli k dispozícii, narazil som na vchod na zahraničnú univerzitu, ale po vašej pomoci to bolo jednoduchšie.",
    title4: "Dmitra, otec študenta STU",
    text4: "Dievčatá z Lumosu zorganizovali nástup nášho syna na Technickú univerzitu v Bratislave. Za hodinu vyplnili dokumenty na univerzitu, so všetkým pomohli. Prijmite kvalifikáciu fakulty! Len tie najlepšie odporúčania!",
  }
});

const data = [
  {
    title: strings.title1,
    background: "#0072bb",
    text: strings.text1,
    img: strings.img1
  },
  {
    title: strings.title2,
    background: "#ff4c3b",
    text: strings.text2,
    img: strings.img2
  },
  {
    title: strings.title3,
    background: "#ffca18",
    text: strings.text3,
    img: strings.img3
  },
  {
    title: strings.title4,
    background: "#44c1c1",
    text: strings.text4,
    img: strings.img4
  },
  // {
  //   title: strings.title5,
  //   background: "#29c53c",
  //   text: strings.text5,

  // }
];

export default data;

  

