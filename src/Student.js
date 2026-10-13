import React from "react";
import { useState } from "react";
import './Student.css'

const Student = ()=>{
    //Theme
    const[theme,setTheme] = useState(false)
    function Toggle(){
        console.log("toggled")
        setTheme(!theme)
    }
    //Data
    const[data,setData] = useState(
    {
     Name : "Rahul",
     Age : 19,
     Course : "CSE"
    })

    function change(event){
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    //Form
    const[form,setForm] = useState({
        Name : " ",
        Age : " ",
        Course : " "
    })

    function submit(e){
        e.preventDefault()
        setForm({
            ...form,
            Name : data.Name,
            Age  : data.Age,
            Course : data.Course
        })
    }

    return(
        <>
        
       <h1 style={{backgroundColor:"grey", margin : 0, border : "2px solid"}}>Student Management</h1>

       {form.Name}
       {form.Age}
       {form.Course}
       <form onSubmit={submit}>
        <input onChange={change} name={"Name"} placeholder ="Enter your Name"></input> <br/>
        <input onChange={change} name={"Age"} placeholder = "Enter your Age"></input>  <br/>
        <input onChange={change} name={"Course"} placeholder ="Enter your Course"></input> <br/>
        <button type="submit">Submit</button>
       
       </form>


       <div style={{backgroundColor : theme ? "#1F2937" : "white",height: "100vh"}}>
        <span style={{cursor : "pointer", marginLeft : "90%"}} onClick={Toggle}>{theme ? " 🌞 Light" : "🌙 Dark "}</span>
       </div>
       
       
       
        </>
    )
}

export default Student