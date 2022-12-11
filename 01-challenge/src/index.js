import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');


const header = (
  <header>
    <h1>Welcome to React Basic Challenge</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p> Hello This is Ramniwas first basic challenge</p>
  </header>
)


const img1="https://picsum.photos/400/400";
const img2="https://picsum.photos/350/400";
const img3="https://picsum.photos/300/400";
const img4="https://picsum.photos/250/400";


const image = (
<>
  <img src={img1} alt="Images" />
  <img src={img2} alt="Images" />
  <img src={img3} alt="Images" />
  <img src={img4} alt="Images" />
</>
)


const wrapp =(
  <>
      {header}
      {image}
  </>
  
)
ReactDOM.render(wrapp, root );


