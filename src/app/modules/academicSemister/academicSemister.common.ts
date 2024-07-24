import { ICode, IMonth, ITitle } from './academicSemister.interface';

export const AcademicMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const AcademicTitle = ['Autumn', 'Summer', 'Fail'];
export const AcademicCode = ['01', '02', '03'];

export const academicsemisterTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fail: '03',
};
