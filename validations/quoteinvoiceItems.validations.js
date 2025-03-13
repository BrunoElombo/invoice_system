const { body, validationResult} = require('express-validator');

const createQuoteInvoiceItems = [
    body('invoiceId').notEmpty().withMessage('invoiceId is required'),
    body('invoiceItemId').notEmpty().withMessage('invoiceItemId is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];


const updateQuoteInvoiceItem = [
    body('invoiceId').optional().notEmpty().withMessage('invoiceId should not be left empty'),
    body('invoiceItemId').optional().notEmpty().withMessage('invoiceItemId should not be left empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]

export {createQuoteInvoiceItems, updateQuoteInvoiceItem}