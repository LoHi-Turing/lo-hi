import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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
import Error from '../Error/Error';
import Loading from '../Loading/Loading';


const App = () => {

  const [isLoading, setLoading] = useState(false)
  // const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [elevation, setElevation] = useState('')
  const [humidity, setHumidity] = useState('')
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState('')
  const [currentRecipe, setCurrentRecipt] = useState('')
  

   
  const updateLocation = userInput => {
    // setQuery(userInput);    
    invokeLocationData(userInput);

  }

  const invokeLocationData = async(place) => {
    setLoading(true)
    try {
      const res = await getLocationData(place)
      checkErrors(res)
      const returnedLocationInfo = await res.json()
      setLocationInfo(returnedLocationInfo)
      // setLocation(returnedLocationInfo.data.attributes.city)
      // setElevation(returnedLocationInfo.data.attributes.elevation)
      // setHumidity(returnedLocationInfo.data.attributes.humidity)       
    } catch (err) {
      // setError(err.status)
      console.log('Error: ', err)
    }
    // invokeRecipeData()
  }

  const setLocationInfo = (returnedData) => {
      localStorage.setItem('location', JSON.stringify(returnedData.data.attributes.city))
      localStorage.setItem('elevation', JSON.stringify(returnedData.data.attributes.elevation))
      localStorage.setItem('humidity', JSON.stringify(returnedData.data.attributes.humidity))
      setLocation(returnedData.data.attributes.city)
      setElevation(returnedData.data.attributes.elevation)
      setHumidity(returnedData.data.attributes.humidity) 
      // setLoading(false)
  }

  // useEffect(() => { 
  //   const invokeLocationData = async() => {
  //     try {
  //       const res = await getLocationData(query)
  //       checkErrors(res)
  //       const returnedLocationInfo = await res.json()
  //       setLocation(returnedLocationInfo.data.attributes.city)
  //       setElevation(returnedLocationInfo.data.attributes.elevation)
  //       setHumidity(returnedLocationInfo.data.attributes.humidity)  
  //     } catch (err) {
  //       // setError(err.status)
  //       console.log('Error: ', err)
  //     }
  //   }   
  //   invokeLocationData()
  //   console.log('im 0 for the Location Data')    // invokeRecipeData() 
  //   // console.log('im 5')
  //   // console.log(location,elevation, recipes)
  // },[query, location])
  
useEffect(() => {
  const invokeRecipeData = async() => {
    console.log('inside the recipe data function fetch with location >', location)
    try {
      const res = await getRecipeData(elevation)
      checkErrors(res)
      const returnedRecipeData = await res.json()
      setRecipes(returnedRecipeData)
      resetCurrentRecipe(returnedRecipeData)
      setLoading(false)
    } catch (err) {
      // setError(err.status)
      console.log('Error:', err)
    }
    // console.log('im ivoking the recipe data 1')
    // console.log(location, recipes)
  }  
    invokeRecipeData()  

}, [elevation])

const resetCurrentRecipe = (returnedRecipes) => {
  console.log('Trying to reset that current thing with', returnedRecipes)
  console.log('Trying to reset this', currentRecipe)
  if (currentRecipe !== {}) {
    const foundRecipe =  returnedRecipes.data.find(recipe => recipe.id === currentRecipe.id) 
    console.log(foundRecipe, '<<< found recipe') 
    setCurrentRecipt(foundRecipe)
  }
}

 

  useEffect(() => {  /*The one I'm messing with */
    const retrieveLocationLocalStorage = () => {
    // console.log('im retriving to locationLocalStorage 2')
    const storedLocation = JSON.parse(localStorage.getItem('location'))
    invokeLocationData(storedLocation)
  //   try {      
  //   const res = await getLocationData(storedLocation)
  //   checkErrors(res)
  //   const returnedLocationInfo = await res.json()
  //   setLocation(returnedLocationInfo.data.attributes.city)
  //   setQuery(returnedLocationInfo.data.attributes.city)
  //   setElevation(returnedLocationInfo.data.attributes.elevation)
  //   setHumidity(returnedLocationInfo.data.attributes.humidity) 
  // } catch (err) {
  //   // setError('it is broken')
  //   console.log('Error', err)
  // }
}
  const retrieveRecipeStorage = () => {
    const storedRecipe = JSON.parse(localStorage.getItem('chosenRecipe'))
    console.log(storedRecipe)
    setCurrentRecipt(storedRecipe)
  }

  if(localStorage.location) {
    // setLoading(true)
    retrieveLocationLocalStorage()
  // console.log('im retriving to locationLocalStorage 2')
  // console.log(location, recipes)
  }

  if(localStorage.chosenRecipe) {
    retrieveRecipeStorage()
  }
}, []) // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {  
  //     const retrieveLocationLocalStorage = async() => {
  //     const storedLocation = JSON.parse(localStorage.getItem('location'))
  //     try {      
  //     const res = await getLocationData(storedLocation)
  //     checkErrors(res)
  //     const returnedLocationInfo = await res.json()
  //     setLocation(returnedLocationInfo.data.attributes.city)
  //     setQuery(returnedLocationInfo.data.attributes.city)
  //     setElevation(returnedLocationInfo.data.attributes.elevation)
  //     setHumidity(returnedLocationInfo.data.attributes.humidity) 
  //   } catch (err) {
  //     // setError('it is broken')
  //     console.log('Error', err)
  //   }
  // }

  //   if(localStorage) {
  //     retrieveLocationLocalStorage()
  //   console.log('im retriving to locationLocalStorage 2')
  //   console.log(location, recipes)
  //   }
  // }, [])

  // useEffect(() => {
    // const storeLocation = () => {
    //   localStorage.setItem('location', JSON.stringify(location))
    //   localStorage.setItem('elevation', JSON.stringify(elevation))
    //   localStorage.setItem('humidity', JSON.stringify(humidity))
    // }
    // storeLocation()
    // console.log('im setting the Local storage store location1')
    // console.log(location, recipes)

    // invokeRecipeData()
    // console.log('im suppoused to in=voke the recipe data  3')
    // console.log(location, recipes)

  // },[location, elevation, humidity])

  const checkErrors = (res) => {
    if (!res.ok) {
      setError(res.status)
    }
  }
  
  const identifyCurrentRecipe = (theId) => {

// ****** this one is the one that break before we change the is loading ********
// ****** the problem we have here is that when we refresh the page, the page is going 
// ****** to it's original state of Dever on the Location
// ****** but without the elevation and the humidity-  
// ****** not api call so it doesn't have the recipes wich are undefined at the moment
    // if (recipes.length !== 0) {
    //   const foundRecipe =  recipes.data.find(recipe => recipe.id === theId)
      
    //   if(localStorage.chosenRecipe && JSON.parse(localStorage.getItem('chosenRecipe')).id === theId  
    //      && JSON.parse(localStorage.getItem('chosenRecipe')).type === foundRecipe.type) {
    //       return JSON.parse(localStorage.getItem('chosenRecipe'))   
    //   } else {
    //     const foundRecipe =  recipes.data.find(recipe => recipe.id === theId)
    //     localStorage.setItem('chosenRecipe', JSON.stringify(foundRecipe))
    //     return foundRecipe;
    //   }

    // } else {
    //   console.log("I'm inside the current recipe function 4", recipes)
    // }


// ******* this is what we built trying to get the recipe but it did not work ****
    const getElevation = () => {       
          if(elevation >= 5000) {
            return 'recipe_high'
            } else {
            return 'recipe'
            }     
    }

// ^^^^^^^^^^this is the one that was not changing the recipe at all and is still going back to the initial state 
// ^^^^^^^^^^Denver is we refresh the page 
    if(localStorage.chosenRecipe ) {
      return JSON.parse(localStorage.getItem('chosenRecipe'))      
    } else {
      const foundRecipe =  recipes.data.find(recipe => recipe.id === theId)  
      localStorage.setItem('chosenRecipe', JSON.stringify(foundRecipe))
      return foundRecipe;
    }
  }

  const findSelectedRecipe = (id) => {
    const foundRecipe =  recipes.data.find(recipe => recipe.id === id)  
    setCurrentRecipt(foundRecipe)
  }
  // && (JSON.parse(localStorage.getItem('chosenRecipe')).id === theId) 
    // && (JSON.parse(localStorage.getItem('chosenRecipe')).type === getElevation())
 
  
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => (
            <section className='landing-page'>
            {error && <Error errorCode={ error }/>}

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
              />
              {isLoading && <Loading />}
              {(!isLoading && error) && <Error errorCode={ error }/>}
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
              /> 
              {isLoading && recipes.length === 0 && <Loading />}
              {(!isLoading && error) && <Error errorCode={ error}/>}
              {(!isLoading && !error && recipes.length !== 0) && 
                <RecipesByCategory 
                categoryType={ categoryType } 
                allRecipesData={ recipes }
                currentElevation={elevation}
                findSelectedRecipe={findSelectedRecipe}
                />}
              <Footer/> 
            </section>
            )}
        }/>
        <Route exact path='/:category/:elevation/:id' render={({ match })=> {
          const categoryType = match.params.category;
          // const currentElevation = match.params.elevation;         
          const recipeId = match.params.id; 
          console.log(currentRecipe)
          // const currentRecipe = identifyCurrentRecipe(recipeId, currentElevation)
          return (
            <section className='recipie-details'>
             <Header
                location={location}
                locationElevation={elevation}
                humidity={humidity}
                updateLocation={updateLocation}
              /> 
             {(isLoading && !elevation) && <Loading />}
             {(!isLoading && error) && <Error errorCode={ error }/>} 
             {(!isLoading && !error && currentRecipe) && 
             <RecipeDetails 
                categoryType={categoryType}
                recipeId={recipeId}
                currentRecipe={currentRecipe}
                // currentElevation={currentElevation}
                />
                 }
              {!currentRecipe && <h2>Something went wrong. Please navigate back to <Link to='/all-categories'>All Categories</Link></h2>}   
             <Footer/>
            </section>
          )
        }}/>
      </Switch>
    </div>
  );
}

export default App;


//When you click enter - the location updates, recipes update, then you need to update the current recipe. How do I do that? IF the currentRecipe is truthy, then you can use that id