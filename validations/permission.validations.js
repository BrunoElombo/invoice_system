const { body, validationResult} = require('express-validator');

const createPermission = [
    body('name').notEmpty().withMessage('name is required'),
    body('displayName').optional().notEmpty().withMessage('displayName is required'),
    body('description').optional().notEmpty().withMessage('description is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];


const updatePermission = [
    body('name').optional().notEmpty().withMessage('username should not be left empty'),
    body('displayName').optional().notEmpty().withMessage('displayName should not be left empty'),
    body('description').optional().notEmpty().withMessage('description should not be left empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]


module.exports = {createPermission, updatePermission}