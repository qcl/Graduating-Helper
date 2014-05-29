var listener = function(details) {
    return {
      cancel: true
    };
};

var urls = [
  "*://*.facebook.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(listener, { urls: urls }, [ "blocking" ]);
