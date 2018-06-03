import { observable, computed, action } from 'mobx';
import { Todo } from './Todo';
import { TodoApi } from './TodoApi';

export class TodoStore {
  
  @observable todos: Todo[] = [];
  @observable pendingRequests = 0;

  private api = new TodoApi();  
  
  @computed get completedTodosCount() {
    return this.todos.filter(todo => todo.finished === true).length;
  }

  @computed get report(): string {

    const finished = this.todos.filter(todo => !todo.finished);

    if (finished.length === 0) {
      return '<none>';
    }

    return `Next todo: "${finished[0].title}". Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  @action async addTodo(title: string) {
    this.todos.push({
      id: this.todos.length + 1,
      title,
      finished: false
    });

    const todos = await this.api.getTodos();
    todos.push.apply(todos, this.todos);
    this.todos = todos;
  }
}