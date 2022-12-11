import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {increment, decrement,changeByAmount} from '../reduxState/reducer/counterReducer';
export default function Counter() {
    const val = useSelector((state)=>state.counterValue.counter);
    //
    const [data,setdata] = useState(0);
    let newdata = Number(data) || 0
    //
    const dispatch = useDispatch();
    //
    let Ifunc=()=>{
        dispatch(increment())
    }
    let Dfunc=()=>{
        dispatch(decrement())
    }
    let Cfunc=()=>{
        dispatch(changeByAmount(newdata))
    }
  return ( 
    <div>
      <h2>Counter value</h2>
      <div style={{textAlign:'center'}}>{val}</div>
      <button onClick={Ifunc}>Increment</button>
      <button onClick={Dfunc}>Decrement</button>
      <input type="text" value={data} onChange={(e)=>setdata(e.target.value)}/>
      <button onClick={Cfunc}>changeByAmount</button>
    </div>
  )
}
