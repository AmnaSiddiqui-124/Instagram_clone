const { toFile } = require("@imagekit/nodejs");

const postModel = require('../model/user.post');

const ImageKit = require('@imagekit/nodejs');

const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});


async function createPostController(req, res) {

    console.log(req.body, req.file);

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Token not provided, unauthorized access"
        });
    }
let decoded ; 

   try {
     decoded = jwt.verify(
        token,
        process.env.JWT_KEY
    );

   } catch (err) {
    res.status(401).json({
        message:"user not authorized"
    })
   }

   console.log(decoded);
   


    const file = await imagekit.files.upload({
        file: await toFile(
            Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "cohort-2-insta-clone"
    });

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    });

    res.status(201).json({
        message: "Post created successfully",
        post
    });
}


module.exports = createPostController;