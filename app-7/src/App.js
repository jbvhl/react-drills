import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import NewTask from './NewTask'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    };
    this.handleTask= this.handleTask.bind(this)
  }

  handleTask(task) {
    this.setState({list: [...this.state.list, task]});
  }

  render() {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <NewTask add={this.handleTask}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
