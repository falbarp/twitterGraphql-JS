require ('dotenv').config('')
const mongoose = require('mongoose')
const express = require("express")
const Twit = require('twit')

const app = express()

const T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret:process.env.consumer_secret ,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms: 60 * 1000,
  strictSSL: true, 
});


var uri = process.env.uriDB
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(3002, console.log("Scrapper server is running")))
  .catch(error => {
    throw error
  })

const Schema = mongoose.Schema;
const tweetSchema = new Schema({}, {"strict": false});
const Tweet = mongoose.model('Tweet', tweetSchema);




const twtscr=
app.get('/scrapper', function(req, res) {
  let search = req.query.search;
  let stream = T.stream('statuses/filter', { track: search })

  stream.on('tweet', function (obj) {
    let TwitterData = new Tweet(obj); 
    TwitterData.save(); 
    console.log(obj);
  })
});

exports.scr