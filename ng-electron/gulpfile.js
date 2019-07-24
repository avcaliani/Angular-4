/**
 * This file was created because of an issue related to Angular 8.
 * More details can be found here: https://github.com/angular/angular/issues/30835#issuecomment-513030767
 */
const { src, dest } = require('gulp');
var replace = require('gulp-replace')

exports.default = function (cb) {    
    src(['dist/ng-electron/index.html'])
        .pipe(replace('type="module"', 'type="text/javascript"'))
        .pipe(dest('dist/ng-electron/'));
    cb();
};