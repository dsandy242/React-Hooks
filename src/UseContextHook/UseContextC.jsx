import React, { Component } from 'react';
import {UserConsumer} from './UseContext';
const UserContextC=()=>{
   
        return <UserConsumer>
            {(value)=>{
                return <div>hello{value} </div>}
            }
        </UserConsumer>
    
}
export default UserContextC;