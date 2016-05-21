angular.module('attendanceApp')
  .filter('priceRange',function(){
//Brainstorming ideas for custom filter : too tired to start
  return function(arrayItems,rangeInfo){

     return arrayItems.filter(function(student){
       console.log(student.attendanceYTD);
       return (student.attendanceYTD > rangeInfo.min && student.attendanceYTD < rangeInfo.max);
     });

  } 
});