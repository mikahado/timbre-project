import { CometChat } from '@cometchat-pro/chat'
import { CometChatUI } from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components'


const ChatMain = () => {

    // INITIALIZE COMET CHAT

const appID = process.env.REACT_APP_COMETCHAT_APP_ID
const region = process.env.REACT_APP_COMETCHAT_REGION
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();

CometChat.init(appID, appSetting).then(
  () => {
    console.log("Cometchat initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Cometchat initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

// CREATE USER

// const authKey = process.env.REACT_APP_COMETCHAT_KEY;
// const uid = "userd3";
// const name = "Kevinss";

// var user = new CometChat.User(uid)
// user.setName(name)

// CometChat.createUser(user, authKey).then(
//     user => {
//         console.log("user created", user);
//     },error => {
//         console.log("error", error);
//     }
// )

// LOGIN USER

const authKey = process.env.REACT_APP_COMETCHAT_KEY;
const uid = "userd3";

CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user })
  },
  error => {
    console.log("Login failed with exception:", { error })   
  }
)


  return (
    <div style={{width: '800px', height: '800px'}}>
      <CometChatUI />  
    </div>
  )
}

export default ChatMain