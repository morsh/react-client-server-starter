import * as React from 'react';
import { observer } from 'mobx-react';
import { ITodo } from '../../state/Todo';

@observer
export class TodoView extends React.Component<{ todo: ITodo }> {

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.finished}
          onClick={() => todo.finished = !todo.finished}
        />{todo.title}
      </li>
    );
  }
}