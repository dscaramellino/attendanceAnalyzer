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
    templateUrl: '/views/partials/moreInfo.html',
    controller: 'studentHistoryCtrl'
    })
});

//can add more states later.