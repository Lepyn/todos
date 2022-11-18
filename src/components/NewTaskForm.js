import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    value: "",
  };

  handleInput(e) {
    this.setState(() => {
      return {
        value: e.target.value,
      };
    });
    console.log(this.state.value);
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => this.handleInput(e)}
        />
      </header>
    );
  }
}
