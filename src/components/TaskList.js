import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Task from './Task'

export default class TaskList extends Component {
  static defaultProps = {
    activeButton: 'all',
  }

  static get propTypes() {
    return {
      activeButton: PropTypes.string,
    }
  }
  render() {
    const { activeButton, data } = this.props
    let taskFilterList = data
    if (activeButton === 'active') {
      taskFilterList = data.filter((el) => !el.done)
    }
    if (activeButton === 'completed') {
      taskFilterList = data.filter((el) => el.done)
    }

    return (
      <ul className="todo-list">
        {taskFilterList.map((task) => {
          return (
            <Task
              key={task.id}
              data={task}
              onDeleted={this.props.onDeleted}
              onCompleted={this.props.onCompleted}
              newTime={this.timeAddTask}
            />
          )
        })}
      </ul>
    )
  }
}
