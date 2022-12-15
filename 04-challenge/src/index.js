import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let curDate = new Date(2020,5,5,23);
curDate = curDate.getHours(); // here this getHours assigh the current time(only hour) value in curDate variable
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



const root = document.getElementById('root');
ReactDOM.render(
  <>
    <div className="heading">
       <h1>Hii Ramniwas, <span  style={cssStyle}>{greeting}</span></h1>
    </div>
  </> 
          
  ,root);

