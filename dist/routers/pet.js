"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validation_1 = __importDefault(require("../middleware/validation"));
var create_pet_dto_1 = __importDefault(require("../dtos/create-pet.dto"));
var auth_1 = __importDefault(require("../middleware/auth"));
var pet_controller_1 = __importDefault(require("../controllers/pet-controller"));
var pet_controller = new pet_controller_1.default();
var router = express_1.Router();
router.post("/", validation_1.default(create_pet_dto_1.default), pet_controller.addPet);
router.delete("/:id", auth_1.default, pet_controller.deletePet);
router.put("/", auth_1.default, pet_controller.updatePet);
router.get("/:id", auth_1.default, pet_controller.getPet);
router.get("/", auth_1.default, pet_controller.getAllPet);
exports.default = router;
