angular.module('attendanceApp')
  .controller('studentListCtrl', function($scope, $http, classData) {

    $scope.sortType     = 'attendanceYtd';
    $scope.searchStudent   = '';
    $scope.students = classData.getClassData();
    $scope.filteredStudents=[ ];
    $scope.averageAttendance;
    $scope.median;

    //slider
    $scope.rangeSlider = {
        value: 0.5,
        options: {
            floor: 0,
            ceil: 1,
            step: 0.01,
            precision: 1
        }
    };

    //custom filter
    $scope.rangeFilter = function(students){
       if(students.attendanceYtd <= $scope.rangeSlider.value)
        return true; // this will be listed in the results
       else
        return false; // otherwise it won't be within the results
    };

    //mean calculation : this approach is only best for small data -- we are iterating over array twice!
    $scope.calculateMean = function(students){ //maybe inject a new array of filtered students
      var sum = 0;
      for(var i = 0; i < students.length; i++){
        sum += students[i].attendanceYtd; //don't forget to add the base 
      }
      var avg = sum/students.length;
      return avg;
      $scope.averageAttendance = avg;
      console.log($scope.averageAttendance);
    };

    //median calculation:
    $scope.findMedian = function(students) {
      // extract the .values field and sort the resulting array
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
      return $scope.averageAttendance;
    };

  });//END OF CONTROLLER
