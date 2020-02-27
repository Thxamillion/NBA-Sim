import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component  {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting',
        completed: false
      }
    ]
  }

  markComplete = () => {
    console.log("From app.js")
}

  render(){
    return (
      <div className = "App">
        <Todos todos={this.state.todos} markComplete = {this.markComplete}/>
      </div>
  );
  }
}

export default App;

