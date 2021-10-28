import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AllCategories from '../AllCategories/AllCategories';
import RecipesByCategory from '../RecipesByCategory/RecipesByCategory';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../Loading/Loading';
import { getLocationData } from '../../utils/apiCalls';
import { getRecipeData } from '../../utils/apiCalls';
import './App.css';


const App = () => {

  const [isLoading, setLoading] = useState(false)
  const [location, setLocation] = useState('')
  const [elevation, setElevation] = useState('')
  const [humidity, setHumidity] = useState('')
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState('')
  const [currentRecipe, setCurrentRecipt] = useState('') 
   
  const updateLocation = userInput => {
    invokeLocationData(userInput);
  }

  const invokeLocationData = async(place) => {
    setLoading(true)
    try {
      const res = await getLocationData(place)
      checkErrors(res)
      const returnedLocationInfo = await res.json()
      setLocationInfo(returnedLocationInfo)      
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  const setLocationInfo = (returnedData) => {
      localStorage.setItem('location', JSON.stringify(returnedData.data.attributes.city))
      localStorage.setItem('elevation', JSON.stringify(returnedData.data.attributes.elevation))
      localStorage.setItem('humidity', JSON.stringify(returnedData.data.attributes.humidity))
      setLocation(returnedData.data.attributes.city)
      setElevation(returnedData.data.attributes.elevation)
      setHumidity(returnedData.data.attributes.humidity) 
      setLoading(false)
  }
  
  useEffect(() => {
    const invokeRecipeData = async() => {
      try {
        const res = await getRecipeData(elevation)
        checkErrors(res)
        const returnedRecipeData = await res.json()
        setRecipes(returnedRecipeData)
        resetCurrentRecipe(returnedRecipeData)
        setLoading(false)
      } catch (err) {
        console.log(`Error: ${err}`)
      }
    }  
      invokeRecipeData()  

  }, [elevation]) // eslint-disable-line react-hooks/exhaustive-deps

  const resetCurrentRecipe = (returnedRecipes) => {
    if (currentRecipe !== {}) {
      const foundRecipe =  returnedRecipes.data.find(recipe => recipe.id === currentRecipe.id) 
      setCurrentRecipt(foundRecipe)
    }
  } 

  useEffect(() => { 
    const retrieveLocationLocalStorage = () => {
    const storedLocation = JSON.parse(localStorage.getItem('location'))
    invokeLocationData(storedLocation)
    }
    const retrieveRecipeStorage = () => {
      const storedRecipe = JSON.parse(localStorage.getItem('chosenRecipe'))
      setCurrentRecipt(storedRecipe)
    }

    if(localStorage.location) {
      retrieveLocationLocalStorage()  
    }
    if(localStorage.chosenRecipe) {
      retrieveRecipeStorage()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const checkErrors = (res) => {
    if (!res.ok) {
      setError(res.status)
    }
  }

  const clearError = () => {
    setError('')
  }

  const findSelectedRecipe = (id) => {
    const foundRecipe =  recipes.data.find(recipe => recipe.id === id)  
    setCurrentRecipt(foundRecipe)
  }
  
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => (
            <section className='landing-page'>
            {error && 
              <ErrorPage 
              errorCode={error}
              clearError={clearError}
              />}
            {!error && <Landing updateLocation={updateLocation}/>}
            </section>
        )}/>
        <Route exact path='/all-categories' render={() => 
            <section className='categories-page'>
              <Header
                location={location}
                locationElevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
                clearError={clearError}
              />
              {isLoading && !error && <Loading />}
              {error && 
                <ErrorPage 
                errorCode={ error }
                clearError={clearError}
                />}
              {(!error && !isLoading) && <AllCategories/>}
              <Footer/>
            </section>          
        }/>
        <Route exact path='/:category' render={({ match }) => {
            const categoryType = match.params.category;
            return (
            <section className='recipies-by-category'>
                <Header
                location={location}
                locationElevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
                clearError={clearError}
              /> 
              {(isLoading && recipes.length === 0 && !error) && <Loading />}
              {error && 
                <ErrorPage 
                errorCode={error}
                clearError={clearError}/>}
              {(!isLoading && !error && recipes.length !== 0) && 
                <RecipesByCategory 
                categoryType={categoryType} 
                allRecipesData={recipes}
                currentElevation={elevation}
                findSelectedRecipe={findSelectedRecipe}
                />}
              <Footer/> 
            </section>
            )}
        }/>
        <Route exact path='/:category/:elevation/:id' render={({ match })=> {
          const categoryType = match.params.category;
          const recipeId = match.params.id; 
          return (
            <section className='recipie-details'>
             <Header
                location={location}
                locationElevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
                clearError={clearError}
              /> 
             {(isLoading && !elevation && !error) && <Loading />}
             {error && 
              <ErrorPage 
              errorCode={error}
              clearError={clearError}
              />} 
             {(!isLoading && !error && currentRecipe) && 
             <RecipeDetails 
                categoryType={categoryType}
                recipeId={recipeId}
                currentRecipe={currentRecipe}
                />
                 }
              {!currentRecipe && <h2 className='currentRecipe-error'>Something went wrong. Please navigate back to your above category or <Link to='/all-categories'>All Categories</Link></h2>}   
             <Footer/>
            </section>
          )
        }}/>
      </Switch>
    </div>
  );
}

export default App;


