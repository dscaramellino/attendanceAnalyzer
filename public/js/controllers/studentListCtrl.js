angular.module('attendanceApp')
  .controller('studentListCtrl', function($scope, classData, statService) { //this controller is just view logic

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
        return true;
       else
        return false;
    };

    $scope.calculateMean = statService.calculateMean;
    $scope.findMedian = statService.findMedian;

  });//END OF CONTROLLER
