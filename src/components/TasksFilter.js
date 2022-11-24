import React, { Component } from "react";
// import Footer from "./Footer";
export default class TasksFilter extends Component {
state = { 
  count: 0
}
  render() {

    let countTasks = this.props.data.length
 
    return   ( 
      <ul className="filters">
    <span className="todo-count">{countTasks} items left</span>
    <li>
      <button onClick={() => this.props.taskFilter('all')} >All</button>
    </li>
    <li>
      <button  onClick={() => this.props.taskFilter("active")}>Active</button>
    </li>
    <li>
      <button onClick={() => this.props.taskFilter('completed')}>Completed</button>
    </li>
  <button
    className="clear-completed"
    onClick={() => this.props.onClearCompleted()}
  >
    Clear completed
  </button>
  </ul>
  
    )
  }
}
