const { body, validationResult} = require('express-validator');

const createUserPermission = [
    body('userId').notEmpty().withMessage('userId is required'),
    body('permissionId').notEmpty().withMessage('permissionId is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];


const updateUserPermission = [
    body('userId').optional().notEmpty().withMessage('userId should not be left empty'),
    body('permissionId').optional().notEmpty().withMessage('permissionId should not be left empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]

export {createUserPermission, updateUserPermission}