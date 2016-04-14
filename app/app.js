(function(){
    'use strict';

    var angular = require('angular');

    require('angular-ui-router');
    require('./components');

    var application = angular.module('app', [
        'ui.router',
        'app.list',
        'app.movie',
        'app.movie.header',
        'app.movie.details',
        'app.rating'
    ])
    var appRoot = '/app/components/';

    application.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('list', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: appRoot + 'list-header/list-header.html'
                    },
                    'content': {
                        templateUrl: appRoot + 'list/list.html',
                        controller: 'ListCtrl',
                        controllerAs: 'listCtrl'
                    }
                }
            })
    }]);
})();