import { ITodo } from './Interfaces';

export class TodoApi {
  
  async getTodos(): Promise<ITodo[]> {
     
    await this.timeout(5000);

    return [
      {
        id: 1,
        title: 'try1',
        finished: false
      },
      {
        id: 2,
        title: 'try2',
        finished: false
      }
    ];
  }

  private timeout = (ms: number) => new Promise(res => setTimeout(res, ms));
}