const express = require('express')
const postRoute =  express.Router()
const postController = require('../Controller/post.Controller')
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})



postRoute.post('/', upload.single('chacha'), postController.createPostController)


postRoute.get('/',postController.userPostController)

postRoute.get('/details/:postId', postController.getPostDetailsController)



module.exports = postRoute
