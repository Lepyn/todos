import React, { Component } from "react";
import Task from "./Task";
export default class TaskList extends Component {
 
  render() {
    return (
      <ul className="todo-list">
        {this.props.data.map(task => {
          return <Task  key = {task.id} onDeleted = { this.props.onDeleted } onCompleted = { this.props.onCompleted } data = {task}/>
          ;
        })}
     </ul>
    );
  }
}
