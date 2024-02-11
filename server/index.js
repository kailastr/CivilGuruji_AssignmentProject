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

const currentDate = new Date();
const fiveDaysAgo = new Date();
fiveDaysAgo.setDate(currentDate.getDate() - 5);

//get all user details
app.get('/', async (req, res) => {
    try {
        const inactiveUsers = await UserModal.find({ lastLogin: { $lt: fiveDaysAgo } });

        return res.status(200).json({
            message: "success",
            data: inactiveUsers
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


//signin
app.post('/signin', async (req, res) => {
    try {
        const user = await UserModal.findByEmailAndPassword(req.body);

        const currentDate = new Date();

        // const fiveDaysAgo = new Date(currentDate);
        // fiveDaysAgo.setDate(currentDate.getDate() - 5);

        const updatedUser = await UserModal.findOneAndUpdate(
            { _id: user._id }, // Assuming user._id is the unique identifier for the user
            { $set: { lastLogin: currentDate } },
            { new: true } // To return the updated user document
        );

        const diff = fiveDaysAgo - currentDate;

        let days = Math.round(diff / (1000 * 60 * 60 * 24));

        await UserModal.updateMany(
            { lastLogin: { $lt: fiveDaysAgo } }, // Filter condition: Users who haven't logged in for more than 5 days
            { $set: { exceededFiveDays: "false" } }, // Update operation: Set exceededFiveDays to true for filtered users
            // { new: true }
        );

        // Now update the remaining users to set exceededFiveDays to false
        await UserModal.updateMany(
            { lastLogin: { $gte: fiveDaysAgo } }, // Filter condition: Users who have logged in within the last 5 days
            { $set: { exceededFiveDays: "true" } }, // Update operation: Set exceededFiveDays to false for remaining users
            // { new: true }
        );

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

//to get users exceeded last login more than 5 days
app.get('/exceededlogin', async (req, res) => {
    try {
        const currentDay = new Date();
        const fiveDaysMinus = new Date(currentDay);
        fiveDaysMinus.setDate(currentDay.getDate() - 5);
    } catch (error) {

    }
});

const port = 4000;
// http://localhost:4000

app.listen(port, () => {
    console.log("Your server is started at port : " + port);
});


// string to iso
// const isoDateString = "2024-02-08T12:30:45.678Z";

// // Convert ISO string to Date object
// const dateObject = new Date(isoDateString);