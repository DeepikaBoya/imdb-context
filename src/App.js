import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Counter from './components/counter';
import { useState } from 'react';

function App() {
  const [isVisible,setVisiblity]=useState(true);
  const toggleVisibility=()=>
  {
setVisiblity((prevState)=> !prevState)
  }
  return (
    <div className="App">
     <input type='checkbox' onChange={toggleVisibility}/> Toggle Visibility
        {isVisible ? <Stopwatch />:null }
        {/* <div style={{
          display:isVisible? 'block':'none',
          fontSize:'20px'
        }}>  *styles="display:none;font-size:20px" */}
          {/* <Stopwatch/></div> */}
          {/* <Counter /> */}
    </div>
  );
}

export default App;
