import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
  en: {
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
  }
});

const data = [
  {
    title: strings.title1,
    background: "#0072bb",
    text: strings.text1
  },
  {
    title: strings.title2,
    background: "#ff4c3b",
    text: strings.text2
  },
  {
    title: strings.title3,
    background: "#ffca18",
    text: strings.text3
  },
  {
    title: strings.title4,
    background: "#44c1c1",
    text: strings.text4
  },
  {
    title: strings.title5,
    background: "#29c53c",
    text: strings.text5
  }
];

export default data;

  



