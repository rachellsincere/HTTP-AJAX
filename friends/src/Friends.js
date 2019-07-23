import React, { Component } from 'react';


class Friends extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="friends-list">
        {this.props.friends.map((friend, index) => (
          <div className="friend-card" key={index}>
            <h2>{friend.name}</h2>
            <h3>{friend.age}</h3>
            <h3>{friend.email}</h3>
          </div>
        ))}
      </div>
    )
  }

    
}

export default Friends;
