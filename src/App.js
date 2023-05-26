import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import Feed from './components/Feed';
import { selectUser } from './features/counter/userSlice';
import Login from './components/Login';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header/>
    {!user ? <Login/> : (
    <div className="app_body">
      <Sidebar/>
      <Feed/>
      <Widget/>
      
    </div>
    )}
    </div>
    
  );
}

export default App;
