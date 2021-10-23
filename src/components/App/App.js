import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AllCategories from '../AllCategories/AllCategories';
import { getLocationData } from '../../utils/apiCalls';
import './App.css';
import RecipesByCategory from '../RecipesByCategory/RecipesByCategory';
// import allRecipesSampleData from '../../utils/allRecipesSampleData';
import { getRecipeData } from '../../utils/apiCalls';
import RecipeDetails from '../RecipeDetails/RecipeDetails';


const App = () => {

  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [elevation, setElevation] = useState('')
  const [humidity, setHumidity] = useState('')
  const [recipes, setRecipes] = useState([])
  /*const [error, setError] = useState('')*/

   
  const updateLocation = userInput => {
    setQuery(userInput);
  }

  useEffect(() => { 
    const invokeLocationData = async() => {
      try {
        const res = await getLocationData(query)
        const returnedLocationInfo = await res.json()
        settingInfo(returnedLocationInfo)
        // setLocation(returnedLocationInfo.data.attributes.city)
        // setElevation(returnedLocationInfo.data.attributes.elevation)
        // setHumidity(returnedLocationInfo.data.attributes.humidity)
        console.log(location)
        // console.log("before save to local storage*******", localStorage)
        // // saveToLocalStorage('currentAreaInfo', { locationInfo: location, elevationInfo: elevation, humidityInfo: humidity })    
        // console.log("After S to LS -----------",localStorage)
        console.log(location, elevation)
      } catch (err) {
        console.log('Error: ', err)
      }
    }
    
    // getFromLocalStorage('currentAreaInfo')  
    invokeLocationData()
  },[query])
  
  const settingInfo =(allinfo) => {
    console.log(allinfo)
    setLocation(allinfo.data.attributes.city)
    setElevation(allinfo.data.attributes.elevation)
    setHumidity(allinfo.data.attributes.humidity)
    saveToLocalStorage('currentAreaInfo', { locationInfo: location, elevationInfo: elevation, humidityInfo: humidity })  
    console.log('location++++++++', location)
    
  }

  // useEffect(() => {
  //   if(location) {
  //     saveToLocalStorage('currentAreaInfo', { locationInfo: location, elevationInfo: elevation, humidityInfo: humidity })  
  //   }
  //   if(localStorage) {
  //     getFromLocalStorage('currentAreaInfo')  
  //   }
  // },[location, elevation])
  

  const invokeRecipeData = async() => {
    try {
      const res = await getRecipeData()
      const returnedRecipeData = await res.json()
      setRecipes(returnedRecipeData)
    } catch (err) {
      console.log('Error:', err)
    }
  }

  useEffect(() => {
    invokeRecipeData()
  }, [query])
  
  const saveToLocalStorage = (item, value) => {
    localStorage.setItem(item, JSON.stringify(value))
  }

  const getFromLocalStorage = (item) => {
    let storedLocation = JSON.parse(localStorage.getItem(item))
    // console.log(storedLocation.locationInfo)
    setLocation(storedLocation.locationInfo)
    setElevation(storedLocation.elevationInfo)
    setHumidity(storedLocation.humidityInfo)
  }
  
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => (
            <section className='landing-page'>
              <Landing updateLocation={updateLocation}/>
            </section>
        )}/>
        <Route exact path='/all-categories' render={() => 
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
        <Route exact path='/:category' render={({ match }) => {
            const categoryType = match.params.category;
            return (
            <section className='recipies-by-category'>
                <Header
                location={location}
                elevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
              /> 
              <RecipesByCategory 
                categoryType={ categoryType } 
                allRecipesData={ recipes }/>
              <Footer/> 
            </section>
            )}
        }/>
        <Route exact path='/:category/:id' render={({ match })=> {
          const categoryType = match.params.category;
          const recipeId = match.params.id;   
          const currentRecipe = recipes.data.find(recipe => recipe.id === recipeId);
          return (
            <section className='recipie-details'>
             <Header
                location={location}
                elevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
              /> 
             <RecipeDetails 
                categoryType={categoryType}
                recipeId={recipeId}
                currentRecipe={currentRecipe}/>
             <Footer/>
            </section>
          )
        }}/>
      </Switch>
    </div>
  );
}

export default App;
