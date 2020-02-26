import { getAllTrips, createNewTrip, createNewDestination, deleteTrip, getActivities, addActivity, deleteActivity } from './apiCalls';

describe('apiCalls', () => {

  describe('getAllTrips', () => {
    let mockResponse, mockOptions, mockQuery;

    beforeEach(() => {
      mockQuery = {
        "query": "{allTrips(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\") {id name origin originAbbrev originLat originLong tripdestinationSet {destination {location abbrev lat long} id startDate endDate activitySet {id name date address category rating image lat long tripDestination { trip { name } destination { location abbrev } } } } } }"
      };
      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockQuery),
        headers: {
          'Content-Type': 'application/json',
        }
      };

      mockResponse = [
        {
          id: '1',
          name: ' Spring Break',
          origin: 'Denver, CO, USA',
          originAbbrev: 'DEN',
          originLat: '39.7392',
          originLong: '104.9903',
          tripdestinationSet: [
            {
              destination: { location: 'Barcelona, Spain', abbrev: 'BCN' },
              startDate: '2020-03-16',
              endDate: "2020-03-19",
              activitySet: [
                { name: "Basílica de la Sagrada Familia", date: "2020-03-17", category: "Landmarks & Historical Buildings" },
                { name: "Castell de Montjuïc", date: "2022-03-18", category: "Castles" }
              ]
            }
          ]
        }
      ];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct URL & options', () => {
      getAllTrips();

      expect(window.fetch).toHaveBeenCalledWith('https://globe-trotter-api.herokuapp.com/graphql/', mockOptions);
    });

    it('should return an object containing all trip objects', () => {
      expect(getAllTrips()).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false });
      });

      expect(getAllTrips()).rejects.toEqual(Error('error retrieving trips data'));
    });
  });

  describe('createNewTrip', () => {
    let mockResponse, mockOptions, mockQuery, name, origin;

    beforeEach(() => {
      name = "Summer Break";
      origin = "Fort Collins, USA";
      mockQuery = {
        "query": `mutation {createTrip(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", name: \"${name}\", origin: \"${origin}\") {trip {id name origin originAbbrev originLat originLong}}}`
      };

      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockQuery),
        headers: {
          'Content-Type': 'application/json',
        }
      };

      mockResponse =
      {
        id: '2',
        name: ' Summer Break',
        origin: 'Fort Collins, CO, USA',
        originAbbrev: 'DEN',
        originLat: '1',
        originLong: '2',
      };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct URL & options', () => {
      createNewTrip(name, origin);

      expect(window.fetch).toHaveBeenCalledWith('https://globe-trotter-api.herokuapp.com/graphql/', mockOptions);
    });

    it('should return a trip object', () => {
      expect(createNewTrip(name, origin)).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false });
      });

      expect(createNewTrip(name, origin)).rejects.toEqual(Error('error posting new trip'));
    });
  });

  describe('createNewDestination', () => {
    let mockResponse, mockOptions, mockQuery, tripId, location, startDate, endDate;

    beforeEach(() => {
      tripId = 2;
      location = "Fort Collins, USA";
      startDate = "2020-03-01";
      endDate = "2020-03-10";
      mockQuery = {
        "query": `mutation {createDestination(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripId: ${tripId}, location: \"${location}\", startDate: \"${startDate}\", endDate: \"${endDate}\") {destination {id location abbrev lat long tripdestinationSet {id startDate endDate trip {name origin}}}}}`
      };

      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockQuery),
        headers: {
          'Content-Type': 'application/json',
        }
      };

      mockResponse =
      {
        data: {
          createDestination: {
            destination: {
              id: 11,
              location: "Fort Collins, CO, USA",
              abbrev: "FNL",
              lat: "40.5852602",
              long: "-105.084423",
              tripdestinationSet: [
                {
                  startDate: "2020-03-01",
                  endDate: "2020-03-10",
                  trip: {
                    name: "Spring Break",
                    origin: "Denver, CO, USA"
                  }
                }
              ]
            }
          }
        }
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct URL & options', () => {
      createNewDestination(tripId, location, startDate, endDate);

      expect(window.fetch).toHaveBeenCalledWith('https://globe-trotter-api.herokuapp.com/graphql/', mockOptions);
    });

    it('should return a new destination object', () => {
      expect(createNewDestination(tripId, location, startDate, endDate)).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false });
      });

      expect(createNewDestination(tripId, location, startDate, endDate)).rejects.toEqual(Error('error posting new destination data'));
    });
  });

  describe('deleteTrip', () => {
    let mockResponse, mockOptions, mockQuery, tripId;

    beforeEach(() => {
      tripId = 3;
      mockQuery = {
        "query": `mutation {deleteTrip(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripId: ${tripId}) {id name origin}}`
      };

      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockQuery),
        headers: {
          'Content-Type': 'application/json',
        }
      };

      mockResponse =
      {
        data: {
          deleteTrip: {
            id: 3,
            name: 'Example',
            origin: 'Denver, USA'
          }
        }
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct URL & options', () => {
      deleteTrip(tripId);

      expect(window.fetch).toHaveBeenCalledWith('https://globe-trotter-api.herokuapp.com/graphql/', mockOptions);
    });

    it('should return an object with the deleted id', () => {
      expect(deleteTrip(tripId)).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false });
      });

      expect(deleteTrip(tripId)).rejects.toEqual(Error('error deleting trip'));
    });
  });

  describe('getActivities', () => {
    let mockResponse, lat, long;

    beforeEach(() => {
      lat = 41.89024968281812;
      long = 12.4922484062616;

      mockResponse =
      {
        activities: [
          {
            name: "Pantheon - Basilica di Santa Maria ad Martyres",
            address: "Piazza della Rotonda, 00186 Rome, Italy",
            category: "Churches",
            rating: 4.5,
            image: "https://s3-media3.fl.yelpcdn.com/bphoto/wDcbtQyxePfBYfHHXYiwGw/o.jpg",
            lat: 41.898614,
            long: 12.476869
          },
          {
            name: "Colosseo",
            address: "Piazza del Colosseo 1, 00184 Rome, Italy",
            category: "Local Flavor",
            rating: 4.5,
            image: "https://s3-media1.fl.yelpcdn.com/bphoto/QcMxqdZmJTMpeeuT_NfHAg/o.jpg",
            lat: 41.8902496828181,
            long: 12.4922484062616
          },
        ]
      };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct URL & options', () => {
      getActivities(lat, long);

      expect(window.fetch).toHaveBeenCalledWith(`https://globe-trotter-api.herokuapp.com/api/v1/yelp_activities/?lat=${lat}&long=${long}`);
    });

    it('should return an object of activities data', () => {
      expect(getActivities(lat, long)).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({ ok: false });
      });

      expect(getActivities(lat, long)).rejects.toEqual(Error('error retrieving activities data'));
    });
  });

  describe('AddActivity', () => {
    let mockResponse, mockOptions, mockQuery, mockId, mockName, mockRating, mockImage, mockLat, mockLong, mockDate, mockAddress, mockCategory;

    beforeEach(() => {
      mockId = 15
      mockName = 'City of Fort Collins'
      mockRating = 4.5
      mockImage = 'https://s3-media4.fl.yelpcdn.com/bphoto/52c4dM4H9C-d_sP_isIXIg/o.jpg'
      mockLat = 40.5571098327637
      mockLong = -105.040428161621
      mockDate = '2020-03-02'
      mockAddress = "2221 S Timberline Rd, Fort Collins, CO 8052"
      mockCategory = 'Landmarks & Historical Building'

      mockQuery = {
        "data": {
          "createActivity": {
            "activity": {
              "name": "City of Fort Collins",
              "date": "2020-03-02",
              "address": "2221 S Timberline Rd, Fort Collins, CO 8052",
              "category": "Landmarks & Historical Building",
              "rating": 4.5,
              "image": "https://s3-media4.fl.yelpcdn.com/bphoto/52c4dM4H9C-d_sP_isIXIg/o.jpg",
              "lat": "40.5571098327637",
              "long": "-105.040428161621",
              "tripDestination": {
                "trip": {
                  "name": "Test"
                },
                "destination": {
                  "location": "Fort Collins, CO, USA",
                  "abbrev": "FNL"
                }
              }
            }
          }
        }
      }


      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockQuery),
        headers: {
          'Content-Type': 'application/json',
        }
      };

    mockResponse = {
      "data": {
        "createActivity": {
          "activity": {
            "name": "City of Fort Collins",
            "date": "2020-03-02",
            "address": "2221 S Timberline Rd, Fort Collins, CO 8052",
            "category": "Landmarks & Historical Building",
            "rating": 4.5,
            "image": "https://s3-media4.fl.yelpcdn.com/bphoto/52c4dM4H9C-d_sP_isIXIg/o.jpg",
            "lat": "40.5571098327637",
            "long": "-105.040428161621",
            "tripDestination": {
              "trip": {
                "name": "Test"
              },
              "destination": {
                "location": "Fort Collins, CO, USA",
                "abbrev": "FNL"
              }
            }
          }
        }
      }
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return an object of activities data', () => {
    expect(addActivity(mockId, mockName, mockDate, mockAddress, mockCategory, mockRating, mockImage, mockLat, mockLong )).resolves.toEqual(mockResponse);
  });

  it('should return an error message if Promise is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({ ok: false });
    });

    expect(addActivity(mockId, mockName, mockDate, mockAddress, mockCategory, mockRating, mockImage, mockLat, mockLong )).rejects.toEqual(Error('error saving new activity'));
  });
})
});


describe('deleteActivity', () => {
  let mockResponse, mockOptions, mockQuery, activityId;

  beforeEach(() => {
    activityId = 3;
    mockQuery = {
      "query": `mutation {deleteActivity(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", activityId: ${activityId}) {id}}`
    };

    mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockQuery),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    mockResponse =
      {
        data: {
          deleteActivity: {
            id: 3
          }
        }
      }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct URL & options', () => {
    deleteActivity(activityId);

    expect(window.fetch).toHaveBeenCalledWith('https://globe-trotter-api.herokuapp.com/graphql/', mockOptions);
  });

  it('should return an object with the deleted id', () => {
    expect(deleteActivity(activityId)).resolves.toEqual(mockResponse);
  });

  it('should return an error message if Promise is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: false });
    });

    expect(deleteActivity(activityId)).rejects.toEqual(Error('error deleting activity'));
  });


});
