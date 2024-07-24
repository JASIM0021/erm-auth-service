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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const catchAsync_1 = require("../../../shared/catchAsync");
const sendResponse_1 = require("../../../shared/sendResponse");
const createUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const { data, message, statusCode, success } = yield user_service_1.UserService.createUser(user);
    next();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: statusCode,
        success: success,
        message: message,
        data: data,
    });
}));
const loginUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const { data, message, statusCode, success } = yield user_service_1.UserService.loginUser(user);
    next();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: statusCode,
        success: success,
        message: message,
        data: data,
    });
}));
exports.UserController = {
    createUser,
    loginUser
};
