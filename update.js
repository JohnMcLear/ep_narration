// Main job is to check pads periodically for activity and notify owners when someone begins editing and when someone finishes.
 var  db = require('../../src/node/db/DB').db,
     API = require('../../src/node/db/API.js'),
   async = require('../../src/node_modules/async'),
settings = require('../../src/node/utils/Settings');

// Settings -- EDIT THESE IN settings.json not here..
var pluginSettings = settings.ep_narrations;

