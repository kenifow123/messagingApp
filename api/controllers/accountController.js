const bcrypt = require("bcryptjs")
const { prisma } = require("../lib/prisma.js")
const jwt = require("jsonwebtoken");
require("dotenv").config();


const signUpPost = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await prisma.user.create({
            data: {
                email : req.body.email,
                password: hashedPassword,
                username: req.body.username,
            }
        })
        res.json({message: 'Created user:'})
    } catch (err) {
        console.log(err);
        next(err);
    }
}

const loginPost = async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: req.body.username,
            }
        })

        if (!user) {
            res.status(401).json({message: "User not found"})
        }

        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) {
            res.status(401).json({message: "Password is incorrect"})
        }

        console.log('Login Success')
        // console.log(user);
        jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            res.json({
                token
            });
        })
    } catch (err) {
        res.status(401).json({ message: err.message })
    }
}

module.exports = {
    signUpPost,
    loginPost
}