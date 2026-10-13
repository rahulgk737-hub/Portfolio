import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
const GetData = () =>{

    const[data,setData] = useState([])
  useEffect( ()=>{
    axios.get('https://dummyjson.com/c/376c-6ef5-4385-af1b')
    .then((res) => setData(res.data))
  },[])

    return(
        <>
        <table>
            <thead>
                <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Id</td>
        </tr>
            </thead>
        </table>
        <div>
            {
                data.map((i) =>{
                    return(
                        <>
                        <tbody>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.id}</td>
                        </tbody>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export default GetData
