import { Model } from 'mongoose';

export type IMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
export type ITitle = 'Autumn' | 'Summer' | 'Fail';
export type ICode = '01' | '02' | '03';

export type IAcademicSemister = {
  title: ITitle;
  year: number;
  code: ICode;
  startMonth: IMonth;

  endMonth: IMonth;
};

export type AcademicSemisterMOdel = Model<IAcademicSemister>;
