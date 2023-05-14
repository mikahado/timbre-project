import React, { useContext, useEffect } from 'react'
import { UserContext } from "./context/user"
import { useParams } from 'react-router-dom'
import { CometChat } from '@cometchat-pro/chat'
import { CometChatUI } from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/'
import { CometChatConversationListWithMessages } from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/'
import {CometChatUserListWithMessages} from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/'


const ChatMain = () => {

const { user, loggedIn } = useContext(UserContext)
const { id } = useParams()

useEffect(() => {

}, [])

  return (
    <>
  <article className="chatbox">

       <div style={{height:'800px' }}>
        <CometChatUserListWithMessages chatWithUser={id}/>
       </div>

   </article>
    
    </>
  )
}

export default ChatMain