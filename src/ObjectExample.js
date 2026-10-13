import React from "react";

const ObjectExample = () => {
 const student =[{
    id : 1,
    name : "steve",
    age : 21,
    department : "MECH",
    mark : 48  
 },{
    id : 2,
    name : "Tony",
    age : 20,
    department : "CSE",
    mark : 90  
 },
 {
    
    id : 3,
    name : "Mark",
    age : 20,
    department : "BIO",
    mark : 95  
 },
 {
    id : 4,
    name : "Clint",
    age : 25,
    department : "AERO",
    mark : 45  
 }      
]
const filter = student.filter(function(mark){
    return mark > 50
})
console.log(filter)
 /*const data = student.map((i)=>{
       return( <>
       {i.name}
       </>
       )
 }) */
/*console.log(data) */
const number =[15,18,20,23,19,16]
//console.log("pop",number.pop(),number)
//console.log("push",number.push(51),number)
//console.log("shift",number.shift(),number)
//console.log("unshift",number.unshift(1),number)

//slice method
const name =["Thor","Loki","Captain","Groot"]
//const result = name.slice(1,3)
//console.log("result",result,name)

const spliceresult = name.splice(1,2,"Iron Man")
console.log()




const numbers = [15,18,20,23,26];
const filtered = numbers.filter(
    function(x){
        return x > 15
    }
)
console.log(filtered)



const datamark = student.filter(
    function(i){
        return i.mark > 50
    }
)
console.log(datamark)



/*const datamark = student.filter((i)=> i.mark > 50)
console.log(datamark)*/



    return(
        <>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>Mark</th>
                <th>ID</th></tr>
            </thead>
            <tbody>
                
                <tr>
                  <td>Tony</td>
                  <td>20</td>
                  <td>CSE</td>
                  <td>90</td>
                  <td>2</td> 
                </tr>
                <tr>
                  <td>Steve</td>
                  <td>21</td>
                  <td>MECH</td>
                  <td>51</td>
                  <td>1</td>
                  
                </tr>
            </tbody>
        </table>
        {datamark.map((i)=> {
            return (
                <>

                {i.name}
                </>
        )
        }
        )}
        </>
    )
    
}
export default ObjectExample;