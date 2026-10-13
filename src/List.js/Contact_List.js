import React from 'react'

function Contact_List({data}) {
  return (
    
    <div>
     {
      data.map((i)=>{
        <div key={i.id}>
          <h2>Contact Me</h2>
          <p>Email:{i.email}</p>
          <p>Contact:{i.contact}</p>
          <p>
            GitHub:
            <a href='{i.social?.github}'>
              {i.social?.github}

            </a>
          </p>
          <p>
            LinkedIn:
            <a href='{i.social?.linkedin}'>
              {i.social?.linkedin}

            </a>
          </p>
          </div>
      })
     }     
    </div>
  )
}

export default Contact_List
