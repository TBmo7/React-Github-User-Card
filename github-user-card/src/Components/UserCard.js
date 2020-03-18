import React from "react";
import FollowerList from "./FollowerList";
import "../Styles/UserCard.css"

function UserCard(props){
    console.log("Props in user card",props.userName)
    console.log("User data array", props.followerdata)

    return(
        <div className = "user-card">
           <div className = "user-holder">
                <div className = "image-container">
                   
                    <img src = {props.userAvatar} alt="User Avatar" width = "200" height = "200" />
                    
                </div>
                    
                <div className = "information-container">
                  
                    <div className = "info-block">
                        <h3><span style= {{color: "#FFC0C0"}}>Name: </span>{props.userName} </h3>
                        <h3><span style= {{color: "#FFC0C0"}}>Location: </span>{props.userLoc}</h3>
                        <h3><span style= {{color: "#FFC0C0"}}>Bio: </span>{props.userBio}</h3>
                        <h3><span style= {{color: "#FFC0C0"}}>Email: </span>{props.userEmail}</h3>
                        <h3><span style= {{color: "#FFC0C0"}}>Blog: </span>{props.userBlog}</h3>
                    </div>
                    
                </div>
            </div>
            
            <div className = "follower-container">
            
                <h3 className = "follower-h3">Followers</h3>
                {props.followerdata.map(item=>(
                <FollowerList
                key = {item.id}
                name = {item.login}
                avatar = {item.avatar_url}
                link = {item.html_url}
                />
                ))}
            
            </div>
       
        </div>
    )

}
export default UserCard;