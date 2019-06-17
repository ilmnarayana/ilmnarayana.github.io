import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SimpleCounter from './components/SimpleCounter';
import Login from './components/Login';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <SimpleCounter/>
      <Login/>
      <Forms/>
      <Footer/>
    </div>
  );
}

export default App;
