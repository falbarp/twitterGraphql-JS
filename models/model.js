const mongoose = require("mongoose")

const Schema = mongoose.Schema

const tweetSchema = new Schema(
  {
    created_at: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      required: true,
    },

    lang: {
        type: String,
        required: true,
      },

    reply_count: {
        type: Number,
        required: false,
      },
      retweet_count: {
        type: Number,
        required: false,
      },
      favorite_count: {
        type: Number,
        required: false,
      },
      user: [
      {
        id: { 
        type: Number,
        required: false},
        name: { 
        type: String,
        required: false},
        screen_name: { 
        type: String,
        required: false},
        location: { 
        type: String,
        required: false},
        description: { 
        type: String,
        required: false},
        followers_count: { 
        type: Number,
        required: false},
        friends_count: { 
        type: Number,
        required: false},
        
       
      }]
      ,
  },
  { timestamps: true }
)

module.exports = mongoose.model("Tweet", tweetSchema)