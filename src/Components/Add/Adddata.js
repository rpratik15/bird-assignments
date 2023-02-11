import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbirds} from "../Redux/Action"



function Adddata() {
  
  const dispatch=useDispatch()
    const [data,setData]=useState("")

    const onClickHandle=()=>{
      dispatch(addbirds(data))
    }

  return (
    <div>
      
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)} placeholder="Enter the name"></input>
        <button onClick={onClickHandle}>Add</button>
    </div>
  )
}

export default Adddata