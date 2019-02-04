// Initialize express router
let router = require('express').Router();
let faker = require('faker');
let bodyParser = require('body-parser');

const locTypes = ["URB", "RUR"];
const invalidLocType = ["CITY", "URBAN", "RURAL", "VIL"];
const fieldworkers = ["FWFF1", "FWFF2"];
const invalidFieldworkers = ["FWIN1", "FWIN2"];

hierarchy = require("../public/required-data/hierarchy");
let subvillage = hierarchy.locationHierarchies[hierarchy.locationHierarchies.length - 1].extId;
let extIdPrefix = "MBI";
let extIdLength = 10;

function padExtId(idNum){
    let idSuffix = ""+idNum;
    let padding = "".padEnd(extIdLength - (extIdPrefix + idSuffix).length, "0");
    return extIdPrefix + padding + idSuffix;
}

router.get('/locations', function(req, res){
    res.send({
        uuid: faker.random.uuid(),
        extId: padExtId(Math.floor(Math.random()*99)),
        locationLevel: subvillage,
        locationName: faker.address.city(),
        collectedBy: {extId: fieldworkers[Math.floor(Math.random()*fieldworkers.length)]},
        locationType: locTypes[Math.floor(Math.random()*locTypes.length)],
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude()
    });
});

router.get('/locations/:num', function(req, res){
    let numLoc = req.params.num;
    let locations = [];

    for(let i = 0; i < numLoc; i++){
        locations.push({
            uuid: faker.random.uuid(),
            extId: padExtId(Math.floor(Math.random()*99)),
            locationLevel: subvillage,
            locationName: faker.address.city(),
            collectedBy: {extId: fieldworkers[Math.floor(Math.random()*fieldworkers.length)]},
            locationType: locTypes[Math.floor(Math.random()*locTypes.length)],
            longitude: faker.address.longitude(),
            latitude: faker.address.latitude()
        });
    }

    res.json({locations: locations});

});

router.get('/locations/invalid/:num', function(req, res){
    let numLoc = req.params.num;
    let locations = [];

    for(let i = 0; i < numLoc; i++){
        locations.push({
            uuid: faker.random.uuid(),
            extId: padExtId(Math.floor(Math.random()*99)),
            locationLevel: subvillage,
            locationName: faker.address.city(),
            collectedBy: {extId: invalidFieldworkers[Math.floor(Math.random()*invalidFieldworkers.length)]},
            locationType: invalidLocType[Math.floor(Math.random()*invalidLocType.length)],
            longitude: faker.address.longitude(),
            latitude: faker.address.latitude()
        });
    }

    res.send({locations: locations});

});

router.get('/locations/invalid', function(req, res){
    res.json({
        uuid: faker.random.uuid(),
        extId: padExtId(Math.floor(Math.random()*99)),
        locationLevel: subvillage,
        locationName: faker.address.city(),
        collectedBy: {extId: invalidFieldworkers[Math.floor(Math.random()*invalidFieldworkers.length)]},
        locationType: invalidLocType[Math.floor(Math.random()*invalidLocType.length)],
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude()
    });
});

// Export API routes
module.exports = router;