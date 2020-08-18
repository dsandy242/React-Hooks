import React, { useState } from 'react';

const Example=()=> {
    const [count, setCount] = useState(0);
    const [friut,setFriut]=useState('red')
  return (
    <div>
      <button onClick={()=>setCount(count+2)}>Add 2 :{count}</button><br/>
      {count}<br/>
  <button onClick={()=> setFriut("orange")}>FavFriut :{friut}</button><br/>
      {friut}<br/>
   </div>
  );
}
export default Example;