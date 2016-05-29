(function() {

    var UserController = function ($scope,$http) {       
            /*$http.get("https://api.github.com/users/tomtt").success(
                function(response) 
                {
                    $scope.person = response;
                    console.log(response)
                }
                );*/

        $scope.fun=function()
            {
                    //console.log("hi");
                    $http.get("https://api.github.com/search/repositories?q="+$scope.fname).success(
                function(response) 
                {
                    $scope.person = response;
                    console.log(response);
                }
                );
            }

        $scope.showMessage = function () {
            $scope.message = "Hello, World!";
        };

        $scope.saveMessage = function () {
            $scope.alert = "Saved...";
        };

        //$scope.person = person;
        $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };

    };

    


    var app = angular.module("githubViewer", ['angularUtils.directives.dirPagination']);
    app.controller("UserController", UserController);
}());