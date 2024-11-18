
import './styles/App.css';
import { useState } from 'react';
import { makeRequest } from './api/api';
import './styles/reset.css';

import SideMenu from './components/SideMenu/SideMenu';
function App() {
  return (
    <div className="App">
      <SideMenu />
      <h1>oi</h1>
    </div>
  );
}

export default App;
