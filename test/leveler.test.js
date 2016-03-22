var assert = require('chai').assert,
    leveler = require('../index');

describe('Winston No Levels Logger', function() {

    it('should work with one logger that is enabled', function() {
        var config = leveler({
            info: true
        });

        assert.isObject(config.levels);
        assert.isString(config.level);

        assert.equal(config.level, 'info');
        assert.deepEqual(config.levels, { info: 0 });
    });

    it('should work with two loggers, one that is disabled', function() {
        var config = leveler({
            error: true,
            info: false,
            warn: true
        });

        assert.isObject(config.levels);
        assert.isString(config.level);
        assert.equal(config.level, 'warn');
        assert.deepEqual(config.levels, { error: 0, warn: 1, info: 2 });
    });

    it('should work with all five loggers, all enabled', function() {
        var config = leveler({
            error: true,
            warn: true,
            info: true,
            api: true,
            cache: true
        });

        assert.isObject(config.levels);
        assert.isString(config.level);
        assert.equal(config.level, 'cache');
        assert.deepEqual(config.levels, { error: 0, warn: 1, info: 2,  api: 3, cache: 4});
    });

});
