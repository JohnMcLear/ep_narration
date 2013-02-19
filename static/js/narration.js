if(typeof exports == 'undefined'){
  var exports = this['mymodule'] = {};
}

// This is on the pad only, not the timeslider
exports.postTimesliderInit = function(hook, context){
  narration.init();
}

/* What to do when we recieve the narration information from the server */
exports.handleClientMessage_narration = function(hook, context){
  narration.recieve(context);
}

var narration = {

  cues : {},

  /* Sends the narration cues and URL to teh server */
  send: function (){
    var padId = narration.getPadId();
    var url = narration.gup("narration_url");

    var data = {
      type      : 'NARRATION_SAVE',
      component : 'pad',
      cues      : cues, // TODO Ari
      url       : url, // TODO Ari
      padId     : padId
    }

    socket.json.send(
    {
      type: "COLLABROOM",
      component: "pad",
      data: data
    });

  },

  /* Recieved cues from server, shove em into our page */
  recieve: function(msg){
    cues = msg.cues;
  },

  /* Requests the narration cues from the server */
  request: function(url){
    var padId = narration.getPadId();
    var message = {};

    var data = {
      type      : 'NARRATION_LOAD',
      component : 'pad',
      padId     : padId
    }

    socket.json.send(
    {
      type: "COLLABROOM",
      component: "pad",
      data: data
    });
    // Will recieve a message back with either null or an object of cues <-> timestamps
  },

  /* Given a timestmap we move to a specific revision */
  moveToRev: function(timestamp){
    console.log("moving to TS", timestamp);
    // var revisionNumber = getRevisionNumberFromTimestamp(timestamp);
    // Do logic to move to X revision
  },

  render: function(narration_url){
    narration.request(narration_url); // request the narrations
    $('#sc-widget').attr("src", narration_url + "&show_artwork=false");
    $('#timeslider-wrapper').hide();
    $('#soundCloudTopContainer').show();

   (function(){

     var widgetIframe = document.getElementById('sc-widget');
     var widget       = SC.Widget(widgetIframe);

     widget.bind(SC.Widget.Events.READY, function() {
       widget.bind(SC.Widget.Events.SEEK, function() { // on click of narration
         console.log("Moving ooh yes im moving to a new revision");
         widget.getPosition(function(pos){
           narration.moveToRev(pos);
         });
       });
     });
    }());
  },

  gup: function(name, url) { // gets url parameters
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var results = new RegExp('[?&]'+name+'=?([^&#]*)').exec(url || window.location.href);
    return results == null ? null : results[1] || true;
  },

  init: function(){
    var url = narration.gup("narration_url", window.location);
    if(url){
      narration.render(url);
    }
  },
  getPadId: function(){
    //get the padId out of the url
    var urlParts= document.location.pathname.split("/");
    return padId = decodeURIComponent(urlParts[urlParts.length-2]);
  }
}

exports.narration = narration;
