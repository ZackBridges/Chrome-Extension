chrome.webNavigation.onCommitted.addListener(function(e) {
    //Code for capturing URL goes here
    
}, {url: [{hostSuffix: "google.com"}, 
          {urlContains: "/webhp?"}]
   });