import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';

import FreeGameLink from './components/FreeGameLink/FreeGameLink';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <FreeGameLink />
    </div>
  );
}

export default App;
