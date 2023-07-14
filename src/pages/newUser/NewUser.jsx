import './newUser.css';
import React, { useState } from 'react'


export default function NewUser() {
    const [user, setUser] = useState({
        username: "",
        fullName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        gender: "",
        active: "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        const{username, fullName, email, password, phone, address, gender, active} = user;
        if (username && fullName && email && password && phone && address){
            const res = await fetch(
                "https://dashpro-db4ac-default-rtdb.firebaseio.com/newUser.json"
                , {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username,
                        fullName,
                        email,
                        password,
                        phone,
                        address,
                    })
                }
            )
            if(res){
                setUser({
                    username: "",
                    fullName: "",
                    email: "",
                    password: "",
                    phone: "",
                    address: "",
                    gender: "",
                    active: "",
                });
                alert("Data Stored Successfully !")
            }
        }else{
            alert("Please fill all the Data !")
        }
    };

    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm' method='POST'>
                <div className='newUserItem'>
                    <lable>Username</lable>
                    <input type="text" name="username" value={user.username} onChange={getUserData} required placeholder='john' />
                </div>
                <div className='newUserItem'>
                    <lable>Full Name</lable>
                    <input type="text" name="fullName" value={user.fullName} onChange={getUserData} required placeholder='john Smith' />
                </div>
                <div className='newUserItem'>
                    <lable>Email</lable>
                    <input type="email" name="email" value={user.email} onChange={getUserData} required placeholder='john@gmail.com' />
                </div>
                <div className='newUserItem'>
                    <lable>Password</lable>
                    <input type="password" name="password" value={user.password} onChange={getUserData} required placeholder='password' />
                </div>
                <div className='newUserItem'>
                    <lable>Phone</lable>
                    <input type="text" name="phone" value={user.phone} onChange={getUserData} required placeholder='+1 123 456 7890' />
                </div>
                <div className='newUserItem'>
                    <lable>Address</lable>
                    <input type="text" name="address" value={user.address} onChange={getUserData} required placeholder='New York | USA' />
                </div>
                <div className='newUserItem'>
                    <lable>Gender</lable>
                    <div className='newUserGender' name="gender" value={user.address} onChange={getUserData}>
                        <input type="radio" name='gender'  id='male' value='male' />
                        <label for='male'>Male</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label for='female'>Female</label>
                        <input type="radio" name='gender' id='other' value='other' />
                        <label for='other'>Other</label>
                    </div>
                </div>
                <div className='newUserItem'>
                    <lable>Active</lable>
                    <select className='newUserSelect' name='actice' value={user.address} onChange={getUserData} id='actice'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton' onClick={postData}>Create</button>
            </form>
        </div>
    )
}