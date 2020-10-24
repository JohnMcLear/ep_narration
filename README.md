# Sound cloud no longer allow new API account requests ergo this plugin is defunct

# Description
Create audio narrations over pad and have it play in time with your changes.

# Installation
Set your callback endpoint in soundcloud as http://yourEtherpadServerHostname/ep_narration/callback
Add the following to your settings.json (Either by visiting /admin/settings or by manually editing the file)
```
"ep_narration":{
  "soundcloudApiKey" : "ap38a725194a3c1082753226c4af53242b"
}
```

Inserting your API key above

# TODO
Pad:
```
* when recording finishes, POST json to new API endpoint (/sp/narrations), and this saves to new DB table (narrations) <-- possible but a bit hacky -- see https://github.com/JohnMcLear/ep_email_notifications/blob/master/update.js for reference on how to read/write database (done with sockets but dont have the client side code to begin recording etc. yet)

padId: narration:ekXhBftrf0 (key)
cues (value): 
narrationTest:{
    cues: {"0":165,"4.871":166...}, <-- key is seconds, value is revision
    url: http://soundcloud.com/aribadernatal/ro-cgfdcougm4um-1341254585753
    } <-- we need the logic for this cues / timestamp storage
```
# Timeslider todo:
```
* soundcloud widget display (e.g. http://studio.sketchpad.cc/sp/pad/view/ro.9gAjbINR1Ar7$/latest?narration_url=http://soundcloud.com/aribadernatal/sketchcast_1344200733170 ) <-- Replace timeslider Element with SoundCloud widget (Javascript hack on timeslider ready -- be mindful not to destroy the timeslider as a toggle option might be useful) <-- need the JS you used <-- Need Cue logic
* scrubbing in widget moves revision <-- relatively easy see cues object for timestamp/revision relationship <-- can probably use your JS <-- need cue logic
```


