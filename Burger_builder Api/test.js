const Joi = require('Joi');

const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required()

});
const user = {
    email: "s@gmail.com",
    password: "1236",
}
const error = schema.validate(user);
console.log(error);