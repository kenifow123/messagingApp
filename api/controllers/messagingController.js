const { prisma }  = require('../lib/prisma.js');

const sendUserMessagePost = async (req, res) => {
    const response = await prisma.message.create({
        data: {
            content: req.body.content,
            authorId: req.user.id,
            recipientId: Number(req.body.recipientId),
        }
    })
    res.json({message: 'user to user message sent'});
}


const sendGroupMessagePost = async (req, res) => {
    await prisma.message.create({
        data: {
            content: req.body.content,
            authorId: req.user.id,
            groupId: req.body.groupId,
        }
    })
}


module.exports = {
    sendUserMessagePost,
    sendGroupMessagePost
}