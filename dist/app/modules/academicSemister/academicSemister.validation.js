"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemisterRequestValidation = void 0;
const zod_1 = require("zod");
const academicSemister_common_1 = require("./academicSemister.common");
const createAcademicSemisterZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.enum([...academicSemister_common_1.AcademicTitle], {
            required_error: 'Title is required',
        }),
        year: zod_1.z.number({
            required_error: 'Year required',
        }),
        code: zod_1.z.enum([...academicSemister_common_1.AcademicCode], {
            required_error: 'code required',
        }),
        startMonth: zod_1.z.enum([...academicSemister_common_1.AcademicMonth], {
            required_error: 'startMonth required',
        }),
        endMonth: zod_1.z.enum([...academicSemister_common_1.AcademicMonth], {
            required_error: 'endMonth required',
        }),
    }),
});
exports.AcademicSemisterRequestValidation = {
    createAcademicSemisterZodSchema,
};
