import React from 'react'
import './notificationitem.css'
import propic from './../../assets/images/profile_img.png'
// import { Avatar } from "@material-ui/core";

export default function Notificationitem() {
    const notifications =[
        {
            imgurl:{propic},
            username:"EpicEby",
            notificationText:'Lorem ipsm lorem ipsm lorem ipsm Lorem ipsm lorem ipsm '

        },
        {
            imgurl:{propic},
            username:"EpicEby",
            notificationText:'Lorem ipsm lorem ipsm lorem ipsm Lorem ipsm lorem ipsm '

        },
        {
            imgurl:{propic},
            username:"EpicEby",
            notificationText:'Lorem ipsm lorem ipsm lorem ipsm Lorem ipsm lorem ipsm '

        },
        {
            imgurl:{propic},
            username:"EpicEby",
            notificationText:'Lorem ipsm lorem ipsm lorem ipsm Lorem ipsm lorem ipsm '

        },
        
    ];
  return notifications.map((notification)=>{
    return(
        <div className='notificationItem card background'>
            {/* <h6 className=''>Recent</h6> */}


            <div className='notification_item_header'>
            
            <div className='notification_text'>
            <div className='username'> {notification.username}</div>
            <div className='content'>{notification.notificationText}</div>
            </div>
            
            
            </div>
            
            
            

        </div>
    )
  }


  )
}
