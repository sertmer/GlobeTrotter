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
    let mockResponse, mockOptions, mockQuery;

    beforeEach(() => {
      mockQuery = {
          "query": "{allTrips(userApiKey: \"b9aead4b955bccb5c57ef830580f3de5\",  name: \"${name}\", origin: \"${origin}\") {trip {id name origin originAbbrev originLat originLong}}}"
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
      createNewTrip("Summer Break", "Fort Collins, USA");

      expect(window.fetch).toHaveBeenCalledWith('https://globe-trotter-api.herokuapp.com/graphql/', mockOptions);
    });

    it('should return an array of trip objects', () => {
      expect(createNewTrip("Summer Break", "Fort Collins, USA")).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false });
      });

      expect(postNewTrip()).rejects.toEqual(Error('error posting new trip'));
    });
  });
});



// mockTrip = {
//   id: '2',
//   name: ' Summer Break',
//   origin: 'Fort Collins, CO, USA',
//   originAbbrev: 'DEN',
//   originLat: '1',
//   originLong: '2',
//   startData: '3',
//   endDate: '4',
//   user: {
//     id: '1',
//     name: 'John',
//     email: 'John@gmail.com'
//   },
//   tripdestinationSet: [
//     {
//       destination: {location: 'Barcelona, Spain', abbrev: 'BCN'},
//       startDate: '2020-03-16',
//       endDate: "2020-03-19",
//       activitySet: [
//         {name: "Basílica de la Sagrada Familia", date: "2020-03-17", category: "Landmarks & Historical Buildings"},
//         {name: "Castell de Montjuïc", date: "2022-03-18", category: "Castles"}
//       ]
//     }
//   ]
// };
//
// mockOptions = {
//   method: 'POST',
//   body: JSON.stringify(mockTrip),
//   headers: {
//     'Content-Type': 'application/json',
//   }
// };
//
// mockResponse = {
//   allTrips: [
//     {
//       id: '1',
//       name: ' Spring Break',
//       origin: 'Denver, CO, USA',
//       originAbbrev: 'DEN',
//       originLat: '39.7392',
//       originLong: '104.9903',
//       startData: '2020-03-16',
//       endDate: '2020-03-23',
//       user: {
//         id: '1',
//         name: 'John',
//         email: 'John@gmail.com'
//       },
//       destinations: [
//         {
//
//         }
//       ]
//     },
//     {
//       id: '2',
//       name: ' Summer Break',
//       origin: 'Fort Collins, CO, USA',
//       originAbbrev: 'DEN',
//       originLat: '1',
//       originLong: '2',
//       startData: '3',
//       endDate: '4',
//       user: {
//         id: '1',
//         name: 'John',
//         email: 'John@gmail.com'
//       }
//     }
//   ]
// };
