const express = require('express')

const looneyRouter = require('../api/LooneyTunes/looney-router')

const server = express()

server.use(express.json())

server.use('/api/looney', looneyRouter)

module.exports = server;