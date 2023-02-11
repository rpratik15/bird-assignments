import React from 'react'
import "./style.css"
import {  useDispatch, useSelector } from 'react-redux'
import { addLikes} from "../Redux/Action"
function Listdata() {
 
  const dispatch=useDispatch()
  const List=useSelector((store)=>store.birdReducer)
  const handleLikes=(birdName,likes)=>{
    dispatch(addLikes(birdName,likes))
  }
 console.log(List)
  return (
    <div>
      <ul className="ul-list">
        {
          List?.map((bird,index)=>{
            return (
              <>
              <li key={index}>{bird.bird}</li>
              <span>Likes : {bird.likes}</span>
              <button onClick={()=>{handleLikes(bird.bird,bird.likes)}} >+</button>
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