import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
const uuid = require("uuid");
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "a",
        completed: false,
        due: "",
      },
      {
        id: uuid.v4(),
        title: "b",
        completed: false,
        due: "",
      },
      {
        id: uuid.v4(),
        title: "c",
        completed: false,
        due: "",
      },
    ],
    sortType: "",
  };
  markComplete = (id) => {
    this.state.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        if (todo.completed === true) {
          console.log("To do marked as done ✅");
        } else {
          console.log("Marked as not done ❌");
        }
      }
    });
    const todos = this.state.todos;
    this.setState({ todos });
    this.sortTodos(this.state.sortType);
  };
  onButtonClick = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
    console.log("To do deleted successfully");
  };
  onSubmit = (title) => {
    if (title) {
      const newTodo = {
        id: uuid.v4(),
        title,
        completed: false,
      };
      this.state.todos.push(newTodo);
      this.setState({ todos: this.state.todos });
      console.log("To do added successfully");
    } else {
      console.log("❗️ Please provide a todo");
    }
    this.sortTodos(this.state.sortType);
  };

  setDueType = (due, id) => {
    this.state.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.due = due;
      }
    });
    if (
      this.state.sortType === "Today" ||
      this.state.sortType === "Tomorrow" ||
      this.state.sortType === "Later"
    ) {
      this.sortTodos(due);
    }
  };
  sortTodos = (sortType) => {
    this.state.sortType = sortType;
    if (sortType === "Today" && this.state.sortType === "Today") {
      const todos = this.state.todos.sort(this.sortByToday);
      this.setState({ todos });
    }
    if (sortType === "Tomorrow" && this.state.sortType === "Tomorrow") {
      const todos = this.state.todos.sort(this.sortByTomorrow);
      this.setState({ todos });
    }
    if (sortType === "Later" && this.state.sortType === "Later") {
      const todos = this.state.todos.sort(this.sortByLater);
      this.setState({ todos });
    }
    if (sortType === "Done" && this.state.sortType === "Done") {
      const todos = this.state.todos.sort(this.sortByMarkComplete);
      this.setState({ todos });
    }
    if (sortType === "Not Done" && this.state.sortType === "Not Done") {
      const todos = this.state.todos.sort(this.sortByNotComplete);
      this.setState({ todos });
    }
    if (sortType === "A to Z" && this.state.sortType === "A to Z") {
      const todos = this.state.todos.sort(this.sortAscendOrder);
      this.setState({ todos });
    }
    if (sortType === "Z to A" && this.state.sortType === "Z to A") {
      const todos = this.state.todos.sort(this.sortDesendOrder);
      this.setState({ todos });
    }
  };
  sortAscendOrder = (titleA, titleB) => {
    if (titleA.title.toUpperCase() < titleB.title.toUpperCase()) {
      return -1;
    } else if (titleA.title.toUpperCase() > titleB.title.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  };
  sortDesendOrder = (titleA, titleB) => {
    if (titleA.title.toUpperCase() < titleB.title.toUpperCase()) {
      return 1;
    } else if (titleA.title.toUpperCase() > titleB.title.toUpperCase()) {
      return -1;
    } else {
      return 0;
    }
  };
  sortByMarkComplete = (titleA) => {
    if (titleA.completed === true) {
      return -1;
    } else if (titleA.completed === false) {
      return 1;
    } else {
      return 0;
    }
  };
  sortByNotComplete = (titleA) => {
    if (titleA.completed === true) {
      return 1;
    } else if (titleA.completed === false) {
      return -1;
    } else {
      return 0;
    }
  };
  sortByToday = (title) => {
    if (title.due === "Today") {
      return -1;
    } else {
      return 0;
    }
  };
  sortByTomorrow = (title) => {
    if (title.due === "Tomorrow") {
      return -1;
    } else {
      return 0;
    }
  };
  sortByLater = (title) => {
    if (title.due === "Later") {
      return -1;
    } else {
      return 0;
    }
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo
            sortTodos={this.sortTodos}
            AddTodo={this.onSubmit}
            onChange={this.onChange}
          />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            onButtonClick={this.onButtonClick}
            abc={this.setDueType}
          />
        </div>
      </div>
    );
  }
}

export default App;
