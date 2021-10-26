export const getLocationData = async(queryLocation) => {
  let url = `https://lohi-api.herokuapp.com/api/v1/location?location=${queryLocation}`
  console.log(url)
  const res = await fetch(url)
  return res 
}

export const getRecipeData = async(elevation) => {
  // console.log(elevation)
  let url = `https://lohi-api.herokuapp.com/api/v1/recipes?elevation=${elevation}`;
  const res = await fetch(url)
  return res
}