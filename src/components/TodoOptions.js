import React, { Component } from "react";
import { IconButton, Menu, MenuItem, Chip } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./TodoItemsStyle.css";

const options = ["Today", "Tomorrow", "Later"];

const ITEM_HEIGHT = 48;

export class TodoOptions extends Component {
  state = {
    anchorEl: null,
    due: "",
  };
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (e) => {
    this.state.due = e.currentTarget.innerText;
    this.setState({ anchorEl: null, due: e.currentTarget.innerText });
    this.props.abc(this.state.due, this.props.todo.id);
  };
  render() {
    return (
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={this.handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        <div className="todoOption">
          {this.state.due === "Today" ? <Chip label="Today" /> : ""}
          {this.state.due === "Tomorrow" ? <Chip label="Tomorrow" /> : ""}
          {this.state.due === "Later" ? <Chip label="Later" /> : ""}
        </div>
      </div>
    );
  }
}

export default TodoOptions;
