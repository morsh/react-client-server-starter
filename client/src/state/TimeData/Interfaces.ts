import * as moment from 'moment';

export interface IType {
  id: number;
  title: string;
}

export interface IDataItem {
  id: number;
  group: number; 
  title: string;
  startTime: moment.Moment;
  endTime: moment.Moment;
}