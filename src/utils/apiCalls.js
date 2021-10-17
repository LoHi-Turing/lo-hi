export const getLocationData = (currentLocation) => {
  return fetch(`https://lohi-api.herokuapp.com/api/v1/location?location=${currentLocation}`)
    // .then(res => res.ok ? res : console.log(res))
    .then(res => console.log(res))
}