// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyAE_4kv3JEBYLMBtmgvbpZlT5XaH7P_eB0",
    authDomain: "rugged-weaver-485.firebaseapp.com",
    databaseURL: "https://rugged-weaver-485.firebaseio.com",
    projectId: "rugged-weaver-485",
    storageBucket: "rugged-weaver-485.appspot.com",
    messagingSenderId: "75115380018",
    appId: "1:75115380018:web:eb7198eed91e15ca"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    const title = 'Hello';
    const options = {
        body: payload.data.status
    };
    console.log('firebase push noti', options);
    return self.ServiceWorkerRegistration.showNotification(title, options);
})