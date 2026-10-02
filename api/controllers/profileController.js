const { prisma } = require('../lib/prisma.js');

const changeDisplayNamePut = async (req, res) => {
    await prisma.profile.update({
        where: {
            userId: req.user.id,
        },
        data: {
            displayName: req.body.displayName,
        }
    })

    res.json({message: 'Change Display name'});
}

const changeProfilePicUrlPut = async (req, res) => {
    await prisma.profile.update({
        where: {
            userId: req.user.id,
        },
        data: {
            imageUrl: req.body.imageUrl,
        }
    })

    res.json({message: 'Change Display name'});
}

const createProfilePost = async (req, res) => {
    await prisma.profile.create({
        data: {
            displayName: req.body.displayName,
            userId: req.body.userId,
        }
    })

    res.json({message : 'profile created'})

}


module.exports = {
    changeDisplayNamePut,
    createProfilePost,
    changeProfilePicUrlPut,
}