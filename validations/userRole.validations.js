const { body, validationResult} = require('express-validator');

const createUserRole = [
    body('userId').notEmpty().withMessage('userId is required'),
    body('roleId').notEmpty().withMessage('roleId is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];


const updateUserRole = [
    body('userId').optional().notEmpty().withMessage('userId should not be left empty'),
    body('roleId').optional().notEmpty().withMessage('roleId should not be left empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]

export {createUserRole, updateUserRole}