const beamsClient = new PusherPushNotifications.Client({
    instanceId: 'd3ac2a82-f1c5-43b6-a9fc-99cd9e99706a',
});

beamsClient.start()
    .then(() => beamsClient.addDeviceInterest('hello'))
    .then(() => console.log('Successfully registered and subscribed!'))
    .catch(console.error);