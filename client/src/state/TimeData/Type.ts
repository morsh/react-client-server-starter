import { IType } from './Interfaces';
import { observable } from 'mobx';

export class Type implements IType {
  id: number;
  @observable title: string;
}