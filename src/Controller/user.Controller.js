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

    const AlreadyFollowing = await followModel.findOne({
    follower: followerUserName,
    followee: followeeUserName
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


async function acceptFollowRequest(req,res) {
    const followerUserName = req.params.username
    const followeeUserName = req.user.username


    const followRequest = await followModel.findOne({
        follower:followerUserName,
        followee:followeeUserName,
        status:"pending"
    })

    if(!followRequest){
        return res.status(404).json({
            message:"Follow request not found"
        })
    }

    followRequest.status = "accepted"

    await followRequest.save()


    res.status(200).json({
        message:`you accecpt ${followerUserName}'s follow request`
    })

}

async function rejectFollowRequest(req, res) {

    const followerUserName = req.params.username
    const followeeUserName = req.user.username

    console.log("Follower:", followerUserName)
    console.log("Followee:", followeeUserName)

    const followRequest = await followModel.findOne({
        follower: followerUserName,
        followee: followeeUserName,
        status: "pending"
    })

    console.log("Follow Request:", followRequest)

    if (!followRequest) {
        return res.status(404).json({
            message: "Follow request not found"
        })
    }

    followRequest.status = "rejected"

    await followRequest.save()

    res.status(200).json({
        message: `You rejected ${followerUserName}'s follow request`,
        follow: followRequest
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

module.exports = {followUserControlle,unfollowUser,acceptFollowRequest,rejectFollowRequest}