import express from "express";
const router = express.Router();
import {
    getAllUsersController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController
} from "../controllers/user.controller.js";

router.get('', getAllUsersController);
router.get('/:id', getUserByIdController);
router.post('/', createUserController);
router.patch('/:id', updateUserController);
router.delete('/:id', deleteUserController);


export default router;