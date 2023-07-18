import logo from './logo.svg';
import logo1 from './images/logo.png';
import nastia from './images/fotor1.png';
import bkg from './images/background.webp'
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
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import Data from './components/data1';
import ol from './images/ol.png';
import r1 from './images/r1.webp';
import r2 from './images/r2.webp';
import r3 from './images/r3.webp';

import domi from './images/domi.png';
import adri from './images/adri.png';
import chris from './images/chris.png';

let strings = new LocalizedStrings({
  en: {
    spiv:'Співзасновниці',
      blog: "BLOG",
  
      about: "ABOUT",
      info:"Ми - ",
      lumos: "LUMOS, ",
      info11:"центр із вивчення словацької мови. Наша команда є досвідченою та  амбіційною. Весь досвід нашої команди - це результат пошуку найкращих шляхів, розробки авторських матеріалів та постійного саморозвитку. Ми знаємо Словаччину із середини, тому ви точно отримаєте комфортне та результативне навчання: з розумінням розмовної словацької, повсякденних фраз, сленгу, граматики і всього, що знадобиться в реальному житті.Пропонуємо спектр мовних курсів як для початківців, так і для просунутих рівнів. А саме: групові заняття, індивідуальні, парні та розмовні клуби. Родзинкою наших курсів є спеціалізації та галузі, для яких ми пропонуємо заняття з поглибленою лексику. А саме право, економіка, менеджмент, готельний та ресторанний бізнес.",
      info1:"Пропонуємо спектр мовних курсів як для початківців, так і для просунутих рівнів. А саме: групові заняття, індивідуальні, парні та розмовні клуби. Родзинкою наших курсів є спеціалізації та галузі, для яких ми пропонуємо заняття з поглибленою лексику. А саме право, економіка, менеджмент, готельний та ресторанний бізнес.",
      name1: "ANASTASIIA CHERNETSKA",
      position1: "Комунікаційні та організаційні процеси Lumos",
      text1:"За освітою вчителька англійської та німецької мови та літератури. У цій сфері вже працює 4-ий рік, як з українськими, так і зі словацькими студентами. ",      courses:"COURSES",
     t11:'Далі пряма мова від Анастасії:',
     t12:'🗣️Розкажи трохи про себе та про свою місію в Lumos.',
     t13:'- Я співзасновниця Lumos і відповідаю за комунікацію з учнями, лекторами, організацією всіх важливих процесів в школі. Моя місія - це якісно навчити всіх охочих словацької, а в майбутньому втілити всі плани в реальність, щоб іноземці почувалися як найкомфортніше в Словаччині.',
     t14: '🗣️Як давно ти вирішила займатись саме цим?',
     t15:'- Мій досвід у викладанні 4 роки - англійська мова. Сама пройшла тернистим шляхом у вивченні іноземних мов і наразі володію англійською, німецькою та словацькою.Іноземні мови та їх викладання - це моя vášeň (слов. пристрасть). За освітою я вчитель англійської та німецької, вчуся на магістерському ступені в братиславському університеті за тією ж спеціальністю.',
     t16:'🗣️Як давно ти в Словаччині? Було важко звикнути до мови, нового темпу життя?Що порадиш тим, хто тільки починає цей шлях?',
     t17:'- В Словаччині я вже практично 5-ий рік і відчула на собі всі процеси адаптації в новій для мене країні.',
     t18:"За цей час я переконалася, що найкраще вивчення мови відбувається за допомогою поєднання різних методів навчання. Варто не забувати про вивчення граматики, але не менш важливе є спілкування з носіями мови. Тільки так ви пізнаєте культуру країни, менталітет людей та багато 'живих' слів та виразів. Саме в Lumos ми об'єднали всі важливі складові вивчення іноземної мови завдяки власному досвіду та відповідаємо за якість викладання. Тому, моя порада - звертайтесь до нас і ваш шлях стане легшим та цікавішим😉",

     ol: 'ОЛЬГА ЗУБЕНКО',
     olpos:'Team Leader-ка наших лекторок та відповідальна за навчальний процес',
     ola:'За освітою вчителька англійської та німецької мови та літератури. Має кількарічний досвід у викладанні словацької для іноземців. За свою практику виробила авторські матеріали, які перевірені на десятках задоволених студентів.',
     t21:'Далі пряма мова від Ольги:',
     t22:'🗣️Що можеш розказати про себе та свою місію в Lumos?',
     t23:'— Привіт! Я є співзасновницею нашої агенції та «team leader» для наших лекторок. Відповідаю за весь навчальний процес, розробляю матеріали для курсів, а також навчаю студентів.',
     t24:'Моя місія? Я прагну зробити навчання якісним, цікавим, інтерактивним не лише для студентства, але й для викладачів. Навчати бо подобається, а не тому що треба!',
     t25:'🗣️Чому обрала саме вивчення мов і викладання в подальшому?',
     t26:'– За освітою я вчитель німецької та англійською мов, проте у моєму серденьку знайшлося місце і словацькій. У мовах мені подобається процес, через вивчення іноземних мов, я завжди наближаюсь до вивчення своєї рідної, подобається розрізняти відтінки у словах, а також вивчати їх походження (етимологію).',
     t27:'Переконана, що навчати людей - це покликання, і це не можуть робити люди, які не відчувають достатнього натхнення, сил та терпіння для цього.',
     t28:'🗣️Який метод навчання найкращий, на твою думку?',
     t29:'Найкращий метод для навчання - це повне занурення у мову, можна вигадувати безліч різних стратегій, але ця є найдієвішою. При повному зануренні у середовище, мозок починає швидше адаптуватися і на сприйняття інформації, яку він раніше опрацьовув 10 хвилин, згодом йому вже знадобиться у два рази менше.',
     t291:'🗣️Чому варто обрати саме Lumos?',
     t292:'– Мова - це світ нескінчених викликів, гірська стежка, проте у Lumos - це завжди гірська стежка зі страховкою.',
     t293:'Тому, не бійтесь, довіртесь нам і словацька стане тою вершиною, яка підкориться вам легко та з задоволенням😉',
      feedback:"REVIEWS",
      teachers:"TEAM",
      name2:"Христина",
      position2:"лекторка",
      text2:"магістр за спеціальністю викладання англійської та італійської мови та літератури. Христина викладає англійську, італійську та словацьку вже декілька років. В LUMOS вчить як діток, так і дорослих. Далі пряма мова від Христини😉",
    t31:'🗣Розкажи щось про себе та перші враження від Словаччини.',
    t32:'- Мене звати Христина, це вже мій п’ятий рік, як я навчаюся, працюю та проживаю в Словаччині. Варто додати, що життя в іншій країні, далеко від дому, ніколи не буде легким, проте воно точно буде дуже цікавим, і багатим на різні події, емоції, а в подальшому і спогади.',
    t33:'🗣Поділишся секретами щодо вивчення мови?',
    t34:'- Мені здається, що не існує єдиного методу навчання, який підходитиме для всіх, адже кожен з нас - індивідуальний, до того ж, сприймаємо ми інформацію також по-різному. Проте, зі свого досвіду можу сказати, що найкраще вивчити мову можна в середовищі, де кожен нею спілкується. Так, теорія важлива, але практика є незамінною складовою.',
    t35:'Отож, до зустрічі в Словаччині або ж на нашому курсі😉',
      name3:"Adriána",
      position3:"лекторка",
      text3:"носійка мови, яка закохана у словацьку та словацьку літературу. Студентка спеціальності викладання словацької мови та літератури в комбінації з педагогікою. В LUMOS проводить розмовні клуби, а також заняття для вищих мовних рівнів.",
     t41:'Далі пряма мова від Адріани:',
     t42:'🗣 Kto si?',
     t43:'- Som oddaná milovníčka slovenskej literatúry. Slovenčina si ma získala svojou jedinečnosťou a krásou.',
     t44:'Považujem za veľmi dôležité vedieť svoj rodný jazyk na vysokej úrovni. Pretože kvalita ovládania slova zanecháva dojem, podľa ktorého hodnotíme človeka.',
     t45:'🗣 Čo študuješ?',
     t46:'- Aby som sa stala dobrou učiteľkou ku slovenskému jazyku som si vybrala odbor pedagogika.',
     t47:'🗣 Čo robíš v LUMOS? Aké metódy využívaš?',
     t48:'- V LUMOSe učím žiakov pokročilých v slovenskom jazyku. V praxi sa stotožňujem s Komenského výrokom „Škola hrou.“ - Učiť sa jazyk s ľahkosťou a zodpovedne.',
     t49:'Je dôležité neurobiť si z jazyka nepriateľa ale „dobrého sluhu“, ktorý nám ponúkne široké spektrum možností a otvorí mnoho dverí.',
     t491:'Verím, že sa slovenčina pre našich žiakov stane kamarátkou, ktorá podrží a pomôže. Miestami možno aj potrápi ale rovnako ako hrdza skúša zlato, verím, že výsledok bude stáť za to!',
      name4:"Домініка",
      position4:"лекторка",
      text4:"студентка спеціальності викладання англійської мови. Має досвід у викладанні словацької іноземцям. В LUMOS займається з дітками, дорослими та проводить групові курси.",
      t51:'🗣️Привіт! Розкажи щось про себе та своє життя в Словаччині.',
      t52:'– Всім привіт, я - Домініка, родом з мальовничого міста Мукачева, Закарпатської області. 4 роки я провела в Словаччині, в місті Ружомберок, студенткою Католицького університету. Вивченням словацької я почала займатися ще в далекому 2018 році і вже відтоді мова, яку я інтенсивно вивчала для того, щоб без проблем розуміти жителів цієї країни, стала моїм захопленням.',
      t53:'🗣️В тебе чималий досвід у вивченні словацької. Як вважаєш, який метод навчання є найкращим?',
      t54:'— Для мене це завжди практика, спілкування з носіями мови, однак, теорія є не менш важливою частиною. На початку вивчення мови мені допомогли перегляди фільмів словацькою та регулярні граматичні вправи.',
      t55:'🗣️: Чому зараз обирати варто саме Словаччину?',
      t56:'– Найбільшою перевагою вчитися в Словаччині є безкоштовна освіта. Навчання базується на ефективних педагогічних методах.',
      t57:'А також - не менш важливим аспектом є те, що ви можете легко подорожувати до інших країн, так як Словаччина має вигідне географічне розташування.',
      nm: 'Full name',
      em: 'Email address',
      emm: "We'll never share your email with anyone else.",
      pn: "Phone",
      cs: 'Course',
      prim: 'Notes',
      prim1:'Questions, wishes'

  },
  ua: {
    spiv:'Співзасновниці',
    blog: "ГОЛОВНА",
    info:"Ми - ",
    lumos: "LUMOS, ",
    info11:"центр із вивчення словацької мови. Наша команда є досвідченою та  амбіційною. Весь досвід нашої команди - це результат пошуку найкращих шляхів, розробки авторських матеріалів та постійного саморозвитку. Ми знаємо Словаччину із середини, тому ви точно отримаєте комфортне та результативне навчання: з розумінням розмовної словацької, повсякденних фраз, сленгу, граматики і всього, що знадобиться в реальному житті.Пропонуємо спектр мовних курсів як для початківців, так і для просунутих рівнів. А саме: групові заняття, індивідуальні, парні та розмовні клуби. Родзинкою наших курсів є спеціалізації та галузі, для яких ми пропонуємо заняття з поглибленою лексику. А саме право, економіка, менеджмент, готельний та ресторанний бізнес.",
    about: "ПРО НАС",
    info1:"Пропонуємо спектр мовних курсів як для початківців, так і для просунутих рівнів. А саме: групові заняття, індивідуальні, парні та розмовні клуби. Родзинкою наших курсів є спеціалізації та галузі, для яких ми пропонуємо заняття з поглибленою лексику. А саме право, економіка, менеджмент, готельний та ресторанний бізнес.",
    name1: "АНАСТАСІЯ ЧЕРНЕЦЬКА",
    position1: "Комунікаційні та організаційні процеси Lumos",
    text1:"За освітою вчителька англійської та німецької мови та літератури. У цій сфері вже працює 4-ий рік, як з українськими, так і зі словацькими студентами. ",      courses:"КУРСИ",
   t11:'Далі пряма мова від Анастасії:',
   t12:'🗣️Розкажи трохи про себе та про свою місію в Lumos.',
   t13:'- Я співзасновниця Lumos і відповідаю за комунікацію з учнями, лекторами, організацією всіх важливих процесів в школі. Моя місія - це якісно навчити всіх охочих словацької, а в майбутньому втілити всі плани в реальність, щоб іноземці почувалися як найкомфортніше в Словаччині.',
   t14: '🗣️Як давно ти вирішила займатись саме цим?',
   t15:'- Мій досвід у викладанні 4 роки - англійська мова. Сама пройшла тернистим шляхом у вивченні іноземних мов і наразі володію англійською, німецькою та словацькою.Іноземні мови та їх викладання - це моя vášeň (слов. пристрасть). За освітою я вчитель англійської та німецької, вчуся на магістерському ступені в братиславському університеті за тією ж спеціальністю.',
   t16:'🗣️Як давно ти в Словаччині? Було важко звикнути до мови, нового темпу життя?Що порадиш тим, хто тільки починає цей шлях?',
   t17:'- В Словаччині я вже практично 5-ий рік і відчула на собі всі процеси адаптації в новій для мене країні.',
   t18:"За цей час я переконалася, що найкраще вивчення мови відбувається за допомогою поєднання різних методів навчання. Варто не забувати про вивчення граматики, але не менш важливе є спілкування з носіями мови. Тільки так ви пізнаєте культуру країни, менталітет людей та багато 'живих' слів та виразів. Саме в Lumos ми об'єднали всі важливі складові вивчення іноземної мови завдяки власному досвіду та відповідаємо за якість викладання. Тому, моя порада - звертайтесь до нас і ваш шлях стане легшим та цікавішим😉",

   ol: 'ОЛЬГА ЗУБЕНКО',
   olpos:'Team Leader-ка наших лекторок та відповідальна за навчальний процес',
   ola:'За освітою вчителька англійської та німецької мови та літератури. Має кількарічний досвід у викладанні словацької для іноземців. За свою практику виробила авторські матеріали, які перевірені на десятках задоволених студентів.',
   t21:'Далі пряма мова від Ольги:',
   t22:'🗣️Що можеш розказати про себе та свою місію в Lumos?',
   t23:'— Привіт! Я є співзасновницею нашої агенції та «team leader» для наших лекторок. Відповідаю за весь навчальний процес, розробляю матеріали для курсів, а також навчаю студентів.',
   t24:'Моя місія? Я прагну зробити навчання якісним, цікавим, інтерактивним не лише для студентства, але й для викладачів. Навчати бо подобається, а не тому що треба!',
   t25:'🗣️Чому обрала саме вивчення мов і викладання в подальшому?',
   t26:'– За освітою я вчитель німецької та англійською мов, проте у моєму серденьку знайшлося місце і словацькій. У мовах мені подобається процес, через вивчення іноземних мов, я завжди наближаюсь до вивчення своєї рідної, подобається розрізняти відтінки у словах, а також вивчати їх походження (етимологію).',
   t27:'Переконана, що навчати людей - це покликання, і це не можуть робити люди, які не відчувають достатнього натхнення, сил та терпіння для цього.',
   t28:'🗣️Який метод навчання найкращий, на твою думку?',
   t29:'Найкращий метод для навчання - це повне занурення у мову, можна вигадувати безліч різних стратегій, але ця є найдієвішою. При повному зануренні у середовище, мозок починає швидше адаптуватися і на сприйняття інформації, яку він раніше опрацьовув 10 хвилин, згодом йому вже знадобиться у два рази менше.',
   t291:'🗣️Чому варто обрати саме Lumos?',
   t292:'– Мова - це світ нескінчених викликів, гірська стежка, проте у Lumos - це завжди гірська стежка зі страховкою.',
   t293:'Тому, не бійтесь, довіртесь нам і словацька стане тою вершиною, яка підкориться вам легко та з задоволенням😉',

    feedback:"ВІДГУКИ",
    teachers:"КОМАНДА",
    name2:"Христина",
    position2:"лекторка",
    text2:"магістр за спеціальністю викладання англійської та італійської мови та літератури. Христина викладає англійську, італійську та словацьку вже декілька років. В LUMOS вчить як діток, так і дорослих. Далі пряма мова від Христини😉",
  t31:'🗣Розкажи щось про себе та перші враження від Словаччини.',
  t32:'- Мене звати Христина, це вже мій п’ятий рік, як я навчаюся, працюю та проживаю в Словаччині. Варто додати, що життя в іншій країні, далеко від дому, ніколи не буде легким, проте воно точно буде дуже цікавим, і багатим на різні події, емоції, а в подальшому і спогади.',
  t33:'🗣Поділишся секретами щодо вивчення мови?',
  t34:'- Мені здається, що не існує єдиного методу навчання, який підходитиме для всіх, адже кожен з нас - індивідуальний, до того ж, сприймаємо ми інформацію також по-різному. Проте, зі свого досвіду можу сказати, що найкраще вивчити мову можна в середовищі, де кожен нею спілкується. Так, теорія важлива, але практика є незамінною складовою.',
  t35:'Отож, до зустрічі в Словаччині або ж на нашому курсі😉',
    name3:"Adriána",
    position3:"лекторка",
    text3:"носійка мови, яка закохана у словацьку та словацьку літературу. Студентка спеціальності викладання словацької мови та літератури в комбінації з педагогікою. В LUMOS проводить розмовні клуби, а також заняття для вищих мовних рівнів.",
   t41:'Далі пряма мова від Адріани:',
   t42:'🗣 Kto si?',
   t43:'- Som oddaná milovníčka slovenskej literatúry. Slovenčina si ma získala svojou jedinečnosťou a krásou.',
   t44:'Považujem za veľmi dôležité vedieť svoj rodný jazyk na vysokej úrovni. Pretože kvalita ovládania slova zanecháva dojem, podľa ktorého hodnotíme človeka.',
   t45:'🗣 Čo študuješ?',
   t46:'- Aby som sa stala dobrou učiteľkou ku slovenskému jazyku som si vybrala odbor pedagogika.',
   t47:'🗣 Čo robíš v LUMOS? Aké metódy využívaš?',
   t48:'- V LUMOSe učím žiakov pokročilých v slovenskom jazyku. V praxi sa stotožňujem s Komenského výrokom „Škola hrou.“ - Učiť sa jazyk s ľahkosťou a zodpovedne.',
   t49:'Je dôležité neurobiť si z jazyka nepriateľa ale „dobrého sluhu“, ktorý nám ponúkne široké spektrum možností a otvorí mnoho dverí.',
   t491:'Verím, že sa slovenčina pre našich žiakov stane kamarátkou, ktorá podrží a pomôže. Miestami možno aj potrápi ale rovnako ako hrdza skúša zlato, verím, že výsledok bude stáť za to!',
    name4:"Домініка",
    position4:"лекторка",
    text4:"студентка спеціальності викладання англійської мови. Має досвід у викладанні словацької іноземцям. В LUMOS займається з дітками, дорослими та проводить групові курси.",
    t51:'🗣️Привіт! Розкажи щось про себе та своє життя в Словаччині.',
    t52:'– Всім привіт, я - Домініка, родом з мальовничого міста Мукачева, Закарпатської області. 4 роки я провела в Словаччині, в місті Ружомберок, студенткою Католицького університету. Вивченням словацької я почала займатися ще в далекому 2018 році і вже відтоді мова, яку я інтенсивно вивчала для того, щоб без проблем розуміти жителів цієї країни, стала моїм захопленням.',
    t53:'🗣️В тебе чималий досвід у вивченні словацької. Як вважаєш, який метод навчання є найкращим?',
    t54:'— Для мене це завжди практика, спілкування з носіями мови, однак, теорія є не менш важливою частиною. На початку вивчення мови мені допомогли перегляди фільмів словацькою та регулярні граматичні вправи.',
    t55:'🗣️: Чому зараз обирати варто саме Словаччину?',
    t56:'– Найбільшою перевагою вчитися в Словаччині є безкоштовна освіта. Навчання базується на ефективних педагогічних методах.',
    t57:'А також - не менш важливим аспектом є те, що ви можете легко подорожувати до інших країн, так як Словаччина має вигідне географічне розташування.',

        nm: 'Імя та прізвище',
      em: 'Емейл',
      emm: "Ми ніколи не поширимо Ваш емейл",
      pn: "Номер телефону",
      cs: 'Курс',
      prim: 'Примітки',
      prim1:'Питання, побажання'
  },
  sk: {
    spiv:'Співзасновниці',
    blog: "BLOG",
    info:"Ми - ",
    lumos: "LUMOS, ",
    info11:"центр із вивчення словацької мови. Наша команда є досвідченою та  амбіційною. Весь досвід нашої команди - це результат пошуку найкращих шляхів, розробки авторських матеріалів та постійного саморозвитку. Ми знаємо Словаччину із середини, тому ви точно отримаєте комфортне та результативне навчання: з розумінням розмовної словацької, повсякденних фраз, сленгу, граматики і всього, що знадобиться в реальному житті.Пропонуємо спектр мовних курсів як для початківців, так і для просунутих рівнів. А саме: групові заняття, індивідуальні, парні та розмовні клуби. Родзинкою наших курсів є спеціалізації та галузі, для яких ми пропонуємо заняття з поглибленою лексику. А саме право, економіка, менеджмент, готельний та ресторанний бізнес.",
    info1:"Пропонуємо спектр мовних курсів як для початківців, так і для просунутих рівнів. А саме: групові заняття, індивідуальні, парні та розмовні клуби. Родзинкою наших курсів є спеціалізації та галузі, для яких ми пропонуємо заняття з поглибленою лексику. А саме право, економіка, менеджмент, готельний та ресторанний бізнес.",
    about: "O NÁS",
    name1: "ANASTASIIA CHERNETSKA",
    position1: "Комунікаційні та організаційні процеси Lumos",
    text1:"За освітою вчителька англійської та німецької мови та літератури. У цій сфері вже працює 4-ий рік, як з українськими, так і зі словацькими студентами. ",      courses:"COURSES",
   t11:'Далі пряма мова від Анастасії:',
   t12:'🗣️Розкажи трохи про себе та про свою місію в Lumos.',
   t13:'- Я співзасновниця Lumos і відповідаю за комунікацію з учнями, лекторами, організацією всіх важливих процесів в школі. Моя місія - це якісно навчити всіх охочих словацької, а в майбутньому втілити всі плани в реальність, щоб іноземці почувалися як найкомфортніше в Словаччині.',
   t14: '🗣️Як давно ти вирішила займатись саме цим?',
   t15:'- Мій досвід у викладанні 4 роки - англійська мова. Сама пройшла тернистим шляхом у вивченні іноземних мов і наразі володію англійською, німецькою та словацькою.Іноземні мови та їх викладання - це моя vášeň (слов. пристрасть). За освітою я вчитель англійської та німецької, вчуся на магістерському ступені в братиславському університеті за тією ж спеціальністю.',
   t16:'🗣️Як давно ти в Словаччині? Було важко звикнути до мови, нового темпу життя?Що порадиш тим, хто тільки починає цей шлях?',
   t17:'- В Словаччині я вже практично 5-ий рік і відчула на собі всі процеси адаптації в новій для мене країні.',
   t18:"За цей час я переконалася, що найкраще вивчення мови відбувається за допомогою поєднання різних методів навчання. Варто не забувати про вивчення граматики, але не менш важливе є спілкування з носіями мови. Тільки так ви пізнаєте культуру країни, менталітет людей та багато 'живих' слів та виразів. Саме в Lumos ми об'єднали всі важливі складові вивчення іноземної мови завдяки власному досвіду та відповідаємо за якість викладання. Тому, моя порада - звертайтесь до нас і ваш шлях стане легшим та цікавішим😉",

   ol: 'ОЛЬГА ЗУБЕНКО',
   olpos:'Team Leader-ка наших лекторок та відповідальна за навчальний процес',
   ola:'За освітою вчителька англійської та німецької мови та літератури. Має кількарічний досвід у викладанні словацької для іноземців. За свою практику виробила авторські матеріали, які перевірені на десятках задоволених студентів.',
   t21:'Далі пряма мова від Ольги:',
   t22:'🗣️Що можеш розказати про себе та свою місію в Lumos?',
   t23:'— Привіт! Я є співзасновницею нашої агенції та «team leader» для наших лекторок. Відповідаю за весь навчальний процес, розробляю матеріали для курсів, а також навчаю студентів.',
   t24:'Моя місія? Я прагну зробити навчання якісним, цікавим, інтерактивним не лише для студентства, але й для викладачів. Навчати бо подобається, а не тому що треба!',
   t25:'🗣️Чому обрала саме вивчення мов і викладання в подальшому?',
   t26:'– За освітою я вчитель німецької та англійською мов, проте у моєму серденьку знайшлося місце і словацькій. У мовах мені подобається процес, через вивчення іноземних мов, я завжди наближаюсь до вивчення своєї рідної, подобається розрізняти відтінки у словах, а також вивчати їх походження (етимологію).',
   t27:'Переконана, що навчати людей - це покликання, і це не можуть робити люди, які не відчувають достатнього натхнення, сил та терпіння для цього.',
   t28:'🗣️Який метод навчання найкращий, на твою думку?',
   t29:'Найкращий метод для навчання - це повне занурення у мову, можна вигадувати безліч різних стратегій, але ця є найдієвішою. При повному зануренні у середовище, мозок починає швидше адаптуватися і на сприйняття інформації, яку він раніше опрацьовув 10 хвилин, згодом йому вже знадобиться у два рази менше.',
   t291:'🗣️Чому варто обрати саме Lumos?',
   t292:'– Мова - це світ нескінчених викликів, гірська стежка, проте у Lumos - це завжди гірська стежка зі страховкою.',
   t293:'Тому, не бійтесь, довіртесь нам і словацька стане тою вершиною, яка підкориться вам легко та з задоволенням😉',
    feedback:"SPÄTNÁ VÄZBA",
    teachers:"TÍM",
    name2:"Христина",
    position2:"лекторка",
    text2:"магістр за спеціальністю викладання англійської та італійської мови та літератури. Христина викладає англійську, італійську та словацьку вже декілька років. В LUMOS вчить як діток, так і дорослих. Далі пряма мова від Христини😉",
  t31:'🗣Розкажи щось про себе та перші враження від Словаччини.',
  t32:'- Мене звати Христина, це вже мій п’ятий рік, як я навчаюся, працюю та проживаю в Словаччині. Варто додати, що життя в іншій країні, далеко від дому, ніколи не буде легким, проте воно точно буде дуже цікавим, і багатим на різні події, емоції, а в подальшому і спогади.',
  t33:'🗣Поділишся секретами щодо вивчення мови?',
  t34:'- Мені здається, що не існує єдиного методу навчання, який підходитиме для всіх, адже кожен з нас - індивідуальний, до того ж, сприймаємо ми інформацію також по-різному. Проте, зі свого досвіду можу сказати, що найкраще вивчити мову можна в середовищі, де кожен нею спілкується. Так, теорія важлива, але практика є незамінною складовою.',
  t35:'Отож, до зустрічі в Словаччині або ж на нашому курсі😉',
    name3:"Adriána",
    position3:"лекторка",
    text3:"носійка мови, яка закохана у словацьку та словацьку літературу. Студентка спеціальності викладання словацької мови та літератури в комбінації з педагогікою. В LUMOS проводить розмовні клуби, а також заняття для вищих мовних рівнів.",
   t41:'Далі пряма мова від Адріани:',
   t42:'🗣 Kto si?',
   t43:'- Som oddaná milovníčka slovenskej literatúry. Slovenčina si ma získala svojou jedinečnosťou a krásou.',
   t44:'Považujem za veľmi dôležité vedieť svoj rodný jazyk na vysokej úrovni. Pretože kvalita ovládania slova zanecháva dojem, podľa ktorého hodnotíme človeka.',
   t45:'🗣 Čo študuješ?',
   t46:'- Aby som sa stala dobrou učiteľkou ku slovenskému jazyku som si vybrala odbor pedagogika.',
   t47:'🗣 Čo robíš v LUMOS? Aké metódy využívaš?',
   t48:'- V LUMOSe učím žiakov pokročilých v slovenskom jazyku. V praxi sa stotožňujem s Komenského výrokom „Škola hrou.“ - Učiť sa jazyk s ľahkosťou a zodpovedne.',
   t49:'Je dôležité neurobiť si z jazyka nepriateľa ale „dobrého sluhu“, ktorý nám ponúkne široké spektrum možností a otvorí mnoho dverí.',
   t491:'Verím, že sa slovenčina pre našich žiakov stane kamarátkou, ktorá podrží a pomôže. Miestami možno aj potrápi ale rovnako ako hrdza skúša zlato, verím, že výsledok bude stáť za to!',
    name4:"Домініка",
    position4:"лекторка",
    text4:"студентка спеціальності викладання англійської мови. Має досвід у викладанні словацької іноземцям. В LUMOS займається з дітками, дорослими та проводить групові курси.",
    t51:'🗣️Привіт! Розкажи щось про себе та своє життя в Словаччині.',
    t52:'– Всім привіт, я - Домініка, родом з мальовничого міста Мукачева, Закарпатської області. 4 роки я провела в Словаччині, в місті Ружомберок, студенткою Католицького університету. Вивченням словацької я почала займатися ще в далекому 2018 році і вже відтоді мова, яку я інтенсивно вивчала для того, щоб без проблем розуміти жителів цієї країни, стала моїм захопленням.',
    t53:'🗣️В тебе чималий досвід у вивченні словацької. Як вважаєш, який метод навчання є найкращим?',
    t54:'— Для мене це завжди практика, спілкування з носіями мови, однак, теорія є не менш важливою частиною. На початку вивчення мови мені допомогли перегляди фільмів словацькою та регулярні граматичні вправи.',
    t55:'🗣️: Чому зараз обирати варто саме Словаччину?',
    t56:'– Найбільшою перевагою вчитися в Словаччині є безкоштовна освіта. Навчання базується на ефективних педагогічних методах.',
    t57:'А також - не менш важливим аспектом є те, що ви можете легко подорожувати до інших країн, так як Словаччина має вигідне географічне розташування.',

    nm: 'Celé meno',
    em: 'E-mailová adresa',
    emm: "Váš e-mail nikdy nezdieľame s nikým iným.",
    pn: "Telefón",
    cs: 'Kurz',
    prim: 'Примітки',
    prim1:'Питання, побажання'
  }
});


function App(props) {
let kra;

    const form = useRef();

    const sendEmail = (e) => {
      var templateParams = {
        name: document.getElementById('formGroupExampleInput2').value,
        phone: document.getElementById('phone').value,
        course: document.getElementById('inlineFormCustomSelectPref').value,
        email: document.getElementById('exampleInputEmail1').value,
        prim:  document.getElementById('prim').value
    };

      e.preventDefault(); // prevents the page from reloading when you hit “Send”
   
    //   emailjs.sendForm('service_7ta8gdh', 'template_c6vwkfa', '#myForm', 'MWZ0qrMEtfLEvcPiv')
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //    console.log('FAILED...', error);
    // });
      emailjs.send('service_7ta8gdh', 'template_c6vwkfa', templateParams, 'MWZ0qrMEtfLEvcPiv')
        .then((result) => {
          alert("Success! We'll contact you soon.")
            // show the user a success message
        }, (error) => {
            // show the user an error
        });
    };

  const [showForm, setShowForm] = useState(false);
  const [language, setLanguage] = useState('ua');

  
  function handleState(){
    setShowForm(!showForm);
  }
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
    kra,
    <div>
    
    <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
</style>
   <Header language={language}/>

   <div style={{display: 'flex', justifyContent:'flex-end', alignItems:'flex-end', marginRight:'20px'}}>
   <button  id='flagButton' style={{zIndex:'1000000', position:'fixed', top:'18px', backgroundImage:'url(' + buttonImage + ')'}} onClick={()=>{if(language==='en') {setLanguage('ua');} else if(language==='ua') setLanguage('sk'); else setLanguage('en'); kra=language}}></button>
   </div>
   <div style={{position: 'relative', width:'100%',  top: '-20px', zIndex:'-2'}}><img className='bkg' src={bkg}></img>
   <img className='ctr' src={logo1}></img>
   </div>

<div id='blog' className='heading'>{strings.blog}</div>
<div className='inst'>
  <EmbedWidget />
</div>

<div id='about' className='heading'>{strings.about}</div>
<div style={{textAlign:'center', margin: '40px'}}>
   <img className='tw' src={r1}></img>
   </div>
   <div style={{textAlign:'center', margin: '40px'}}>
   <img className='tw' src={r2}></img>
   </div>
   <div style={{textAlign:'center', margin: '40px'}}>
   <img className='tw' src={r3}></img>
   </div>
<div className='about e' style={{textAlign:'justify'}}>{strings.info}<span style={{fontWeight:'bold'}}>{strings.lumos}</span>{strings.info11}</div>
<div className='about e' style={{fontWeight:'bold', textAlign:'justify', padding:'10px', border:"1px solid #61dafb"}}>{strings.info1}</div>
<div className='about' style={{fontWeight:'bold'}}>{strings.spiv}</div>

<div className='zaba'>


<div>
<div style={{textAlign: 'center' }}><img className='nst' src={nastia}></img></div>
<div className='about' style={{marginLeft:'50px', marginRight:'50px'}}>
<div className='desc'>
<div>{strings.name1}</div>
<div className='pos'>{strings.position1}</div>
</div>
<div className='e' style={{marginBottom:'20px'}}>
{strings.text1}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t11}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t12}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t13}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t14}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t15}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t16}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t17}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t18}
</div>


</div>
</div>

<div>

<div style={{textAlign: 'center' }}><img className='ol' src={ol}></img></div>
<div className='about' style={{marginLeft:'50px', marginRight:'50px'}}>
<div className='desc'>
<div>{strings.ol}</div>
<div className='pos'>{strings.olpos}</div>
</div>
<div className='e' style={{marginBottom:'20px'}}>
{strings.ola}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t21}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t22}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t23}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t24}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t25}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t26}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t27}
</div>
<div className='e'  style={{textAlign:'justify', marginTop:'6px', color:'#286988', visibility:'hidden', height:'10px'}}>
{strings.t18}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t28}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t29}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t291}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t292}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t293}
</div>
{/* <div style={{textAlign: 'center' }}><img className='ol' src={ol}></img></div>
<div className='about' style={{marginLeft:'50px', marginRight:'50px'}}>
<div className='desc'>
<div>{strings.ol}</div>
<div className='pos'>{strings.olpos}</div>
</div>
<div className='e' style={{marginBottom:'20px'}}>
{strings.ola}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t21}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t22}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t23}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t24}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t25}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t26}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t27}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t28}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t29}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t291}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t292}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t293}
</div> */}

</div>
</div>
</div>
   {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
   <div><CourseCard /></div>
   <div><CourseCard /></div>
   <div><CourseCard /></div>
   </div> */}
   <div id='courses' className='heading'>{strings.courses}</div>
   <div>
 <Carousel change = {handleState}/>
 {showForm && (

 <form id='myForm' ref={form} onSubmit={sendEmail} style={{  textAlign:'center', backgroundColor: '#286988'}}>
 <div class="form-group">
  <label for="formGroupExampleInput2">{strings.nm}</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=""></input>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">{strings.em}</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required></input>
    <small id="emailHelp" class="">{strings.emm}</small>
  </div>


  <div class="form-group">
    <label for="exampleInputEmail1">{strings.pn}</label>
    <input style={{marginBottom:'20px'}} type="tel" name="phone" class="form-control" id="phone"
     
       required></input>

  </div>


  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">{strings.cs}</label>
  <select style={{marginTop: '30px', width: '290px'}} class="form-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected value="B1">B1</option>
    <option value="Курс - “Словацька з нуля”">Курс - “Словацька з нуля”</option>
    <option value="A2">A2</option>
    <option value="Розмовний клуб для рівнів В1+">Розмовний клуб для рівнів В1+</option>
    <option value="Парні заняття">Парні заняття</option>
    <option value="Індивідуальні заняття">Індивідуальні заняття</option>
  </select>

  <div class="form-group">
    <label for="exampleInputEmail1">{strings.prim}</label>
    <input style={{marginBottom:'20px'}} type="text" name="phone" class="form-control" id="prim" placeholder={strings.prim1}
     
       required></input>

  </div>

  <input class="btn-primary" style={{width: '100px', borderRadius: '5px', marginTop:'20px',backgroundColor:'#FE931E',border: '0px', height:'40px', color:'white', marginBottom:'20px'}}  type="submit" value="OK" />
</form>
 ) }
 </div>
 

 <div id='team' className='heading'>{strings.teachers}</div>




 <div className='zaba'>


<div>
 <div style={{textAlign: 'center' }}><img className='ol' src={chris}></img></div>
<div className='about' style={{marginLeft:'50px', marginRight:'50px'}}>
<div className='desc'>
<div>{strings.name2}</div>
<div className='pos' >{strings.position2}</div>
</div>
<div className='e' style={{marginBottom:'20px'}}>
{strings.text2}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t31}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t32}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t33}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t34}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', marginBottom:'40px'}}>
{strings.t35}
</div>
</div>
</div>

<div>
<div style={{textAlign: 'center' }}><img className='ol' src={adri}></img></div>
<div className='about' style={{marginLeft:'50px', marginRight:'50px'}}>
<div className='desc'>
<div>{strings.name3}</div>
<div className='pos'>{strings.position3}</div>
</div>
<div className='e' style={{marginBottom:'20px'}}>
{strings.text3}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t41}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t42}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t43}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', visibility:'hidden', height:'10px'}}>
{strings.t34}
</div>


<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t44}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t45}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t46}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t47}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t48}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t49}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', marginBottom:'40px'}}>
{strings.t491}
</div>
</div>

</div>
</div>

 <div style={{textAlign: 'center' }}><img className='ol' src={domi}></img></div>
<div className='about' style={{marginLeft:'50px', marginRight:'50px'}}>
<div className='desc'>
<div>{strings.name4}</div>
<div className='pos'>{strings.position4}</div>
</div>
<div className='e' style={{marginBottom:'20px'}}>
{strings.text4}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t51}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t52}
</div>

<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t53}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t54}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', color:'#286988'}}>
{strings.t55}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px'}}>
{strings.t56}
</div>
<div className='e' style={{textAlign:'justify', marginTop:'6px', marginBottom:'0px'}}>
{strings.t57}


</div>
</div>


<div id='reviews' className='heading'>{strings.feedback}</div>
 <div>
 <Carousell language={language}/>
 </div>

 <footer style={{marginTop:'80px'}}>
  <div class="footer-icons">
    <a href="https://instagram.com/lumos.slovakia?igshid=YmMyMTA2M2Y="><img className='icn' src = {inst}></img></a>
    <a href="https://t.me/lumosoffice"><img  className='icn r' src = {telegram}></img></a>
    <a href="https://www.facebook.com/profile.php?id=100076594770668"><img  className='icn'src = {fb}></img></a>
    <a href="https://m.me/Lumos.Slovakia"><img  className='icn' src = {fbm}></img></a>
    <a href="https://msng.link/o?380684816419=vi"><img  className='icn' src = {viber}></img></a>
    {/* <a href="viber://chat?number=+380684816419"><img  className='icn' src = {viber}></img></a> */}
  </div>
</footer>
   </div>

  );
}

export default App;
