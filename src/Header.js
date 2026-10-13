import React from "react";
import { useState } from "react";
function Header (){
   // const Cdate = new Date().toLocaleDateString();
   // console.log(Cdate)

   const[status,setStatus] = useState("")
    const Ctime = new Date().toLocaleTimeString();
    console.log(Ctime);


    if(Ctime >="14:00:00" && status != "grey"){
        console.log("system is offline")
        setStatus("grey")
    }
    else{
        console.log("ONLINE")
    }
    return(
        <>
        <div style={{width : "100%" , height : "100vh", backgroundColor : status}}>
         <button disabled = {status == "grey" ? true : false}>Test submitted</button>
        </div>
        <h1>HEADER REACT</h1>

        </>
    )
}
export default Header;