import React, { Component } from "react";
import "./App.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    arr: [],
    filterArr: [],
  };

  completedItem = (id) => {
    this.setState(() => {
      const a = this.state.arr.map((task) => {
        if (id === task.id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      return {
        arr: a,
      };
    });
  };

  onAdded = (e, nameTask) => {
    const copy = this.state.arr.slice();
    copy.push({
      nameTask,
      done: false,
      id: Math.random(),
      newTime: new Date(),
    });
    this.setState(() => {
      if (e.keyCode === 13) {
        e.preventDefault();
        return {
          arr: copy,
        };
      }
    });
  };

  deletedItem = (id) => {
    this.setState(() => {
      const newArr = this.state.arr.filter((el) => id !== el.id);
      return {
        arr: newArr,
      };
    });
  };

  taskFilter = (activeButton) => {
    this.setState(() => {
      return { ...this.state, activeButton };
    });
  };

  onClearCompleted = () => {
    this.setState(() => {
      let clearItem = this.state.arr.filter((el) => el.done !== true);
      return {
        arr: clearItem,
      };
    });
  };

  render() {
    let taskFilterList = [...this.state.arr];

    if (this.activeButton === "active") {
      taskFilterList = [...this.state.arr].filter((el) => el.done !== true);
      return taskFilterList
    }
    if (this.activeButton === "completed") {
      taskFilterList = [...this.state.arr].filter((el) => el.done === true);
      return taskFilterList
    }

    return (
      <section className="todoapp">
        <NewTaskForm onAdded={this.onAdded} />
        <TaskList
          taskFilterList={this.state.taskFilterList}
          data={this.state.arr}
          onDeleted={this.deletedItem}
          onCompleted={this.completedItem}
        />
        <Footer
          // activeButton={this.state.activeButton}
          data={this.state.arr}
          taskFilter={this.taskFilter}
          onClearCompleted={this.onClearCompleted}
        />
      </section>
    );
  }
}
