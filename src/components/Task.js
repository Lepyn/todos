import React, { Component } from 'react'

import { formatDistanceToNow } from 'date-fns'

import PropTypes from 'prop-types'

export default class Task extends Component {
  state = {
    value: this.props.data.nameTask,
    isEdit: false,
  }

  static defaultProps = {
    id: Math.random(),
    done: false,
  }

  static get propTypes() {
    return {
      id: PropTypes.number,
      done: PropTypes.bool,
    }
  }

  clickMarkerButton = () => {
    this.setState(() => {
      return {
        ...this.state,
        isEdit: !this.state.isEdit,
      }
    })
  }

  handleInputChange(text) {
    this.setState(() => {
      return {
        ...this.state,
        value: text,
      }
    })
  }

  inputEditFocus(e) {
    this.setState(() => {
      if (e.key === 'Enter') {
        e.preventDefault()
        return { ...this.state, isEdit: !this.state.isEdit }
      }
    })
  }

  render() {
    const createTime = formatDistanceToNow(this.props.data.newTime, {
      includeSeconds: true,
    })

    const padding = {
      padding: 0,
      marginLeft: 40,
      height: 60,
    }

    const displayblock = {
      display: 'block',
      height: '100%',
    }
    return (
      <li className={this.props.data.done ? 'completed' : 'toggle'}>
        <input
          className="toggle"
          type="checkbox"
          checked={this.props.data.done ? true : false}
          onChange={() => this.props.onCompleted(this.props.data.id)}
        />
        <label className="editing" style={this.state.isEdit ? padding : null}>
          {this.state.isEdit && (
            <>
              <input
                type="text"
                className="edit"
                style={displayblock}
                value={this.state.value}
                onChange={(e) => this.handleInputChange(e.target.value)}
                onKeyUp={(e) => this.inputEditFocus(e)}
              />
            </>
          )}
          {!this.state.isEdit && (
            <>
              <span className="description">{this.state.value}</span>
              <span className="created">created {createTime} ago</span>
            </>
          )}
        </label>
        {!this.state.isEdit && (
          <>
            <button className="icon icon-edit" onClick={() => this.clickMarkerButton()}></button>

            <button className="icon icon-destroy" onClick={() => this.props.onDeleted(this.props.data.id)}></button>
          </>
        )}
      </li>
    )
  }
}
