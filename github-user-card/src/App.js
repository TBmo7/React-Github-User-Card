import React from 'react';
import UserCard from "./Components/UserCard"

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      gitdata: [],
      followers:[]
    };
  }
  

componentDidMount(){
  fetch("https://api.github.com/users/TBmo7")
    .then(res => res.json())
    .then(data => {
      console.log("tm: App.js: Compdidmount: fetch: then2: data", data)
      this.setState({gitdata : data})
      console.log("state information",this.state.gitdata);
    })
    .catch(err => console.error(err));
    fetch("https://api.github.com/users/TBmo7/followers")
    .then(res => res.json())
    .then(data=>{
      console.log("tm: App.js: didmount: fetch2: then3: followers", data )
      this.setState({followers : data})
    })
    
       
    .catch(err => console.error(err));
    
    
}

  render(){
  return (
    <div className="App">
      <div className = "head-bar">
      <h1>Github user information</h1>
      </div>
      <UserCard 
      userName ={this.state.gitdata.name}
      userLoc = {this.state.gitdata.location}
      userBio = {this.state.gitdata.bio}
      userAvatar = {this.state.gitdata.avatar_url}
      userEmail = {this.state.gitdata.email}
      userBlog = {this.state.gitdata.blog}
      followerdata = {this.state.followers}
      />
      
    </div>
  );
  }
}

export default App;
