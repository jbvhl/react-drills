import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Todo'

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ``
    };
    this.handleTask = this.handleTask.bind(this);
  }

  handleInput(value) {
    this.setState({input: value})
  }

  handleTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ``
    });
  }

  render() {
    let list = this.state.list.map((ele, i) => {
      return (
      <Todo key={i} task={ele} />
      )
    })
    return (
      <div className="App">
      <h1>To-do List</h1>
      <div>
      <input value={this.state.input}
      placeholder='Enter new task'
      onChange={(e) => this.handleInput(e.target.value)}/>
      <button onClick={this.handleTask}>Add</button>
      </div>
      <br />
      {list}
      </div>
    );
  }
}

export default App;
