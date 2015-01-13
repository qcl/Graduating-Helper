var listener = function(details) {
    return {
      cancel: true
    };
};

var urls = [
  "*://*.facebook.com/*",
  "*://*.plurk.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(listener, { urls: urls }, [ "blocking" ]);
