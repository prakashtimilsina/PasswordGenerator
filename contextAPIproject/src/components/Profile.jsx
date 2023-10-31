import React,{useContext} from 'react';
import UserContext from '../context/UserContext';


const Profile = () => {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login</div>

  return <div>Welcome <b>{user.username}</b> </div>
}

export default Profile;