[![node](https://badges.aleen42.com/src/node.svg)](https://nodejs.org)
[![react](https://badges.aleen42.com/src/react.svg)](https://reactjs.org/)
[![eslint](https://badges.aleen42.com/src/eslint.svg)](https://eslint.org/)
[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

# F1 Champions

This is a test assignment for a frontend developer position.\
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task

It was necessary to make a single page web application that:
- uses http://ergast.com/mrd/ API
- shows the F1 world champions starting from 2005
- shows the list of the winners for every race in a selected year.\
  Rows where the year champion won a race must be highlighted.

Focus on clean and reusable code. Preferably implemented in React, Angular or VueJS framework.

## Architecture and decisions

It's a **Single Page Application** as test assignment explicitly asks for it.

As for main framework I chose **React**. It's easy to work with, it's fast. React has a large community and nice documentation.

I intentionally didn't use external component libraries (for example, [React Material UI](https://mui.com/), [Bootstrap](https://getbootstrap.com/docs/3.4/)) to focus on making React components and styling with CSS.

I think it's important for projects to follow some coding guidelines, especially when working in teams. For this assignment I decided to use [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). The **coding guidelines are enforced by ESLint** (see `eslintConfig` prop in `package.json`)

Work with Ergast API is located in a separate file to it more reusable.


## Features

- All requested functionaly is implemented
- Responsive UI (Components layout differs based on screen width (less 700px or more 700px))
- Clean and lean UI Design
- Tests

## Prerequisites

- [Git](https://git-scm.com/)
- [NodeJS 16.x](https://nodejs.org/en/)

## Initial preparations:

```bash
git clone https://github.com/DianaBanana888/F1-champions
cd F1-champions

npm install .
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs ESLint in "Fix" mode on all .js and .jsx files in project.
