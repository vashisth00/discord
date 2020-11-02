import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    //BEM naming convention
    <div className="App">
       <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
