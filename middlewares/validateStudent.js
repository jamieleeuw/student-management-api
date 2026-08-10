const Joi = require('joi')

const Studentschema = Joi.object({
    first_name: Joi.string().min(1).max(50).required(),
    last_name: Joi.string().min(1).max(50).required(),
    date_of_birth: Joi.date().required(),
    gender: Joi.string().valid("Male", "Female").required(),
    email: Joi.string().max(254).email()
})

const idSchema = Joi.object({
    id: Joi.number().integer().positive().required()
})

const validateStudent = (req, res, next) => {

    const { error } = Studentschema.validate(req.body)

    if (error) {
        return res.status(400).json({
            message: "Validation failed",
            errors: error.details
        })
    }

    next()
}

const validateStudentId = (req, res, next) => {
    const { error } = idSchema.validate(req.params)

    if (error) {
        return res.status(400).json({
            message: "Invalid student ID",
            errors: error.details
        })
    }

    next()
}

module.exports = {validateStudent,validateStudentId}