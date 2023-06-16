import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
  en: {
      title1: "HOME",
      text1: "ABOUT ABOUT ABOUT ABOUT ABOUT ABOUTABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT",
      title2: "HOME",
      text2: "ABOUT",
      title3: "HOME",
      text3: "ABOUT",
      title4: "HOME",
      text4: "ABOUT",
      title5: "HOME",
      text5: "ABOUT",
      appl:'APPLY'
  },
  ua: {
    title1: "HOME",
      text1: "ABOUT",
      title2: "HOME",
      text2: "ABOUT",
      title3: "HOME",
      text3: "ABOUT",
      title4: "HOME",
      text4: "ABOUT",
      title5: "HOME",
      text5: "ABOUT",
      appl:'ЗАПИСАТИСЬ'
  },
  sk: {
    title1: "HOME",
    text1: "ABOUT",
    title2: "HOME",
    text2: "ABOUT",
    title3: "HOME",
    text3: "ABOUT",
    title4: "HOME",
    text4: "ABOUT",
    title5: "HOME",
    text5: "ABOUT",
    appl:'podať si prihlášku'
  }
});

const data = [
  {
    title: strings.title1,
    background: "#0072bb",
    text: strings.text1,
    appl: strings.appl
  },
  {
    title: strings.title2,
    background: "#ff4c3b",
    text: strings.text2,
    appl: strings.appl
  },
  {
    title: strings.title3,
    background: "#ffca18",
    text: strings.text3,
    appl: strings.appl
  },
  {
    title: strings.title4,
    background: "#44c1c1",
    text: strings.text4,
    appl: strings.appl
  },
  {
    title: strings.title5,
    background: "#29c53c",
    text: strings.text5,
    appl: strings.appl
  }
];

export default data;

  



