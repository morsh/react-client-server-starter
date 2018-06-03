
import { IDataItem } from './Interfaces';
import { observable } from 'mobx';
import * as moment from 'moment';

export class DataItem implements IDataItem {
  id = Math.random();
  @observable group: number; 
  @observable title: string;
  @observable startTime: moment.Moment;
  @observable endTime: moment.Moment;
}