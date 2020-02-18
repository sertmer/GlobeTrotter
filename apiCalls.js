export const getAllTrips = () => {
  const body = {};
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'api_key': 'b9aead4b955bccb5c57ef830580f3de5',
      //Possible that the key name may be in camelCase
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
