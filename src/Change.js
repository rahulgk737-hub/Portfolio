import React from "react";
import { useState } from "react";
const Change =()=>{


    const[up,setUp] = useState(null)

    const space =[
        {id :1, title : "Pradeep", Paragraph: "Anaconda"},
        {id:2,title :"Parthi", Paragraph: "Thavalah"}
    ]
    
    function handle(id){
        console.log(id)
        setUp(up === id ? null : id)
    }
    
    return(
        <>
        {
            space.map((res) =>{
                return(
                    <div>
                        <p className="head" onClick={()=>{handle(res.id)}}>{res.title}</p>
                        {up === res.id ? <p>{res.Paragraph}</p> : ""}
                    </div>
                )
            })
        }
        </>
    )
}
export default Change