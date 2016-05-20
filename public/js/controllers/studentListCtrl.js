angular.module('attendanceApp')
  .controller('studentListCtrl', function($scope, $http) {
    //filter
    $scope.sortType     = 'attendanceYtd'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term

    //load student info in table: studentName
    $scope.students = [];
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
