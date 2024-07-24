"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicRouter = void 0;
const express_1 = __importDefault(require("express"));
const RequestValidation_1 = __importDefault(require("../../middleware/RequestValidation"));
const academicSemister_validation_1 = require("./academicSemister.validation");
const academicSemister_controllr_1 = require("./academicSemister.controllr");
const router = express_1.default.Router();
router.post('/create-semister', (0, RequestValidation_1.default)(academicSemister_validation_1.AcademicSemisterRequestValidation.createAcademicSemisterZodSchema), academicSemister_controllr_1.AcademicSemisterController.createAcademicSemister);
exports.AcademicRouter = router;
