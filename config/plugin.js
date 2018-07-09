'use strict';

// had enabled by egg
// exports.static = true;

//开启cors
exports.cors = {
    enable: true,
    package: 'egg-cors'
};


//开启mysql
exports.mysql = {
    enable: true,
    package: 'egg-mysql'
};