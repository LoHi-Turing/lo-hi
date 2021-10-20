import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Landing from "../Landing/Landing";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllCategories from '../AllCategories/AllCategories';
import { getLocationData } from "../../utils/apiCalls";
import './App.css';

const App = () => {

  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [elevation, setElevation] = useState('')
  const [humidity, setHumidity] = useState('')
  const [error, setError] = useState('')
   
  const updateLocation = userInput => {
    setQuery(userInput);
  }

  const invokeLocationData = async() => {
    try {
      const res = await getLocationData(query)
      const returnedLocationInfo = await res.json()
      setLocation(returnedLocationInfo.data.attributes.city)
      setElevation(returnedLocationInfo.data.attributes.elevation)
      setHumidity(returnedLocationInfo.data.attributes.humidity)

    } catch (err) {
      console.log('Error: ', err)
    }
  }

  useEffect(() => {    
    invokeLocationData()    
  },[query])
  
  
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
              <Header
                location={location}
                elevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
              />
              <AllCategories/>
              <Footer/>
            </section>
          
        }/>
        <Route exact path="/:category" render={({ match }) => {
            const categoryType = match.params.category
            return (
            <section className='recipies-by-category'>
                <Header
                location={location}
                elevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
              /> 
              <Footer/> 
            </section>
            )}
        }/>
        <Route exact path="/:id" render={()=> {
            <section className='recipie-details'>
                {/* <Header
                location={location}
                elevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
              /> */}
              {/* <Footer/> */} 
            </section>
          }
        }/>
      </Switch>
    </div>
  );
}

export default App;
