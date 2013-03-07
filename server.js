var db = require('../../src/node/db/DB').db;
var settings = require('ep_etherpad-lite/node/utils/Settings');

// When a new NARRATION_SAVE message comes in from the client
exports.handleMessage = function(hook_name, context, callback){
  if (context.message && context.message.data){
    if (context.message.data.type == 'NARRATION_SAVE' ) { // if it's a request to save a narration
      var padId = context.message.data.padId;
      db.set("ep_narration:" + padId, context.message.data); // stick it in the database
      context.client.json.send({ type: "COLLABROOM",
        data:{
          type: "narrationSaveSuccess",
          payload: true
        }
      });
      callback(null); // we process this here dont pass it onto any other message handler
      return false;
    }
  }
  
  // When a NARRATION_LOAD message comes in from the client
  if (context.message && context.message.data){
    if (context.message.data.type == 'NARRATION_LOAD' ) { // if it's a request to save a narration
      var padId = context.message.data.padId;
      db.get("ep_narration:" + padId, function(err, value){ // get the current value
        context.client.json.send({ type: "COLLABROOM",
          data:{
            type: "narrationLoadSuccess",
            data: value,
            payload: true
          }
        });
      });
      callback(null); // we process this here dont pass it onto any other message handler
      return false;
    }
  }
  callback(null);
  return false;
}

exports.registerRoute = function (hook_name, args, cb) {
  args.app.get('/ep_narration/callback', function(req, res) {
    var hostname = (req.headers.host).split(":")[0];
    res.send('<script>document.domain="'+hostname+'";</script><script src="//connect.soundcloud.com/sdk.js"></script>');
  });
  cb();
}

exports.clientVars = function(hook, context, callback)
{
  if(settings.ep_narration){ // Only execute 
    var soundcloudApiKey = settings.ep_narration.soundcloudApiKey;
  }else{
    var soundcloudApiKey = false;
  }

  // tell the client which year we are in
  return callback({ "soundcloudApiKey": soundcloudApiKey });
};
