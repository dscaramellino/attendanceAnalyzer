angular.module('attendanceApp', ['ui.router', 'rzModule'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/partials/studentList.html',
      controller: 'studentListCtrl'
    })
    .state('studentHistory',{
    url: '/studentHistory/:student',
    templateUrl: '/views/partials/studentHistory.html',
    controller: 'studentHistoryCtrl'
    })
     $locationProvider.html5Mode(true);
});

//can add more states later.