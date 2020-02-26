import "isomorphic-fetch";

export const getActivities = (lat, long) => {
  const url = `https://globe-trotter-api.herokuapp.com/api/v1/yelp_activities/?lat=${lat}&long=${long}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error('error retrieving activities data')
      }
      return response.json()
    })
};

export const getAllTrips = () => {
  const query = {
      "query": "{allTrips(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\") {id name origin originAbbrev originLat originLong tripdestinationSet {destination {location abbrev lat long} id startDate endDate activitySet {name date category}}}}"
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
  const mutation = {
    "query": `mutation {createDestination(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripId: ${tripId}, location: \"${location}\", startDate: \"${startDate}\", endDate: \"${endDate}\") {destination {id location abbrev lat long tripdestinationSet {id startDate endDate trip {name origin}}}}}`
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

export const deleteTrip = (tripId) => {
  const mutation = {
    "query": `mutation {deleteTrip(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripId: ${tripId}) {id name origin}}`
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
        throw Error('error deleting trip')
      }
      return response.json()
    })
};

export const addActivity = (id, name, date, address, category, rating, image, lat, long) => {
  const mutation = {
    "query": `mutation {
      createActivity(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripDestinationId: ${id}, name: \"${name}\", date: \"${date}\", address: \"${address}\", category: \"${category}\", rating: ${rating}, image: \"${image}\", lat: ${lat}, long: ${long}) {
        activity {
          name
          date
          address
          category
          rating
          image
          lat
          long
          tripDestination {
            trip {
              name
            }
            destination {
              location
              abbrev
            }
          }
        }
      }
    }`
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
      console.log(response)
      if (!response.ok) {
        throw Error('error saving new activity')
      }
      return response.json()
    })
};
