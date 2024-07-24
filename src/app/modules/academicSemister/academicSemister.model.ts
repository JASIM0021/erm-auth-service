import { Schema, model } from 'mongoose';
import status from 'http-status';
import {
  IAcademicSemister,
  AcademicSemisterMOdel,
} from './academicSemister.interface';
import { number } from 'zod';
import {
  AcademicCode,
  AcademicMonth,
  AcademicTitle,
} from './academicSemister.common';
import ApiError from '../../../errors/ApiError';

const academicSemisterSchema = new Schema<IAcademicSemister>(
  {
    title: { type: String, required: true, enum: AcademicTitle },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: AcademicCode },
    startMonth: { type: String, required: true, enum: AcademicMonth },
    endMonth: { type: String, required: true, enum: AcademicMonth },
  },
  { timestamps: true }
);
// Data  -> check  -? same year && same semester

academicSemisterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemister.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Academic Semester is already exists');
  }
  next();
});

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterMOdel>(
  'AcademicSemister',
  academicSemisterSchema
);

// Handling same Year and same semester issue  using pree hooks
