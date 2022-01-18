require ('dotenv').config('')
const express = require("express")
const mongoose = require("mongoose")


const { graphqlHTTP } = require("express-graphql")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

var uri = process.env.uriDB
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(3100, console.log("Server is running")))
  .catch(error => {
    throw error
  })