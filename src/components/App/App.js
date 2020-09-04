import React from 'react';
import './App.scss';
import TheHeader from '../TheHeader/TheHeader';
import Home from '../Home/Home';
import TheFooter from '../TheFooter/TheFooter';

function App() {
  return (
    <div className="app">
      <TheHeader />
      <div className="wrapper">
        <Home />
      </div>
      <TheFooter />
    </div>
  );
}

export default App;
