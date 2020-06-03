const fs = require('fs');
/**
 * This script allows Angular using electron module (native node modules) \o/
 * You should execute "yarn postinstall" or "npm run postinstall" right after install all dependencies.
 */

const ENCODING = 'utf8';
const BROWSER_JS = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(BROWSER_JS, ENCODING, (err, data) => {

  if (err)
   return console.log(err);
  
  var result = data.replace(/target: "electron-renderer",/g, '');
  result = result.replace(/target: "web",/g, '');
  result = result.replace(/return \{/g, 'return {target: "electron-renderer",');

  fs.writeFile(BROWSER_JS, result, ENCODING, (err) => {
    if (err)
      return console.log(err);
  });

});
