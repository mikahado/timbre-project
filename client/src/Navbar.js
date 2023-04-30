import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {user, logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    .then(() => { 
      logout() 
      navigate('/')
    })
  }

  if (loggedIn) {
   
      return (
        <>

        
          <nav class="container-fluid">

            <ul>

            <NavLink to='/my-profile'>
            <li><h3><strong>{user.username}</strong></h3></li>
              </NavLink>
                
            </ul>
            
            <ul>

              <li>
              <NavLink to=''>
                <button className="button2">Browse</button>
              </NavLink>
              </li>

              <li>
              <NavLink to=''>
                <button className="button2">Matches</button>
              </NavLink>
              </li>

              
              <li>
                <button class="outline" onClick={logoutUser}>Logout</button>
              </li>  
            <br/><br/>
            </ul>
          </nav>


          <hr/>   
          

        </>
      )

  } else {

    return (
      <>
    
    <nav>
  <ul>
    <li></li>
  </ul>

        <NavLink to='/login'>
          Sign in ⪢ 
        </NavLink>
</nav>
     
      </>
    )
  }
}

export default Navbar