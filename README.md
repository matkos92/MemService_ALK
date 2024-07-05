# MemService

MemService is a responsive frontend web application for browsing, upvoting, downvoting, and adding memes. The project is built using React, React Bootstrap, and React Router for the frontend, ensuring a smooth and intuitive user experience across various devices.

## Hosting

This application is hosted on Netlify and can be accessed at the following URL:

https://charming-phoenix-c1f832.netlify.app

## Installation

To set up the project locally, follow these steps:

1. Clone the repository or download zip file.
2. Open console and navigate to the project directory.
3. Install the dependencies: 'npm install'

## Usage
To start the development server, run: 'npm start'.
This will start the application on http://localhost:3000.

## State Management
The application uses React's Context API to manage state across the application. This approach allows for a centralized state management solution, making it easier to pass data and functions to components without prop drilling. The context is defined in MemContext.js and provides state and handler functions to the rest of the application.

## Features
-Responsive Design: The application is fully responsive, providing an optimal viewing experience across various devices.

-Meme Browsing: Browse through a collection of memes categorized as regular, hot, and favorite.

-Upvoting/Downvoting: Users can upvote or downvote memes to express their preferences.

-Favorite Memes: Mark memes as favorites for quick access.

-Add Memes: Users can upload and add new memes to the collection.

## Technologies Used
-React
-React Bootstrap
-React Router
-Bootstrap Icons
