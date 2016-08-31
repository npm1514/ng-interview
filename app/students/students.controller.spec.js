'use strict';

describe('ngInterview.students module', function() {

	var $controller;

	beforeEach(function() {
		module('ngInterview.students');
		inject(function(_$controller_) {
			$controller = _$controller_;
		});
	});

	describe('StudentsController', function() {

		it('should instantiate', function() {
			var studentsCtrl = $controller('StudentsController');
			expect(studentsCtrl).toBeDefined();
			expect(studentsCtrl.getData).toBeDefined();
			expect(studentsCtrl.getData).toHaveBeenCalled();
			expect(studentsCtrl.getData()).toBeDefined();
			expect(typeof studentsCtrl.getData()).toBe("object");
			expect(typeof $scope.students[0].Id).toBe("number");
		});

	});

});
