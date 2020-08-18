import React, { useState,useEffect } from 'react';

const Example=()=> {
    const [names, setNames] = useState({name:""});
    const [ages,setAges]=useState({age:""})
     useEffect(()=>console.log("hello"));
  return (
    <div>
      <button onClick={()=>setNames({name:"abc"})}>names</button><br/>
      {/* {Object.keys(names).map(name=><h3>{name.value}</h3>)} */}
      {names.name}
      <button onClick={()=> setAges({age:"23"})}>ages</button><br/>
      {ages.age}
     <h1>Renderingggg</h1>
     
    </div>
  );
}
export default Example;