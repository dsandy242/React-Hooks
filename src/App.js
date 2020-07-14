import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  return (<div>count is:{count}<br/>Add
<button onClick={setCount(count+2)}> 2</button>
<button onClick={setCount(count+5)}> 5</button>
<button onClick={setCount(count+10)}> 10</button>


    
  </div>
  );
}

export default App;
