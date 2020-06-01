import React from 'react';
import './App.css';
import MessageList from './components/MessageList';
import AddMessage from './components/AddMessage';

function App() {
  return (
    <div className="App">
      <AddMessage />
      <MessageList />
    </div>
  );
}

export default App;
