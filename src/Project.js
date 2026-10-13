import React from "react";
import { useState } from "react";
/*import './Project.css' */

const Project =()=>{

  //  const[value,setValue] = useState(false)
    
  //  const[input,setInput] = useState("")

  //  const[email,setEmail] = useState("")

  //  const[age,setAge] = useState(0)
  const[form,setForm] = useState({
     name:"",
     id:0,
     dept: "",
     mark:"",
     age:0

  })

    const[data,setData] = useState({
        name : "sai",
        id : 23,
        dept : "chennai",
        mark:76,
        age:25

    });
    


 //   function INC()
  //  {  // increase value
       // setValue(value + 10)

       // toggle
      // if(value == 0)
      //  setValue(1)
   // else 
     //   setValue(0)
   // ternary
    //setValue(value == 0 ? 1 : 0)
  //  setValue(!value)
   // console.log(value)
   // }
    /*function getData(e){
        setInput(e.target.value)
    }*/
  // function name(event){
  //  setInput(event.target.value)
 //  }
  //  function emailY(event){
  //      setEmail(event.target.value)
   // }
   /* function handlesubmit(event){
       event.preventDefault()
       alert(input)
       alert(email)
       alert(age)
    } */

 //  function old(event){
 //   setAge(event.target.value)
 //  }

   function change(event){
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
   }
  
   function submit(event){
    event.preventDefault()
    setForm(
    {
        ...form,
        name : data.name,
        age : data.age,
        id : data.id
    })

   }

    return(
        <>
       
         {form.name}  
         {form.age}
         {form.id}
 
      <form onSubmit={submit}>
      
       <input onChange={change} name={"name"} placeholder="Enter Your Name"></input> <br/>
       <input></input> <br/>
      <input onChange={change} name={"age"} placeholder="Enter Your Age"></input> <br/>
      <input onChange={change} name={"id"} placeholder="Enter Your ID"></input> <br/>
      <button type = "submit">Submit</button>
        
    </form>
        
        </>
    )
}
export default Project