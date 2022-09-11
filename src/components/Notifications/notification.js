import React from 'react'
import './notification.css'
// import { Avatar } from "@material-ui/core";
// import propic from './../images/propic.png'
import Notificationitem from './notificationitem';

function Notification(){
    
  return (
    <div className='bg'>
        <div className='notification'>
            Notifications
            <div style={{flex: 1, height: '1px', backgroundColor:"rgba(112, 112, 112, 1)",marginBottom:'30px'}} />
            Recent
            <Notificationitem/>
    </div>
    </div>
    

  )
}

export default Notification
