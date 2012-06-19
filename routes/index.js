
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', 
  {
	  title: "Josh Bennett | Philadelphia web and interactive developer"
	  , description: "I'm a Philadelphia interactive solutions developer specializing in web, mobile and interactive applications."
	  , share_url: "http://j-ben.com"
	  , image_url: "http://www.gravatar.com/avatar/dccdd2e02b7979f8b48f96a91376e7eb.png"
	  , og_type: "website"
  });
};