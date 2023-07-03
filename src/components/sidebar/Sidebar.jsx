import React from 'react'
import "./sidebar.css";
import {LineStyle,Timeline,TrendingUp , PermIdentity ,Storefront,AttachMoney
,Leaderboard,Markunread,DynamicFeed,ChatBubble,Work,ShowChart,Report} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Dashboard</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon' />
                        Sales
                    </li>
                 </ul>
            </div>
            
            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Quick Menu</h3>
                 <ul className="sidebarList">
                    <Link to="/users" className="link">
                       <li className="sidebarListItem ">
                            <PermIdentity className='sidebarIcon'/>
                            Users
                        </li>
                    </Link>
                    <Link to="/products" className="link"> 
                    <li className="sidebarListItem">
                        <Storefront className='sidebarIcon' />
                        Products
                    </li>
                    </Link>
                    <Link to="/users"> 
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon' />
                        Transactions
                    </li>
                    </Link>
                    <Link to="/users">
                    <li className="sidebarListItem">
                        <Leaderboard className='sidebarIcon' />
                        Reports
                    </li>
                    </Link>
                    
                 </ul>
            </div>

            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Notifications</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <Markunread className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon' />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubble className='sidebarIcon' />
                        Messages
                    </li>
                 </ul>
            </div>

            <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Staff</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Work className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <ShowChart className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcon' />
                        Reports
                    </li>
                 </ul>
            </div>
            
        </div>
    </div>
  )
}
