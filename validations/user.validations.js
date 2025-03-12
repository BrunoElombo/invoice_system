const { body, validationResult} = require('express-validator');

const createUser = [
    body('username').notEmpty().withMessage('username is required'),
    body('email').notEmpty().withMessage('email is required'),
    body('password').notEmpty().withMessage('password is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];


const updateUser = [
    body('username').optional().notEmpty().withMessage('username should not be left empty'),
    body('email').optional().notEmpty().withMessage('email should not be left empty'),
    body('password').optional().notEmpty().withMessage('password should not be left empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]


module.exports = {createUser, updateUser}