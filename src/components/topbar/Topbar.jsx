import React from 'react'
import "./topbar.css"
import { NotificationsNone , Language , Settings } from '@mui/icons-material';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <div className="topleft">
            <span className="logo">lamaadmin</span>
          </div>
          <div className="topright">
            <div className="topbarIconContainer">
              <NotificationsNone/>
              <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language/>
              <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings/>
              <span className="topIconBag">2</span>
            </div>
            <img src="https://media.istockphoto.com/id/615712262/vector/multitasking-millennial-concept.jpg?s=612x612&w=0&k=20&c=VymzhbsDqKclTastZLPBHthFmgMzOe1RekTVWIoiu7Q=" alt="" className="topAvatar" />
          </div>
      </div>
    </div>
  )
}
