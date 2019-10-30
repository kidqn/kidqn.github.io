// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyC2aT5ZxR4y3P-_141X-CYYrTQvU_K9VW4",
    authDomain: "react-firebase-26de0.firebaseapp.com",
    databaseURL: "https://react-firebase-26de0.firebaseio.com",
    projectId: "react-firebase-26de0",
    storageBucket: "react-firebase-26de0.appspot.com",
    messagingSenderId: "589639130157",
    appId: "1:589639130157:web:21ad3fa3f9c526196caca4"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    console.log('firebase push noti', payload);
    const title = 'Hello';
    const options = {
        body: payload.data.body,
        icon: '/setting.png',
        image: '/setting.png',
        badge: '/setting.png'
    };
    console.log('firebase push noti', options);
    return self.ServiceWorkerRegistration.showNotification(title, options);
})

self.addEventListener('push', function(event) {
    console.log('Received a push message', event);
  
    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = 'setting.png';
    var tag = 'simple-push-demo-notification-tag';
  
    event.waitUntil(
      self.registration.showNotification(title, {
        body: body,
        icon: icon,
        tag: tag
      })
    );
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