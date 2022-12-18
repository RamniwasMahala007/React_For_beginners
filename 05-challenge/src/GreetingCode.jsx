import React from "react";
import './index.css';

function GreetingCode()
{

  let curDate = new Date();
curDate = curDate.getHours(); 
  
let greeting ='';
const cssStyle = { };

if(curDate >= 1 && curDate <= 11)
{
  greeting = "Good Morning";
  cssStyle.color = "brown";
}
else if(curDate >= 12 && curDate <= 17)
{
  greeting = "Good AfterNoon";
  cssStyle.color = "Red";
}
else if( curDate >= 18 && curDate <= 20 ){
  greeting = " Good Evening";
  cssStyle.color = "green";
}
else{
  greeting =" Good Night";
  cssStyle.color = "blue";
}

  return(
    <>
   <div className="heading">
    <h1>Hii Ramniwas, <span  style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
   
  );
}

export default GreetingCode;
