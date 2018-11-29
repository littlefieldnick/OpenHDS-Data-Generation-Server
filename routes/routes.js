let express = require('express');
let router = express.Router();

let levelsApi = require("./levels_api");
let hierarchyApi = require('./hierarchy_api');
// Set default API response
router.get('/', function (req, res) {
    res.json({
            status: 'API Its Working',
            message: 'Welcome to the OpenHDS Testing API'
        }
    );
});

router.use(levelsApi);
router.use(hierarchyApi);

// Export API routes
module.exports = router;