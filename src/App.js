import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const tasks = [
  {
    task: "",
    id: "",
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  toggleTask = itemId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearComplete = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => ! item.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList task={this.state.tasks} toggleTask = {this.toggleTask} clearComplete = {this.clearComplete} />
      </div>

    );
  }
}

export default App;
