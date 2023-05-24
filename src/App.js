import logo from './logo.svg';
import logo1 from './images/logo.png';
import nastia from './images/fotor1.png';
import bkg from './images/background.png'
import './App.css';
import React, { useState } from 'react';
import Header from "./Header";
import EmbedWidget from './components/EmbedWidget';
import "@fontsource/inter";
import CourseCard from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import TouchCarousel from './components/Carousel';
import Carousel from './components/Carousel';
import Carousell from './components/Carousell';
import inst from './images/Instagram Circle.png';
import viber from './images/Viber.png';
import whatsapp from './images/WhatsApp.png'
import fb from './images/Facebook.png'
import fbm from './images/Facebook Messenger.png'
import LocalizedStrings from 'react-localization';
import buttonFlagUA from './images/flagu.png'
import buttonFlagUK from './images/flagb.webp'
import buttonFlagSK from './images/flagsk.png'
import telegram from './images/tele.png'

let strings = new LocalizedStrings({
  en: {
      blog: "BLOG",
      about: "ABOUT",
      name1: "ANASTASIIA CHERNETSKA",
      position1: "position 1",
      text1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum o make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangeds PageMaker including versions of Lorem Ipsuectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ",
      courses:"COURSES",
      feedback:"REVIEWS",
      teachers:"TEAM",
      name2:"ANASTASIIA CHERNETSKA",
      position2:"position 2",
      text2:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",
      name3:"ANASTASIIA CHERNETSKA",
      position3:"position 3",
      text3:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",
      name4:"ANASTASIIA CHERNETSKA",
      position4:"position 4",
      text4:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",

  },
  ua: {
    blog: "ГОЛОВНА",
    about: "ПРО НАС",
    name1: "АНАСТАСІЯ ЧЕРНЕЦЬКА",
    position1: "позиція 1",
    text1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum o make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangeds PageMaker including versions of Lorem Ipsuectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ",
    courses:"КУРСИ",
    feedback:"ВІДГУКИ",
    teachers:"КОМАНДА",
    name2:"АНАСТАСІЯ ЧЕРНЕЦЬКА",
    position2:"позиція 2",
    text2:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",
    name3:"АНАСТАСІЯ ЧЕРНЕЦЬКА",
    position3:"позиція 3",
    text3:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",
    name4:"АНАСТАСІЯ ЧЕРНЕЦЬКА",
    position4:"позиція 4",
    text4:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",
  },
  sk: {
    blog: "BLOG",
    about: "O NÁS",
    name1: "ANASTASIA ČERNETSKÁ",
    position1: "pozícia 1",
    text1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum o make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangeds PageMaker including versions of Lorem Ipsuectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ",
    courses:"KURZY",
    feedback:"SPÄTNÁ VÄZBA",
    teachers:"TÍM",
    name2:"ANASTASIA ČERNETSKÁ",
    position2:"pozícia 2",
    text2:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",
    name3:"ANASTASIA ČERNETSKÁ",
    position3:"pozícia 3",
    text3:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",
    name4:"ANASTASIA ČERNETSKÁ",
    position4:"pozícia 4",
    text4:"Lorem Ipsum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting psum is simply dummy text of the printing and typesetting",
  }
});


function App(props) {
  const [language, setLanguage] = useState('en');

  const pull_data = (data) => {
  setLanguage(data)
  }
  let buttonImage
  if(language==='en'){
      strings.setLanguage('en');
      buttonImage = buttonFlagUK
    }	else if (language==='ua'){
      strings.setLanguage('ua');
      buttonImage = buttonFlagUA
    }
    else {
      strings.setLanguage('sk');
      buttonImage = buttonFlagSK
    }
  return (
    <div>
    
    <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
</style>
   <Header language={language}/>
   <div style={{display: 'flex', justifyContent:'flex-end', alignItems:'flex-end', marginRight:'20px'}}>
   <button  id='flagButton' style={{backgroundImage:'url(' + buttonImage + ')'}} onClick={()=>{if(language==='en') setLanguage('ua'); else if(language==='ua') setLanguage('sk'); else setLanguage('en')}}></button>
   </div>
   <div style={{position: 'relative', width:'100%',  top: '-20px', zIndex:'-2'}}><img className='bkg' src={bkg}></img>
   <img className='ctr' src={logo1}></img>
   </div>

<div id='blog' className='heading'>{strings.blog}</div>
<div className='inst'>
  <EmbedWidget />
</div>

<div id='about' className='heading'>{strings.about}</div>
<div style={{textAlign: 'center' }}><img className='nst' src={nastia}></img></div>
<div className='about'>
<div className='desc'>
<div>{strings.name1}</div>
<div className='pos'>{strings.position1}</div>
</div>
<div className='e'>
{strings.text1}
</div>
</div>
   {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
   <div><CourseCard /></div>
   <div><CourseCard /></div>
   <div><CourseCard /></div>
   </div> */}
   <div id='courses' className='heading'>{strings.courses}</div>
   <div>
 <Carousel/>
 </div>
 

 <div id='team' className='heading'>{strings.teachers}</div>
 <div  className='about1'>
<div className='desc1'>
<div  className='leftt ra'><img src={nastia}></img></div>
<div>
<div>{strings.name2}</div>
<div className='pos'>{strings.position2}</div>
<div className='abt'>
{strings.text2}
</div>
</div>
</div>

<div   className='desc1' id='rev'>

<div>
<div>{strings.name3}</div>
<div className='pos'>{strings.position3}</div>
<div className='abt'>
{strings.text3}
</div>

</div>
<div className='leftt ma'><img src={nastia}></img></div>
</div>

<div  className='desc1'>
<div className='leftt ra'><img src={nastia}></img></div>
<div>
<div>{strings.name4}</div>
<div className='pos'>{strings.position4}</div>
<div className='abt'>
{strings.text4}
</div>
</div>
</div>
</div>


<div id='reviews' className='heading'>{strings.feedback}</div>
 <div>
 <Carousell/>
 </div>

 <footer style={{marginTop:'80px'}}>
  <div class="footer-icons">
    <a href="https://instagram.com/lumos.slovakia?igshid=YmMyMTA2M2Y="><img className='icn' src = {inst}></img></a>
    <a href="https://t.me/lumosoffice"><img  className='icn r' src = {telegram}></img></a>
    <a href="https://www.facebook.com/profile.php?id=100076594770668"><img  className='icn'src = {fb}></img></a>
    <a href="https://m.me/Lumos.Slovakia"><img  className='icn' src = {fbm}></img></a>
    <a href="viber://chat?number=+380684816419"><img  className='icn' src = {viber}></img></a>
  </div>
</footer>
   </div>

  );
}

export default App;
