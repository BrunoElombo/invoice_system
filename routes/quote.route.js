import express from "express";
const router = express.Router();
import {
    getAllQuotesController,
    getQuoteByIdController,
    createQuoteController,
    updateQuoteController,
    deleteQuoteController
} from "../controllers/quote.controller.js";

router.get('', getAllQuotesController);
router.get('/:id', getQuoteByIdController);
router.post('/', createQuoteController);
router.patch('/:id', updateQuoteController);
router.delete('/:id', deleteQuoteController);


export default router;