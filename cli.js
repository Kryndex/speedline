#!/usr/bin/env node
'use strict';
var meow = require('meow');
var speedIndex = require('./');

var cli = meow([
	'Usage',
	'  $ speed-index [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ speed-index',
	'  unicorns & rainbows',
	'  $ speed-index ponies',
	'  ponies & rainbows'
]);

console.log(speedIndex(cli.input[0] || 'unicorns'));