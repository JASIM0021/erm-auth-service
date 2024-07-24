import express from 'express';
import validateRequest from '../../middleware/RequestValidation';
import { AcademicSemisterRequestValidation } from './academicSemister.validation';
import { AcademicSemisterController } from './academicSemister.controllr';
const router = express.Router();

router.post(
  '/create-semister',
  validateRequest(
    AcademicSemisterRequestValidation.createAcademicSemisterZodSchema
  ),
  AcademicSemisterController.createAcademicSemister
);

export const AcademicRouter = router;
