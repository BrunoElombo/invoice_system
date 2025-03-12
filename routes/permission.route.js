import express from "express";
const router = express.Router();
import {
    getAllPermissionsController,
    getPermissionByIdController,
    createPermissionController,
    updatePermissionController,
    deletePermissionController
} from "../controllers/permission.controller.js";

router.get('', getAllPermissionsController);
router.get('/:id', getPermissionByIdController);
router.post('/', createPermissionController);
router.patch('/:id', updatePermissionController);
router.delete('/:id', deletePermissionController);


export default router;