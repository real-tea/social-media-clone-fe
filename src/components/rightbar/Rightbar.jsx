import React from 'react';
import './rightbar.css';

const Rightbar = ({ profile }) => {
    
    const HomeRightbar= () =>{
        return(
        <>
        <div className = "NFTContainer">
                    <img className = "NFTpic" src = "/assets/nft.jpg" alt = ""/>
                    <span className = "NFTText">NFT corner</span>
                </div>
                <span className = "nodtext">NFT of the day  </span>
                <img className className = "NFToftheDay" src = "/assets/NOD.jpg "/>
                <h4 className = "rightbarTitle">Suggestions for you</h4>
                <ul className = "rightbarFriendList">
                    <li className = "rightbarFriend">   
                        <div className = "rightImgContainer">
                            <img className = "rightbarProfile" src = "/assets/person/3.jpg" alt = ""/>
                            <span className = "rightbarFollow"></span>
                        </div>
                        <span className = "rightbarUsername">Thakela Chintu</span>
                        <i className = "followRightbar">Follow +</i>
                    </li>
                    
                </ul>
                </>)
            
    }

    const ProfileRightbar = () =>{
        return(
            <>
            
        <h4 className="rightbarTitle">About </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Your Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
            </>
        )
    }
    return (

        <div className = "rightbar">
            <div className = "rightbarWrapper">
                {profile?<ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

export default Rightbar;
