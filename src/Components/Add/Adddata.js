import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBirds} from "../Redux/Action"



function Adddata() {
  
  const dispatch=useDispatch()
    const [data,setData]=useState("")

    const onClickHandle=()=>{
      dispatch(addBirds(data))
    }

  return (
    <div>
      
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)} placeholder="Enter the name"></input>
        <button onClick={onClickHandle}>Add</button>
    </div>
  )
}

export default Adddata