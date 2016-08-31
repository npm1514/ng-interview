(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['$scope','StudentsService'];
	function StudentsController($scope, StudentsService) {

		/**
		 * Model
		 */

		var vm = this;

		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */

		$scope.showMoreData = false;
		$scope.filterName = "";

		var getData = function(){
			StudentsService.getData()
			.then(function(response){
				if(typeof response != "object"){
					getData();
				}
				$scope.students = response;
				for (var i = 0; i < $scope.students.length; i++) {
					if(!$scope.students[i].FirstName) {
						$scope.students[i].FirstName = "Missing First Name";
					}
					if(!$scope.students[i].LastName) {
						$scope.students[i].LastName = "Missing Last Name";
					}
					if(!$scope.students[i].FavoriteFood) {
						$scope.students[i].FavoriteFood = "No Favorite Food on File";
					}
					if(!$scope.students[i].FavoriteColor) {
						$scope.students[i].FavoriteColor = "No Favorite Color on File";
					}
					if(!$scope.students[i].FavoriteMovie) {
						$scope.students[i].FavoriteMovie = "No Favorite Movie on File";
					}


				}
			})
		};
		getData();

		function activate() {
			// Initialization code goes here

		}
	}
})();
