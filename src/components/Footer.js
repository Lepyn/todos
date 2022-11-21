import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <ul className="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button onClick={() => this.props.onActive()}>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => this.props.onClearCompleted()}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}
