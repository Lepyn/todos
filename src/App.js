import React, { Component } from "react";
import "./App.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import TasksFilter from "./components/TasksFilter";

export default class App extends Component {
  state = {
    arr: [
      { nameTask: "completed task", done: false, id: 1 },
      { nameTask: "editind task", done: false, id: 2 },
      { nameTask: "active task", done: false, id: 3 },
    ],
  };

  completedItem = (id) => {
    this.setState(() => {
      const a = this.state.arr.map((el) => {
       
        if (el.id === id) {
        return el.done = true
        } 
        
      });

      return { 
        arr: a 
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

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm />
        <TaskList
          data={this.state.arr}
          onDeleted={this.deletedItem}
          onCompleted={this.completedItem}
        />
        <Footer />
        <TasksFilter />
      </section>
    );
  }
}
