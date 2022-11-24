import React, { Component } from "react";
// import Footer from "./Footer";
export default class TasksFilter extends Component {
  state = {
     all: true,
     completed: false,
     active: false,
  };


  render() {
 
    return   ( 
      <ul className="filters">
    <span className="todo-count">1 items left</span>
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


  // showCompleted = (e) => {
  //   this.setState(() => {
  //     let newArr = this.state.arr.filter((el) => el.done !== false)
  //     console.log(newArr);
  //     const target = e.target
  //     target.className = 'selected'
  //     return {
  //       arr: newArr,
  //     };
  //   });
  // };


  // handleChoiseButton = (e) => { 
  //   if(this.e.target.innerHTML = 'All') { 
  //     this.setState({ 
  //       all: true,
  //       complete: false,
  //       active: false
  //     })
  //   } else if (e.target.innerHTML = 'Active') { 
  //     this.setState( { 
  //       all: false,
  //       complete: true,
  //       active: false
  //     })
  //   } else if (e.target.innerHTML = 'Completed') { 
  //     this.setState({ 
  //       all: false,
  //       complete: false,
  //       active: true
  //     })
  //   }
  // }
