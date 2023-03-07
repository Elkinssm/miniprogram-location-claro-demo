App({
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    // Reopened by scheme from the background
  },
  
    "permission": {
      "scope.userLocation": {
        "desc": "Necesitamos acceder a su ubicación para proporcionar servicios personalizados."
      }
    }
  
  
});
