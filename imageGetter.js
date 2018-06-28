
const Twitter = require('twitter')

const consumer_key = '1aFit72tBRlFiLn7cvAJixOK6'
const consumer_secret = 'l8BljS6OjpHFLnMsBZAGh4SlqlkxoXGnB92mQ8cMzuu3seZq64'
const access_token_key = '1319888646-gfXOx3YrDq0O6us2U7nwvEfOrT5qyt5KFq5mizw'
const access_token_secret = 'rUe4IUGeht1Sbq1qF5JfURY86jM1fiWOsgGZGH15XfM0S'

const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
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
