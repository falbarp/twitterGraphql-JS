const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Tweet {
    _id: ID!
    text: String!
    source: String!
    lang: String
    reply_count: Int!
    retweet_count: Int
    favorite_count: Int
    createdAt: String!
    user: [User]

 }
 type User {
  id: Float!
  name: String!
  screen_name: String
  location: String
  description: String
  followers_count: Int
  friends_count: Int

 }

  type Query {
    tweets:[Tweet!]
    findByLanguage(lang: String):[Tweet]  }

  schema {
    query: Query
    
  }
`)