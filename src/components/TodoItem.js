import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import TodoOptions from "./TodoOptions";
import "./TodoItemsStyle.css";
import Modal from "./Modal";
let prevTitle = "";

export class TodoItem extends Component {
  state = {
    showModal: false,
    title: this.props.todo.title,
  };

  labelStyle = () => {
    return {
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: "2px",
      },
      display: this.props.todo.completed ? "inline-block" : "none",
      backgroundColor: "#61CB47",
      padding: "6px",
      marginTop: "2px",
      marginLeft: "72em",
    };
  };
  modalStyle = () => {
    return {
      display: this.state.showModal ? "flex" : "none",
    };
  };
  close = () => {
    return {
      position: "absolute",
      top: "1.2rem",
      right: "2rem",
      fontSize: "2rem",
      color: "#333",
      cursor: "pointer",
      border: "none",
      background: "none",
    };
  };
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "5px",
      borderBottom: "1px #ccc dotted",
    };
  };
  getBtnStyle = () => {
    return {
      border: "none",
      margin: "2px",
      marginTop: "2px",
      padding: "2px 9px",
      borderRadius: "50%",
    };
  };
  titleStyle = () => {
    return {
      cursor: "pointer",
      display: "initial",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      width: "calc(100% - 70px)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    };
  };
  saveButtonStyle = () => {
    return {
      position: "absolute",
      top: "136px",
      right: "28px",
      borderRadius: "11px",
    };
  };
  modalHeaderStyle = () => {
    return {
      position: "absolute",
      top: "27px",
      left: "29px",
    };
  };
  modalInputStyle = () => {
    return {
      marginLeft: "-65px",
      width: "36em",
    };
  };
  threeDotStyle = () => {
    return {
      display: "flex",
      position: "absolute",
      right: "9em",
      top: "6em",
    };
  };
  onItemClick = () => {
    prevTitle = this.state.title;
    this.setState({
      showModal: true,
    });
    this.state.showModal = true;
  };
  onClose = () => {
    this.setState(this.setStateCall);
  };
  setStateCall = (state) => {
    const newState = { ...state, showModal: false, title: prevTitle };
    return newState;
  };
  onRename = (e) => {
    this.setState({ title: e.target.value });
  };
  onSave = (e) => {
    e.preventDefault();
    this.setState({
      title: this.state.title ? this.state.title : prevTitle,
      showModal: false,
    });
  };
  printLog = () => {
    console.log("From todoItem");
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        {this.state.showModal ? (
          <Modal
            onClose={this.onClose}
            onRename={this.onRename}
            title={this.state.title}
            onSave={this.onSave}
          />
        ) : (
          ""
        )}
        <p className="TodoItem">
          <div>
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
            />{" "}
            <div onClick={this.onItemClick} style={this.titleStyle()}>
              {title !== this.state.title ? this.state.title : title}
            </div>
            <Chip style={this.labelStyle()} label="Done🎖" />
          </div>
          <div className="ToDoItemCancel">
            <div>
              {!this.props.todo.completed ? (
                <TodoOptions
                  todo={this.props.todo}
                  abc={this.props.abc}
                  style={this.threeDotStyle()}
                />
              ) : (
                ""
              )}
            </div>
            <div>
              <button
                className="btn btn-primary"
                onClick={this.props.onButtonClick.bind(this, id)}
                style={this.getBtnStyle()}
              >
                x
              </button>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default TodoItem;
