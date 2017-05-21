// https://www.npmjs.com/package/node-minify

// node minify.js 

var compressor = require('node-minify');
 
// Using Google Closure Compiler 
compressor.minify({
  compressor: 'gcc',
  input: 'sample.js',
  output: 'sample.min.js',
  callback: function (err, min) {}
});