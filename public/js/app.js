angular.module('attendanceApp', ['ui.router', 'rzModule'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/partials/studentList.html',
      controller: 'studentListCtrl'
    });
});

//can add more states later.