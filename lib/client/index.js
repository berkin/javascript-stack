'use strict';

require('babel-polyfill');

var _config = require('../shared/config');

document.querySelector(_config.APP_CONTAINER_SELECTOR).innerHTML = '<h1>Hello Webpack!</h1>';