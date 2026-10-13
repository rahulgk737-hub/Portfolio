import React from 'react'

function Skills_List({data}) {
  return (
    <div>
      <h2>My Skills</h2>
      {data.map((i)=>{
        return(
          <div key={i.id}>
            {i.skills.map((skill,index)=>{
              return 
              <p key={{index}}>{skill}</p>
            })}
            </div>
        )
      })}
    </div>
  )
}

export default Skills_List
