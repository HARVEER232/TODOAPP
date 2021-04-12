import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  printLog = (props) => {
    console.log("From todos.js");
    this.props.markComplete(props);
  };
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={this.printLog}
            onButtonClick={this.props.onButtonClick}
            abc={this.props.abc}
          />
        ))}
      </div>
    );
  }
}

export default Todos;
