import React, { useContext } from 'react'
import { UserContext } from './context/user'
import {NavLink, useNavigate } from 'react-router-dom'
// import shindyLogo from './imgs/shindyLogo.png'

const Home = () => {

  const { user, login, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()
  

  if (loggedIn) {
    return ( 
      <div>
        <h3>
        
          <br/>
          <h1><strong> Home component</strong></h1>
          <br />

        </h3>
      </div>
    )
  } else { 
    return (
    <div>

        <main class="container">      
              
              <article className="card2">
                <h2>Timbre</h2>
                <h4>
                  <p>Match w musicians with you.</p>
                </h4>
              </article>
          

              <NavLink to='/signup'>
                <button className="button2">Join Timbre</button>
              </NavLink>

              <NavLink to='/login'>
                <button class="contrast outline">Sign in ⪢ </button>
              </NavLink>


         </main>

    </div>
    )
  }
}

export default Home