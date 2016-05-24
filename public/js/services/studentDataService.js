angular.module('attendanceApp')
    .factory('studentData', function($http, $q){

  // need this service to handle the data then notify the controller when it finish

  return {
    getClassData: function() {
      var deferred = $q.defer(),
      httpPromise = $http.get('https://script.googleusercontent.com/macros/echo?user_content_key=q3CYF2thTPqe4a0A-0-UhF-Slp3ZHPnvx0lTeO28OV1R4WFQ0eFbeA5tHX_1GlppCxQ-rY62G_UOcLfO7mfGug4L1DQRPsCsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNYYfJlGdgHzYJZQwCxCgTje5cfV7yw9E3HqIKO543MazTAG79LdvSx5j0fAD_Z8_9pytj_A4aoE&lib=M4eROh2CW3-Nf8izyy0Rlae3i8jI5dE-p');

      httpPromise.success(function(students) {
        deferred.resolve(students);
      })
      .error(function(error) {
        deferred.reject();
        console.log(error);
    });
      return deferred.promise;
    }
  };
});