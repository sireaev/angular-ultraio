# AngularUltraio
---

Boilerplate with Bootstrap 5.

This project fetch list of giphy trends and search on multitag purpose.

## Perquisites

### Users

- Node.js
- NPM

### Developers

- Angular CLI (`npm i -g @angular/cli`)
- Jest (`npm i -g jest`)
- Node.js

## Getting started

Go to the root folder of the project and run `npm i`

environment.ts/environment.prod.ts
```
export const environment = {
  production: false/true,
  giphykey: 'SET_YOUR_GIPHY_API_KEY',
  giphyapi: 'https://api.giphy.com/v1/gifs',
}
```

## Run in development mode

`npm start`

## Build Production

`npm run build --prod`

## Run Tests

`npm run test`

## Watch test results (bonus)

`npm run test:coverage`

**The results of test coverage are located in rootFolder/coverage**

## Depenedencies

- Angular 13.1.0
- Node 14.17.0
- Typescript 4.5.2
- NPM 6.14.3
- Bootstrap 5.1.3
- ng-select 8.1.1
- jest 27.4.5

### TODO:
[ ] Add dotenv
[ ] Add docker
[ ] Deploy to cloud
