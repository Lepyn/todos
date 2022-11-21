import React, { Component } from "react";
import Footer from "./Footer";
// import NewTaskForm from "./NewTaskForm";
import Task from "./Task";
export default class TaskList extends Component {

 state = { 
  
 }

  // onActive = () => { 
  //   this.setState(() => { 
  //     let activeItem = this.state.arr.filter((el) => el.done === false )
  //     return { 
  //       arr: activeItem
  //     }
  //   })
  // }

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
            />,
            <Footer 
            onActive={this.onActive} 
            />
          );
        })}
      
      </ul>
    );
  }
}
