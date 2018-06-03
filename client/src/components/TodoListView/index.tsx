import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { TodoStore } from '../../state/Todo';
import { TodoView } from './TodoView';

interface IProps {
  name: string;
  countryCode?: string;
  todoStore?: TodoStore;
}

@inject('todoStore')
@observer
export default class TodoListView extends React.Component<IProps> {

  todoStore: TodoStore;

  constructor(props: IProps) {
    super(props);
    
    this.todoStore = this.props.todoStore!;
  }

  componentWillMount() {
    setTimeout(
      () => {
        this.todoStore.addTodo('trye');
      },
      1000
    );
  }  

  render() {

    if (!this.todoStore) { return null; }

    return (
      <div>
          <ul>
              {this.todoStore.todos.map(todo =>
                  <TodoView todo={todo} key={todo.id} />
              )}
          </ul>
          {this.todoStore.report}
      </div>
    );
  }
}
