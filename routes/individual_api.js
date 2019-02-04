// Initialize express router
let router = require('express').Router();
let faker = require('faker');
let bodyParser = require('body-parser');

const gender = ["M", "F"];
const invalidGender = ["MALE", "FEMALE", "Male", "Female"];
const fieldworkers = ["FWFF1", "FWFF2"];
const invalidFieldworkers = ["FWIN1", "FWIN2"];

const unk = require("../public/required-data/unknown_individual");
let extIdPrefix = "MBI";
let extIdLength = 10;

function padExtId(idNum){
    let idSuffix = ""+idNum;
    let padding = "".padEnd(extIdLength - (extIdPrefix + idSuffix).length, "0");
    return extIdPrefix + padding + idSuffix + + "00" + (Math.floor(Math.random()*99));
}

router.get("/individuals", function (req, res){

    res.json({
        uuid: faker.random.uuid(),
        extId: padExtId(Math.floor(Math.random()*99)),
        collectedBy: {extId: fieldworkers[Math.floor(Math.random()*fieldworkers.length)]},
        firstName: faker.name.firstName(),
        middleName: "",
        lastName: faker.name.lastName(),
        dob: faker.date.past(new Date().getDate()).getTime(),
        dobAspect: Math.floor(Math.random() * 2),
        gender: gender[Math.floor(Math.random()*gender.length)],
        aIsToB: Math.floor(Math.random() * 9),
        mother: unk,
        father: unk
    })
});

router.get('/individuals/:num', function(req, res){
    let numInd = req.params.num;
    let individuals = [];

    for(let i = 0; i < numInd; i++){
        individuals.push({
            uuid: faker.random.uuid(),
            extId: padExtId(Math.floor(Math.random()*99)),
            collectedBy: {extId: fieldworkers[Math.floor(Math.random()*fieldworkers.length)]},
            firstName: faker.name.firstName(),
            middleName: "",
            lastName: faker.name.lastName(),
            dob: faker.date.past(new Date().getDate()).getTime(),
            dobAspect: Math.floor(Math.random() * 2),
            gender: gender[Math.floor(Math.random()*gender.length)],
            aIsToB: Math.floor(Math.random() * 9),
            mother: unk,
            father: unk
        });
    }

    res.json({individuals: individuals});

});

router.get('/individuals/invalid/:num', function(req, res){
    let numInd = req.params.num;
    let individuals = [];

    for(let i = 0; i < numInd; i++){
        individuals.push({
                uuid: faker.random.uuid(),
                extId: padExtId(Math.floor(Math.random()*99)),
                collectedBy: {extId: invalidFieldworkers[Math.floor(Math.random()*invalidFieldworkers.length)]},
                firstName: faker.name.firstName(),
                middleName: "",
                lastName: faker.name.lastName(),
                dob: faker.date.past(new Date().getDate()).getTime(),
                dobAspect: Math.floor(Math.random() * 4), // 2 valid options, plus 2 invalid
                gender: invalidGender[Math.floor(Math.random()*invalidGender.length)],
                aIsToB: Math.floor(Math.random() * 12), //9 valid options, plus 4 invalid
                mother: unk,
                father: unk
        });
    }

    res.json({individuals: individuals});
});

router.get('/individuals/invalid', function(req, res){
    res.json({
        uuid: faker.random.uuid(),
        extId: padExtId(Math.floor(Math.random()*99)),
        collectedBy: {extId: invalidFieldworkers[Math.floor(Math.random()*invalidFieldworkers.length)]},
        firstName: faker.name.firstName(),
        middleName: "",
        lastName: faker.name.lastName(),
        dob: faker.date.past(new Date().getDate()).getTime(),
        dobAspect: Math.floor(Math.random() * 4), // 2 valid options, plus 2 invalid
        gender: invalidGender[Math.floor(Math.random()*invalidGender.length)],
        aIsToB: Math.floor(Math.random() * 12), //9 valid options, plus 4 invalid
        mother: unk,
        father: unk
    });
});

// Export API routes
module.exports = router;