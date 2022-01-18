
const Tweet = require("../../models/model")


module.exports = {
  tweets: async () => {
    try {
      const tweetsFetched = await Tweet.find()
      return tweetsFetched.map(tweet => {
        return {
          ...tweet._doc,
          name:tweet.user.name,
          _id: tweet.id,
  
          
        }
      })
    } catch (error) {
      throw error
    }
  },
 
  findByLanguage: async ({lang}) => {
    try {
      const langquery = lang
      const tweetsFetched = await Tweet.find({lang:langquery})
      return tweetsFetched.map(tweet => {
        return {
          ...tweet._doc,
          _id: tweet.id,
  
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  findInText: async ({text}) => {
    try {
      const textquery = text
      const regex = new RegExp(textquery, 'i') //Regular expression for case insensitive and icludes string
      const tweetsFetched = await Tweet.find({text: {$regex: regex}})
      return tweetsFetched.map(tweet => {
        return {
          ...tweet._doc,
          _id: tweet.id,
  
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  findByUserName: async ({name}) => {
    try {
      const namequery = name
      const tweetsFetched = await Tweet.find({name:namequery})
      return tweetsFetched.map(tweet => {
        return {
          ...tweet._doc,
          _id: tweet.id,
  
          
        }
      })
    } catch (error) {
      throw error
    }
  },
  
}

