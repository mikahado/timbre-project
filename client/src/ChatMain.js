import React, { useContext, useEffect } from 'react'
import { UserContext } from "./context/user"
import { CometChat } from '@cometchat-pro/chat'
import { CometChatUI } from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/'
import { CometChatConversationListWithMessages } from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/'


const ChatMain = () => {

const { user, loggedIn } = useContext(UserContext)

useEffect(() => {

}, [])

  return (
    <div style={{width: '100%', height: '800px'}}>
    <CometChatUI />
     {/* <CometChatConversationListWithMessages  />  */}
    </div>
  )
}

export default ChatMain