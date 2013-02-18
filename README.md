# Description
Create audio narrations over pad and have it play in time with your changes.

# Installation
Set your callback endpoint in soundcloud as http://yourserver/static/plugins/ep_narrations/templates/callback.html

# TODO
Pad:
new button widget <-- eejsToolBarRight (easy)
SoundCloud JS code.   <-- eejsScripts
when recording finishes, POST json to new API endpoint (/sp/narrations), and this saves to new DB table (narrations) <-- possible but a bit hacky -- see https://github.com/JohnMcLear/ep_email_notifications/blob/master/update.js for reference on how to read/write database <-- will need to expose 1 new API endpoint IE /api/ep_narration/+padID/

padId: narration:ekXhBftrf0 (key)
cues (value): 
narrationTest:{
    cues: {"0":165,"4.871":166...}, <-- key is seconds, value is revision
    url: http://soundcloud.com/aribadernatal/ro-cgfdcougm4um-1341254585753
    } <-- we need the logic for this cues / timestamp storage

Timeslider: 
add popcorn library. <-- eejsScripts
soundcloud widget display (e.g. http://studio.sketchpad.cc/sp/pad/view/ro.9gAjbINR1Ar7$/latest?soundcloud_url=http://soundcloud.com/aribadernatal/sketchcast_1344200733170 ) <-- Replace timeslider Element with SoundCloud widget (Javascript hack on timeslider ready -- be mindful not to destroy the timeslider as a toggle option might be useful)
scrubbing in widget moves revision <-- relatively easy see cues object for timestamp/revision relationship
Must be able to target a narration based on the URL

http://studio.sketchpad.cc/sp/pad/view/ro.9gAjbINR1Ar7$/latest?soundcloud_url=http://soundcloud.com/aribadernatal/sketchcast_1344200733170

URL
query string with soundcloud URL. 
perhaps custom URL shortener "/narration/ro.9gAjbINR1Ar7/first_audio" => 
{ 
  pad: "ro.9gAjbINR1Ar7$", 
  soundcloud info: "aribadernatal/sketchcast_1344200733170" 
}

CSS  <-- easy

new static file:
/callback.html (contains: <script>document.domain="sketchpad.cc";</script><script src="//connect.soundcloud.com/sdk.js"></script> )  <-- probably on something like /plugins/static/ep_narration/templates/callback.html
Note that: document.domain has to be in settings.json 

<script>document.domain="sketchpad.cc";</script><script src="//connect.soundcloud.com/sdk.js"></script>

<script>document.domain="<%pad.hostname%>";</script><script src="//connect.soundcloud.com/sdk.js"></script>


# FUTURE VERSIONS TODO
* TODO
