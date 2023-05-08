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
    <div style={{width: '100%', height: '800px'}}>
    {/* <CometChatUI key={user.id}/> */}
     {/* <CometChatConversationListWithMessages  />  */}
     <div style={{width: '800px', height:'800px' }}>
        <CometChatUserListWithMessages chatWithUser={id}/>
       </div>
    </div>
  )
}

export default ChatMain