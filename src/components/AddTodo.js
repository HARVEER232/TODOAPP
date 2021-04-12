import React, { Component } from "react";
import Dropdown from "./Dropdown";
export class AddTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({ title: e.target.value });
  };
  addTodoStyle = () => {
    return {
      padding: "5px",
      flex: "10",
    };
  };
  submitBtnStyle = () => {
    return {
      cursor: "pointer",
      borderRadius: "20px",
      margin: "1px",
    };
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
    console.log("TODO from addtodos : " + this.props.todos);
  };
  formStyle = () => {
    return {
      marginBottom: "10px",
      display: "flex",
    };
  };
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        autoComplete="off"
        style={this.formStyle()}
      >
        <Dropdown sortTodos={this.props.sortTodos} />
        <input
          type="text"
          name="title"
          placeholder="Add To Do..."
          style={this.addTodoStyle()}
          onChange={this.onChange}
          value={this.state.title}
        />
        <button
          onSubmit={this.onSubmit}
          style={this.submitBtnStyle()}
          type="submit"
          class="btn btn-primary"
        >
          Add-Todo
        </button>
      </form>
    );
  }
}

export default AddTodo;
