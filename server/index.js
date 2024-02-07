const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const DBConnect = require('./Database/DB.Connection');

const UserModal = require('./Database/UserModel');

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

DBConnect();

//signUp
app.post('/signup', async (req, res) => {
    try {

        await UserModal.findByEmailAndPhone(req.body);

        const newUser = await UserModal.create(req.body);
        const token = await newUser.generateJwtToken();

        return res.status(200).json({
            message: "success",
            token: token
        })

    } catch (error) {
        return res.json({
            "message": error.message
        })
    }
});

app.post('/signin', async (req, res) => {
    try {
        const user = await UserModal.findByEmailAndPassword(req.body);

        const token = await user.generateJwtToken();

        return res.status(200).json({
            message: "success",
            token: token
        });

    } catch (error) {
        return res.json({
            error: error.message
        })
    }
})

const port = 4000;
// http://localhost:4000

app.listen(port, () => {
    console.log("Your server is started at port : " + port);
});