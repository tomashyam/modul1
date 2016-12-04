(function () {
'use strict';

angular.module('ex1', [])
.controller('userInput', userInput);

userInput.$inject = ['$scope'];
function userInput($scope) {
  $scope.userInput;

  $scope.checkInput = function(){
    if ($scope.userInput == "" || !$scope.userInput){
      $scope.inputStatus = "first enter data";
      return;
    }
    var dishes = $scope.userInput.split(',');
    if (dishes.length == 0){
        $scope.inputStatus = "first enter data";
    }
    else if (dishes.length <=3 ){
        $scope.inputStatus = "data is cool";
      }
    else {
      $scope.inputStatus = "NOT COLLL is cool";
    }

  };

  $scope.inputStatus;

}

})();
