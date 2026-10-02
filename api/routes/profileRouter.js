const express = require('express');
const profileRouter = express.Router();
const profileController = require('../controllers/profileController.js');
const passport = require('passport');

profileRouter.put('/changeDisplayName', passport.authenticate("jwt", {session: false}), profileController.changeDisplayNamePut);
profileRouter.post('/createProfile', profileController.createProfilePost);
profileRouter.put('/changeProfilePic', passport.authenticate("jwt", {session : false}), profileController.changeProfilePicUrlPut);

module.exports = profileRouter;