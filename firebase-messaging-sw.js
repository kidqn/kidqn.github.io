self.addEventListener('push', function(event) {

    var apiPath = 'https://fcm.googleapis.com/fcm/send';
    event.waitUntil(registration.pushManager.getSubscription().then(function (subscription){
    
        return fetch(apiPath).then(function(response){
            if(response.status !== 200){
                throw new Error();
            }
    
            return response.json().then(function(data){
                console.log('notificaiton data', data);
                var title = data.title;
                var message = data.body;
                var icon = data.icon;
                var tag = data.tag;
                var url = data.url;
                return self.registration.showNotification(title,{
                   body: message,
                   icon: icon,
                   tag: tag,
                   data: url
                });
            })
        }).catch(function(err){
    
        })
    
    }));
    return;
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