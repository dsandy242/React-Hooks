import React,{useState} from 'react';

const useSateHook2=()=>{
    const initialRank=0;
    const [rank,setRank]=useState(initialRank);
    return (<div> Rank:{rank}
        <button onClick={()=>setRank(prevState=>prevState+1)}>Increment</button>
        <button onClick={()=>setRank(prevState=>prevState-1)}>Decrement</button>
        <button onClick={()=>setRank(prevState=>initialRank)}>Reset</button>
    </div>);
}

export default useSateHook2;