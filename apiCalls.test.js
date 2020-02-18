import { getAllTrips } from './apiCalls';

//mockresponses need to be polished in case BE format is misrepresented

// describe('apiCalls', () => {
//
//   describe('getTrips', () => {
//     let mockResponse;
//
//     beforeEach(() => {
//       mockResponse = {
//         allTrips: [
//           {
//             id: 1,
//             name: ' Spring Break',
//             origin: ,
//             originAbbrev: ,
//             originLat: ,
//             originLong: ,
//             startData: ,
//             endDate: ,
//             user: {
//               id: 1,
//               name: 'John',
//               email: 'John@gmail.com'
//             },
//             destinations: [
//               {
//                 location: 'Denver',
//                 abbrev: 'DEN',
//                 lat: '39.7392° N',
//                 long: '104.9903° W'
//               }
//             ]
//           }
//         ]
//       };
//       window.fetch = jest.fn().mockImplementation(() => {
//         return Promise.resolve({
//           ok: true,
//           json: () => Promise.resolve(mockResponse)
//         });
//       });
//     });
//
//     it('should call fetch with the correct URL', () => {
//       getAllTrips();
//
//       expect(window.fetch).toHaveBeenCalledWith('');
//     });
//
//     it('should return an array of trip objects', () => {
//       expect(getAllTrips()).resolves.toEqual(mockResponse);
//     });
//
//     it('should return an error message if Promise is rejected', () => {
//       window.fetch = jest.fn().mockImplementation(() => {
//         return Promise.resolve({ ok: false });
//       });
//
//       expect(getAllTrips()).rejects.toEqual(Error('error retrieving trips data'));
//     });
//   });
// });
