jqb-extend
==========

Object extending utility:

    var extend = require('jqb-extend');
    extend({a:1},{b:1});     // {a:1,b:1}
    extend({a:1},{a:2})      // {a:2}
    
> The implementation is heavily inspired to _UnderscoreJS_ extend:  
> [http://underscorejs.org/#extend](http://underscorejs.org/#extend)
    
## Run Tests

If you want to run tests on this module you can prompt:

    npm install && grunt
    