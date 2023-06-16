import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data";
import cx from "classnames";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";
import TouchCarousel, { clamp } from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";

import "../App.css";


const cardSize = 400;
const cardPadCount = 5;
const carouselWidth = clamp(window.innerWidth, 0, 960);

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
      <div
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div
          className="carousel-card-inner"
          style={{ backgroundColor: item.background, display:'flex', justifyContent:'space-between' }}
        >



          <div className="carousel-title">{item.title}</div>
          <div style={{marginBottom:'20px !important', textAlign:'justify', position:'static'}} className="carousel-text">{item.text}</div>
        <div style={{marginBottom:'20px'}}> <button style={{borderRadius: '5px', marginTop:'20px',backgroundColor:'#286988',border: '0px', height:'40px', width:'80px', color:'white'}}  onClick = {this.props.change}>{item.appl}</button></div> 
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