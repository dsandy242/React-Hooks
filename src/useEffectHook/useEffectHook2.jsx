import React, { useState, useEffect } from 'react';
const Example=()=> {
  const [count, setCount] = useState(0);
  const [name,setName]=useState({firstname:'',lastname:''})
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
      console.log("Updating document title")
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  },[name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <form>firstname:
          <input type="text" value={name.firstname} 
          onChange={(event)=>setName({...name,firstname:event.target.value})}/>
      </form>
      {name.firstname}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;