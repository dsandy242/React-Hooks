import React,{useEffect,useState} from 'react';
import Axios from 'axios';

const DataFetching =()=>{
    const [todos,setTodos]=useState({});
    const [id,setId]=useState(1);
    const [btnclickId,setBtnclickId]=useState('')
    useEffect(()=>{
        console.log("here Am-UseEffect!!!");
    Axios.get(`https://jsonplaceholder.typicode.com/todos/${btnclickId}`)
    .then(response => {
          console.log(response.data)
          setTodos(response.data)
    })
    .catch(error => {
      console.log(error);
    })
    .finally(console.log("fanally "))
    },[btnclickId])
    const eventHandler=()=>{
        setBtnclickId(id)
    }
return <div>
Give ID:<input type="text" value={id} onChange={event=>setId(event.target.value)}></input>
<button onClick={eventHandler}>FetchData</button><br/>
{/* {todos.map(todo=><li key={todo.id}>{todo.id}: {todo.title}</li>)} */}
{todos.id}: {todos.title}
</div>
}
export default DataFetching;