import React, { Component } from "react";
import "./App.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    arr: [],
    filter: ''
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
    copy.push({ nameTask, done: false, id: Math.random() });
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

  onClearCompleted = () => {
    this.setState(() => {
      let clearItem = this.state.arr.filter((el) => el.done !== true);
      return {
        arr: clearItem,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm onAdded={this.onAdded} />
        <TaskList
          data={this.state.arr}
          onDeleted={this.deletedItem}
          onCompleted={this.completedItem}
        />
        <Footer
          data={this.state.arr}
          onClearCompleted={this.onClearCompleted}
        />
      </section>
    );
  }
}
