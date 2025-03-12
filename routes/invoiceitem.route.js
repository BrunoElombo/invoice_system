import express from "express";
const router = express.Router();
import {
    getAllItemsController,
    getItemByIdController,
    createItemController,
    updateItemController,
    deleteItemController
} from "../controllers/invoiceItem.controller.js";

router.get('', getAllItemsController);
router.get('/:id', getItemByIdController);
router.post('/', createItemController);
router.patch('/:id', updateItemController);
router.delete('/:id', deleteItemController);


export default router;