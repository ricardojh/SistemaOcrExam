angular.module('appTareas',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('clase',{
            url: '/clase',
            templateUrl: 'clase.html'
        })
        
    })