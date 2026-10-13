import React, { useEffect } from 'react'
import { useState} from 'react'

const Counter = () => {
    const[count,setCount] = useState(0)


    const btn ={
                padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'

    }

// //without dependency
// useEffect(()=>{
//     document.title ="Counter"
// },[])


// //with dependecy
// useEffect(()=>{
//     document.title =count
// },[count])


// // empty dependency
// useEffect(()=>{
//     setCount(51)
// })
 
function timeOut(){
    setTimeout(
        ()=>{
            console.log("test")
        },3000
    )
}

function Interval(){
    setInterval(
        ()=>{
            console.log("assemble")
        },500
    )
}

  return (
    <div>
      <h1>Count : {count}</h1>
      <button style ={btn}onClick={()=>{setCount(count+1)}}>INCREMENT</button>
      <button style ={btn}onClick={()=>{setCount(count-1)}}>DECREMENT</button>
      <button style ={btn}onClick={()=>{setCount(0)}}>RESET</button>

       <button style ={btn}onClick={timeOut}>Time out</button>
      <button style ={btn}onClick={Interval}>Interval</button>

    </div>
    

  )
}

export default Counter
