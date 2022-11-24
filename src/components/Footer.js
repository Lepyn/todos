import React, { Component } from "react";
import TasksFilter from "./TasksFilter";

export default class Footer extends Component {
  render() {

    const { showCompleted, onClearCompleted, showActived} = this.props

    return (
      <footer className="footer">

          <TasksFilter   
           data={this.props.data}
           showActived={showActived}
           showCompleted={showCompleted}
           onClearCompleted={onClearCompleted} />

      </footer>
    );
  }
}
