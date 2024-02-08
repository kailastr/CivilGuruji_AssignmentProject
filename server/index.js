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

//get all user details
app.get('/', async (req, res) => {
    try {
        const allData = await UserModal.find({});

        return res.status(200).json({
            message: "success",
            data: allData
        });
    } catch (error) {
        return res.json({
            message: error
        })
    }
})

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

        const currentDate= new Date().toISOString();

        const updatedUser = await UserModal.findOneAndUpdate(
            { _id: user._id }, // Assuming user._id is the unique identifier for the user
            { $set: { lastLogin: currentDate } },
            { new: true } // To return the updated user document
        );
        console.log(updatedUser)

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


// string to iso
// const isoDateString = "2024-02-08T12:30:45.678Z";

// // Convert ISO string to Date object
// const dateObject = new Date(isoDateString);