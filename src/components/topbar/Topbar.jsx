import React from 'react';
import { Search,Forum,NotificationsActive,People } from "@material-ui/icons";
import './topbar.css';

const Topbar = () => {
    return (
        <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Bulu</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <People />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Forum />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsActive />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
    )};


export default Topbar;
