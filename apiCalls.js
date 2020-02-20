export const getAllTrips = () => {
  const body = {
    id: '1',
    name: ' Spring Break',
    origin: 'Denver, CO, USA',
    originAbbrev: 'DEN',
    originLat: '39.7392',
    originLong: '104.9903',
    startData: '2020-03-16',
    endDate: '2020-03-23',
    user: {
      id: '1',
      name: 'John',
      email: 'John@gmail.com'
    },
    destination: [
      {

      }
    ]
  };
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'api_key': 'b9aead4b955bccb5c57ef830580f3de5',
    }
  }

  return fetch('', options)
    .then(response => {
      if (!response.ok) {
        throw Error('error retrieving trips data')
      }
      return response.json()
    })
}

export const postNewTrip = (newTrip) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newTrip),
    headers: {
      'Content-Type': 'application/json',
      'api_key': 'b9aead4b955bccb5c57ef830580f3de5',
      //Possible that the key name may be in camelCase
    }
  }

  return fetch('', options)
    .then(response => {
      if (!response.ok) {
        throw Error('error posting new trip')
      }
      return response.json()
    })
}
