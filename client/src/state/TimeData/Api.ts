import * as moment from 'moment';
import { IType, IDataItem } from './Interfaces';

export interface IApiResult {
  types: IType[];
  items: IDataItem[];
}

export class Api {
  
  async load(): Promise<IApiResult> {
     
    await this.timeout(1000);

    const types = [
      {id: 1, title: 'group 1'},
      {id: 2, title: 'group 2'},
      {id: 3, title: 'group 3'},
      {id: 4, title: 'group 4'},
    ];
    
    const items = [
      {id: 1, group: 1, title: 'item 1', startTime: moment(), endTime: moment().add(1, 'hour')},
      {id: 2, group: 2, title: 'item 2', startTime: moment().add(-0.5, 'hour'), endTime: moment().add(0.5, 'hour')},
      {id: 3, group: 1, title: 'item 3', startTime: moment().add(2, 'hour'), endTime: moment().add(3, 'hour')},
      {id: 4, group: 3, title: 'item 4', startTime: moment().add(-0.5, 'hour'), endTime: moment().add(0.5, 'hour')},
      {id: 5, group: 4, title: 'item 5', startTime: moment().add(1.5, 'hour'), endTime: moment().add(4.5, 'hour')},
      {id: 6, group: 4, title: 'item 6', startTime: moment().add(-1.5, 'hour'), endTime: moment().add(0.5, 'hour')},
    ];

    return {
      items,
      types
    };
  }

  private timeout = (ms: number) => new Promise(res => setTimeout(res, ms));
}