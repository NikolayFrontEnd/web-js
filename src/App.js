import './App.css';
import { IoMdHome, IoMdVideocam } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import React,  {useState} from 'react';
import photos from './photos/rocket.jpg'; 
import { FaPencilAlt } from "react-icons/fa";
import profile from './photos/profile.png';
import facebook from './photos/facebook.png';
import twitter from './photos/twitter.png';
import telegram from './photos/telegram.png';
import VanillaTilt from 'react-vanilla-tilt'
import p from './photos/profile.png';
function App() {
 // to change burger classes
 /* const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
 const [menu_class, setMenuClass] = useState("menu hidden")
 const [isMenuClicked, setIsMenuClicked] = useState(false) */

 // toggle burger menu change
/*  const updateMenu = () => {
     if(!isMenuClicked) {
         setBurgerClass("burger-bar clicked")
         setMenuClass("menu visible")
     }
     else {
         setBurgerClass("burger-bar unclicked")
         setMenuClass("menu hidden")
     }
     setIsMenuClicked(!isMenuClicked)
 } */


/*  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
 */


  return (
    <div className="App">  
{/*   'ЭТО ПЕРЕКЛЮЧЕНИЕ DASHBOARD
   <div className = "container">
            <div className = "tabs">
 <input id = "home" type = "radio" name = "group" /> 
 <input id = "about" type = "radio" name = "group"/> 
 <input id = "user" type = "radio" name = "group"/> 
 <input id = "message" type = "radio" name = "group"/> 
 <div className = "icon">
    <label for = "home">  <IoMdHome /></label>
    <label for = "about"> <IoMdSettings/></label>
    <label for = "user">  <FaUser /></label>
    <label for = "message"> <FaMessage/></label>
    <div className = "indicator"></div>
 </div>
 <div className = "content" >  </div>
            </div>
        </div> */}    
{/* ПЕРЕКЛЮЧАТЕЛЬ КНОПКА
<label>
  <input className = "n" type = "checkbox"/> 
  <span className = "check"></span>
</label> */}

{/* <div class="parent">
  <p>A line of text</p>
  <div class="child"></div>
  <p>More text :D</p>
</div> */}

{/* <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}></div>
        </div> */}




{/* КНОПКА БУРГЕР И ВЫЕЗЖАЮЩЕЕ МЕНЮ

<div className = "Header">  
<button className={isActive ? "burger active" : "burger"} onClick={handleToggle}>
      <i></i>
      <i></i>
      <i></i>
    </button>
    </div>
<div className={isActive ? "DashBoard show" : "DashBoard"}></div> */}



{/* 
<div className='container'> 
  <div className = "card"  style={{ "--clr": "#ff4d4d" }}> 
  
<div className = "content">
  <h2>Design</h2>
  <p> Те ракеты, на которые Иран рассчитывал, а не просто обманки, перегружавшие ПВО-ПРО, израильскую противоракетную оборону вскрыли. Хуже того. Это была комбинированная противоракетная оборона сразу нескольких стран, включая Иорданию, Великобританию, Францию, Ирак, США и Бахрей
  </p>
  <a href = "#"> Read More </a>
</div>





<div className = "imgBx">
  <img className = "img"src = {photos}/>
</div>
<div className = " textBx">
<h2>Design</h2>
</div>
  </div>

  <div className = "card"  style={{ "--clr": "#5fa7ff" }}> 
<div className = "content">
<h2>Design</h2>
  <p> Те ракеты, на которые Иран рассчитывал, а не просто обманки, перегружавшие ПВО-ПРО, израильскую противоракетную оборону вскрыли. Хуже того. Это была комбинированная противоракетная оборона сразу нескольких стран, включая Иорданию, Великобританию, Францию, Ирак, США и Бахрей
  </p>
  <a href = "#"> Read More </a>
</div>
<div className = "imgBx">
<img className = "img"src = {photos}/>
</div>
<div className = " textBx">
  <h2>Design</h2>
</div>
  </div>

  <div className = "card"  style={{ "--clr": "#3ae374" }}> 
<div className = "content">
<h2>Design</h2>
  <p> Те ракеты, на которые Иран рассчитывал, а не просто обманки, перегружавшие ПВО-ПРО, израильскую противоракетную оборону вскрыли. Хуже того. Это была комбинированная противоракетная оборона сразу нескольких стран, включая Иорданию, Великобританию, Францию, Ирак, США и Бахрей
  </p>
  <a href = "#"> Read More </a>
</div>
<div className = "imgBx">
<img className = "img"src = {photos}/>
</div>
<div className = " textBx">
<h2>Rocket</h2>
</div>
  </div>
</div>
 */}

{/* КНОПКА КАРАНДАШ


<a href = "#">  SAVE ALL
<span></span>
<span></span>
<span></span>
<span></span>
 </a> */}



{/* <div className = "container">

  <VanillaTilt  className = "card"  options={{ scale: 1.1, speed: 400, max: 25}}
  style={{
    width: '90%',
    maxWidth: '440px',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 35px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)', // For other browsers
  }}
  >  
<div   > 
<img src = {profile}/>
<h2>John Smith</h2>
<p>I'am studing and  love coding</p>
<div className = "links">
<a href="https://facebook.com"> <img src = {facebook}/>  </a>
<a href="https://twitter.com"> <img src = {twitter}/>  </a>
<a href="https://telegram.com"> <img src = {telegram}/>  </a>
</div>
<a href="#" className = "btn"> message me </a>
</div>
  </VanillaTilt>  
</div> */}

<div className = "card"> 
<div className = "box">    </div>

  
<div className = "box">  
<div className = "content">
  <h2>Nikolay Posrednikov</h2>
  <ul>
    <li>Posts <span>62</span></li>
    <li>Posts <span>62</span></li>
    <li>Posts <span>62</span></li>
  </ul>
  <button>Sick history</button>
</div>
</div>


<div className = "circle">  

<div className = "imgBx"> 
<img src = {p}/>
</div>
</div>
</div>








    </div>
  );
}
export default App;
