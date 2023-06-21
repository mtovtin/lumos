import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data";
import cx from "classnames";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";
import TouchCarousel, { clamp } from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import LocalizedStrings from 'react-localization';

import "../App.css";


const cardSize = 400;
const cardPadCount = 5;
const carouselWidth = clamp(window.innerWidth, 0, 960);

let strings = new LocalizedStrings({
  en: {
      title1: "“Словацька з нуля”",
      text1: "Підійде для початківців, студентів, які ще не вивчали словацьку. В групі 5-6 учасників. Курс триває 3 місяці, 25 занять по 1,5 год. Вартість 198€.",
      title2: "Курс - А2",
      text2: "Підійде для тих, хто вже має базу зі словацької (пройшов рівень А1 або наш курс “Словацька з нуля”, але ще має теми, які потрібно пройти та невпевнено розмовляє словацькою. В групі 5-6 учасників. Курс триває …… (допишемо)",
      title3: "Розмовний клуб для рівнів В1+",
      text3: "Клуб підходить для тих, хто вже говорить словацькою та знає її на хорошому рівні. Зосереджується на розмовній практиці та поповненні словникового запасу. Вартість одного заняття - 1,5 год - 7€.",
      title4: "Індивідуальні заняття",
      text4: "Підходить для будь-якого рівня, від початківців до С1. Одне заняття триває 60 хвилин. Вартість 10€.",
      title5: "Парні заняття.",
      text5: "Підходить для друзів, партнерів або незнайомих студентів, які хочуть покращити свою словацьку в парі. Заняття триває 60 хв. Вартість за двох студентів 15€ (один студент - 7.5€)",
      appl:'APPLY'
  },
  ua: {
    title1: "“Словацька з нуля”",
    text1: "Підійде для початківців, студентів, які ще не вивчали словацьку. В групі 5-6 учасників. Курс триває 3 місяці, 25 занять по 1,5 год. Вартість 198€.",
    title2: "Курс - А2",
    text2: "Підійде для тих, хто вже має базу зі словацької (пройшов рівень А1 або наш курс “Словацька з нуля”, але ще має теми, які потрібно пройти та невпевнено розмовляє словацькою. В групі 5-6 учасників. Курс триває …… (допишемо)",
    title3: "Розмовний клуб для рівнів В1+",
    text3: "Клуб підходить для тих, хто вже говорить словацькою та знає її на хорошому рівні. Зосереджується на розмовній практиці та поповненні словникового запасу. Вартість одного заняття - 1,5 год - 7€.",
    title4: "Індивідуальні заняття",
    text4: "Підходить для будь-якого рівня, від початківців до С1. Одне заняття триває 60 хвилин. Вартість 10€.",
    title5: "Парні заняття.",
    text5: "Підходить для друзів, партнерів або незнайомих студентів, які хочуть покращити свою словацьку в парі. Заняття триває 60 хв. Вартість за двох студентів 15€ (один студент - 7.5€)",
      appl:'ЗАПИСАТИСЬ'
  },
  sk: {
    title1: "“Словацька з нуля”",
    text1: "Підійде для початківців, студентів, які ще не вивчали словацьку. В групі 5-6 учасників. Курс триває 3 місяці, 25 занять по 1,5 год. Вартість 198€.",
    title2: "Курс - А2",
    text2: "Підійде для тих, хто вже має базу зі словацької (пройшов рівень А1 або наш курс “Словацька з нуля”, але ще має теми, які потрібно пройти та невпевнено розмовляє словацькою. В групі 5-6 учасників. Курс триває …… (допишемо)",
    title3: "Розмовний клуб для рівнів В1+",
    text3: "Клуб підходить для тих, хто вже говорить словацькою та знає її на хорошому рівні. Зосереджується на розмовній практиці та поповненні словникового запасу. Вартість одного заняття - 1,5 год - 7€.",
    title4: "Індивідуальні заняття",
    text4: "Підходить для будь-якого рівня, від початківців до С1. Одне заняття триває 60 хвилин. Вартість 10€.",
    title5: "Парні заняття.",
    text5: "Підходить для друзів, партнерів або незнайомих студентів, які хочуть покращити свою словацьку в парі. Заняття триває 60 хв. Вартість за двох студентів 15€ (один студент - 7.5€)",
    appl:'podať si prihlášku'
  }
});

function CarouselContainer(props) {
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
class Carousel extends Component {
  
  constructor(props) {
    super(props);

    this.renderCard=this.renderCard.bind(this);
}

  renderCard(index, modIndex) {
    const item = data[modIndex];
    console.log(this.state)
    return (
      <>
      <div style={{height: '300px' ,display:'flex', justifyContent:'space-between' }}
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#0072bb" }}
        >



          <div style={{height:'30px', marginBottom:'20px'}} className="carousel-title">{strings.title1}</div>
          <div style={{marginBottom:'0px !important', textAlign:'justify', position:'static', height:'146px'}} className="carousel-text">{strings.text1}</div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'20px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{item.appl}</button></div> 
        </div>

        
      </div>

      <div style={{height: '300px' ,display:'flex', justifyContent:'space-between' }}
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#ff4c3b" }}
        >



          <div style={{height:'30px', marginBottom:'20px'}} className="carousel-title">{strings.title2}</div>
          <div style={{marginBottom:'0px !important', textAlign:'justify', position:'static', height:'146px'}} className="carousel-text">{strings.text2}</div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'20px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{item.appl}</button></div> 
        </div>

        
      </div>


      <div style={{height: '300px' ,display:'flex', justifyContent:'space-between' }}
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#ffca18" }}
        >



          <div style={{height:'30px', marginBottom:'30px'}} className="carousel-title">{strings.title3}</div>
          <div style={{marginBottom:'0px !important', textAlign:'justify', position:'static', height:'146px'}} className="carousel-text">{strings.text3}</div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'10px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{item.appl}</button></div> 
        </div>

        
      </div>

      <div style={{height: '300px' ,display:'flex', justifyContent:'space-between' }}
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#44c1c1"}}
        >



          <div style={{height:'30px', marginBottom:'20px'}} className="carousel-title">{strings.title4}</div>
          <div style={{marginBottom:'0px !important', textAlign:'justify', position:'static', height:'146px'}} className="carousel-text">{strings.text4}</div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'20px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{item.appl}</button></div> 
        </div>

        
      </div>

      <div style={{height: '300px' ,display:'flex', justifyContent:'space-between' }}
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#29c53c" }}
        >



          <div style={{height:'30px', marginBottom:'20px'}} className="carousel-title">{strings.title5}</div>
          <div style={{marginBottom:'0px !important', textAlign:'justify', position:'static', height:'146px'}} className="carousel-text">{strings.text5}</div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'20px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{item.appl}</button></div> 
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
          cardCount={data.length}
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


export default Carousel;