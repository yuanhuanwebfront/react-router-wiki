import React from 'react';
import {BrowserRouter  as Router, Link, Route} from 'react-router-dom';
import HeadNav from './layout/headNav';
import MainView from './layout/mainView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router> 
        <HeadNav></HeadNav>
        <MainView></MainView>
      </Router>
    </div>
  );
}

export default App;
