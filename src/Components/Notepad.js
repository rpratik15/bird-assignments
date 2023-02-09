import React,{useState} from 'react'


function Notepad() {
    const arr=[]
const [text,setText]=useState("")

const handleChange=(e)=>{

setText(e.target.value)

}

const handleAppend=()=>{
    arr.push(text)
// setText(arr[])
console.log(arr)
}

const handleUndo=()=>{
    
    setText(arr.pop())
   
}

  return (
    <div>
        <input type="text" value={text} onChange={handleChange} ></input>
        <button onClick={handleAppend}>Append</button>
        <button onClick={handleUndo}>Undo</button>
        <br/>
        <p>{text}</p>
    </div>
  )
}

export default Notepad