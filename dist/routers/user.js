"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validation_1 = __importDefault(require("../middleware/validation"));
var create_user_dto_js_1 = __importDefault(require("../dtos/create-user.dto.js"));
var login_user_dto_js_1 = __importDefault(require("../dtos/login-user.dto.js"));
var auth_1 = __importDefault(require("../middleware/auth"));
var user_controller_1 = __importDefault(require("../controllers/user-controller"));
var user_controller = new user_controller_1.default();
var router = express_1.Router();
router.post("/", validation_1.default(create_user_dto_js_1.default), user_controller.addUser);
router.delete("/:id", auth_1.default, user_controller.deleteUser);
router.put("/", auth_1.default, user_controller.updateUser);
router.get("/:id", auth_1.default, user_controller.getUser);
router.get("/", auth_1.default, user_controller.getAllUser);
router.post("/login", validation_1.default(login_user_dto_js_1.default), user_controller.login);
router.post("/logout", auth_1.default, user_controller.logout);
exports.default = router;
