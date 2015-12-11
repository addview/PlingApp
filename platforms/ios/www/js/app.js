var app = angular.module('app', ['ionic', 'app.controllers', 'app.services']);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});

app.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    .state('start', {
    url: '/start',
    templateUrl: 'templates/startview.html',
    controller: 'StartCtrl'
    })

    .state('registration', {
        url: '/registration',
        templateUrl: 'templates/registration.html',
        controller: 'RegistrationCtrl'
    })

    .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // each tab has its own nav history stack:  
    .state('tab.notifications', {
        url: '/notifications',
        views: {
            'tab-notifications': {
                templateUrl: 'templates/tab-notifications.html',
                controller: 'NotificationCtrl'
            }
        }
    })

    .state('tab.notification-detail', {
        url: '/notifications/:notificationId',
        views: {
            'tab-notifications': {
                templateUrl: 'templates/notification-detail.html',
                controller: 'NotificationDetailCtrl'
            }
        }
    })

    .state('tab.informations', {
        url: '/informations',
        views: {
            'tab-informations': {
                templateUrl: 'templates/tab-informations.html',
                controller: 'InformationCtrl'
            }
        }
    })

    .state('tab.informations-contacts', {
        url: '/informations-contacts',
        views: {
            'tab-informations': {
                templateUrl: 'templates/tab-information-contacts.html',
                controller: 'InformationContactCtrl'
            }
        }
    })

    .state('tab.informations-schedule', {
        url: '/informations-schedule',
        views: {
            'tab-informations': {
                templateUrl: 'templates/tab-information-schedule.html',
                controller: 'InformationScheduleCtrl'
            }
        }
    })

    .state('tab.informations-mysettings', {
        url: '/informations-mysettings',
        views: {
            'tab-informations': {
                templateUrl: 'templates/tab-information-mysettings.html',
                controller: 'InformationMySettingsCtrl'
            }
        }
    })

    .state('tab.informations-variousdocument', {
        url: '/informations-variousdocument',
        views: {
            'tab-informations': {
                templateUrl: 'templates/tab-information-variousdocument.html',
                controller: 'InformationVariousDocumentCtrl'
            }
        }
    })

    .state('tab.settings', {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'templates/tab-settings.html',
                controller: 'SettingsCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/start');

});
