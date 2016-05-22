angular.module("attendanceApp")
  .controller('studentHistoryCtrl', function($scope, $http, $stateParams) {
    $scope.studentId = $stateParams.student;
    console.log($scope.studentId); //got it!

    //store student data here:
    $scope.studentData =[]; //API IS NOT WORKING. TESTED WITH POSTMAN, RETURNING AN EMPTY OBJECT

    //grab all student data - for specific student
     $http({
          method: 'GET',
          url: 'https://script.google.com/macros/s/AKfycbxtbtw8aL1oY3eyxjFE98kOCqdaG4T4pWvPbNcEv9PlWHPbHQF_/exec?studentId='+$scope.studentId,
       }).success(function(data){
          for(var i = 0; i < data.length; i++){
            $scope.studentData.push(data[i]);
          }
      }).error(function(){
          alert("error");
      });
      console.log($scope.studentData);
});
