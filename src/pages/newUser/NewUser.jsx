import './newUser.css';

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <lable>Username</lable>
                    <input type="text" placeholder='john' />
                </div>
                <div className='newUserItem'>
                    <lable>Full Name</lable>
                    <input type="text" placeholder='john Smith' />
                </div>
                <div className='newUserItem'>
                    <lable>Email</lable>
                    <input type="email" placeholder='john@gmail.com' />
                </div>
                <div className='newUserItem'>
                    <lable>Password</lable>
                    <input type="password" placeholder='password' />
                </div>
                <div className='newUserItem'>
                    <lable>Phone</lable>
                    <input type="text" placeholder='+1 123 456 7890' />
                </div>
                <div className='newUserItem'>
                    <lable>Address</lable>
                    <input type="text" placeholder='New York | USA' />
                </div>
                <div className='newUserItem'>
                    <lable>Gender</lable>
                    <div className='newUserGender'>
                        <input type="radio" name='gender' id='male' value='male' />
                        <label for='male'>Male</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label for='female'>Female</label>
                        <input type="radio" name='gender' id='other' value='other' />
                        <label for='other'>Other</label>
                    </div>
                </div>
                <div className='newUserItem'>
                    <lable>Active</lable>
                    <select className='newUserSelect' name='actice' id='actice'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}