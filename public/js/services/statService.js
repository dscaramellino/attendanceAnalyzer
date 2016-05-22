angular.module('attendanceApp')
    .factory('statService', function(){

      return {

          calculateMean : function(students){ 
            var sum = 0;
            for(var i = 0; i < students.length; i++){
              sum += students[i].attendanceYtd; 
            }
            var avg = sum/students.length;
            $scope.averageAttendance = avg;
          },

          findMedian : function(students) {
            // extract the .attendanceYTP field and sort the resulting array
            var allAttendanceRates = students.map(function(student) {
              return student.attendanceYtd;
            }).sort(function(a, b) {
              return a - b;
            });
            var size = allAttendanceRates.length;
            if (size % 2 === 0) {
              $scope.averageAttendance = (allAttendanceRates[size / 2 - 1] + allAttendanceRates[size / 2]) / 2;
            } else {
              $scope.averageAttendance = allAttendanceRates[(size - 1) / 2];
            }
          }
      }
    });
