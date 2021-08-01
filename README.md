# bmorize

bmorize is a matching card game that users can use to practice their memorization skills.
There are three levels (easy, difficult, and hard) for users to choose from.

bmorize was created in x days as part of the Hiring Hackathon for Junior Web Developers hosted by [Mintbean](https://mintbean.io/). 

bmorize is live on [Netlify](link here).

![Landing page screenshot](src/assets/landing-screenshot.png)
![Sample question screenshot](src/assets/question-screenshot.png)

## Table of Contents

- [Installation](https://github.com/kathyn138/bmorize#installation)
- [Testing](https://github.com/kathyn138/bmorize#testing)
- [Technologies](https://github.com/kathyn138/bmorize#technologies)
- [Component Hierarchy](https://github.com/kathyn138/bmorize#component-hierarchy)
- [Engineer Info](https://github.com/kathyn138/bmorize#engineer-info)

## Installation

Use npm to install dependencies and start the frontend server.

To install dependencies:
`npm i`

To start the frontend server: `npm start`

## Testing

Front end unit tests are written with Enzyme. Run tests with the following command:

`npm test`

## Technologies

- React
- Create-React-App
- HTML/CSS
- Bootstrap
- Enzyme

## Component Hierarchy

```
App
├── Navigation
└─┬ Routes
  ├── Landing
  ├── Tutorial
  └─┬ Game
    ├─┬ LevelSelect
    │ └── LevelBtn
    ├─┬ Board
    │ ├── Loading
    │ ├── Error
    │ └── Card
    └── GameEnd
```

## Engineer Info

Kathy Nguyen
- [LinkedIn](https://www.linkedin.com/in/kathy-n-709a5)
- [Github](https://github.com/kathyn138)
