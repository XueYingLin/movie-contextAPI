import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
     <Nav />
      <MovieList />
    </div>
  );
} 

export default App;
