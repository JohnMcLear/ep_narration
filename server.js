var db = require('../../src/node/db/DB').db;

// When a new NARRATION_SAVE message comes in from the client
exports.handleMessage = function(hook_name, context, callback){
  if (context.message && context.message.data){
    if (context.message.data.type == 'NARRATION_SAVE' ) { // if it's a request to save a narration

      db.set("ep_narration" + padId, context.message.data); // stick it in the database
      context.client.json.send({ type: "COLLABROOM",
        data:{
          type: "narrationSaveSuccess",
          payload: true
        }
      });

    }
  }
  
  // When a NARRATION_LOAD message comes in from the client
  if (context.message && context.message.data){
    if (context.message.data.type == 'NARRATION_LOAD' ) { // if it's a request to save a narration

      db.get("ep_narration" + padId, function(err, value){ // get the current value
        context.client.json.send({ type: "COLLABROOM",
          data:{
            type: "narrationLoadSuccess",
            data: value,
            payload: true
          }
        });
      });

    }
  }
  callback();
}

exports.registerRoute = function (hook_name, args, cb) {
  args.app.get('/ep_narration/callback', function(req, res) {
    var hostname = req.headers.host;
    res.send('<script>document.domain='+hostname+';</script><script src="//connect.soundcloud.com/sdk.js"></script>');
  });
  cb();
}
