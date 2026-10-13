import React, { useState } from "react";

function ErrorHandling ({data}){
    console.log(data)
  const[value,setValue] = useState(
    {
        Name : "",
        Email : "",
        Number : ""
    }
  )
const[error,setError] = useState(
    {
        NameError : "",
        EmailError : "",
        NumberError : ""
    }
)


  function handle(event){
    setValue( {
        ...value,
        [event.target.name] : event.target.value
         
        
    }
    )
  }
  function submit(event){
    event.preventDefault();
   
    if(value.Name ==""){
       // console.log("field is empty")
       setError({
        ...error,
        NameError : "Field is Required",
        EmailError : "Field is Required",
        NumberError : "Field is Required"
        
       })
    }
    else if (value.Name.length < 3){
       // alert("Name should be more than 3 letters")
       setError({
        ...error,
        NameError : "not",
        EmailError : "not",
        NumberError : "required"
        
       })
    }

  }



    return(
        <div>
         <form onSubmit={submit}>  
        <input type="Name" placeholder="Enter your Name" name="Name" Name = "Name" onChange={handle}></input> <br/>
        <span style={{color : "red", fontSize : "1 px" , fontFamily : "cursive"}}>{error.NameError}</span> <br/>
        <input type="Email" placeholder="Enter your Email" name="Email" Name ="Email" onChange={handle}></input> <br/>
        <span style={{color : "red", fontSize : "1 px" , fontFamily : "cursive"}}>{error.EmailError}</span> <br/>
        <input type="Number" placeholder="Enter your Number" name="Number" Name ="Number" onChange={handle}></input> <br/>
        <span style={{color : "red", fontSize : "1 px" , fontFamily : "cursive"}}>{error.NumberError}</span> <br/>
        <button type="submit">Submit</button>
        
        </form>
        </div>
    )
}
export default ErrorHandling