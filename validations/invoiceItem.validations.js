const { body, validationResult} = require('express-validator');

const createInvoiceItem = [
    body('name').notEmpty().withMessage('name is required'),
    body('displayName').optional().notEmpty().withMessage('displayName is required'),
    body('code').optional().notEmpty().withMessage('code should not be left empty'),
    body('price').optional().notEmpty().withMessage('price should not be left empty'),
    body('discount').optional().notEmpty().withMessage('price should not be left empty'),
    body('description').optional().notEmpty().withMessage('price should not be left empty'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];


const updateInvoiceItem = [
    body('name').optional().notEmpty().withMessage('username should not be left empty'),
    body('displayName').optional().notEmpty().withMessage('displayName should not be left empty'),
    body('code').optional().notEmpty().withMessage('code should not be left empty'),
    body('price').optional().notEmpty().withMessage('price should not be left empty'),
    body('discount').optional().notEmpty().withMessage('price should not be left empty'),
    body('description').optional().notEmpty().withMessage('price should not be left empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]


module.exports = {createInvoiceItem, updateInvoiceItem}