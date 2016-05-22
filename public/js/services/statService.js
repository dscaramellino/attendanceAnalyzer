angular.module('attendanceApp')
    .factory('statService', function(classData){

      var students = classData.getClassData();

      return {

          calculateMean : function(students){
            var sum = 0;
            for(var i = 0; i < students.length; i++){
              sum += students[i].attendanceYtd;
            }
            var avg = sum/students.length;
            return avg;
          },

          findMedian : function(students) {
            var medianAttendance;
            // extract the .attendanceYtd field and sort the resulting array
            var allAttendanceRates = students.map(function(student) {
              return student.attendanceYtd;
            }).sort(function(a, b) {
              return a - b;
            });
            var size = allAttendanceRates.length;
            if (size % 2 === 0) {
              return medianAttendance = (allAttendanceRates[size / 2 - 1] + allAttendanceRates[size / 2]) / 2;
            } else {
              return medianAttendance = allAttendanceRates[(size - 1) / 2];
            }
          }
      }
    });
