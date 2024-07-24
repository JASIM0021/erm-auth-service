import { RequestHandler } from 'express';
import { AcademicSemisterService } from './academicSemister.service';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
const createAcademicSemister = catchAsync(async (req, res, next) => {
  const { ...academicSemisterData } = req.body;
  const result = await AcademicSemisterService.createSemister(
    academicSemisterData
  );
  next();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemister  created successfully',
    data: result,
  });
});
export const AcademicSemisterController = {
  createAcademicSemister,
};
