import React from 'react';
import Friendslist from "../Friendslist/Friendslist";
import { RssFeed,
        PlayCircleFilledOutlined,
        Explore,
        Bookmark,
        WorkOutline,
        Event,
        School  } from "@material-ui/icons";
import { Users } from '../../tempData';

import "./sidebar.css";



const Sidebar = () => {
    return (
        <div className = "sidebar">
             <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
        
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Bulu-Reels</span>
          </li>
          <li className="sidebarListItem">
            <Explore className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
             
          {Users.map((u) => (
            <Friendslist key={u.id} user={u} />
          ))}       
           
        </ul> 
      </div>
            
        </div>
    )
}

export default Sidebar;
