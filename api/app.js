const express = require('express');
const app = express();
const cors = require("cors");

//if getting data from json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))



//to start the server on local port 3000
app.listen(3000, (error) => {
    if (error) {
        throw error;
    }

    console.log("Messaging App - listening on port 3000")
})

