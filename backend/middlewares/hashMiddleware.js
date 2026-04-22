import bcrypt from 'bcrypt'

// Hash password before saving
export const hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10)
        }
        next()
    } catch (error) {
        res.status(500).json({ message: 'Password hashing failed' })
    }
}

// Compare password at login
export const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword)
}