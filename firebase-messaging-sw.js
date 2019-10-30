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
    const title = 'Hello';
    const options = {
        body: payload.data.status,
        icon: '/setting.png',
        image: '/setting.png',
        badge: '/setting.png'
    };
    console.log('firebase push noti', options);
    return self.ServiceWorkerRegistration.showNotification(title, options);
})