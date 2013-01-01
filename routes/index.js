var http = require('http'),
    async = require('async');
/*
 * GET home page.
 */

exports.index = function (req, res) {
    async.series([
    getTweets],
    // optional callback
    function (err, results) {
        res.render('index', {
            title: "Josh Bennett | Philadelphia web and interactive developer",
            description: "I'm a Philadelphia interactive solutions developer specializing in web, mobile and interactive applications.",
            share_url: "http://j-ben.com",
            image_url: "http://www.gravatar.com/avatar/dccdd2e02b7979f8b48f96a91376e7eb.png",
            og_type: "website",
            tweets: results[0]
        });
    });
};


function getTweets(callback) {
    //http://api.twitter.com/1/statuses/user_timeline.json?screen_name=joshatjben
    http.get(
    	"http://api.twitter.com/1/statuses/user_timeline.json?screen_name=joshatjben",
    	function(res){
			var data = '';
		
		    res.on('data', function (chunk) {
		        data += chunk;
		    });
		
		    res.on('end', function () {
		        var obj = JSON.parse(data);
		        //console.log(obj);
		        callback(null, obj);
		    });
		    
		    
	    });
}