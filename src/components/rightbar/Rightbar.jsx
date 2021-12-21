import React from 'react'
import './rightbar.css';

const Rightbar = () => {
    return (
        <div className = "rightbar">
            <div className = "rightbarWrapper">
                <div className = "NFTContainer">
                    <img className = "NFTpic" src = "/assets/nft.jfif" alt = ""/>
                    <span className = "NFTText">NFT corner</span>
                </div>
                <span className = "nodtext">NFT of the day  </span>
                <img className className = "NFToftheDay" src = "/assets/NOD.jfif "/>
                <h4 className = "rightbarTitle">Suggestions for you</h4>
                <ul className = "rightbarFriendList">
                    <li className = "rightbarFriend">
                        <div className = "rightImgContainer">
                            <img className = "rightbarProfile" src = "/assets/person/3.jfif" alt = ""/>
                            <span className = "rightbarFollow"></span>
                        </div>
                        <span className = "rightbarUsername">Thakela Chintu</span>
                        <i className = "followRightbar">Follow +</i>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Rightbar;
