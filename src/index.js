import React from 'react';
import ReactDom from 'react-dom';
import "./index.css"



let cd= new Date( );
cd= cd.getHours();
let greet= "";
const cssStyle= {};

if (cd>=1 && cd<12)
{
greet= "Good Morning";
cssStyle.color="Green"
} 
else if(cd>=12 && cd<19)
{

  greet= " Good Evening";
  cssStyle.color="Orange"

}
else{
  greet= "Good Night";
  cssStyle.color="Blue"

}




ReactDom.render(
  <div>
  
<div className= "mid"><h1>Hello there, <span style= {cssStyle}> {greet} </span></h1></div>
</div>,
  document.getElementById("root")
)

