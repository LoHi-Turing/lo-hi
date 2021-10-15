import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import './App.css';

const App = () => {
  
  
  
  
  
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"/>
        <Route exact path="/all-categories"/>
        <Route exact path="/recipies-by-category"/>
        <Route exact path="/:id"/>
      </Switch>

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
