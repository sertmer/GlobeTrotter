import { getAllTrips, createNewTrip, createNewDestination, deleteTrip } from './apiCalls';

describe('apiCalls', () => {

  describe('getAllTrips', () => {
    let mockResponse, mockOptions, mockQuery;

    beforeEach(() => {
      mockQuery = {
          "query": "{allTrips(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\") {id name origin originAbbrev originLat originLong tripdestinationSet {destination {location abbrev lat long} startDate endDate activitySet {name date category}}}}"
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
                destination: {location: 'Barcelona, Spain', abbrev: 'BCN'},
                startDate: '2020-03-16',
                endDate: "2020-03-19",
                activitySet: [
                  {name: "Basílica de la Sagrada Familia", date: "2020-03-17", category: "Landmarks & Historical Buildings"},
                  {name: "Castell de Montjuïc", date: "2022-03-18", category: "Castles"}
                ]
              }
            ]
          }
      ];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockQuery)
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
        "query": `mutation {createDestination(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\", tripId: ${tripId}, location: \"${location}\", startDate: \"${startDate}\", endDate: \"${endDate}\") {destination {id location abbrev lat long tripdestinationSet {startDate endDate trip {name origin}}}}}`
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
});
