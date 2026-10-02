const express = require("express");
const accountRouter = express.Router();
const accountController = require("../controllers/accountController.js");

accountRouter.post('/signup', accountController.signUpPost);
accountRouter.post('/login', accountController.loginPost);
accountRouter.post('/createGroup', accountController.createGroupPost);

module.exports = accountRouter;