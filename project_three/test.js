var markdownLinker = require("./app.js").markdownLinker;
var assert = require("assert");

var start = "Hello @Bob";
var res = markdownLinker(start);
assert.equal(res, "Hello [@Bob](http://twitter.com/Bob/)");
