import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TasksFilter extends Component {
  state = {
    count: 0,
  }

  static defaultProps = {
    count: 0,
  }

  static propTypes = {
    count: PropTypes.number,
  }

  render() {
    let countTasks = this.props.data.length

    return (
      <ul className="filters">
        <span className="todo-count">{countTasks} items left</span>
        <li>
          <button onClick={() => this.props.taskFilter('all')}>all</button>
        </li>
        <li>
          <button onClick={() => this.props.taskFilter('active')}>active</button>
        </li>
        <li>
          <button onClick={() => this.props.taskFilter('completed')}>completed</button>
        </li>
        <button className="clear-completed" onClick={() => this.props.onClearCompleted()}>
          Clear completed
        </button>
      </ul>
    )
  }
}
