import React, { useContext, useEffect } from 'react'
import { UserContext } from "./context/user"
import { useParams } from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom";
import {CometChatMessages} from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/'

const ChatMain = () => {

const { user, loggedIn } = useContext(UserContext)
const { id } = useParams()

useEffect(() => {

}, [])

  return (
    <>
     <NavLink to="/matches">
            <button className="accept-button">Back</button>
     </NavLink>
     <br/>
   
  <article className="chatbox">

       <div style={{height:'800px' }}>
        <CometChatMessages chatWithUser={id}/>
       </div>

   </article>
    
    </>
  )
}

export default ChatMain