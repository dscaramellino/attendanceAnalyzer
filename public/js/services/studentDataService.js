angular.module('attendanceApp')
    .factory('studentData', function($http){

      return {

        getStudentData : function() {

          var studentsData = [ ];

          $http({
            method: 'GET',
            url: 'https://script.google.com/macros/s/AKfycbxtbtw8aL1oY3eyxjFE98kOCqdaG4T4pWvPbNcEv9PlWHPbHQF_/exec?studentId='+$scope.studentId,
          }).success(function(data){

            for(var i = 0; i < data.length; i++)
              studentsData.push(data[i]);

          }).error(function(){
            console.log("error", error);
          });

          return studentsData;

        }
      };
    });