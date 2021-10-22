export const getLocationData = async(queryLocation) => {
  let url = `https://lohi-api.herokuapp.com/api/v1/location?location=${queryLocation}`
  console.log(url)
  const res = await fetch(url)
  return res 
}

export const getRecipeData = async() => {
  let url = 'https://lohi-api.herokuapp.com/api/v1/recipes';
  const res = await fetch(url)
  return res
}