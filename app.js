(function () {
    'use strict';

    angular.module('LunchCheck',[])

    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
        
    function LunchCheckController($scope){

        $scope.meals = '';
        $scope.suggestion = '';


        $scope.check_if_too_much = function(){
            var string = $scope.meals;
            $scope.suggestion = $scope.check(string);
        };

        $scope.check = function(string){
            var length = string.length;
            if (length == 0) {
                return "Please enter data first" ;
            }
            else{
                var temp = 1;
                for (let i = 0; i < length; i++) {
                    if ($scope.meals[i] == ',') {
                        temp = temp + 1;
                    }                    
                }
                if(temp <= 3){
                    return "Enjoy!";
                }
                else{
                    return "Too much!";
                }
            }

            
        };
    }

})();
