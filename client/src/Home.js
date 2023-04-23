import React, { useContext } from 'react'
import { UserContext } from './context/user'
// import shindyLogo from './imgs/shindyLogo.png'

const Home = () => {

  const { user, loggedIn } = useContext(UserContext)

  if (loggedIn) {
    return ( 
      <div>
        <h3>
        <img className="logo-small" alt="logo" />
        
          <br/>
          <h1><strong>Welcome to <br /> {user.username}</strong></h1>
          <br />
    
          <p>▲             ▲</p>
          <hr />

        </h3>
      </div>
    )
  } else { 
    return (
    <div>
      <img className="logo" alt="logo" />
      <br /><br /><br /><br />
      <main class="container">      
    
        <article className="card2">
          <h2>A</h2>
          <h4>
            a
          </h4>
        </article>

        <article className="card">
          <h2>B</h2>
          <h4>  
            b
          </h4>
        </article>

        <article className="card2">
          <h2>C</h2>
          <h4>
            c
          </h4>
        </article>
        
      </main>
    </div>
    )
  }
}

export default Home