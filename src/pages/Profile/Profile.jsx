import React from 'react';

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import "./profile.css";

export const Profile = () => {
    
        return (
            <>
              <Topbar />
              <div className="profile">
                <Sidebar />
                <div className="profileRight">
                  <div className="profileRightTop">
                    <div className="profileCover">
                      <img
                        className="profileCoverImg"
                        src="assets/post/3.jpg"
                        alt=""
                      />
                      <img
                        className="profileUserImg"
                        src="assets/person/1.JPG"
                        alt=""
                      />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Akash Singh</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                    </div>
                  </div>
                  <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile/>
                  </div>
                </div>
              </div>
            </>
          );
    
}
export default Profile;
