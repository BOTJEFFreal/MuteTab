console.log("Running");

chrome.browserAction.onClicked.addListener(muteTab);


function muteTab(){
  var isMuted;
  var tabID;
  chrome.tabs.query({currentWindow: true, active: true},function(tabs){
    isMuted = tabs[0].mutedInfo.muted;
  });
  setTimeout(function(){
    if(isMuted != false){
      chrome.tabs.update(tabID, {"muted": false});
      console.log("audio");
    
      chrome.browserAction.setIcon({
        path : {"16" : "/Images/Unmute.png"}
      });
    }else{
      chrome.tabs.update(tabID, {"muted": true});
      console.log("NO audio");

      chrome.browserAction.setIcon({
        path : {"16" : "/Images/mute.png"}
      });
    }

  },50);
}

