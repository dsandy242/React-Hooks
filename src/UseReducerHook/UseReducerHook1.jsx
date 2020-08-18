import React,{useReducer} from 'react';
const initialState={
    firstCounter:0,
    secondCounter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'Increment':
            return {...state,firstCounter: state.firstCounter+ action.value}
        case 'Decrement':
            return {...state,firstCounter: state.firstCounter- action.value}
        case 'Increment5':
            return {...state,secondCounter: state.secondCounter+ action.value}
        case 'Decrement5':
            return {...state,secondCounter: state.secondCounter- action.value}
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}
const UseReducerHook1 =()=>{
    const [count,dispatch]=useReducer(reducer, initialState);
return <div> Count Number1-{count.firstCounter}<br/>
Count Number2-{count.secondCounter}<br/>
<button onClick={()=>dispatch({type:'Increment', value:1})}> Increment</button><br/>
<button onClick={()=>dispatch({type:'Decrement',value:1})}>Decrement</button><br/>
<button onClick={()=>dispatch({type:'Increment5', value:5})}> Increment5</button><br/>
<button onClick={()=>dispatch({type:'Decrement5',value:5})}>Decrement5</button><br/>
<button onClick={()=>dispatch({type:'Reset'})}>Reset</button><br/>
    </div>
}
export default UseReducerHook1;