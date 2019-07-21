import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Friends';
import './App.css';

class App extends Component {
  // add constructor and CDM
  constructor() {
    super();
  this.state = {
    friends: []
  };
}

componentDidMount() { 
  //fetch initial data needed to set the state
  axios
    .get("http://localhost:5000/friends")
    .then(response => {this.setState({friends: response.data})})
    .catch(err => console.log("Error", err))
}

render() {
  return (
    <div className="App">
      <Friends friends={this.state.friends}/>
    </div>
  );
}
}

export default App;
