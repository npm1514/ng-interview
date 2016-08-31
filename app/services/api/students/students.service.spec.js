'use strict';

describe('ngInterview.api.students', function() {

	beforeEach(module('ngInterview.api.students'));

	describe('StudentsService', function() {

		it('should be instantiated', inject(function(StudentsService) {
			expect(StudentsService).toBeDefined();
			expect(StudentsService.getData).toBeDefined();
			expect(StudentsService.getData).toHaveBeenCalled();
			expect(StudentsService.getData()).toBeDefined();
			expect(typeof StudentsService.getData()).toBe("object");
		}));

	});

});
