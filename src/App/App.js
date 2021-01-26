import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
//import UserRegistrationView from '../components/AllPlayers/views/UserRegistrationView';
import UserLoginView from '../components/AllPlayers/views/UserLoginView';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          {/* <UserLoginView /> */}
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
