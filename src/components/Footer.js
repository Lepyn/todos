import React, { Component } from "react";
import TasksFilter from "./TasksFilter";

export default class Footer extends Component {
  render() {

    const { onClearCompleted, taskFilter} = this.props

    return (
      <footer className="footer">

          <TasksFilter  
           taskFilter={taskFilter}
           onClearCompleted={onClearCompleted} />

      </footer>
    );
  }
}
