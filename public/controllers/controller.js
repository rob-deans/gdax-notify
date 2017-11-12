var myApp = angular.module('gdax-notification', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

var refresh = function() {
  $http.get('/accounts').success(function(response) {
    console.log(response);
    $scope.accounts = JSON.parse(response.body)

    // $scope.contactlist = response;
    // $scope.contact = "";
  });
};

refresh();

var orders = function() {
    $http.get('/orders').success(function(res) {
        console.log(res)
        $scope.orders = JSON.parse(res.body)
    })
}

orders()

var fills = function() {
    $http.get('/fills').success(function(res) {
        console.log(res)
        $scope.fills = JSON.parse(res.body)
    })
}

fills()

// $scope.remove = function(id) {
//   console.log(id);
//   $http.delete('/contactlist/' + id).success(function(response) {
//     refresh();
//   });
// };

// $scope.edit = function(id) {
//   console.log(id);
//   $http.get('/contactlist/' + id).success(function(response) {
//     $scope.contact = response;
//   });
// };  

// $scope.update = function() {
//   console.log($scope.contact._id);
//   $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
//     refresh();
//   })
// };

// $scope.deselect = function() {
//   $scope.contact = "";
// }

}]);
