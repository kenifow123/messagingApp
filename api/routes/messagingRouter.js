const express = require("express");
const messagingRouter = express.Router();
const messagingController = require("../controllers/messagingController.js");
const passport = require("passport");
require('../config/passport.js')

messagingRouter.post('/messageUser', passport.authenticate("jwt", { session: false }), messagingController.sendUserMessagePost);
messagingRouter.post('/messageGroup', passport.authenticate("jwt", { session: false }), messagingController.sendGroupMessagePost);

module.exports = messagingRouter;