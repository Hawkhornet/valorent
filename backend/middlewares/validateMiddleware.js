import { body, validationResult } from 'express-validator'

// Validate user registration inputs
export const validateRegister = [
    body('email')
        .isEmail()
        .withMessage('Invalid email address'),

    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),

    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .escape(),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next()
    }
]

// Validate listing inputs to prevent SQL injection
export const validateListing = [
    body('vehicleDetails')
        .notEmpty()
        .withMessage('Vehicle details are required'),

    body('*.title')
        .optional()
        .trim()
        .escape(),

    body('*.description')
        .optional()
        .trim()
        .escape(),

    body('*.city')
        .optional()
        .trim()
        .escape(),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next()
    }
]