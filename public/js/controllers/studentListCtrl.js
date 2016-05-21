angular.module('attendanceApp')
  .controller('studentListCtrl', function($scope, $http) {
    //variables : what we need
    $scope.sortType     = 'attendanceYtd'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchStudent   = '';     // set the default search/filter term
    $scope.students = [];
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

    //load student info in table: studentName
     $http({
          method: 'GET',
          url: 'https://script.googleusercontent.com/macros/echo?user_content_key=q3CYF2thTPqe4a0A-0-UhF-Slp3ZHPnvx0lTeO28OV1R4WFQ0eFbeA5tHX_1GlppCxQ-rY62G_UOcLfO7mfGug4L1DQRPsCsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNYYfJlGdgHzYJZQwCxCgTje5cfV7yw9E3HqIKO543MazTAG79LdvSx5j0fAD_Z8_9pytj_A4aoE&lib=M4eROh2CW3-Nf8izyy0Rlae3i8jI5dE-p',
       }).success(function(data){
          for(var i = 0; i < data.length; i++){
            $scope.students.push(data[i]);
          }
      }).error(function(){
          alert("error");
      });
      console.log($scope.students);

  });//END OF CONTROLLER
