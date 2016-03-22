log-leveler
================

If you're not particularly fond of log levels and would rather just toggle different loggers on and off, but utilize a logger library that requires levels, this library may be helpful.

## Install

```
npm install log-leveler
```

## Useage

Given a set of enabled/disabled loggers, log-leveler calculates your logger levels, and enabled level for you to feed into your favorite level-friendly logger.

```javascript
var leveler = require('log-leveler');

var config = leveler({
    info: true,
    debug: false,
    warn: true,
    error: false,
    brad: true,
    gecko: false
});

console.log(config.levels);
// { info: 0, warn: 1, brad: 2, debug: 3, error: 4, gecko: 5 }

console.log(config.level);
// brad
```

Enabled loggers will be sorted to the lower indexed levels, and your level will be set to the last enabled logger.


### Example of using it with [winston](https://github.com/flatiron/winston):

```javascript
var config = leveler({
    info: true,
    debug: false,
    warn: true,
    error: true
});

app.log = new (winston.Logger)({
	levels: config.levels,
	transports: [
		new (winston.transports.Console)({
			level: config.level
		})
	]
});
```
