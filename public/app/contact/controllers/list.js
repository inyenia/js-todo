'use strict';

angular.module('myApp').controller('ContactListController', function ($scope, $location, ContactService) {

	$scope.dataSource = [];


	$scope.add = function () {
		$location.path('/contact/new');
	};

	$scope.edit = function (data) {
		$location.path('/contact/edit/' + data._id);
	};

    $scope.delete = function (data) {
        ContactService.delete(data).then(function () {
                $scope.refresh();
            }
        );
    };

    $scope.refresh = function () {
		$scope.dataReceived = false;
		var httpPromise = ContactService.list();
		httpPromise.then(function(httpResponse) {
			$scope.dataSource = httpResponse.data;
			$scope.dataReceived = true;
		});
	};

	$scope.refresh();

});