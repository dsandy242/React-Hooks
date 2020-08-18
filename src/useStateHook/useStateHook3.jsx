import React,{useState} from 'react';
const UseState3 =() =>{
    const [name,setName]=useState({firstname:'', lastname:'',age:''})
return (
    <form>
        FirstName:
    <input type="text" value={name.firstname} onChange={(event)=>setName({...name,firstname:event.target.value})}/><br/>
        Lastname:
<input type="text" value={name.lastname} onChange={(event)=>setName({...name,lastname:event.target.value})}/><br/>
Age:
<input type="text" value={name.age} onChange={(event)=>setName({...name,age:event.target.value})}/><br/>
<h2>FirstName: {name.firstname} </h2>
<h2>LastName: {name.lastname}</h2>
<h2>Age: {name.age}</h2>
</form>
)
}
export default UseState3;