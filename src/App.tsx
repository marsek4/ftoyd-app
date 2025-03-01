import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MatchTable from './components/MatchTable';

function App() {
  return (
    <div className="App">
      {/*  Header */}
      <Header />
      {/* MatchTable */}
      <MatchTable />
    </div>
  );
}

export default App;
