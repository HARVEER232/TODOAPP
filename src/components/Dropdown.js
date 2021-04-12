import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const DropdownData = ["A to Z", "Z to A"];
export default class Dropdown extends Component {
  state = {
    sortType: "A to Z",
  };

  handleChange = (event) => {
    if (event.target.value) {
      this.state.sortType = event.target.value;
      this.setState({ sortType: event.target.value });
      console.log("-------from handle change" + this.state.sortType);
      this.props.sortTodos(this.state.sortType);
    }
  };
  render() {
    console.log("from render" + this.state.sortType);
    return (
      <div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Sort type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.sortType}
            onChange={this.handleChange}
            onClick={this.handleChange}
            autoFocus={false}
          >
            <MenuItem value="A to Z">A → Z [Def]</MenuItem>
            <MenuItem value="Z to A">Z → A</MenuItem>
            <MenuItem value="Done">Done First ✅</MenuItem>
            <MenuItem value="Not Done">Not done first❗️</MenuItem>
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="Tomorrow">Tomorrow</MenuItem>
            <MenuItem value="Later">Later</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}
