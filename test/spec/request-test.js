'use strict';


describe('Request-Promise-Bluebird', function () {

    it('should throw when it is required', function () {

        expect(function () {
            require('../../');
        }).to.throw();

    });

    it('should throw when the errors are required', function () {

        expect(function () {
            require('../../errors');
        }).to.throw();

    });

});
