const jwt = require('jsonwebtoken');
const { Schema, model } = require('mongoose'); //database hashing password mongoose diye define kore aijonno length besi raka hoi
const Joi = require('joi');
//const passwordComplexity = require('joi-password-complexity');
// const complexityOptions = {
//     min: 8,
//     max: 30,
//     lowerCase: 1,
//     upperCase: 1,
//     numeric: 1,
//     symbol: 1,
//     requirementCount: 2,
// };
const userSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 256,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    }
});
userSchema.methods.generateJWT = function () {
    const token = jwt.sign({ _id: this._id, email: this.email }, process.env.JWT_SECRET_KEY, { expiresIn: "3h" })
    return token;
}
const validateUser = user => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
        // password: passwordComplexity(complexityOptions)

    });
    return schema.validate(user); //user input password joi define kore
}
module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;
