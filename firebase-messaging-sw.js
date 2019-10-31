// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "589639130157",
});


self.addEventListener('push', function(event) {
    var jsonData = JSON.parse(event.data.text());
    jsonData.data.sender = JSON.parse(jsonData.data.sender);
    console.log('notification data', jsonData);
    console.log(`${jsonData.data.sender.picture}`);
    const title = jsonData.data.title;
    const options = {
        body: jsonData.data.message,
        icon: `${jsonData.data.sender.picture}`,
        sound: 'default',
        url: ''
    };
    event.waitUntil(self.registration.showNotification(title, options)); 
});
  
  self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event.notification.tag);
    // Android doesn’t close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();
  
    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
      type: 'window'
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    }));
  });