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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const logger_1 = require("../../../shared/logger");
const index_1 = __importDefault(require("../../config/index"));
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = yield (0, user_utils_1.getUserId)();
        // if (!user.password) user.password = config.user_default_password as string
        const existingUser = yield user_model_1.User.find({ email: user === null || user === void 0 ? void 0 : user.email }).lean();
        if (existingUser) {
            return {
                data: null,
                message: 'User alrady exists',
                statusCode: http_status_1.default.NOT_ACCEPTABLE,
                success: false
            };
        }
        const hash = bcrypt_1.default.hashSync(user === null || user === void 0 ? void 0 : user.password, index_1.default.password_solt || 10);
        user.password = hash;
        const createUser = yield user_model_1.User.create(user);
        if (!createUser)
            throw new ApiError_1.default(4000, 'Faild to create user');
        return {
            data: createUser,
            message: 'User created successfull',
            statusCode: http_status_1.default.OK,
            success: true
        };
    }
    catch (error) {
        logger_1.errorlogger.error("Create user faild", error);
    }
    return {
        data: null,
        message: 'User created Faild',
        statusCode: http_status_1.default.NOT_ACCEPTABLE,
        success: false
    };
});
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield user_model_1.User.find({ email: user === null || user === void 0 ? void 0 : user.email }).lean();
        if (!findUser)
            return {
                data: null,
                message: 'User not Found!',
                statusCode: http_status_1.default.NOT_ACCEPTABLE,
                success: false
            };
        const match = bcrypt_1.default.compareSync(user === null || user === void 0 ? void 0 : user.password, findUser[0].password); // true
        if (!match) {
            return {
                data: null,
                message: 'Wrong Password!',
                statusCode: http_status_1.default.NOT_ACCEPTABLE,
                success: false
            };
        }
        const token = jsonwebtoken_1.default.sign({ data: findUser[0] }, index_1.default.jwt_secret, { expiresIn: index_1.default.auth_exp });
        return {
            data: Object.assign(Object.assign({}, findUser[0]), { password: '', token }),
            message: 'Login Successfull',
            statusCode: http_status_1.default.OK,
            success: true
        };
    }
    catch (error) {
        logger_1.errorlogger.error("login  faild", error);
        return {
            data: null,
            message: 'Login Faild!',
            statusCode: http_status_1.default.EXPECTATION_FAILED,
            success: false
        };
    }
});
exports.UserService = {
    createUser,
    loginUser
};
