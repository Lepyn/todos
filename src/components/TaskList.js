import React, { Component } from "react";
import Task from "./Task";
export default class TaskList extends Component {
  state = {
    choiseTasks: this.props.data
  };

  render() {
    console.log(this.choiseTasks);

    if (this.props.activeButton === "completed") {
      this.setState(() => {
        const newArr = this.props.data.filter((el) => el.done === true);
        return { ...this.choiseTasks, newArr };
      });
    } else if (this.props.activeButton === "all") {
      this.setState(() => {
        return { ...this.choiseTasks,  };
      });
    }
    return (
      <ul className="todo-list">
        {this.state.choiseTasks.map((task) => {
          return (
            <Task
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
