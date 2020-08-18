import React,{useState, useEffect} from 'react';
const Effect3=()=>{
const [x,setX]=useState(0);
const [y,setY]=useState(0);
const myevent=e=>{
setX(e.clientX);
setY(e.clientY);
}
    useEffect(()=>{
        console.log("Here is UseEffect");
        window.addEventListener("mousemove",myevent)
        return ()=>{
            window.removeEventListener("mousemove",myevent)
        }
    },[])
    return <div>
        Your Position x-{x} y-{y}
    </div>
}
export default Effect3;
