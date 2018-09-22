var app = angular.module("crudapp", []);

app.controller('AppController', function($scope, $http) {

    ReadIt(); // load all information first

    $scope.updatebtn = false;
    $scope.addbtn = true;

    function ReadIt() {
        $http.get("api/ReadIt.php").success(function(data) {
            $scope.items = data;
        }).error(function(data, status, headers, config) {

           
        })
    }

    $scope.AddIt = function() {

        $http.post("api/AddIt.php", { name: $scope.name, email: $scope.email, password: $scope.password, image: $scope.image}).
        success(function(data, status, headers, config) {
            ReadIt(); //refresh all information
           
        }).error(function(data, status, headers, config) {
           
        });

        $scope.name = "";
        $scope.email = "";
        $scope.password = "";
        $scope.image = "";
    }

    $scope.DeleteIt = function(item) {
        $http.post("api/DeleteIt.php", { id: item }).
        success(function(data, status, headers, config) {
            ReadIt(); //refresh all information
        }).error(function(data, status, headers, config) {
           
        });
    }

    $scope.EditIt = function(id, name, email, password) {

        $scope.updatebtn = true;
        $scope.addbtn = false;

        $scope.id = id;
        $scope.name = name;
        $scope.email = email;
        $scope.password = password;
        $scope.image = image;
    }

    $scope.UpdateIt = function() {

        $http.post("api/UpdateIt.php", { id: $scope.id, name: $scope.name, email: $scope.email, password: $scope.password }).
        success(function(data, status, headers, config) {
            ReadIt(); //refresh all information
            
        }).error(function(data, status, headers, config) {
            
        });

        $scope.name = "";
        $scope.email = "";
        $scope.password = "";
        $scope.image = "";

        $scope.updatebtn = false;
        $scope.addbtn = true;
    }
});
