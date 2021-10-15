import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Landing from "/Landing/Landing";
import Header from "/Header/Header";
import Footer from "/Footer/Footer";
import './App.css';

const App = () => {
  
  
  
  
  
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => { 
            <section className='landing-page'>
              <Landing />
            </section>
          }
        }/>
        <Route exact path="/all-categories" render={ () => {
            <section className='categories-page'>
              <Header/>
              <Footer/>
            </section>
          }
        }/>
        <Route exact path="/recipies-by-category" render={() => {
            <section className='recipies-by-category'>
              <Header/>
              <Footer/>
            </section>
          }
        }/>
        <Route exact path="/:id" render={()=> {
            <section className='recipie-details'>
              <Header/>
              <Footer/>
            </section>
          }
        }/>
      </Switch>

      <header className="App-header">
        <p>
          Landing
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
