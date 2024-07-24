"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    console.log('jasimzod', error);
    const errors = Object.values(error === null || error === void 0 ? void 0 : error.errors).map((item) => {
        return {
            path: item === null || item === void 0 ? void 0 : item.path[item.path.length - 1],
            message: item === null || item === void 0 ? void 0 : item.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
        errorMessage: errors,
    };
};
exports.default = handleZodError;
