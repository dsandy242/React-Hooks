import React, { Component } from 'react';
import ClassC from '../ClassContext/ClassContextC'
class ClassB extends Component{
    render(){
        return <div>
            <ClassC></ClassC>
        </div>
    }
}
export default ClassB;