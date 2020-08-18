import React,{useReducer} from "react";
const initialState=0;
const initialStateTwo=0;
const reducer=(state,action)=>{
    switch(action){
        case "Increment":
            return state+1;
        case "Decrement":
            return state-1;
        case "Reset":
            return initialState;
        default:
               return state;
    }
}
const UseReducer2=()=>{
    const [count,dispatch]=useReducer(reducer, initialState)
    const [countTwo,dispatchTwo]=useReducer(reducer, initialState)
    return <div>
        Count:{count}
<button onClick={()=>{dispatch("Increment")}}>Increment</button>
<button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
<button onClick={()=>{dispatch("Reset")}}>Reset</button><br/>
Count:{countTwo}
<button onClick={()=>{dispatchTwo("Increment")}}>Increment</button>
<button onClick={()=>{dispatchTwo("Decrement")}}>Decrement</button>
<button onClick={()=>{dispatchTwo("Reset")}}>Reset</button>
    </div>
}
export default UseReducer2;