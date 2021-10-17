import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Landing from "../Landing/Landing";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllCategories from '../AllCategories/AllCategories';
// import { getLocationData } from "../../utils/apiCalls";
import './App.css';

const App = () => {

  const [currentLocation, setCurrentLocation] = useState('')
   
  const updateLocation = newLocation => {
    // getLocationData(newLocation)
      // .then(data => console.log(data))
    setCurrentLocation(newLocation)
  }

  const getLocationData = async() => {
    let url = 'https://lohi-api.herokuapp.com/api/v1/location?location=losangeles'
    try {
      const res = await fetch(url)
      const returnedLocationInfo = console.log(res, 'res')
      console.log(returnedLocationInfo.results)
    } catch (err) {
      console.log('Error: ', err)
    }
    return fetch(url)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {    
    getLocationData()    
  },[currentLocation])
  
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (
            <section className='landing-page'>
              <Landing updateLocation={updateLocation}/>
            </section>
        )}/>
        <Route exact path="/all-categories" render={() => 
            <section className='categories-page'>
              <Header/>
              <AllCategories />
              <Footer/>
            </section>
          
        }/>
        <Route exact path="/recipies-by-category" render={() => {
            <section className='recipies-by-category'>
              {/* <Header/>
              <Footer/> */}
            </section>
          }
        }/>
        <Route exact path="/:id" render={()=> {
            <section className='recipie-details'>
              {/* <Header/>
              <Footer/> */}
            </section>
          }
        }/>
      </Switch>
    </div>
  );
}

export default App;
