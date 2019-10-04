import React from 'react';
import logo from './logo.svg';
import Embed from 'react-runkit'

import createRunkitContentFromJSCode from './createRunkitContentFromJSCode'
 

import './App.css';


// redefine require so it can be used in code preparation.

// Several constraints to make it work :
// 1) redefine require so it can be used in code preparation.
const require = () => { }
// 2) store code you wanna use in a function declared as a named function, so toString method keeps its name, thus it can be called automatically.
// if it was a anonymous function stored in a variable, the toString method render 


function testo() {

  var fetch = require("cross-fetch")



  fetch('https://opentdb.com/api.php?amount=10#').then((res)=> res.json()).then((data)=> console.log(data))
}



const url ='https://runkit.com/hyphaene/5d97845fd8b6190014638429';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="embedWrapper" >
          <Embed source={ createRunkitContentFromJSCode(testo) } />
    
    </div>
      </header>
    </div>
  );
}
  
export default App;
