const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
} = require("../controllers/userController")

router.route('/').get(getAllUsers).post(addUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser)


module.exports = router;