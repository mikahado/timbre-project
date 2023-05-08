import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CometChat } from "@cometchat-pro/chat";

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
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
