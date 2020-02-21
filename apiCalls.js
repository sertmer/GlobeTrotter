import "isomorphic-fetch";

export const getAllTrips = () => {
  const query = {
      "query": "{allTrips(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\") {id name origin originAbbrev originLat originLong tripdestinationSet {destination {location abbrev} startDate endDate activitySet {name date category}}}}"
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

//postNewTrip will involve a -mutation- rather than a query
export const postNewTrip = () => {
  //argument needs to precisely formatted so that (maybe) it can be interpolated within the mutation string
  const mutation =   {
    "mutation": "{ allTrips(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\") {id name origin originAbbrev originLat originLong startDate endDate user {id name email} } }"
    };
    //Mutation will include edits within the same parens? as the APIKEY

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
        throw Error('error posting new trip')
      }
      return response.json()
    })
}


// Notes / Developments
//QUERIES & MUTATIONS
//Delete is a mutation
//mutation{
//   deleteTrip(id:_)
// }
//Activities mutations for adding a mutation
// Yelp API interactions will be RESTFUL, will include info for rating, a url for the image, etc
// tripDestinations: [
//   {
//     startDate,
//     endDate,
//     destination: {
//       id,
//       location,
//       lat,
//       long,
//     },
//     activities: [
//       {
//         id,
//         name,
//         category,
//         date
//       }
//     ]
//   }
// ]


// https://blog.apollographql.com/4-simple-ways-to-call-a-graphql-api-a6807bcdb355
  // require('isomorphic-fetch');
  //
  // fetch('https://1jzxrj179.lp.gql.zone/graphql', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ query: '{ posts { title } }' }),
  // })
  //   .then(res => res.json())
  //   .then(res => console.log(res.data));
