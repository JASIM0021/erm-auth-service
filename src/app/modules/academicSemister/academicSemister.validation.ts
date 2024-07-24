import { z } from 'zod';
import {
  AcademicCode,
  AcademicMonth,
  AcademicTitle,
} from './academicSemister.common';

const createAcademicSemisterZodSchema = z.object({
  body: z.object({
    title: z.enum([...AcademicTitle] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'Year required',
    }),

    code: z.enum([...AcademicCode] as [string, ...string[]], {
      required_error: 'code required',
    }),
    startMonth: z.enum([...AcademicMonth] as [string, ...string[]], {
      required_error: 'startMonth required',
    }),
    endMonth: z.enum([...AcademicMonth] as [string, ...string[]], {
      required_error: 'endMonth required',
    }),
  }),
});
export const AcademicSemisterRequestValidation = {
  createAcademicSemisterZodSchema,
};
