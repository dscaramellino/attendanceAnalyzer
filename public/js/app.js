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
    .state('appInfo',{
    url: '/appInfo/',
    templateUrl: '/views/partials/appInfo.html',
    })
     $locationProvider.html5Mode(true);
});

//can add more states later.