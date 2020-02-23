import "isomorphic-fetch";

export const getAllTrips = () => {
  const query = {
      "query": "{allTrips(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\") {id name origin originAbbrev originLat originLong tripdestinationSet {destination {location abbrev lat long} startDate endDate activitySet {name date category}}}}"
    };

  const options = {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch('https://globe-trotter-api.herokuapp.com/graphql/', options)
    .then(response => {
      if (!response.ok) {
        throw Error('error retrieving trips data')
      }
      return response.json()
    })
};

export const createNewTrip = (name, origin) => {
  //Backticks amend the need for backslashes
  const mutation = {
    "query": `mutation {createTrip(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", name: \"${name}\", origin: \"${origin}\") {trip {id name origin originAbbrev originLat originLong}}}`
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(mutation),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch('https://globe-trotter-api.herokuapp.com/graphql/', options)
    .then(response => {
      if (!response.ok) {
        throw Error('error posting new trip')
      }
      return response.json()
    })
};

export const createNewDestination = (tripId, location, startDate, endDate) => {
  const mutation =   {
    "query": `mutation {createDestination(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripId: \"${tripId}\", location: \"${location}\", startDate: \"${startDate}\", endDate: \"${endDate}\") {trip {id name origin originAbbrev originLat originLong tripdestinationSet {destination {location abbrev lat long} startDate endDate activitySet {name date category}}}}}`
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(mutation),
    headers: {
      'Content-Type': 'application/json',
    }
  }

  return fetch('https://globe-trotter-api.herokuapp.com/graphql/', options)
    .then(response => {
      if (!response.ok) {
        throw Error('error posting new destination data')
      }
      return response.json()
    })
};

// export const addActivity = () => {
// const mutation =   {
//   "query": `mutation {createDestination(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripId: \"${tripId}\", location: \"${location}\", startDate: \"${startDate}\", endDate: \"${endDate}\") {trip {id name origin originAbbrev originLat originLong tripdestinationSet {destination {location abbrev lat long} startDate endDate activitySet {name date category}}}}}`
// };
//
//
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(mutation),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   }
//
//   return fetch('https://globe-trotter-api.herokuapp.com/graphql/', options)
//     .then(response => {
//       if (!response.ok) {
//         throw Error('error posting new trip')
//       }
//       return response.json()
//     })
// };

// export const deleteTrip = () => {
  // const mutation =   {
  //   "query": `mutation {createDestination(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripId: \"${tripId}\", location: \"${location}\", startDate: \"${startDate}\", endDate: \"${endDate}\") {trip {id name origin originAbbrev originLat originLong tripdestinationSet {destination {location abbrev lat long} startDate endDate activitySet {name date category}}}}}`
  // };
//
//
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(mutation),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   }
//
//   return fetch('https://globe-trotter-api.herokuapp.com/graphql/', options)
//     .then(response => {
//       if (!response.ok) {
//         throw Error('error posting new trip')
//       }
//       return response.json()
//     })
// };
