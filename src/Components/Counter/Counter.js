import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { changeName, decrement, increment } from '../../Redux/CounterSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector((state)=>state.counter.count)
    const name = useSelector((state)=>state.counter.name)
    const [namestate,setName] = useState("")
  return (
    <div className='counter'>
        <button onClick={()=>dispatch(increment())}>+</button>
        <span>{value}</span>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <br></br>
        <input type='text' value={name}/>
        <button onClick={()=>dispatch(changeName(namestate))}>change name</button>
        <input type='text' onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default Counter