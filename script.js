

(function() {

    var UserController = function ($scope,$http) { 
       
    $scope.submitTask = function() {
        console.log('submitting task', $scope.newuser);
        //var user=$scope.newuser;
        //var str="https://api.github.com/users/"+user+"/repos";
    $http.get("https://api.github.com/users/"+$scope.newuser+"/repos")
   .success(function (response) {$scope.data = response;});
           }
        
        $scope.showMessage = function () {
            $scope.message = "Hello, World!";
        };

        $scope.saveMessage = function () {
            $scope.alert = "Saved...";
        };

        /*$scope.person = person;*/
    };

    var app = angular.module("githubViewer", []);
    app.controller("UserController", UserController);
}());