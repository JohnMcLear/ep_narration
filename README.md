# Description
Create audio narrations over pad and have it play in time with your changes.

# Installation
Set your callback endpoint in soundcloud as http://yourserver/static/plugins/ep_narrations/templates/callback.html

# TODO
Pad:
```
* new button widget <-- eejsToolBarRight (easy) <-- Need the HTML widget for recording audio
* done - SoundCloud JS code.   <-- see eejsScripts
TODO -> when recording finishes, POST json to new API endpoint (/sp/narrations), and this saves to new DB table (narrations) <-- possible but a bit hacky -- see https://github.com/JohnMcLear/ep_email_notifications/blob/master/update.js for reference on how to read/write database <-- will need to expose 1 new API endpoint IE /api/ep_narration/+padID/

padId: narration:ekXhBftrf0 (key)
cues (value): 
narrationTest:{
    cues: {"0":165,"4.871":166...}, <-- key is seconds, value is revision
    url: http://soundcloud.com/aribadernatal/ro-cgfdcougm4um-1341254585753
    } <-- we need the logic for this cues / timestamp storage
```
# Timeslider: 
```
* done - add popcorn library. <-- see eejsScripts and eejsTimesliderScripts
* soundcloud widget display (e.g. http://studio.sketchpad.cc/sp/pad/view/ro.9gAjbINR1Ar7$/latest?soundcloud_url=http://soundcloud.com/aribadernatal/sketchcast_1344200733170 ) <-- Replace timeslider Element with SoundCloud widget (Javascript hack on timeslider ready -- be mindful not to destroy the timeslider as a toggle option might be useful) <-- need the JS you used
* scrubbing in widget moves revision <-- relatively easy see cues object for timestamp/revision relationship <-- can probably use your JS
* done - Must be able to target a narration based on the URL <-- see /static/js/narration.js

http://studio.sketchpad.cc/sp/pad/view/ro.9gAjbINR1Ar7$/latest?soundcloud_url=http://soundcloud.com/aribadernatal/sketchcast_1344200733170

* done - CSS <-- see /static/css/style.css to add stuff in
* done - callback file see /ep_narration/callback
```

# FUTURE VERSIONS TODO
* TODO
