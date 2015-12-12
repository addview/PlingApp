var app = angular.module('app.controllers', [])

.controller('StartCtrl', function($scope, $state) {

    $scope.login = function() {
        $state.go('login');
    };
    $scope.registration = function() {
        $state.go('registration');
    };

})

.controller('RegistrationCtrl', function($scope, $state, $ionicPopup, $ionicPlatform, $cordovaBadge, Userinformations) {

    $ionicPlatform.ready(function() {
        $cordovaBadge.promptForPermission();

        $scope.setBadge = function(value) {
            $cordovaBadge.hasPermission().then(function(result) {
                $cordovaBadge.set(value);
            }, function(error) {
                alert(error);
            });
        };

        $scope.setBadge(5);
    });


    $scope.reg = Userinformations.emptyobject();

    $scope.registration = function(form) {
        var alertPopup = $ionicPopup.alert({
            title: 'Du är registrerad i PLING',
            template: 'Du är nu registrerad i PLING och nu kan nu logga in i systemet!'
        });
        alertPopup.then(function(res) {
            //after cliked ok
            $state.go('login');
        });
    };

    $scope.signIn = function(form) {
        if (form.$valid) {
            $state.go('home');
        }
    };

})

.controller('LoginCtrl', function($scope, $state) {

    $scope.login = function() {
        $state.go('tab.notifications');
    };

})

.controller('LogoutCtrl', function($scope, $state) {

    $state.go('login');

})

.controller('NotificationCtrl', function($scope, Notifications) {

    $scope.notifications = Notifications.all();

})

.controller('NotificationDetailCtrl', function($scope, $stateParams, Notifications) {

    $scope.notifications = Notifications.get($stateParams.notificationId);

})

.controller('InformationCtrl', function($scope, $state) {

    $scope.contactinformations = function() {
        $state.go('tab.informations-contacts');
    };

    $scope.scheduledocuments = function() {
        $state.go('tab.informations-schedule');
    };

    $scope.variousdocuments = function() {
        $state.go('tab.informations-variousdocument');
    };

    $scope.contactmysettings = function() {
        $state.go('tab.informations-mysettings');
    };

})

.controller('InformationContactCtrl', function($scope) {})

.controller('InformationScheduleCtrl', function($scope) {})

.controller('InformationVariousDocumentCtrl', function($scope) {})

.controller('InformationMySettingsCtrl', function($scope, $ionicPopup, Userinformations) {

    $scope.user = Userinformations.get(1);

    // an alert dialog
    $scope.uppdated = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Uppdaterad',
            template: 'Dina uppgifter är nu uppdaterade!'
        });
        alertPopup.then(function(res) {
            //after cliked ok
        });
    };

})

.controller('SettingsCtrl', function($scope) {});
