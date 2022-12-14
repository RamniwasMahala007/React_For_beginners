import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ramniwasImage from './images/ramniwas.png' //importing image from images folder which is saved in src folder

const root = document.getElementById('root');
ReactDOM.render(
  <>
    <div className="container">
    <img src={ramniwasImage} alt="Images"  />
    <div className="details">
         <h1>Ramniwas Mahala</h1>
         <p>Computer Science</p>
         <h4>SKILLS</h4>
         
         <span class="badge">HTML</span>
          <span class="badge">CSS</span>
          <span class="badge">JavaScript</span>
          <span class="badge">ReactJs</span>
          <span class="badge">C</span>
          <span class="badge">C++</span>
          
         
         </div>
        
    </div>
   
        
     
    
    
  </>,root
);


