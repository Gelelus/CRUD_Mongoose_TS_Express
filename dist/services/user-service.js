"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../models/user"));
var pet_1 = __importDefault(require("../models/pet"));
var add = function (data) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = new user_1.default(data);
                    return [4, user.save()];
                case 1:
                    _a.sent();
                    return [2, user];
            }
        });
    });
};
var get = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, user_1.default.findById(id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
var getAll = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, user_1.default.find({})];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
var update = function (data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, user_1.default.findByIdAndUpdate(data.id, data, { new: true })];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
var del = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, user_1.default.findByIdAndDelete(id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
var login = function (data) {
    return __awaiter(this, void 0, void 0, function () {
        var user, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, user_1.default.findByCredentials(data.name, data.password)];
                case 1:
                    user = _a.sent();
                    return [4, user.generateAuthToken()];
                case 2:
                    token = _a.sent();
                    return [2, { user: user, token: token }];
            }
        });
    });
};
var getPets = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var userWithPets;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, user_1.default.findById(id)
                        .populate("pets")];
                case 1:
                    userWithPets = _a.sent();
                    return [2, userWithPets];
            }
        });
    });
};
var addPet = function (data) {
    return __awaiter(this, void 0, void 0, function () {
        var pet, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, pet_1.default.findOne({ name: data.name })];
                case 1:
                    pet = _a.sent();
                    if (!pet) {
                        throw new Error("Pet doesn't exist");
                    }
                    return [4, user_1.default.findById(data.id)];
                case 2:
                    user = _a.sent();
                    if (!user) {
                        throw new Error("User doesn't exist");
                    }
                    user.pets.push(pet._id);
                    user.save();
                    return [2, { user: user, pet: pet }];
            }
        });
    });
};
exports.default = {
    add: add,
    get: get,
    update: update,
    del: del,
    getAll: getAll,
    login: login,
    getPets: getPets,
    addPet: addPet,
};
