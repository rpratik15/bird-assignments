import React from 'react'
import "./style.css"
import {  useSelector } from 'react-redux'

function Listdata() {
 
  const List=useSelector((store)=>store.birdReducer)
 console.log(List)
  return (
    <div>
      <ul className="ul-list">
        {
          List?.map((bird,index)=>{
            return (
              <>
              <li key={index}>{bird}</li>
              <span>Likes : 1</span>
              <button>+</button>
              </>
            )
          })
        }
        {/* <li>{birdname}</li>
        <span>Likes : {likes}</span>
        <button>+</button> */}
       
        </ul>
    </div>
  )
}

export default Listdata