# Critter Cottage Client - Production Build

The original project build can be found [here](https://github.com/ctdupuis/critter-cottage)

### About

This repo contains the client for Critter Cottage. It consumes the [Critter Cottage API](https://github.com/ctdupuis/critter-cottage-api) to present and persist data for the user experience.

### Features

#### Users

- Browse through animal entries
- Fill out adoption requests

#### Administrators

- Approve/deny adoption requests
- Full CRUD functionality with animal entries

### Dependencies

- React
- Redux
- Thunk
- Axios
- React-Bootstrap
- React Router
- ActiveStorage

## Local Installation

**You will need to have the API installed for this to run correctly**

- In your terminal, run `git clone git@github.com:ctdupuis/critter-cottage-client.git`
- Run `npm install`
- Run `npm start`
- Make sure the API is running, then navigate to [localhost:3000](http://localhost:3000).