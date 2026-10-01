const express = require("express");
const accountRouter = express.Router();
const accountController = require("../controllers/accountController.js");

accountRouter.post('/signup', accountController.signUpPost);
accountRouter.post('/login', accountController.loginPost);

module.exports = accountRouter;