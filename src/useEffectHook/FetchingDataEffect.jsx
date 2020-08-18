import React,{useEffect,useState} from 'react';
import Axios from 'axios';

const DataFetching =()=>{
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        console.log("here Am-UseEffect!!!");
    Axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
          console.log(response.data)
          setTodos(response.data)
    })
    .catch(error => {
      console.log(error);
    })
    .finally(console.log("fanally "))
    },[])
return <div>
reanderinggg
{todos.map(todo=><li key={todo.id}>{todo.id}: {todo.title}</li>)}
</div>
}
export default DataFetching;