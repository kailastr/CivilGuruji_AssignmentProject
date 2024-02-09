const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    phoneNum: { type: String },
    lastLogin: { type: Date },
    exceededFiveDays: {type: String}
},
    {
        timestamps: true
    }
);

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, 'CivilGuruji');
};


//for signUp
UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNum }) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhoneNum = await UserModel.findOne({ phoneNum });

    if (checkUserByEmail || checkUserByPhoneNum) {
        throw new Error("User Already exist with this email or phone Num");
    }

    return false;
}

//for SignIn
UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new Error("User not found with this email");
    }
    

    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) {
        throw new Error("Invalid password");
    }


    return user;
};

//pre method to run before user login/signUp
UserSchema.pre('save', function (next) {
    const user = this;

    bcrypt.genSalt(8, (error, salt) => {
        if (error) {
            return next(error);
        }

        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) {
                return next(error);
            }

            user.password = hash;
            return next();
        });
    });
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;