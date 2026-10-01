

const sendUserMessagePost = async (req, res) => {
    console.log('sendUserMessagePost');
    res.json({message: 'sendUserMessagePost'});
}


const sendGroupMessagePost = async (req, res) => {

}


module.exports = {
    sendUserMessagePost,
    sendGroupMessagePost
}