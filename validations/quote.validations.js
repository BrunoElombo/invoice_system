const { body, validationResult} = require('express-validator');

const createQuote = [
    body('description').optional().notEmpty().withMessage('description is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];


const updateQuote = [
    body('description').optional().notEmpty().withMessage('description should not be left empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]

module.exports = {createQuote, updateQuote}