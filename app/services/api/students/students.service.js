(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */

		this.getName = getName; // This function serves no purpose. It's just here as an example.

		/**
		 * Implementations
		 */
		this.getData = function(){
			return $http({
				method: "GET",
				url: "http://il-resume-api.azurewebsites.net/api/students"
			}).then(function(response){
				console.log(response.data);
				if(typeof response.data != "object"){
					rerun();
				} else {
					return response.data;
				}
			},function(err){
				if(err){
					rerun();
				}
			});
		};
		var rerun = this.getData;

		function getName() {
			return 'studentsService';
		}
	}
})();
