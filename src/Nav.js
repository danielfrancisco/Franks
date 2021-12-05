import React,{useEffect, useState} from "react"
import "./styles/styles.scss"
import Hero from "./Hero"
import Alarmas from "./Alarmas"
import Seguros from "./seguros"
import Estribos from "./estribos"

var checkm = 0
const ct = "color 0.57s, top 0.57"

function Nav(){
  const[cont, setcont] = useState(<Hero/>)
  function showmenu(){
     if(checkm === 0){
      document.getElementById("nav").style.height = "80vh";
      
      for(var i in document.getElementsByClassName("menu")){
        if(i <= document.getElementsByClassName("menu").length){
          document.getElementsByClassName("menu")[i].style.top = "1vh";
          document.getElementsByClassName("menu")[i].style.transition = "color 0.57s, top 0s";  
          document.getElementsByClassName("menu")[i].style.color = "white";
            
        }
      }
      checkm = 1
     }
     else{
      document.getElementById("nav").style.height = "12vh";
      for(var j in document.getElementsByClassName("menu")){
        if(j <= document.getElementsByClassName("menu").length){
              document.getElementsByClassName("menu")[j].style.top = "-75vh";
              document.getElementsByClassName("menu")[j].style.transition = "color 0.57s, top 0.20"; 
              document.getElementsByClassName("menu")[j].style.color = "transparent";
               
              
        }
      }
      checkm = 0
     }
     
     
  }

  function logo(){
    for(var i in document.getElementsByClassName("menu")){
      if(i <= document.getElementsByClassName("menu").length){
        document.getElementsByClassName("menu")[i].style.top = "-75vh";
        document.getElementsByClassName("menu")[i].style.transition = ct;  
        document.getElementsByClassName("menu")[i].style.color = "transparent";
        
            
      }
    }
    document.getElementsByTagName("body")[0].style.overflowY="hidden";
    setcont(<Hero id="herocom" />)
    document.getElementById("nav").style.height = "12vh";
    checkm = 0
  }

  function alarmas(){
    for(var i in document.getElementsByClassName("menu")){
      if(i <= document.getElementsByClassName("menu").length){
        document.getElementsByClassName("menu")[i].style.top = "-75vh";
        document.getElementsByClassName("menu")[i].style.transition = ct; 
        document.getElementsByClassName("menu")[i].style.color = "transparent";
        
        
      }
    }
    document.getElementsByTagName("body")[0].style.overflowY="visible";
    setcont(<Alarmas/>)
    setcont(<Alarmas/>)
    document.getElementById("nav").style.height = "12vh";
    checkm = 0
  }

  function seguros(){
    for(var i in document.getElementsByClassName("menu")){
      if(i <= document.getElementsByClassName("menu").length){
        document.getElementsByClassName("menu")[i].style.top = "-75vh";
        document.getElementsByClassName("menu")[i].style.transition = ct; 
        document.getElementsByClassName("menu")[i].style.color = "transparent";
        
      }
    }
    document.getElementsByTagName("body")[0].style.overflowY="visible";
    setcont(<Seguros/>)
    setcont(<Seguros/>)
    document.getElementById("nav").style.height = "12vh";
    checkm = 0
  }

  function estribos(){
    for(var i in document.getElementsByClassName("menu")){
      if(i <= document.getElementsByClassName("menu").length){
        document.getElementsByClassName("menu")[i].style.top = "-75vh";
        document.getElementsByClassName("menu")[i].style.transition = ct; 
        document.getElementsByClassName("menu")[i].style.color = "transparent";
        
      }
    }
    document.getElementsByTagName("body")[0].style.overflowY="visible";
    setcont(<Estribos/>)
    setcont(<Estribos/>)
    document.getElementById("nav").style.height = "12vh";
    checkm = 0
  }

  useEffect(()=>{
    logo()
    document.getElementById("logo").addEventListener("click",logo)
    document.getElementById("alarmas").addEventListener("click",alarmas)
    document.getElementById("seguros").addEventListener("click",seguros)
    document.getElementById("estribos").addEventListener("click",estribos)
    
    
  },[])

  return(
      <>
      <div id="nav">
        <button id="menubutton" onClick={showmenu}>Menu</button>
        <p id="logo" >Frank's</p>
        <p className = "menu" id="alarmas">Alarmas</p>
        <p className = "menu" id="seguros"> Seguros electricos</p>
        <p className = "menu" id="estribos">Estribos</p>
        <p className = "menu" id="forros">Forros de asientos</p>
        <p className = "menu" id="radios">Radios</p>
        <p className = "menu" id="parlantes">Parlantes</p>
        <p className = "menu" id="moquetas">Moquetas</p>
        <p className = "menu" id="focos">Focos</p>
        <p className = "menu" id="faros">Faros</p>
      </div>
      {cont}
    </>
  )
}

export  default Nav