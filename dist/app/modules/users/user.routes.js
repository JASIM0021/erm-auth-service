"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const RequestValidation_1 = __importDefault(require("../../middleware/RequestValidation"));
const usesr_validation_1 = require("./usesr.validation");
const router = express_1.default.Router();
router.post('/create-user', (0, RequestValidation_1.default)(usesr_validation_1.createUserZodSchema), user_controller_1.UserController.createUser);
router.post('/login-user', (0, RequestValidation_1.default)(usesr_validation_1.loginUserZodSchema), user_controller_1.UserController.loginUser);
exports.UserRoutes = router;
