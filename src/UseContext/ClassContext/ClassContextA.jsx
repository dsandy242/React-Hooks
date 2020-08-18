import React, { Component } from 'react';
import ClassB from '../ClassContext/ClassContextB';

class ClassA extends Component{
    render(){
        return <div>
<ClassB></ClassB>
        </div>
    }
}
export default ClassA;