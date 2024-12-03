import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increement,decreement } from '../redux/action'

const Counter = () => {

  const [number,setNumber]=useState(1)

    const dispatch=useDispatch()

    const increese=()=>{
        dispatch(increement(number))    
    }
    const decreese=()=>{
        dispatch(decreement(number))
    }
  return (
    <div>
        <input type="text" name="" id="" value={number } onChange={(e)=>setNumber(Number(e.target.value))}/>
        <button className="btn btn-primary" onClick={decreese}>-</button>
        <button className="btn btn-primary" onClick={increese}>+</button>
    </div>
  )
}

export default Counter