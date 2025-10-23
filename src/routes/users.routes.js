import express from 'express';
import usersController from '../controller/users.controller.js';
import {validateUserRange, validateUserCreation} from '../middleware/users.middleware.js';

const router = express.Router();

router.get("/", usersController.getAllUsers);
router.get("/age/:range", validateUserRange, usersController.getUsersByAgeRange);
router.post("/", validateUserCreation, usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);


export default router;