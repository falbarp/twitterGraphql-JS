require ('dotenv').config('')
const express = require("express")
const mongoose = require("mongoose")



var uri = process.env.uriDB
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(3100, console.log("Server is running")))
  .catch(error => {
    throw error
  })