import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()


  const handleIncrementAmount = ()=>{
    if(amount){
      dispatch(incrementByAmount(+amount))
    }else{
      alert("please enter the vaild amount")
    }
  }

  
  return (
    <>
      <div className='p-5'>
        <h1 className='text-white text-center'>Counter</h1>
        <div className='border rounded container p-5 mt-3'>
            <h1 className='p-3 fw-bold text-warning text-center'>{count}</h1>
            <div className='p-2 my-3 d-flex justify-content-evenly container'>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning fs-5'>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger fs-5'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success fs-5'>Increment</button>
            </div>
            <div className='d-flex container p-2 align-items-center justify-content-center mt-5'>
                <div onChange={e=>setAmount(e.target.value)} className='w-50 me-3'><input type="text" className='form-control p-2' placeholder='Enter the number'/></div>
                <button onClick={handleIncrementAmount} className='btn btn-primary'>Increment by multiple</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Counter