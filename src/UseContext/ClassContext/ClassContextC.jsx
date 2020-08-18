import React, { Component } from 'react';
import {UserConsumer} from '../ClassContext/ClassContext';
class ClassC extends Component{
    render(){
        return <UserConsumer>
            {(value)=>{
                return <div>hello{value} </div>}
            }
        </UserConsumer>
    }
}
export default ClassC;