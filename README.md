# OpenHDS Data Generation Server

### Running Server:
`cd` into directory and run `node app.js`. Server will run on port 3000.

### Routes
`localhost:3000/api` will bring you to the index page of the api. The following routes can be used for these entities: `locations`, `socialgroups`, or `individuals`: 
- `/entity` will produce a single data entry. 
- `/entity/:num` will produce `:num` random entries for the given entity. 
- `/entity/invalid` will produce a single entry containing invalid data
- `/entry/invalid/:num` will produce `:num` random invalid entries for the given entity. 

#### Examples
`localhost:3000/api/locations` <br>
`localhost:3000/api/locations/10` <br>
`localhost:3000/api/locations/invalid` <br>
`localhost:3000/api/locations/invalid/10` <br>

