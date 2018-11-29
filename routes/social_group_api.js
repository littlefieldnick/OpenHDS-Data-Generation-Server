// Initialize express router
let router = require('express').Router();
let faker = require('faker');
let bodyParser = require('body-parser');

const groupType = ["COH", "FAM"];
const invalidGroupType = ["COHORT", "FAMILY", "TEAM"];
const fieldworkers = ["FWFF1", "FWFF2"];
const invalidFieldworkers = ["FWIN1", "FWIN2"];


let extIdPrefix = "MBI";
let extIdLength = 10;

function padExtId(idNum){
    let idSuffix = ""+idNum;
    let padding = "".padEnd(extIdLength - (extIdPrefix + idSuffix).length, "0");
    return extIdPrefix + padding + idSuffix + + "00";
}

router.get("/socialgroups", function (req, res){
    res.json({
        uuid: faker.random.uuid(),
        extId: padExtId(Math.floor(Math.random()*99)),
        collectedBy: {extId: fieldworkers[Math.floor(Math.random()*fieldworkers.length)]},
        groupName: faker.name.lastName() + " Household",
        groupType: groupType[Math.floor(Math.random()*groupType.length)]
    })
});

router.get('/socialgroups/:num', function(req, res){
    let numSocialGroups = req.params.num;
    let socialGroups = [];

    for(let i = 0; i < numSocialGroups; i++){
        socialGroups.push({
            uuid: faker.random.uuid(),
            extId: padExtId(Math.floor(Math.random()*99)),
            collectedBy: {extId: fieldworkers[Math.floor(Math.random()*fieldworkers.length)]},
            groupName: faker.name.lastName() + " Household",
            groupType: groupType[Math.floor(Math.random()*groupType.length)]
        });
    }

    res.json({socialGroups: socialGroups});

});

router.get('/socialgroups/invalid/:num', function(req, res){
    let numSocialGroups = req.params.num;
    let socialGroups = [];

    for(let i = 0; i < numSocialGroups; i++){
        socialGroups.push({
            uuid: faker.random.uuid(),
            extId: padExtId(Math.floor(Math.random()*99)),
            collectedBy: {extId: invalidFieldworkers[Math.floor(Math.random()*invalidFieldworkers.length)]},
            groupName: faker.name.lastName() + " Household",
            groupType: invalidGroupType[Math.floor(Math.random()*invalidGroupType.length)]
        });
    }

    res.json({socialGroups: socialGroups});
});

router.get('/socialgroups/invalid', function(req, res){
    res.json({
        uuid: faker.random.uuid(),
        extId: padExtId(Math.floor(Math.random()*99)),
        collectedBy: {extId: invalidFieldworkers[Math.floor(Math.random()*invalidFieldworkers.length)]},
        groupName: faker.name.lastName() + " Household",
        groupType: invalidGroupType[Math.floor(Math.random()*invalidGroupType.length)]
    });
});

// Export API routes
module.exports = router;