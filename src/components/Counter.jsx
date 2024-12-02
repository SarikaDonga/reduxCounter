import React from 'react'
import { useDispatch } from 'react-redux'
import { increement,decreement } from '../redux/action'

const Counter = () => {

    const dispatch=useDispatch()

    const increese=()=>{
        dispatch(increement())    
    }
    const decreese=()=>{
        dispatch(decreement())
    }
  return (
    <div>
        
        <button className="btn btn-primary" onClick={()=>decreese()}>-</button>
        <button className="btn btn-primary" onClick={()=>increese()}>+</button>
    </div>
  )
}

export default Counter