import React from "react";
import {add, sub, mult, div} from './Calc'

function App()
{
    return(
        <>
        <ul>
             <li>the sum of two passed values is {add(40,4)}</li>
             <li>the subtraction of two passed values is {sub(40,4)}</li>
             <li>the multiply of two passed values is {mult(40,4)}</li>
             <li>the divison of two passed values is {div(3,4)}</li>
        </ul>
        </>
    );
}
export default App;