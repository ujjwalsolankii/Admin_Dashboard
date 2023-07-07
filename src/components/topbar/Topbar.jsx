import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings, AutoGraph, Margin } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { BorderAll } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="link">
          <div className="topleft">
            <AutoGraph style={{ fontSize: '1.8rem', color: 'hsl(210, 31%, 39%)' , paddingTop: '0.5rem' }} />
            <span className="logo">DASHPRO</span>
          </div>
        </Link>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBag">2</span>
          </div>
          <img src="https://media.istockphoto.com/id/615712262/vector/multitasking-millennial-concept.jpg?s=612x612&w=0&k=20&c=VymzhbsDqKclTastZLPBHthFmgMzOe1RekTVWIoiu7Q=" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
