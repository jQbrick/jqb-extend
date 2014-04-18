
var extend = require('../index');

describe('jqb-extend', function() {
    
    describe('when called with a single argument', function() {
    
        it('should return given input - undefined', function() {
            expect(
                extend()
            ).to.be.undefined;
        });

        it('should return given input - object', function() {
            expect(
                extend({})
            ).to.deep.equal({});
        });

        it('should return given input - number', function() {
            expect(
                extend(1)
            ).to.equal(1);
        });

        it('should return given input - string', function() {
            expect(
                extend('foo')
            ).to.equal('foo');
        });
        
        it('should return given input - boolean true', function() {
            expect(
                extend(true)
            ).to.equal(true);
        });
        
        it('should return given input - boolean false', function() {
            expect(
                extend(false)
            ).to.equal(false);
        });
        
        it('should return given input - array', function() {
            expect(
                extend([1,2,3])
            ).to.deep.equal([1,2,3]);
        });
        
    });
    
    
    describe('extend objects', function() {
    
        it('should add new properties', function() {
            expect(
                extend({a:1},{b:1})
            ).to.deep.equal({a:1,b:1});
        });
        
        it('should override properties', function() {
            expect(
                extend({a:1},{a:2})
            ).to.deep.equal({a:2});
        });
    
    });
    
});