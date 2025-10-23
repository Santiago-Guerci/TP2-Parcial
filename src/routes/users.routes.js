import express from 'express';
import usersController from '../controller/users.controller.js';

const router = express.Router();

router.get("/", usersController.getAllUsers);
router.get("/age/:range", usersController.getUsersByAgeRange);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);


export default router;