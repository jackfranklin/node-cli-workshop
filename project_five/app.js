var request = require('request');
var fs = require("fs");

module.exports = function(username) {
	var url = "http://github.com/" + username + ".json";
	request(url, function(err, resp, body) {
		if (!err && resp.statusCode == 200) {
			fs.writeFile("response.json", body, function(err) {
				if(err) throw err;
				console.log("SAVED");
			})
  		}
	});

}