import React from 'react'
import "./user.css"
import { CalendarToday, PermIdentity, PhoneAndroid } from '@material-ui/icons'

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
           <h1 className="userTitle">Edit User</h1> 
           <button className="userAddbutton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://fashionsuggest.in/wp-content/uploads/2018/05/womens-formal-tops-for-office-banner-compressed.jpg" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutlin className='userShowIcon'/>
                        <span className="userShowInfoTitle">+91 987654321</span>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">New york | USA </span>
                    </div>
                    

                </div>
            </div>
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}
