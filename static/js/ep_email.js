if(typeof exports == 'undefined'){
  var exports = this['mymodule'] = {};
}

// Placeholder
exports.postAceInit = function(hook, context){
}

// Placeholder
function init(){
}


/* Sends the narration cues and URL to teh server */
function sendNarrationToServer(){
  var userId = pad.getUserId();
  var message = {};
  message.type = 'NARRATION_SAVE';
  message.padId = pad.getPadId();
  message.userId = userId;
  message.cues = cues; // TODO Ari
  message.url = url; // TODO Ari
  pad.collabClient.sendMessage(message);
}

/* Loads the narration cues from the server */
function requestNarrationFromServer(url){
  var userId = pad.getUserId();
  var message = {};
  message.type = 'NARRATION_LOAD';
  message.padId = pad.getPadId();
  if(url) message.url = url; // TODO Ari
  pad.collabClient.sendMessage(message);
  // Will recieve a message back with either null or an object of cues <-> timestamps
}


