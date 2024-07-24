"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserZodSchema = exports.createUserZodSchema = void 0;
const zod_1 = require("zod");
// firstName:String,
//   lastName:String,
//   email:String,
//   gender:String,
//   age:Number,
//   password:String
exports.createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string({
            required_error: 'firstName is required',
        }),
        lastName: zod_1.z.string({
            required_error: 'lastName is required',
        }),
        email: zod_1.z.string({
            required_error: 'email is required',
        }).email("Email not Valid"),
        gender: zod_1.z.string({
            required_error: 'gender is required',
        }),
        age: zod_1.z.number({
            required_error: 'age is required',
        }),
        password: zod_1.z.string({
            required_error: 'password is required'
        }),
    }),
});
exports.loginUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'email is required',
        }).email("Email not Valid"),
        password: zod_1.z.string({
            required_error: 'password is required'
        }),
    }),
});
