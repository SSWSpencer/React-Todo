// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
        <button  onClick={props.clearComplete}>
        Clear Complete
      </button>
      {props.task.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleTask} />
      ))}
    </div>
  );
};

export default TodoList;
