import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import HomePage from './components/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/' component={HomePage} />
        <Route path='/about' component={About} />
      </div>
    </ BrowserRouter>
  );
}

export default App;
