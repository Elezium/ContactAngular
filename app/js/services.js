'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ContactManager.services', [])
    .value('version', '0.5')
    .value('FIREBASE_URL', 'https://threadhung.firebaseio.com/')

