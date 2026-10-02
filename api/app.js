const express = require('express');
const app = express();
const cors = require("cors");
const accountRouter = require("./routes/accountRouter.js");
const messagingRouter = require("./routes/messagingRouter.js");
const profileRouter = require("./routes/profileRouter.js");

//if getting data from json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))

app.use('/api/account', accountRouter);
app.use('/api/messaging', messagingRouter);
app.use('/api/profile', profileRouter);


//to start the server on local port 3000
app.listen(3000, (error) => {
    if (error) {
        throw error;
    }

    console.log("Messaging App - listening on port 3000")
})

