import React from 'react'
import "./friendslist.css";

const Friendslist = ({ user }) => {
    return (
        <li className ="sidebarFriend" >
                <img className = " sidebarFriendImg " src = {user.profilePicture} alt = " "/>
            <span clasName = "sidebarFriendName"> {user.username} </span>
        </li>
    )
}

export default Friendslist;