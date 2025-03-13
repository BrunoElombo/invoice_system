const { body, validationResult} = require('express-validator');

const createPermissionRole = [
    body('permissionId').notEmpty().withMessage('permissionId is required'),
    body('roleId').notEmpty().withMessage('roleId is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];


const updatePermissionRole = [
    body('permissionId').optional().notEmpty().withMessage('permissionId should not be left empty'),
    body('roleId').optional().notEmpty().withMessage('roleId should not be left empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]

export {createPermissionRole, updatePermissionRole}