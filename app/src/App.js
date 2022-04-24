//import Header from './assets/components/Header';
// import Cardlist from './assets/components/Cardlist';
// import Footer from './assets/components/Footer';
import React, { Component } from 'react';
import './App.css';
import AppHeader from "./assets/components/AppHeader.jsx";


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
      </div>
    );
  }
}

export default App;
