import React from "react";
import { useState } from "react";

function Camlin(){
 
    const[theme,setTheme] = useState(false)

    const[birth,setBirth] = useState(0)

    const[count,setCount] = useState(0)

    const[shp,setShop] = useState(null)

    

    function change(){
        setTheme(!theme)
    }
    
    
    function number(){
        setCount(count+5000) }


        const[value,setValue] = useState(
            {
                date : "",
                month : " ",
                year : 0
            }
        )
      

     function age(e){
        e.prevent.default()
        setBirth({
            ...birth,
            [e.target.name] : e.target.value
        
     }) }
     
    return(
        <>
          <h1 style={{backgroundColor :"grey", margin : 0}}>Age Calculator</h1>
           <div style={{backgroundColor:theme ?" white" : " #1F2937", height : "100vh"}}>
            <span style={{cursor : "pointer"}} onClick={change}>{theme ? "☀️ Light" : "🌕Dark"}</span> <br/>

          <input type="text" placeholder="Enter your Name"/> <br/>
          
        <label> <input type="date" id="dob" name="dob"></input> </label>  <br/>
        <h3>Your Age is : {age} </h3>
          <button>CLLICK</button> <br/>
          
          <h2>count : {count}</h2>
          <button style={{backgroundColor :"blue" , borderRadius : "2px solid",cursor :"pointer"}} onClick={number}>Increase</button>


          </div>
        </>
    )
}

export default Camlin