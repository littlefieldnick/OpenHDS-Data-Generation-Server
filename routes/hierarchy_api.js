// API for Location Hierarchy
// Hierarchy is preset and not randomly generated

// Initialize express router
let router = require('express').Router();
let fs = require('fs');

// Set default API response
router.get('/hierarchy', function (req, res) {
    let data = JSON.parse(fs.readFileSync(require.resolve('../public/required-data/hierarchy.json')));
    res.json(data)
});


// Export API routes
module.exports = router;