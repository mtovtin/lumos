import React, { Component } from "react";
import ReactDOM from "react-dom";

import cx from "classnames";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";
import TouchCarousel, { clamp } from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import LocalizedStrings from 'react-localization';
import klara from '../images/klara.png';
import dima from '../images/dima.png';
import xtina from '../images/xtina.png';
import kate from '../images/kate.png';


import "../App.css";


const cardSize = 400;
const cardPadCount = 5;
const carouselWidth = clamp(window.innerWidth, 0, 960);

let strings = new LocalizedStrings({
  
  ua: {
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
  en: {
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


function CarouselContainer(props) {
strings.setLanguage('ua')

  const {
    cursor,
    carouselState: { active, dragging },
    ...rest
  } = props;
  let current = -Math.round(cursor) % data.length;
  while (current < 0) {
    current += data.length;
  }
  // Put current card at center
  const translateX =
    (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
  return (
    <NonPassiveTouchTarget
      className={cx("carousel-container", {
        "is-active": active,
        "is-dragging": dragging
      })}
    >
      <NonPassiveTouchTarget
        className="carousel-track"
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />
    </NonPassiveTouchTarget>
  );
}

const Container = touchWithMouseHOC(CarouselContainer);



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
  }]


class Carousell extends Component {

 
  
  renderCard(index, modIndex) {

    const item = data[modIndex];
    return (
      <>
      <div
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#0072bb" }}
        >


<div style={{marginTop:'20px', marginBottom:'5px'}}  className=""><img style={{width: '80px'}} className='nst' src={kate}></img></div>
          <div style={{marginBottom:'-10px'}} className="">{strings.title1}</div>
          <div style={{marginBottom:'20px !important', textAlign:'justify'}} className="carousel-text">{strings.text1}</div>
        </div>

        
      </div>
      <div
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#ff4c3b" }}
        >

<div style={{marginTop:'20px', marginBottom:'5px'}}  className=""><img style={{width: '80px'}} className='nst' src={xtina}></img></div>
          <div style={{marginBottom:'-10px'}} className="">{strings.title2}</div>
          <div style={{marginBottom:'20px !important', textAlign:'justify'}} className="carousel-text">{strings.text2}</div>
        </div>

        
      </div>

      <div
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#ffca18" }}
        >

<div style={{marginTop:'20px', marginBottom:'5px'}}  className=""><img style={{width: '80px'}} className='nst' src={klara}></img></div>
          <div style={{marginBottom:'-10px'}} className="">{strings.title3}</div>
          <div style={{marginBottom:'20px !important', textAlign:'justify'}} className="carousel-text">{strings.text3}</div>
        </div>

        
      </div>

      <div
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#44c1c1" }}
        >

<div style={{marginTop:'20px', marginBottom:'5px'}}  className=""><img style={{width: '80px'}} className='nst' src={dima}></img></div>
          <div style={{marginBottom:'-10px'}} className="">{strings.title4}</div>
          <div style={{marginBottom:'20px !important', textAlign:'justify'}} className="carousel-text">{strings.text4}</div>
        </div>

        
      </div>
      
</>
      
    );
  }

  render() {
    return (
      <React.StrictMode>
        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={4}
          cardPadCount={cardPadCount}
          loop={true}
          renderCard={this.renderCard}
          onRest={(index) => console.log(`rest at index ${index}`)}
          onDragStart={() => console.log("dragStart")}
          onDragEnd={() => console.log("dragEnd")}
          onDragCancel={() => console.log("dragCancel")}
        />
      </React.StrictMode>
    );
  }
}


export default Carousell;