import React, { Component } from "react";
import Task from "./Task";
export default class TaskList extends Component {
  state = {
    choiseTasks: this.props.data
  };

  render() {
     if(this.state.choiseTasks.length <= 0) return 'нет задач'
     if(this.props.activeButton === 'completed') { 
      this.setState(() => {
       const newArr = this.props.data.filter(el => el.done === true)
       return { choiseTasks: newArr }
      })
     } else if (this.props.activeButton === 'all') { 
      console.log(this.props.activeButton);
      this.setState(() => { 
        return { choiseTasks: this.props.data}
      })
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
            />
          );
        })}
      </ul>

    );
  }
}
