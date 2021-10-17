export const getLocationData = async(queryLocation) => {
  let url = `https://lohi-api.herokuapp.com/api/v1/location?location=${queryLocation}`
  const res = await fetch(url)
  return res 
}