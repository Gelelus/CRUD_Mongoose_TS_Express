import { Router } from "express"

import validation from "../middleware/validation";
import validCreateUser from "../dtos/create-user.dto"; 
import validLoginUser from "../dtos/login-user.dto";   
import auth from "../middleware/auth";
import avatarUpload from "../middleware/uploadAvatar"
import UserController from "../controllers/user-controller";


const router = Router();

router.get("/:id", UserController.getUser); // получение одного пользователя
router.get("/", UserController.getAllUser); // получение всех пользователей
router.get("/get/recipes", auth, UserController.getUserRecipes); // 
router.get("/get/orders", auth,UserController.getUserOrders)

router.post("/", validation(validCreateUser),  UserController.addUser); //регистрация
router.post("/recipe/bind", auth, UserController.bindRecipeToUser); // привязка сторонего рецепта
router.post("/recipe", auth, UserController.addRecipeToUser); // добавление рецепта юсера
router.post("/login",validation(validLoginUser) , UserController.login); //авторизация

router.put("/", auth, UserController.updateUser); // изменение пользователя
router.put("/avatar", auth, avatarUpload, UserController.addAvatarToUser); // изменение аватара пользователя

router.delete("/:id", auth, UserController.deleteUser); // удаление пользователя

export default router;
