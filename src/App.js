import React from 'react';
import './App.css';
import Hook1 from '../src/useStateHook/useStateHook';
import UseHook2 from '../src/useStateHook/useStateHook2';
import UseHook3 from '../src/useStateHook/useStateHook3';
import UseHook4 from './useStateHook/useStateHook4';
import UseHook5 from '../src/useStateHook/useStateHook5';
import UseEff1 from '../src/useEffectHook/useEffectHook';
import UseEff2 from '../src/useEffectHook/useEffectHook2';
import UseEff3 from '../src/useEffectHook/UseEffectHook3';
import UseEff4 from '../src/useEffectHook/unmountingEffect3';
import UseEffe4 from '../src/useEffectHook/IntervalEffect';
import UseEffe5 from '../src/useEffectHook/FetchingDataEffect';
import UseEffe6 from '../src/useEffectHook/FetchingDataEffect2';
// import ClassContext, { UserProvider } from '../src/UseContext/ClassContext/ClassContext';
import ClassA from '../src/UseContext/ClassContext/ClassContextA';
import { UserProvider} from './UseContextHook/UseContext';
import UseContextA from './UseContextHook/UseContextA'
import LifecycleMethods from './LifeCyclemethods/lifecycleMethods';
import Forms from './Forms/forms';
import Useredu1 from './UseReducerHook/UseReducerHook1';
import Useredu2 from './UseReducerHook/MultiUseRerducer';
function App() {
  return (<div>
    {/* <Hook1></Hook1> 
    <UseHook2></UseHook2>
    <UseHook3></UseHook3>
    <UseHook4></UseHook4>
    <UseHook5></UseHook5>
    <UseEff1></UseEff1> */}
    {/* <UseEff2></UseEff2> */}
{/* <UseEff3></UseEff3> */}
{/* <UseEff4/> */}
{/* <UseEffe4/> */}
{/* <UseEffe6/> */}
        {/* useState Hook
    {/* <Hook2></Hook2> */} 
    {/* <LifecycleMethods favcol="red"></LifecycleMethods> */}
    {/* <Forms></Forms> */}

{/* <UserProvider value="Hurraay!!!!">
  <UseContextA></UseContextA>
</UserProvider> */}
<Useredu2></Useredu2>
     </div>
  )
  }
export default App;
