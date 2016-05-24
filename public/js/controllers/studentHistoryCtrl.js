angular.module('attendanceApp')
  .controller('studentHistoryCtrl', function($scope, $stateParams, studentData) {

    //get all  data
    $scope.students;
    $scope.studentId = $stateParams.student;
    console.log($scope.studentId);
    $scope.studentData =[];

    //use promise. wait for data to return then run
    studentData.getClassData().then(function(students){
      $scope.students = students;
      //console.log($scope.students);

      //find studentId match
      for(var i = 0; i <= students.length; i++){
          if(students[i].studentId == $scope.studentId)
            $scope.studentData.push(students[i]);
          }
    });
});
