import React, { useContext } from 'react';
import ClassB from './UseContext';
import ClassC from './UseContextC';
import UserContext from './UseContext';
const UseContextB = () => {
    const user= useContext(UserContext);
    return <div>
        class B{user}
           </div>
}

export default UseContextB;