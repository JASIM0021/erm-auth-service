import ApiError from '../../../errors/ApiError';
import { academicsemisterTitleCodeMapper } from './academicSemister.common';
import { IAcademicSemister } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';
import status from 'http-status';

const createSemister = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  if (academicsemisterTitleCodeMapper[payload?.title] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid semister Code');
  }
  const result = await AcademicSemister.create(payload);
  return result;
};

export const AcademicSemisterService = {
  createSemister,
};
