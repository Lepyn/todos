import React, { Component } from "react";
import Task from "./Task";
export default class TaskList extends Component {
  state = {};

  render() {
 
    return (
      <ul className="todo-list">
        {this.props.data.map((task) => {
          return (
            <Task
              key={task.id}
              data={task}
              onDeleted={this.props.onDeleted}
              onCompleted={this.props.onCompleted}
            />
          );
        })}
      </ul>
    );
  }
}
