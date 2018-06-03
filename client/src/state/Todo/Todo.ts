import { observable } from 'mobx';
import { ITodo } from '.';

export class Todo implements ITodo {
  id = Math.random();
  @observable title: string = '';
  @observable finished: boolean = false;
}