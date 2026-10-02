const express = require('express')
const postRoute =  express.Router()
const postController = require('../Controller/post.Controller')
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})



postRoute.post('/', upload.single('chacha'), postController)



module.exports = postRoute
