import express from "express";
const router = express.Router();
import {
    getAllInvoicesController,
    getInvoiceByIdController,
    createInvoiceController,
    updateInvoiceController,
    deleteInvoiceController
} from "../controllers/invoice.controller.js";

router.get('', getAllInvoicesController);
router.get('/:id', getInvoiceByIdController);
router.post('/', createInvoiceController);
router.patch('/:id', updateInvoiceController);
router.delete('/:id', deleteInvoiceController);


export default router;