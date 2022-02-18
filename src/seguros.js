import React,{useEffect} from "react";
import "./styles/items.scss"
import uuid from 'react-uuid';
import data from "./data.json"
var cou = 0
var alarl = []
var alarr = []

function Seguros(){
  
 function disi(){
   for(var i in data){
       for(var j in data[i]){
            if(i === "seguros"){
              
              cou = cou+1
            }
           
         for(var g in data[i][j]){
           
           if(i==="seguros"){
            
             
            if(cou%2===0){
            
              if(g==="img"){
                alarr.push(<img key={uuid()} src={data[i][j][g]} alt="alarma"></img>)
                
               }
               if(g==="name"){
                alarr.push(<p key={uuid()}>{data[i][j][g]}</p>)
                }
                if(g==="price"){
                  alarr.push(<p key={uuid()}>{data[i][j][g]}</p>)
                  }
            }

            else{
              if(g==="img"){
                alarl.push(<img key={uuid()} src={data[i][j][g]} alt="alarma"></img>)
                
               }
               if(g==="name"){
                alarl.push(<p key={uuid()}>{data[i][j][g]}</p>)
              }

              if(g==="price"){
                alarl.push(<p key={uuid()}>{data[i][j][g]}</p>)
                }
             }
            }
        }
      }
       
     }
  
}

useEffect(()=>{
  if(alarr.length <1){
   disi()
  }

  
  
  })  
   
return(
        <>
       <div id="leftc" key={uuid()}>
         {alarl}
        </div>
      
        <div id="rightc">
          {alarr}
        </div>
       </>
    )
}

export default Seguros