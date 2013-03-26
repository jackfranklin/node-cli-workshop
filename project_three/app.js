var fs = require("fs");
exports.markdownLinker = function(text) {
  var reg = /(^|[^a-zA-Z0-9_!])(@)([a-zA-Z0-9_]{1,20})/g;
  return text.replace(reg, function(match) {
    match = match.trim()
    return " [" + match + "](http://twitter.com/" + match.replace("@", "") + "/)";
  });
};

exports.loadParseFile = function(filepath) {
  fs.readFile(filepath, 'utf8', function(err, data) {
    if(err) {
      console.log(err);
      return;
    }
    console.log(exports.markdownLinker(data));
  });
}
