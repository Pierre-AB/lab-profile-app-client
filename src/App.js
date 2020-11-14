
import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <h1>IronProfile</h1>
      <article>Bla bla bla blou blou blou</article>
      <Link to='/signup'>Sign Up</Link>
      <div><Link to='/login'>Log In</Link></div>
    </div>
  );
}

export default App;
