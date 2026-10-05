const express = require('express')
const postRoute =  express.Router()
const postController = require('../Controller/post.Controller')
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require('../middleware/post.middleware')



postRoute.post('/', upload.single('chacha'), identifyUser ,postController.createPostController)


postRoute.get('/', identifyUser ,postController.userPostController)

postRoute.get('/details/:postId', identifyUser ,postController.getPostDetailsController)



module.exports = postRoute
