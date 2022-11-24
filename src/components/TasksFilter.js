import React, { Component } from "react";
export default class TasksFilter extends Component {
  state = {
     arr: this.props.data,
     all: true,
     complete: false,
     active: false,
  };

  onClick = (e) => { 
    if(this.e.target.innerHTML = 'All') { 
      this.setState({ 
        all: true,
        complete: false,
        active: false
      })
    } else if (e.target.innerHTML = 'Active') { 
      this.setState( { 
        all: false,
        complete: true,
        active: false
      })
    } else if (e.target.innerHTML = 'Completed') { 
      this.setState({ 
        all: false,
        complete: false,
        active: true
      })
    }
  }

   

  render() {
    console.log(this.state.arr);

    let {all, active, complete} = this.props;

    if (this.state.all) { 
        all = 'selected'
    }
    if (this.state.active) { 
      active = 'selected'
    }
    if (this.state.complete) { 
      complete = 'selected'
    }
    
    return   ( 
      <ul className="filters">
    <span className="todo-count">1 items left</span>
    <li>
      <button className={all} >All</button>
    </li>
    <li>
      <button  className={active}  onClick={() => this.showActived()}>Active</button>
    </li>
    <li>
      <button className={complete} onClick={(e) => this.props.showCompleted(e)}>Completed</button>
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
