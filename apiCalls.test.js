import { getAllTrips, postNewTrip } from './apiCalls';

//mockresponses may need to be polished in case BE format is misrepresented

describe('apiCalls', () => {

  describe('getTrips', () => {
    let mockResponse, mockOptions, mockTrip;

    beforeEach(() => {
      mockTrip = {
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

      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockTrip),
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'b9aead4b955bccb5c57ef830580f3de5',
        }
      };

      mockResponse = {
        allTrips: [
          {
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
      getAllTrips(mockTrip);

      expect(window.fetch).toHaveBeenCalledWith('', mockOptions);
    });

    it('should return an object containing all trip objects', () => {
      expect(getAllTrips(mockTrip)).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false });
      });

      expect(getAllTrips(mockTrip)).rejects.toEqual(Error('error retrieving trips data'));
    });
  });

  describe('postNewTrip', () => {
    let mockResponse, mockOptions, mockTrip;

    beforeEach(() => {

      mockTrip = {
        id: '2',
        name: ' Summer Break',
        origin: 'Fort Collins, CO, USA',
        originAbbrev: 'DEN',
        originLat: '1',
        originLong: '2',
        startData: '3',
        endDate: '4',
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

      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockTrip),
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'b9aead4b955bccb5c57ef830580f3de5',
        }
      };

      mockResponse = {
        allTrips: [
          {
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
          },
          {
            id: '2',
            name: ' Summer Break',
            origin: 'Fort Collins, CO, USA',
            originAbbrev: 'DEN',
            originLat: '1',
            originLong: '2',
            startData: '3',
            endDate: '4',
            user: {
              id: '1',
              name: 'John',
              email: 'John@gmail.com'
            },
            destination: [
              {

              }
            ]
          }
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
      postNewTrip(mockTrip);

      expect(window.fetch).toHaveBeenCalledWith('', mockOptions);
    });

    it('should return an array of trip objects', () => {
      expect(postNewTrip(mockTrip)).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false });
      });

      expect(postNewTrip()).rejects.toEqual(Error('error posting new trip'));
    });
  });
});
