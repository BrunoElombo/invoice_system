import express from "express";
const router = express.Router();
import {
    getAllRolesController,
    getRoleByIdController,
    createRoleController,
    updateRoleController,
    deleteRoleController
} from "../controllers/role.controller.js";

router.get('', getAllRolesController);
router.get('/:id', getRoleByIdController);
router.post('/', createRoleController);
router.patch('/:id', updateRoleController);
router.delete('/:id', deleteRoleController);


export default router;