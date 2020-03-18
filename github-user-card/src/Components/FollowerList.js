import React from "react"
import "../Styles/FollowerList.css"

function FollowerList(props){


    return(

        <div className = "follower-list">
           
            <div className = "image-holder">
                 <img src = {props.avatar} alt="User Avatar" width = "130" height = "130" />
            </div>
           
            <div className = "text-block">
                <h2> {props.name}</h2>
                    <a 
                        href = {props.link} 
                        target = "_blank"
                        style={{ textDecoration: 'none' }}
                    >
                    Github
                    </a>   
            </div> 
        
        </div>

    )
}

export default FollowerList;