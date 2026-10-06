const userModel = require('../model/user.model')
const followModel = require('../model/follow.model')



async function followUserControlle(req,res) {

    const followerUserName = req.user.username
    const followeeUserName = req.params.username

    const isFolloweeExist = await userModel.findOne({
        username:followeeUserName
    })

    if(!isFolloweeExist){
        return res.status(404).json({
            message:"User you are trying to to follow does not exist!"
        })
    }


    if(followeeUserName == followerUserName){
        return res.status(400).json({
            message:"you cannot follow yourself"
        })
    }

    const AlreadyFollowing = await followModel.find({
        follower:followerUserName,
        followee:followeeUserName
    })
    

    if(AlreadyFollowing){
        return res.status(200).json({
            message:`you are already following ${followeeUserName}` 
        })
    }

    const followRecord = await followModel.create({
        follower:followerUserName,
        followee:followeeUserName
    }) 



    res.status(201).json({
        message:`you are noe following ${followeeUserName}`,
        follow:followRecord
    })
}



async function unfollowUser(req,res) {
    const followerUserName = req.user.username
    const followeeUserName = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower:followerUserName,
        followee:followeeUserName
    })


    if(!isUserFollowing){
        return res.status(200).json({
            message:`You are not following ${followeeUserName}`
        })
    }


    await followModel.findByIdAndDelete(isUserFollowing._id)


    res.status(200).json({
        message:`you have unfollowed ${followeeUserName}`
    })
}

module.exports = {followUserControlle,unfollowUser}