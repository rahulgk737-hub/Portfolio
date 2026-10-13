import React from "react";
import { useState } from "react";

const Dashboard =() =>{
    const[theme,setTheme] =useState(false)
    const[done,setDone] = useState(0)
    
    
    function tap(){
        setTheme(!theme)
    }
    function add(){
        console.log("button click")
        setDone(done+1);
        }
    
    return(
        <>
        <h1 style={{backgroundColor : "grey",border : "2px soild black",borderRadius : "12px",margin :0}}>Task Hub</h1>
       <div style={{backgroundColor : theme ? "white" : "Gold",height : "100vh"}}>
        <span style={{cursor : "pointer"}} onClick={tap}>{theme ? " ☀️": "🌙 "}</span>
        <h2>Welcome Buddy 👋</h2>
        <h3>You have {done} tasks !</h3>
        
        <button onClick={add}>Add Task</button>
       </div>
        </>
    )
}

export default Dashboard;