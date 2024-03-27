# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Goal of task

Trip app with countdown timer and weather forecast


Using React.js (preferably, but you can use Angular or any other framework), implement a Trip app where users can see the weather forecast for their upcoming journeys, following these requirements:
Visualization of the page: Main.png.
Upon starting the application, user should already have a static list of trips (1 trip is enough). The list should be scrollable.
When user selects a trip from the list, a forecast for each day of the trip should be displayed.
On the top:
There should be a possibility to search for a trip
The app should include a button for adding a new trip. When the user clicks on "Add trip," a modal window should appear. Inside the modal, the user should have the ability to:
Choose a city from a predefined list (you should have a mock list of cities that the API supports, with images).
Enter the start date of the trip (the start date should be within the next 15 days).
Enter the end date of the trip (the end date should be within the next 15 days).
Upon clicking "Done," the trip should be added to the list.
Modal visualization Modal.png
On the right side of the page:
When user selects a trip, today's weather forecast for that city should be displayed.
There should be a countdown timer from the current date to the start date of the trip.
Additionally:
Implement next and previous buttons for the list to handle scrolling better
Sort trips by start trip date
Implement login through third-party providers (Gmail, Facebook, etc.) - at least one of
Implement store data (trips) after reloading page.


Please, don’t use any UI components libraries, only HTML/CSS
Free weather API: https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/


Notes:
1. To get YOUR_API_KEY you need to register an account
2. Available 1000 recored/day for free

API for getting forecast from - to for the city
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/[date1]/[date2]?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json

API for getting today’s weather for the city
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/today?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json