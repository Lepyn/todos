import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    value: "",
    isTask: false,
  };

  handleInput(e) {
    this.setState(() => {
      return {
        ...this.state,
        value: e.target.value,
      };
    });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.onAdded(e, this.state.value);
      this.setState(() => {
        return {
          ...this.state 
        };
      });
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => this.handleInput(e)}
          onKeyUp={(e) => this.handleKeyUp(e)}
        />
      </header>
    );
  }
}
