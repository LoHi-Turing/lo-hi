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
        console.log(returnedLocationInfo, 'here')
        setLocation(returnedLocationInfo.data.attributes.city)
        setElevation(returnedLocationInfo.data.attributes.elevation)
        setHumidity(returnedLocationInfo.data.attributes.humidity)  
        console.log(location)
      } catch (err) {
        console.log('Error: ', err)
      }
    }   
    invokeLocationData()    
  },[query, location])
  

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
    const retrieveLocationLocalStorage = async() => {
      const storedLocation = JSON.parse(localStorage.getItem('location'))
      try {      
      const res = await getLocationData(storedLocation)
      const returnedLocationInfo = await res.json()
      setLocation(returnedLocationInfo.data.attributes.city)
      setElevation(returnedLocationInfo.data.attributes.elevation)
      setHumidity(returnedLocationInfo.data.attributes.humidity) 
    } catch (err) {
      console.log('Error', err)
    }
  }
    if(localStorage) {
      retrieveLocationLocalStorage()
    }
    invokeRecipeData()
  }, [])

  useEffect(() => {

    const storeLocation = () => {
      localStorage.setItem('location', JSON.stringify(location))
      localStorage.setItem('elevation', JSON.stringify(elevation))
      localStorage.setItem('humidity', JSON.stringify(humidity))
    }

    storeLocation()
  },[location, elevation, humidity])
  
 
  
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
