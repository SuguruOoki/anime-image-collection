
const twitter = require('twitter');
var fs = require('fs');

var json_data = fs.readFileSync("twitter_setting.json", "utf-8");
var obj = JSON.parse(json_data);

const client = new Twitter({
  obj.consumer_key,
  obj.consumer_secret,
  obj.access_token_key,
  obj.access_token_secret
})

client.get('search/tweets', {q: 'りゅうおうのおしごと filter:images exclude:retweets -filter:replies'}, function(error, tweets, response) {
    var result = [];
    var len = tweets.statuses.length;
    
    for(var i=0; i<len; i++){
       if(tweets.statuses[i].entities.media){
           console.log(tweets.statuses[i].entities.media[0].media_url);
       }
    }
});
