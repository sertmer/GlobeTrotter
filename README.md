# GlobeTrotter 
[![Build Status](https://travis-ci.org/sertmer/GlobeTrotter.svg?branch=master)](https://travis-ci.org/sertmer/GlobeTrotter)

**GlobeTrotter** is a mobile application that allows users to plan multi-leg adventures and create day-by-day itineraries for each stop along the way. GlobeTrotter helps you collect all of the infomation about your trip into one convenient location.

## Table of Contents
<!--ts-->

- [Table of Contents](#table-of-contents)
- [Set Up](#set-up)
- [Video](#video)
- [Screenshots](#screenshots)
- [Tech Stack and Team](#tech-stack)
- [Goals](#goals)
- [Agile Workflow](#project-board)

<!--te-->

## Set Up
#### 1. Clone the repository
```
git clone https://github.com/sertmer/GlobeTrotter
```
#### 2. Install dependencies
```
npm install
```
#### 3. Start the Server
``` 
npm start
```
#### To run on your phone:
1. On the webpage that loads when you `npm start`, scan the QR code with your camera app
2. Download the Expo Client app from the app store

#### To run on a simulator:
1. Install the Expo Command Line Interface with `npm i##tall -g expo-cli`
2. run `npm run ios` or `npm run android`

#### To run in your web browser:
1. run `npm start`
2. On the expo webpage that opens up in your browser, click `run in web browser` from the left panel

## Video
`Coming Soon!`

## Screenshots
<img src='https://user-images.githubusercontent.com/49926352/75401734-4999c200-58c0-11ea-8e8f-ba72265e6fe5.PNG' width='500'/>
<img src='https://user-images.githubusercontent.com/49926352/75401743-4d2d4900-58c0-11ea-86b8-4cec3de8533f.PNG' width='500'/>
<img src='https://user-images.githubusercontent.com/49926352/75401768-57e7de00-58c0-11ea-8038-27b3d139ba37.PNG' width='500'/>
<img src='https://user-images.githubusercontent.com/49926352/75401772-5b7b6500-58c0-11ea-9ff1-87ec9d32426e.PNG' width='500'/>

<img src='https://user-images.githubusercontent.com/49926352/75401793-6afaae00-58c0-11ea-9dc7-2c71db9b0f4d.jpeg' width='500'/>
<img src='https://user-images.githubusercontent.com/49926352/75401797-6fbf6200-58c0-11ea-99ec-72bd7d541dcf.PNG' width='500'/>
<img src='https://user-images.githubusercontent.com/49926352/75401804-751cac80-58c0-11ea-8b23-79fa8245821e.PNG' width='500'/>

## Tech Stack

### Front End
[Colin Koga](https://github.com/ckoga), 
[Austen Dunn](https://github.com/Dunn-Austen), and
[Scott Ertmer](https://github.com/sertmer)
 
 - React Native
 - Expo
 - React Native Navigation
 - React Native Maps
 - React Native Calendars
 - Testing with Jest/Enzyme
 - Travis CI
 - Fetch API
 
 ### Back End
 [John Travers](https://github.com/johnktravers) and
 [Zac Isaacson](https://github.com/zacisaacson)

- Python
- Django
- GraphQL
- PostgresQL
- Travis CI

### API's Utilized
- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
- [Airport Codes API](https://www.air-port-codes.com/airport-codes-api/overview/)
- [Yelp Fusion API](https://www.yelp.com/fusion)

## Goals
- Implementing brand new technologies and frameworks
- Utilizing Continuious Integration tools to automate the testing suite on push and merge
- Use agile procress to break the work into discreet user stories
- Collaboration between front and back end teams
- Create a fluid and unobtrusive UI

## Project Board
GlobeTrotter followed an agile process using the automated kanban board on GitHub Projects.
User stories were:
- divided into sprints
- created as issues, following a team-decided template
- assigned labels (sprint 1, front end, trips view, bug, extension)
- assigned to a team member
- tracked by the whole team 
- PR template used by all members of the team, to encourage thourough code review.

The project board can be viewed [here](https://github.com/sertmer/GlobeTrotter/projects/1)

 ## Icon Credit
[Freepik, Flat Icon](https://www.flaticon.com/free-icon/maps-and-flags_265725)

