
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
  
}

