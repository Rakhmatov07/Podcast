const Joi = require("joi");

const login = (data) => {
    const schema = Joi.object({
        username: Joi.string.alphanum().min(4).required(),
        password: Joi.string().min(6).required()
    })

    const { error } = schema.validate(data);
    return error ? error.message : false;
}

module.exports = login;