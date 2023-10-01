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
      text1: "Підійде для початківців, які ще не вивчали словацьку. ",
      text11:"В групі 5-6 учасників.",
      text111:"Курс триває 3 місяці, 25 занять по 1,5 год.",
      text1111:"Вартість 170€",
      title2: "Курс - А2",
     text2:"Підійде для тих, хто вже має базу зі словацької (пройшов рівень А1 або наш курс “Словацька з нуля”)",
     text22:"В групі 5-6 учасників",
     text222:"Курс триває 3 місяці, 22 заняття, щотижня два заняття по 1,5 год",
     text2222:"Вартість 150€",
      title3: "Розмовний клуб для рівнів В1+",
      text3: "Клуб підходить для тих, хто вже говорить словацькою та знає її на хорошому рівні. Зосереджується на розмовній практиці та поповненні словникового запасу. ",
      text33:"Вартість 1 заняття (1,5 год) - 7€/студент",
      title4: "Індивідуальні заняття",
      text4: "Підходить для будь-якого рівня, від початківців до С1",
      text44:"Одне заняття триває 60 хвилин - з україномовною лекторкою або носійкою мови.",
      text444:"Вартість 12€",
      title5: "Парні заняття",
      text5: "Підходить для друзів, партнерів або незнайомих студентів, які хочуть покращити свою словацьку в парі",
      text55:"якщо ви хочете бути з конкретною людиною в парі, напишіть її/його ім‘я до «Примітки» при записі",
      text555:"Вартість за двох студентів 16€ (один студент - 8€)",
      title6: "Словацька з нуля - дитячий",
      text6:"Вік 8-11 років. 3 місяці навчання, щотижня 2 заняття по годині",
      text66:"Вартість 160€",
      title7: "Словацька для абітурієнтів",
      text7:"Проходження А1 та А2 рівнів. 6 місяців навчання, 48 занять",
      text77: "2 заняття щотижня по 1.5 години",
      text777:"Вартість 330€",
      appl:'APPLY'
  },
  ua: {
    title1: "“Словацька з нуля”",
    text1: "Підійде для початківців, які ще не вивчали словацьку. ",
    text11:"В групі 5-6 учасників.",
    text111:"Курс триває 3 місяці, 25 занять по 1,5 год.",
    text1111:"Вартість 170€",
    title2: "Курс - А2",
   text2:"Підійде для тих, хто вже має базу зі словацької (пройшов рівень А1 або наш курс “Словацька з нуля”)",
   text22:"В групі 5-6 учасників",
   text222:"Курс триває 3 місяці, 22 заняття, щотижня два заняття по 1,5 год",
   text2222:"Вартість 150€",
    title3: "Розмовний клуб для рівнів В1+",
    text3: "Клуб підходить для тих, хто вже говорить словацькою та знає її на хорошому рівні. Зосереджується на розмовній практиці та поповненні словникового запасу. ",
    text33:"Вартість 1 заняття (1,5 год) - 7€/студент",
    title4: "Індивідуальні заняття",
    text4: "Підходить для будь-якого рівня, від початківців до С1",
    text44:"Одне заняття триває 60 хвилин - з україномовною лекторкою або носійкою мови.",
    text444:"Вартість 12€",
    title5: "Парні заняття",
    text5: "Підходить для друзів, партнерів або незнайомих студентів, які хочуть покращити свою словацьку в парі",
    text55:"якщо ви хочете бути з конкретною людиною в парі, напишіть її/його ім‘я до «Примітки» при записі",
    text555:"Вартість за двох студентів 16€ (один студент - 8€)",
    title6: "Словацька з нуля - дитячий",
    text6:"Вік 8-11 років. 3 місяці навчання, щотижня 2 заняття по годині",
    text66:"Вартість 160€",
    title7: "Словацька для абітурієнтів",
    text7:"Проходження А1 та А2 рівнів. 6 місяців навчання, 48 занять",
    text77: "2 заняття щотижня по 1.5 години",
    text777:"Вартість 330€",

      appl:'ЗАПИС'
  },
  sk: {
    title1: "“Словацька з нуля”",
    text1: "Підійде для початківців, які ще не вивчали словацьку.",
    text11:"В групі 5-6 учасників.",
    text111:"Курс триває 3 місяці, 25 занять по 1,5 год.",
    text1111:"Вартість 170€",
    title2: "Курс - А2",
   text2:"Підійде для тих, хто вже має базу зі словацької (пройшов рівень А1 або наш курс “Словацька з нуля”)",
   text22:"В групі 5-6 учасників",
   text222:"Курс триває 3 місяці, 22 заняття, щотижня два заняття по 1,5 год",
   text2222:"Вартість 150€",
    title3: "Розмовний клуб для рівнів В1+",
    text3: " Клуб підходить для тих, хто вже говорить словацькою та знає її на хорошому рівні. Зосереджується на розмовній практиці та поповненні словникового запасу. ",
    text33:"Вартість 1 заняття (1,5 год) - 7€/студент",
    title4: "Індивідуальні заняття",
    text4: "Підходить для будь-якого рівня, від початківців до С1",
    text44:"Одне заняття триває 60 хвилин - з україномовною лекторкою або носійкою мови.",
    text444:"Вартість 12€",
    title5: "Парні заняття",
    text5: "Підходить для друзів, партнерів або незнайомих студентів, які хочуть покращити свою словацьку в парі",
    text55:"якщо ви хочете бути з конкретною людиною в парі, напишіть її/його ім‘я до «Примітки» при записі",
    text555:"Вартість за двох студентів 16€ (один студент - 8€)",
    title6: "Словацька з нуля - дитячий",
    text6:"Вік 8-11 років. 3 місяці навчання, щотижня 2 заняття по годині",
    text66:"Вартість 160€",
    title7: "Словацька для абітурієнтів",
    text7:"Проходження А1 та А2 рівнів. 6 місяців навчання, 48 занять",
    text77: "2 заняття щотижня по 1.5 години",
    text777:"Вартість 330€",
    appl:'APPLY'
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



          <div style={{height:'30px', marginBottom:'10px',marginTop:'12px'}} className="carousel-title">{strings.title1}</div>
          <div style={{marginBottom:'0px !important', textAlign:'center', position:'static', height:'146px'}} className="carousel-text">
          <div style={{marginBottom:'6px'}}>{strings.text1}</div>
          <div style={{marginBottom:'6px'}}>{strings.text11}</div>
          <div style={{marginBottom:'6px'}}>{strings.text111}</div>
          <div style={{fontSize:'16px',marginBottom:'14px', fontWeight:'bold', color:"#020B4A"}}>{strings.text1111}</div>
          </div>

        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'30px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{strings.appl}</button></div> 
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



          <div style={{height:'30px', marginBottom:'0px',marginTop:'12px'}} className="carousel-title">{strings.title2}</div>
          <div style={{marginBottom:'0px !important', textAlign:'center', position:'static', height:'146px'}} className="carousel-text">
          <div style={{marginBottom:'6px'}}>{strings.text2}</div>
          <div style={{marginBottom:'6px'}}>{strings.text22}</div>
          <div style={{marginBottom:'6px'}}>{strings.text222}</div>
          <div style={{fontSize:'16px',marginBottom:'14px', fontWeight:'bold', color:"#020B4A"}}>{strings.text2222}</div>
          </div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'40px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{strings.appl}</button></div> 
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



          <div style={{height:'30px', marginBottom:'30px',marginTop:'12px'}} className="carousel-title">{strings.title3}</div>
          <div style={{marginBottom:'0px !important', textAlign:'center', position:'static', height:'146px'}} className="carousel-text">
          <div style={{marginBottom:'6px'}}>{strings.text3}</div>
          <div style={{fontSize:'16px',marginBottom:'14px', fontWeight:'bold', color:"#020B4A"}}>{strings.text33}</div>
          </div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'10px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{strings.appl}</button></div> 
        </div>

        
      </div>

      <div style={{height: '300px' ,display:'flex', justifyContent:'space-between' }}
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#FF69B4"}}
        >



          <div style={{height:'30px', marginBottom:'40px', marginTop:'12px'}} className="carousel-title">{strings.title6}</div>
          <div style={{marginBottom:'0px !important', textAlign:'center', position:'static', height:'146px'}} className="carousel-text">
          <div style={{marginBottom:'6px'}}>{strings.text6}</div>
          <div style={{marginBottom:'20px'}}>{strings.text66}</div>
          <div style={{fontSize:'16px',marginBottom:'0px', fontWeight:'bold', color:"#020B4A"}}>{strings.text66}</div>
          </div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'0px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{strings.appl}</button></div> 
        </div>

        
      </div>



      <div style={{height: '300px' ,display:'flex', justifyContent:'space-between' }}
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: "#FF6347" }}
        >






          <div style={{height:'30px', marginBottom:'40px', marginTop:'12px'}} className="carousel-title">{strings.title7}</div>
          <div style={{marginBottom:'0px !important', textAlign:'center', position:'static', height:'146px'}} className="carousel-text">
          <div style={{marginBottom:'6px'}}>{strings.text7}</div>
          <div style={{marginBottom:'20px'}}>{strings.text77}</div>
          <div style={{fontSize:'16px',marginBottom:'0px', fontWeight:'bold', color:"#020B4A"}}>{strings.text777}</div>
          </div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'0px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{strings.appl}</button></div> 
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



          <div style={{height:'30px', marginBottom:'10px', marginTop:'12px'}} className="carousel-title">{strings.title4}</div>
          <div style={{marginBottom:'0px !important', textAlign:'center', position:'static', height:'146px'}} className="carousel-text">
          <div style={{marginBottom:'6px'}}>{strings.text4}</div>
          <div style={{marginBottom:'6px'}}>{strings.text44}</div>
          <div style={{fontSize:'16px',marginBottom:'14px', fontWeight:'bold', color:"#020B4A"}}>{strings.text444}</div>
          </div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'30px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{strings.appl}</button></div> 
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




<div style={{height:'30px', marginBottom:'10px', marginTop:'12px'}} className="carousel-title">{strings.title5}</div>
          <div style={{marginBottom:'0px !important', textAlign:'center', position:'static', height:'146px'}} className="carousel-text">
          <div style={{marginBottom:'6px'}}>{strings.text5}</div>
          <div style={{marginBottom:'6px', fontSize:'10px',color:'#ffca18'}}>{strings.text55}</div>
          <div style={{fontSize:'16px',marginBottom:'14px', fontWeight:'bold', color:"#020B4A"}}>{strings.text555}</div>
          </div>
        <div style={{}}> <button style={{borderRadius: '5px', marginTop:'30px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{strings.appl}</button></div> 
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
          autoplay={4000}
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