import React,{useState,useEffect} from 'react';
import Effect3 from './UseEffectHook3';

const Unmount3=()=>{
    const [disply,setDisply]=useState(true);
    return <div>
        <button onClick={()=>{setDisply(!disply)}}>Toggle Disply</button>
        {disply && <Effect3/> }
    </div>
}
export default Unmount3;