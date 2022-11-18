import React, { Component } from "react";

export default class Task extends Component {
  state = {
    value: "",
  };
  render() {
  
    return (
      <li className={this.props.data.done ? 'completed' : 'toggle'}>
        {/* <div className="view"> */}
          <input
            className="toggle"
            type="checkbox"  checked={this.props.data.done ? true : false}
            onChange={() => this.props.onCompleted(this.props.data.id)}
          />
          <label>
            <span className="description">Completed task</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={() => this.props.onDeleted(this.props.data.id)}
          ></button>
        {/* </div> */}
      </li>
    );
  }
}
