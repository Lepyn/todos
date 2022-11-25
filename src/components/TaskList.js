import React, { Component } from "react";
import Task from "./Task";
export default class TaskList extends Component {
  // state = {
  //   choiseTasks: [...this.props.data]
  // };

  render() {
    // const { activeButton, data } = this.props;

    // let taskFilterList = [...this.props.data];
    // if (activeButton === "active") {
    //   taskFilterList = [...data].filter((el) => el.done !== true)
    // }
    // if (activeButton === 'completed') { 
    //   taskFilterList = [...data].filter((el) => el.done === true)
    // }
   console.log(this.props.taskFilterList);  

    return (
      <ul className="todo-list">
        {this.props.data.map((task) => {
          return (
            <Task
              // taskFilterList={this.props.taskFilterList}
              key={task.id}
              data={task}
              onDeleted={this.props.onDeleted}
              onCompleted={this.props.onCompleted}
              newTime={this.timeAddTask}
            />
          );
        })}
      </ul>
    );
  }
}
