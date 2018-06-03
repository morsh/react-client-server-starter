import * as React from 'react';
import TodoListView from '../components/TodoListView';

import './timeline.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        Home
        <TodoListView name="Mor" />
      </div>
    );
  }
}
