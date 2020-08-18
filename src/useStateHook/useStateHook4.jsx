import React,{useState} from 'react';

const UseHook4 = ()=>{
    const [items,setItem]=useState([])
    const addItem=()=>{
        setItem([...items,{id:items.length, value:Math.floor(Math.random()*10)+1}])
    }
    return(
        <div>
            <button onClick={addItem}>add a number</button>
            <ul>
               { items.map(item=><li key={item.value}>{item.value}</li>)}
            </ul>
        </div>
    )
}
export default UseHook4;