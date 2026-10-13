import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ModelBox.css'

function ModelBox(props) {
    const[modal,setModal] = useState(false)
  return ( <>
    <div>ModelBox</div>
    <p>Dragon Ball: Origins[b] known as Dragon Ball DS in Japan, is a video game for the Nintendo DS based on the Dragon Ball franchise created by Akira Toriyama. The game was developed by Game Republic and published by Atari and Namco Bandai under the Bandai label. It was released on September 18, 2008 in Japan, November 4, 2008 in North America, December 5, 2008 in Europe, and December 11, 2008 in Korea.[1] The game was released in Australia on December 4, 2008,[2] but was later recalled as its PG rating did not reflect the "racy" content found in the game and was subsequently given a higher rating.[3]

The game uses the stylus and touchscreen to take control of series' main protagonist Goku. The game follows events from the original manga and anime series, which sees Goku's journey with Bulma to find the seven mythical Dragon Balls, and later, his training under the martial arts teacher Master Roshi to compete in the 21st Tenkaichi Budokai.

A sequel, Dragon Ball: Origins 2, was released in 2010.</p>
  
{modal ? <div className='modal'>
    <span>Are you sure want to Continue</span>
   <div> <button onClick={()=>setModal(false)}>Yes</button> </div>
</div> : " "}
    <button onClick={()=>setModal(true)}>Confirm</button>

  </>




  )
}



export default ModelBox

