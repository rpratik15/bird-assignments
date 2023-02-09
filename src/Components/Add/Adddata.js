import React, { useState } from 'react'



function Adddata() {
    const [data,setData]=useState("")


  return (
    <div>
        <input type="text" value={data} onChange={(e)=>e.target.value} placeholder="Enter the name"></input>
        <button>Add</button>
    </div>
  )
}

export default Adddata